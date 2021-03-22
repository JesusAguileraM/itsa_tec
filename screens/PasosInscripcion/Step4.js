import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import {Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
const ConstanciaMedicaCURP = (props) => {

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.containerFoto}>
                <Surface>
                    <TouchableOpacity
                        style={styles.imagenFoto}
                        onPress={() => {
                            //setActivarCamara(false)
                        }}
                    >
                        <Image 
                        style={styles.foto}
                        source={{uri:props.curp_Foto}}
                    />
                    </TouchableOpacity>
                </Surface>

                <View style={{}}>
                <SafeAreaView style={{width: Dimensions.get("window").width/2}}>
                    <Text style={{fontSize:18,fontWeight: "bold",}}>
                        C U R P
                    </Text>
                    <Divider/>
                    <Divider/>
                    <Text>
                        - Asegurate que este iluminado la zona donde se tomara la foto.
                    </Text>
                    
                    <Text>
                        - Asegurarse sea legible.
                    </Text>
                </SafeAreaView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {props.cambiarACamara(3, false)}}
                    >
                    <View style={{justifyContent: 'center',}}>
                        <Text  style={styles.textC} >Tomar foto</Text>
                    </View>
                </TouchableOpacity>

                </View>

            </View>
            <Divider />
            <View style={styles.containerFoto}>
                <Surface>
                    <TouchableOpacity
                        style={styles.imagenFoto}
                        onPress={() => {
                            //setActivarCamara(false)
                        }}
                    >
                        <Image 
                        style={styles.foto}
                        source={{uri:props.estudio_H_Foto}}  
                    />
                    </TouchableOpacity>
                </Surface>

                <View style={{}}>
                    <SafeAreaView style={{width: Dimensions.get("window").width/2}}>
                        <Text style={{fontSize:18,fontWeight: "bold",}}>
                            Estudio de tipo de sangre
                        </Text>
                        <Divider/>
                        <Divider/>
                        <Text>
                            - Asegurate que este iluminado la zona donde se tomara la foto.
                        </Text>
                        
                        <Text>
                            - Asegurarse sea legible.
                        </Text>
                    </SafeAreaView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {props.cambiarACamara(4, false)}}
                            >
                            <View style={{justifyContent: 'center',}}>
                                <Text  style={styles.textC} >Tomar foto</Text>
                            </View>
                        </TouchableOpacity>
                </View>

            </View>
            <Divider />
            {props.estudio_H_Foto != null && props.curp_Foto != null ? 
                <TouchableOpacity
                        style={styles2.signIn}
                        onPress={props.procesoCompletado4}
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
                                    Parte 4/5
                                </Text>
                            </LinearGradient>
                </TouchableOpacity>
            :null}
                <View style={styles2.button}>
                    <TouchableOpacity
                        style={styles2.signIn}
                        onPress={props.regresar_al_P3}
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
            </SafeAreaView>
    );
};

export default ConstanciaMedicaCURP;


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
