import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import {styles, styles2} from '../styles/datailsScreen';

const InformacionPersonal = (props) => {

    return (
        <View >
            <ScrollView>
                <View style={stylesPrivados.contenedorForm}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:200}}>
                            <Text style={styles2.text_footer}>Nombre del Alumno</Text>
                            <View style={styles2.action}>
                                <TextInput
                                    placeholder="Nombre Completo"
                                    style={styles2.textInput}
                                    autoCapitalize="none"
                                    onChangeText={props.textInputNameChange}
                                />
                                
                            </View>
                        </View>
                        <View style={{width:100,alignItems:'flex-end'}}>
                            {props.data.NombreAprobado ? (
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={20} />
                                </Animatable.View>
                                ) : null}
                        </View>
                    </View>
                </View>

                <View style={stylesPrivados.contenedorForm}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:200}}>
                            <Text style={styles2.text_footer}>Apellido Paterno</Text>
                            <View style={styles2.action}>
                            <TextInput
                                placeholder="Primer Apellido"
                                style={styles2.textInput}
                                autoCapitalize="none"
                                onChangeText={props.textInputApellidoPChange}
                            />
                                
                            </View>
                        </View>
                        <View style={{width:100,alignItems:'flex-end'}}>
                            {props.data.ApellidoP_Aprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                    </View>




                </View>

                <View style={stylesPrivados.contenedorForm}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:200}}>
                            <Text style={styles2.text_footer}>Apellido Materno</Text>
                            <View style={styles2.action}>
                                <TextInput
                                placeholder="Segundo apellido"
                                style={styles2.textInput}
                                autoCapitalize="none"
                                onChangeText={props.textInputApellidoMChange}
                            />
                                        
                            </View>
                        </View>
                        <View style={{width:100,alignItems:'flex-end'}}>
                            {props.data.ApellidoM_Aprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                    </View>



                </View>
                
                <View style={stylesPrivados.contenedorForm}>           
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:200}}>
                            <Text style={styles2.text_footer}>CURP</Text>
                            <View style={styles2.action}>
                                <TextInput
                                    placeholder="Ejemp. PEMM780912MBCLRR00"
                                    style={styles2.textInput}
                                    autoCapitalize="none"
                                    onChangeText={props.validarInputCurp}
                                />
                            </View>
                        </View>
                        <View style={{width:100,alignItems:'flex-end'}}>
                            {props.data.Curp_Aprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                    </View>



                </View>
                
                <View style={stylesPrivados.contenedorForm}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:205}}>
                        <Text style={styles2.text_footer}>Telefono</Text>
                            <View style={styles2.action}>
                                <TextInput
                                placeholder="4531231234 nota: sin espacios"
                                style={styles2.textInput}
                                autoCapitalize="none"
                                onChangeText={props.textInputTelChange}
                                />
                            </View>
                        </View>
                        <View style={{width:100,alignItems:'flex-end'}}>
                            {props.data.Telefono_Aprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                    </View>
                </View>
                
                <View style={stylesPrivados.contenedorForm}>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{width:205}}>
                            <Text style={styles2.text_footer}>Telefono 2</Text> 
                            <View style={styles2.action}>
                                <TextInput
                                    placeholder="4531231234 nota: sin espacios"
                                    style={styles2.textInput}
                                    autoCapitalize="none"
                                    onChangeText={props.textInputTelChange2}
                                />
                            </View>
                        </View>
                        <View style={{width:100,alignItems:'flex-end'}}>
                            {props.data.Telefono_Aprobado2 ? (
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
                            <Text style={styles2.text_footer}>Sexo</Text> 
                            <Text style={styles2.text_footer,{color:'gray',marginLeft:10}}>{props.data.sexo}</Text>
                        </View>
                        <View  style={stylesPrivados.buttonSelect}>
                            
                                <RNPickerSelect
                                    useNativeAndroidPickerStyle={false}
                                    onValueChange={props.setSexo}
                                    items={[
                                        { label: "Hombre", value: "Hombre" },
                                        { label: "Mujer", value: "Mujer" },
                                    ]}
                                    placeholder={{ label: "seleccione", value:null }}

                                >
                                    <Text style={{height:40,textAlignVertical:'center',color:'#fff'}}>Seleccione sexo</Text>
                                </RNPickerSelect>
                        </View>

                        <View style={{height:60,width:25,alignItems:'flex-end',justifyContent:'center'}}>
                            {props.data.sexo_Aprobado ==true ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>

                    </View>


                </View>


                <View style={[stylesPrivados.contenedorForm,{flexDirection: "row",justifyContent:'space-between'}]}>
                    <View style={{width:180,backgroundColor:'#eee'}}>      
                        <Text style={styles2.text_footer}>Fecha de nacimiento</Text> 
                        {props.data.Fecha_nacimiento_Aprobado ? <Text style={{color:'grey',margin:5,marginLeft:10,width:150}}>{props.cumpleanos}</Text>:<Text style={{color:'grey',margin:5,marginLeft:10}}>1990/01/01</Text>}
                    </View>
                    <TouchableOpacity style={stylesPrivados.buttonFecha} onPress={props.showDatePicker}>
                            <Text style={{color:'#fff',textAlignVertical:'center'}}>
                                Selecciona fecha
                            </Text>
                    </TouchableOpacity>
                    <View style={{height:60,width:50,alignItems:'flex-end',justifyContent:'center'}}>
                            {props.data.Fecha_nacimiento_Aprobado == true ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                    </View>
                    <DateTimePickerModal isVisible={props.isDatePickerVisible} 
                        mode="date"
                        onConfirm={props.handleConfirm}
                        onCancel={props.hideDatePicker}
                        date={new Date('01/01/2004')}
                    />
                        

                </View>
                {props.data.NombreAprobado===true && props.data.ApellidoP_Aprobado===true && props.data.Curp_Aprobado===true && props.data.Telefono_Aprobado===true && props.data.sexo_Aprobado && props.data.Fecha_nacimiento_Aprobado ? 
                    <View style={styles2.button}>
                    <TouchableOpacity
                        style={styles2.signIn}
                        onPress={() => {
                            props.procesoCompletado1()
                        }}
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
                                    Parte 1/5
                                </Text>
                            </LinearGradient>
                    </TouchableOpacity>
                    </View>:null}
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

export default InformacionPersonal;


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
        width:140,
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
