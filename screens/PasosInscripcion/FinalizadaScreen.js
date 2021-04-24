import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,Linking,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import {Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import * as api from '../../auth/request';

const RevisionScreen = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            let u = await api.getUserTemp();
            console.log(u);
            setUser(u);
        })()
    }, []);

    if(!user){
        return (<></>);
    }

    // console.log(props.user.estadoInsc)
    return (
        <>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image style={styles3.logoTec2} source={require('../../assets/itsaLogoSplash.png')} />
                        <Text style={{color:"#000",fontSize:18,marginBottom:10,fontWeight:'bold'}}>
                            {props.user.estadoInsc.toUpperCase()}
                        </Text>
                        <Text style={styles3.texto1} >
                            {props.user.observaciones}
                        </Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center', marginTop:20}}>
                        <Text style={{color:"#000",fontSize:18,marginBottom:10,fontWeight:'bold'}}>
                            Datos:
                        </Text>
                        <View style={{justifyContent: 'flex-start'}}>
                            <Text style={styles3.textoLeft} >
                                {`Carrera: ${user.carrera}`}
                            </Text>
                            <Text style={styles3.textoLeft} >
                                {`Email: ${user.email}`}
                            </Text>
                            <Text style={styles3.textoLeft} >
                                {`Matricula: ${user.matricula}`}
                            </Text>
                            <Text style={styles3.textoLeft} >
                                {`Turno: ${user.turno}`}
                            </Text>
                            <Text style={styles3.textoLeft} >
                                {`Semestre: ${user.semestre}`}
                            </Text>
                        </View>
                    </View>
                </View>
                
                {/* <>
                    <View style={styles3.button}>
                        <TouchableOpacity
                            style={styles3.signIn}
                            onPress={props.regresar}
                        >
                            <LinearGradient
                                colors={["#fff", "#fff"]}
                                style={styles3.signIn}
                            >
                                <Text
                                style={[
                                    styles3.textSign,
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
                </> */}
            </View>
         
        </>
    );
};

export default RevisionScreen;


const styles3 = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        width: 390,
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
    textoLeft:{
        fontSize:14,
        fontWeight:'500',
        textAlign:'left',
        color:'#05375a',
        width: Dimensions.get("window").width -50,
    },
    logoTec:{
        width:100,
        height:100,
        resizeMode:'contain',
        marginLeft:15,
        
    },
    link:{
        color:'#0a65b5',
        margin:5,
    },
    texto1:{
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
        color:'#05375a',
        width: Dimensions.get("window").width -50,
    }
    ,
    texto2:{
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center',
        color:'#05375a',
        marginBottom:0,
        width: Dimensions.get("window").width -20,
    }
    ,
    contenedor:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        alignContent:'flex-start',
        width: Dimensions.get("window").width,
        marginTop:10,
        
        
        
    },
    logoTec:{
        width:100,
        height:100,
        resizeMode:'contain',
        marginLeft:0,
        
    },
    logoTec2:{
        width:200,
        height:200,
        resizeMode:'contain',
        margin:10
    },
    logosLink:{
        width:20,
        height:20,
        resizeMode:'contain',
        marginRight:5,
        marginLeft:5
    }
});


