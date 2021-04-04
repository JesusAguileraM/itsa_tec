import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect from 'react-native-picker-select';
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import {styles, styles2} from '../styles/datailsScreen';


const InformacionEscolar = (props) => {

    return (
        <View>
            <ScrollView>

                <Text style={{color:'#05375a',fontSize:18,marginLeft:10,marginTop:20,fontWeight: "bold",}}>Datos de Carrera</Text>

                <View style={stylesPrivados.contenedorForm}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:180,backgroundColor:'#eee'}}>
                            <Text style={styles2.text_footer}>Carrera</Text> 
                            <Text style={styles2.text_footer,{color:'gray',marginLeft:10}}>
                                    {props.carreras ?
                                        `-- Carrera ${props.carreras}` :
                                            null
                                    }
                            </Text>
                        </View>
                        <View  style={stylesPrivados.buttonSelect}>
                            
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={props.establecerCarreras}
                            items={
                                props.listaCarreras.map((carrera) => {
                                    return (
                                        { label: carrera, value: carrera }
                                    );
                                })
                            }
                        >
                            <Text style={{height:40,textAlignVertical:'center',color:'#fff'}}>Seleccione</Text>
                        </RNPickerSelect>
                        </View>

                        <View style={{height:60,width:25,alignItems:'flex-end',justifyContent:'center'}}>
                            {props.carreras !=null ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                    </View>
                </View>



                <View style={stylesPrivados.contenedorForm}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:180,backgroundColor:'#eee'}}>
                            <Text style={styles2.text_footer}>Turno</Text> 
                            <Text style={styles2.text_footer,{color:'gray',marginLeft:10}}>
                                {props.turno ? `-- Turno ${props.turno}` : null}
                            </Text>
                        </View>
                        <View  style={stylesPrivados.buttonSelect}>
                            
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={props.establecerTurno}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                        >
                                    <Text style={{height:40,textAlignVertical:'center',color:'#fff'}}>Seleccione</Text>
                                </RNPickerSelect>
                        </View>

                        <View style={{height:60,width:25,alignItems:'flex-end',justifyContent:'center'}}>
                            {props.turno !=null ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                    </View>
                </View>





            <Text style={{color:'#05375a',fontSize:18,marginLeft:10,marginTop:30,fontWeight: "bold",}}>Dirección</Text>
                
            <View style={stylesPrivados.contenedorForm}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:180,backgroundColor:'#eee'}}>
                            <Text style={styles2.text_footer}>Estado</Text> 
                            <Text style={styles2.text_footer,{color:'gray',marginLeft:10}}>
                                {props.estado ? props.estado : null}
                            </Text>
                        </View>
                        <View  style={stylesPrivados.buttonSelect}>
                            
                        <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                onValueChange={(value) => {
                                    props.establecerEstado(value);
                                    props.getMunicipios(value);
                                }}
                                items={
                                    props.listaEstados.map((estado) => {
                                        return (
                                            { label: estado, value: estado }
                                        );
                                    })
                                }
                        >
                                    <Text style={{height:40,textAlignVertical:'center',color:'#fff'}}>Seleccione</Text>
                                </RNPickerSelect>
                        </View>

                        <View style={{height:60,width:25,alignItems:'flex-end',justifyContent:'center'}}>
                            {props.estado !=null ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                    </View>
                </View>

                <View style={stylesPrivados.contenedorForm}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:180,backgroundColor:'#eee'}}>
                            <Text style={styles2.text_footer}>Municipio</Text> 
                            <Text style={styles2.text_footer,{color:'gray',marginLeft:10}}>
                                {props.municipio ? props.municipio : null}
                            </Text>
                        </View>
                        <View  style={stylesPrivados.buttonSelect}>
                            
                        <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                onValueChange={props.establecerMunicipio}
                                items={                                    
                                    props.listaMunicipios.map((municipio) => {
                                        return (
                                            { label: municipio, value: municipio }
                                        );
                                    })
                                }
                        >
                                    <Text style={{height:40,textAlignVertical:'center',color:'#fff'}}>Seleccione</Text>
                                </RNPickerSelect>
                        </View>

                        <View style={{height:60,width:25,alignItems:'flex-end',justifyContent:'center'}}>
                            {props.municipio !=null ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                    </View>
                </View>


            {/* <View style={{marginTop:30}}>  //por si en algún futuro ponemos la población automática
                <Text style={{fontSize:16}}> {props.poblacion ? props.poblacion: "Poblacion"}</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={props.establecerPoblacion}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                            placeholder={{ label: "--Seleccione una poblacion--", value: null }}
                        />
            </View> */}




                <View style={stylesPrivados.contenedorForm}>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:210}}>
                            <Text style={styles2.text_footer}>Población</Text> 
                            <View style={styles2.action}>
                            <TextInput
                                placeholder="Escribe la localidad o población"
                                style={styles2.textInput}
                                autoCapitalize="none"
                                onChangeText={props.establecerPoblacion}
                            />
                            </View>
                        </View>
                        <View style={{width:100,alignItems:'flex-end'}}>
                        {props.poblacion!=null ? (
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                        ) : null}
                        </View>
                    </View>
                </View>


            {/* <View style={{marginTop:30}}>   //por si en algún futuro ponemos la colonia automática
                <Text style={{fontSize:16}}> {props.colonia ? props.colonia : "Colonia"}</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={props.establecerColonia}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                            placeholder={{ label: "--Seleccione una colonia--", value: null }}
                        />
            </View> */}

                <View style={stylesPrivados.contenedorForm}>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:210}}>
                            <Text style={styles2.text_footer}>Colonia</Text> 
                            <View style={styles2.action}>
                            <TextInput
                                placeholder="Escribe la colonia"
                                style={styles2.textInput}
                                autoCapitalize="none"
                                onChangeText={props.establecerColonia}
                            />
                            </View>
                        </View>
                        <View style={{width:100,alignItems:'flex-end'}}>
                        {props.colonia!=null ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                        ) : null}
                        </View>
                    </View>
                </View>





                                {/* metodos diferentes */}
            <View style={stylesPrivados.contenedorForm}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{width:210}}>
                        <Text style={styles2.text_footer}>Direccion</Text> 
                        <View style={styles2.action}>
                        <TextInput
                            placeholder="Escribe la calle"
                            style={styles2.textInput}
                            autoCapitalize="none"
                            onChangeText={props.establecerDirecion}
                        />
                        </View>
                    </View>
                    <View style={{width:100,alignItems:'flex-end'}}>
                    {props.direccion!=null ? (
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                    ) : null}
                    </View>
                </View>
            </View>








            <View style={stylesPrivados.contenedorForm}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{width:210}}>
                        <Text style={styles2.text_footer}>Numero de vivienda</Text> 
                        <View style={styles2.action}>
                            <TextInput
                                placeholder="Escribe el numero de tu casa"
                                style={styles2.textInput}
                                autoCapitalize="none"
                                onChangeText={props.establecerNumeroC}
                            />
                        </View>
                    </View>
                    <View style={{width:100,alignItems:'flex-end'}}>
                    {props.direccion ? (
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                    ) : null}
                    </View>
                </View>
            </View>


            <View style={stylesPrivados.contenedorForm}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{width:210}}>
                        <Text style={styles2.text_footer}>CP</Text> 
                        <View style={styles2.action}>
                        <TextInput
                            placeholder="Escribe tu codigo postal"
                            style={styles2.textInput}
                            autoCapitalize="none"
                            onChangeText={props.establecerCP}
                        />
                        </View>
                    </View>
                    <View style={{width:100,alignItems:'flex-end'}}>
                    {props.cp ? (
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                    ) : null}
                    </View>
                </View>
            </View>



            {props.carreras!=null && props.turno!=null && props.estado!=null && props.municipio!=null && props.poblacion!=null && props.colonia!=null && props.direccion!=null && props.numero!=null && props.cp!=null ? 
                <View style={styles2.button}>
                    <TouchableOpacity
                        style={styles2.signIn}
                        onPress={props.procesoCompletado2}
                    >
                        <LinearGradient
                            colors={["#2096BA", "#2096BA"]}
                            style={styles2.signIn}
                        >
                            <Text
                            style={[
                                styles2.textSign,
                                {
                                color: "#fff",
                                },
                            ]}
                            >
                                Parte 2/5
                            </Text>
                        </LinearGradient>
                </TouchableOpacity>
                </View>:null}

                <View style={styles2.button}>
                    <TouchableOpacity
                        style={styles2.signIn}
                        onPress={props.regresar_al_P1}
                    >
                        <LinearGradient
                            colors={["#fff", "#fff"]}
                            style={styles2.signIn}
                        >
                            <Text
                            style={[
                                styles2.textSign,
                                {
                                color: "#05375a",
                                },
                            ]}
                            >
                                Regresar
                            </Text>
                        </LinearGradient>
                </TouchableOpacity>
                </View>

            <View style={styles2.textPrivate}>
                <Text style={styles2.color_textPrivate}>
                El proceso de inscripciones es seguro, para mas informaicon en:
                </Text>
                <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                {" "}
                www.itsa.edu.mx
                </Text>
                <Text style={styles2.color_textPrivate}> o llamar al teléfono</Text>
                <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                {" "}
                453-534-8300{" "}
                </Text>
            </View>
            </ScrollView>
        </View>
    );
};

export default InformacionEscolar;

const stylesPrivados = StyleSheet.create({
    contenedorForm:{
        margin:10,
        width: Dimensions.get("window").width -30,
        height:60,
        borderWidth: 1,
        borderRadius:7,
        borderColor:'#eeeeee',
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'#eeeeee',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    buttonFecha:{
        backgroundColor:"#2096ba",
        height:40,
        width:120,
        borderWidth: 1,
        borderRadius:7,
        borderColor:'#fff',
        paddingLeft:5,
        justifyContent:'center',
        textAlignVertical:'center',
        marginLeft:5,
        marginTop:10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 2,
        shadowRadius: 5 ,
        shadowOffset : { width: 1, height: 5},
    },
    buttonSelect:{
        width:110,
        height:40,
        marginTop:25,
        backgroundColor:"#2096ba",
        borderWidth: 1,
        borderRadius:7,
        borderColor:'#fff',
        paddingLeft:5,
        justifyContent:'center',
        textAlignVertical:'center',
        marginLeft:5,
        marginTop:10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 2,
        shadowRadius: 5 ,
        shadowOffset : { width: 1, height: 5},
    }
});

