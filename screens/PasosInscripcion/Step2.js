import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect from 'react-native-picker-select';
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import {styles, styles2} from '../styles/datailsScreen';
const InformacionEscolar = (props) => {

    return (
        <View><ScrollView>
            <Text style={{color:'#05375a',fontSize:18,marginLeft:10,marginTop:20,fontWeight: "bold",}}>Datos de Carrera</Text>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:16}}>
                        {props.carreras ?
                        `-- Carrera ${props.carreras}` :
                            "¿Que carrera le interesa?"
                        }
                    </Text>
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
                        placeholder={{ label: "--Seleccione una carrera--", value: null }}
                    />
                </View> 

            <View style={{marginTop:30}}>
                <Text style={{fontSize:16}}> {props.turno ? `-- Turno ${props.turno}` : "¿Que turno le interesa inscribirse?"}</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={props.establecerTurno}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                            placeholder={{ label: "--Seleccione un turno--", value: null }}
                        />
            </View>





            <Text style={{color:'#05375a',fontSize:18,marginLeft:10,marginTop:30,fontWeight: "bold",}}>Datos de Dirección</Text>
                
            <View style={{marginTop:30}}>
                <Text style={{fontSize:16}}> 
                        {props.estado ? props.estado : "Estado"}</Text> 
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
                                placeholder={{ label: "--Seleccione un Estado--", value: null }}
                        />
            </View>

            <View style={{marginTop:30}}>
                <Text style={{fontSize:16}}> 
                        {props.municipio ? props.municipio : "Municipio"}</Text>
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
                                placeholder={{ label: "--Seleccione un Municipio--", value: null }}
                        />
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

            <Text style={{color:'#05375a',fontSize:16,marginLeft:10}}>Población</Text>
            <View style={styles2.action}>
                <TextInput
                    placeholder="Escribe la localidad o población"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.establecerPoblacion}
                />
                {props.poblacion!=null ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
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

            <Text style={{color:'#05375a',fontSize:16,marginLeft:10}}>Colonia</Text>
            <View style={styles2.action}>
                <TextInput
                    placeholder="Escribe la colonia"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.establecerColonia}
                />
                {props.colonia!=null ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>
                                {/* metodos diferentes */}
            <Text style={{color:'#05375a',fontSize:16,marginLeft:10}}>Direccion</Text>
            <View style={styles2.action}>
                <TextInput
                    placeholder="Escribe la calle"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.establecerDirecion}
                />
                {props.direccion!=null ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <Text style={{color:'#05375a',fontSize:16,marginLeft:10}}>Numero de vivienda</Text>
            <View style={styles2.action}>
                <TextInput
                    placeholder="Escribe el numero de tu casa"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.establecerNumeroC}
                />
                {props.direccion ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <Text style={{color:'#05375a',fontSize:16,marginLeft:10}}>CP</Text>
            <View style={styles2.action}>
                <TextInput
                    placeholder="Escribe tu codigo postal"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.establecerCP}
                />
                {props.cp ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
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


// const styles = StyleSheet.create({
//     imagenFoto: {
//         marginTop:20,
//         marginBottom: 20,
//         width: Dimensions.get("window").width/4,
//         height: Dimensions.get("window").height /4,
//         alignContent: "center",
//         justifyContent: "center",
//         backgroundColor: "#05375a",
//         borderRadius: 10,
//         elevation: 8,
//     },
//     container: {
//         flex: 1,
//     },
//     containerFoto:{
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         backgroundColor: '#fff',
//         alignItems:'center',
//         width: Dimensions.get("window").width,
        
    
//     },
//     foto:{
//         marginTop:20,
//         marginBottom: 20,
//         width: Dimensions.get("window").width/4,
//         height: Dimensions.get("window").height /4,
//         alignContent: "center",
//         justifyContent: "center",
//         backgroundColor: "#05375a",
//         borderRadius: 10,
//         marginRight: 10,
//     },
//     button: {
//         width: Dimensions.get("window").width /4,
//         height: 40,
//         backgroundColor: '#05375a',
//         alignItems: 'center',
//         justifyContent:'center',
//         margin: 20,

        
//     },
//     textC: {
//         fontSize: 14,
//         color: '#fff',
//     },
// });

// const styles2 = StyleSheet.create({
//     button: {
//         alignItems: "center",
//         marginTop: 50,
//     },
//     signIn: {
//         width: "95%",
//         height: 50,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 10,
//         marginLeft:5
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: "bold",
//     },
//     textPrivate: {
//         flexDirection: "row",
//         flexWrap: "wrap",
//         marginTop: 20,
//     },
//     color_textPrivate: {
//         color: "grey",
//     },
// });
