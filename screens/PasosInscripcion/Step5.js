import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
// import { Camera } from 'expo-camera';
// import Feather from "react-native-vector-icons/Feather";
import {Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
// import AsyncStorage from "@react-native-community/async-storage";
// import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
const ComprobarPago = (props) => {

    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => { 
        setVisible(false);
        terminarProceso();
    };

    useEffect(() => {

    }, []);


    return (
        <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text
            style={{
            fontSize: 15,
            color: "#05375a",
            marginBottom: 10,
            marginTop: 10,
            }}
        >
            Pago de ficha
        </Text>

        <View>
            <View style={styles.containerFoto}>
            <Surface>
                <TouchableOpacity
                style={styles.imagenFoto}
                onPress={() => {
                    //setActivarCamara(false)
                }}
                >
                <Image style={styles.foto} source={{ uri:props.comprobantePagoFoto }} />
                </TouchableOpacity>
            </Surface>

            <View style={{}}>
                <SafeAreaView style={{ width: Dimensions.get("window").width / 2 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Rebibo de Pago del banco
                </Text>
                <Divider />
                <Divider />
                <Text>
                    - Asegurate que este iluminado la zona donde se tomara la foto.
                </Text>

                <Text>- Asegurarse sea legible.</Text>
                </SafeAreaView>
                <TouchableOpacity
                style={styles.button}
                onPress={() => {cambiarACamara(5, false)}}>
                <View style={{ justifyContent: "center" }}>
                    <Text style={styles.textC}>Tomar foto</Text>
                </View>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles2.button}>
            <TouchableOpacity
                style={styles2.signIn}
                onPress={() => {showDialog();}}>
                <LinearGradient
                colors={["#05375a", "#2096BA"]}
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
                    Enviar Registro
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
        </View>
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>! Has completado el registro ¡</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>
                        Revisa tú correo, dentro de las siguiente 24 horas te
                        enviaremos una cuenta institucional para que puedas iniciar
                        sesión.
                    </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button mode="text" color="#2096BA" onPress={hideDialog} title='Aceptar'></Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
        </View>
    );
};

export default ComprobarPago;


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
