import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

const InformacionPersonal = (props) => {

    return (
        <View>
            <View>
                <Text style={styles2.text_footer}>Nombre del Alumno</Text>
                <View style={styles2.action}>
                    <TextInput
                        placeholder="Nombre Completo"
                        style={styles2.textInput}
                        autoCapitalize="none"
                        onChangeText={props.textInputNameChange}
                    />
                    {props.data.NombreAprobado ? (
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                    ) : null}
                </View>

                <Text style={styles2.text_footer}>Apellido Paterno</Text>
                <View style={styles2.action}>
                    <TextInput
                    placeholder="Primer Apellido"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.textInputApellidoPChange}
                    />
                    {props.data.ApellidoP_Aprobado ? (
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                    ) : null}
                </View>

                <Text style={styles2.text_footer}>Apellido Materno</Text>
                <View style={styles2.action}>
                    <TextInput
                    placeholder="Segundo apellido"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.textInputApellidoMChange}
                    />
                    {props.data.ApellidoM_Aprobado ? (
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                    ) : null}
                </View>

                <Text style={styles2.text_footer}>CURP</Text>
                <View style={styles2.action}>
                    <TextInput
                    placeholder="Ejemp. PEMM780912MBCLRR00"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.validarInputCurp}
                    />
                    {props.data.Curp_Aprobado ? (
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                    ) : null}
                </View>

                <Text style={styles2.text_footer}>Telefono</Text>
                <View style={styles2.action}>
                    <TextInput
                    placeholder="4531231234 nota: sin espacios"
                    style={styles2.textInput}
                    autoCapitalize="none"
                    onChangeText={props.textInputTelChange}
                    />
                    {props.data.Telefono_Aprobado ? (
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                    ) : null}
                </View>
                <Text style={styles2.text_footer}>Sexo</Text>
                {props.data.sexo_Aprobado ? 
                    <Text style={styles2.text_footer,{color:'gray',marginLeft:10}}>{props.data.sexo}</Text>
                    :
                    <View>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={true}
                                onValueChange={props.setSexo}
                                items={[
                                    { label: "Hombre", value: "Hombre" },
                                    { label: "Mujer", value: "Mujer" },
                                ]}
                                placeholder={{ label: "--seleccione--", value: null }}
                            />
                        </View> 
                }


                <Text style={styles2.text_footer}>Fecha de nacimiento</Text>
                <View style={{width:200,height:10,marginBottom:60}}>

                    {props.data.Fecha_nacimiento_Aprobado ? <Text style={{color:'grey',margin:5,marginLeft:10}}>{props.cumpleanos}</Text>:<Text style={{color:'grey',margin:5,marginLeft:10}}>1990/01/01</Text>}
                    <Button title="Selecciona tu fecha de nacimiento" onPress={props.showDatePicker} style={{backgroundColor:"#05375a"}} />
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
                            props.procesoCompletado1();
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
            </View>
        </View>
    );
};

export default InformacionPersonal;


const styles = StyleSheet.create({
    imagenFoto: {
        marginTop:20,
        marginBottom: 20,
        width: Dimensions.get("window").width/4,
        height: Dimensions.get("window").height /4,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#05375a",
        borderRadius: 10,
        elevation: 8,
    },
    container: {
        flex: 1,
    },
    containerFoto:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        alignItems:'center',
        width: Dimensions.get("window").width,
    
    },
    foto:{
        marginTop:20,
        marginBottom: 20,
        width: Dimensions.get("window").width/4,
        height: Dimensions.get("window").height /4,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#05375a",
        borderRadius: 10,
        marginRight: 10,
    },
    button: {
        width: Dimensions.get("window").width /4,
        height: 40,
        backgroundColor: '#05375a',
        alignItems: 'center',
        justifyContent:'center',
        margin: 20,

        
    },
    textC: {
        fontSize: 14,
        color: '#fff',
    },
});

const styles2 = StyleSheet.create({
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "95%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft:5
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textPrivate: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    color_textPrivate: {
        color: "grey",
    },
});
