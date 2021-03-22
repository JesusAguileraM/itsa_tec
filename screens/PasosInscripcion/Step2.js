import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import {Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
const InformacionEscolar = (props) => {

    return (
        <View><ScrollView>
            <Text style={{color:'#05375a',fontSize:18,marginLeft:10,marginTop:20,fontWeight: "bold",}}>Datos de Carrera</Text>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:16}}>
                        {carreras ?
                        `-- Carrera ${carreras}` :
                            "¿Que carrera le interesa?"
                        }
                    </Text>
                    <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        onValueChange={(carreras) => setCarreras(carreras)}
                        items={[
                            { label: "Ing. Sistemas Computacionales", value: "IISC" },
                            { label: "Ing. Informatica", value: "IINF" },
                            { label: "Ing. Civil", value: "ICIV" },
                            { label: "Ing. Gestión Empresarial", value: "IGEM" },
                            { label: "Ing. Inovación y energ. sustentable", value: "IIAS" },
                            { label: "Ing. Bioquimica", value: "IBQA" },
                            { label: "Ing. Industrial", value: "IIND" },
                            { label: "Ing. Contador Publico", value: "COPU" },
                        ]}
                        placeholder={{ label: "--Seleccione una carrera--", value: null }}
                    />
                </View> 

            <View style={{marginTop:30}}>
                <Text style={{fontSize:16}}> {turno ? `-- Turno ${turno}` : "¿Que turno le interesa inscribirse?"}</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={(turno) => setTurno(turno)}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                            placeholder={{ label: "--Seleccione un turno--", value: null }}
                        />
            </View>

            <Text style={{color:'#05375a',fontSize:18,marginLeft:10,marginTop:30,fontWeight: "bold",}}>Datos de Direccion</Text>
                
            <View style={{marginTop:30}}>
                <Text style={{fontSize:16}}> {turno ? `-- Turno ${turno}` : "Estado"}</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={(turno) => setTurno(turno)}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                            placeholder={{ label: "--Seleccione un turno--", value: null }}
                        />
            </View>

            <View style={{marginTop:30}}>
                <Text style={{fontSize:16}}> {turno ? `-- Turno ${turno}` : "Municipio"}</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={(turno) => setTurno(turno)}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                            placeholder={{ label: "--Seleccione un turno--", value: null }}
                        />
            </View>

            <View style={{marginTop:30}}>
                <Text style={{fontSize:16}}> {turno ? `-- Turno ${turno}` : "Colonia"}</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={(turno) => setTurno(turno)}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                            placeholder={{ label: "--Seleccione un turno--", value: null }}
                        />
            </View>

            <View style={{marginTop:30}}>
                <Text style={{fontSize:16}}> {turno ? `-- Turno ${turno}` : "Poblacion"}</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={(turno) => setTurno(turno)}
                            items={[
                                { label: "Matutino", value: "Matutino" },
                                { label: "Verpertino", value: "Verpertino" },
                            ]}
                            placeholder={{ label: "--Seleccione un turno--", value: null }}
                        />
            </View>

            <Text style={{color:'#05375a',fontSize:16,marginLeft:10}}>Direccion</Text>
            <View style={styles2.action}>
                <TextInput
                placeholder="Primer Apellido"
                style={styles2.textInput}
                autoCapitalize="none"
                onChangeText={(val) => valid.textInputApellidoPChange(val, setData, data)}
                />
                {data.ApellidoP_Aprobado ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <Text style={{color:'#05375a',fontSize:16,marginLeft:10}}>CP</Text>
            <View style={styles2.action}>
                <TextInput
                placeholder="Primer Apellido"
                style={styles2.textInput}
                autoCapitalize="none"
                onChangeText={(val) => valid.textInputApellidoPChange(val, setData, data)}
                />
                {data.ApellidoP_Aprobado ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <Text style={{color:'#05375a',fontSize:16,marginLeft:10}}>Numero de vivienda</Text>
            <View style={styles2.action}>
                <TextInput
                placeholder="Primer Apellido"
                style={styles2.textInput}
                autoCapitalize="none"
                onChangeText={(val) => valid.textInputApellidoPChange(val, setData, data)}
                />
                {data.ApellidoP_Aprobado ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>




            {carreras!=null && turno!=null ? 
                <View style={styles2.button}>
                    <TouchableOpacity
                        style={styles2.signIn}
                        onPress={() => {
                            procesoCompletado2();
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
                                Parte 2/5
                            </Text>
                        </LinearGradient>
                </TouchableOpacity>
                </View>:null}

                <View style={styles2.button}>
                    <TouchableOpacity
                        style={styles2.signIn}
                        onPress={() => {
                            regresar_al_P1();
                        }}
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
