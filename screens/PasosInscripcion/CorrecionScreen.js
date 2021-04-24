import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,Linking,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import {Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";


const CorrecionScreen = (props) => {

    const [comprobado, setComprobado] = React.useState({
        Form_parte1:true,
        Form_parte2:true,
        Acta:true,
        curp:true,
        certificadoBach:true,
        contanciaMed:false
    });

    // console.log(props.user.estadoInsc)
    return (
        <>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image style={styles3.logoTec2} source={require('../../assets/alertaOnda.gif')} />
                        <Text style={{color:"#000",fontSize:18,marginBottom:10,fontWeight:'bold'}}>
                            {props.user.estadoInsc.toUpperCase()}
                        </Text>
                        <Text style={styles3.texto1} >
                            {props.user.observaciones}
                        </Text>
                    </View>
                </View>
                <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles3.texto2}>
                        Indicadores:
                    </Text>
                    <View style={styles3.contenedor}>
                        <View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                {comprobado.Form_parte1===true ? 
                                    <Image style={styles3.logosLink}  source={require('../../assets/correcto.gif')}/>:
                                    <Image style={styles3.logosLink}  source={require('../../assets/alertaCabeceando.gif')}/>
                                }


                                <Text style={styles3.link}>
                                    Informacion personal
                                </Text>
                            </View>
                            <View  style={{flexDirection:'row',alignItems:'center'}}>
                                {comprobado.Form_parte2===true ? 
                                    <Image style={styles3.logosLink}  source={require('../../assets/correcto.gif')}/>:
                                    <Image style={styles3.logosLink}  source={require('../../assets/alertaCabeceando.gif')}/>
                                }
                                <Text style={styles3.link}>
                                    Informacion escolar
                                </Text>
                            </View>
                            <View  style={{flexDirection:'row',alignItems:'center'}}>
                                {comprobado.Acta===true ? 
                                    <Image style={styles3.logosLink}  source={require('../../assets/correcto.gif')}/>:
                                    <Image style={styles3.logosLink}  source={require('../../assets/alertaCabeceando.gif')}/>
                                }
                                <Text style={styles3.link}>
                                    Acta de nacimiento
                                </Text>
                            </View>
                            <View  style={{flexDirection:'row',alignItems:'center'}}>
                                {/* {comprobado.certificadoBach===false ? 
                                    <Image style={styles3.logosLink}  source={require('../../assets/RelojArena.gif')}/>:
                                    <Image style={styles3.logosLink}  source={require('../../assets/alertaCabeceando.gif')}/>
                                } */}
                                {comprobado.certificadoBach===true ? 
                                    <Image style={styles3.logosLink}  source={require('../../assets/correcto.gif')}/>:
                                    <Image style={styles3.logosLink}  source={require('../../assets/alertaCabeceando.gif')}/>
                                }
                                <Text style={styles3.link}>
                                    Certificado de bachillerato
                                </Text>
                            </View>
                            <View  style={{flexDirection:'row',alignItems:'center'}}>
                                {comprobado.curp===true ? 
                                    <Image style={styles3.logosLink}  source={require('../../assets/correcto.gif')}/>:
                                    <Image style={styles3.logosLink}  source={require('../../assets/alertaCabeceando.gif')}/>
                                }
                                <Text style={styles3.link}>
                                    Curp
                                </Text>
                            </View>
                            <View  style={{flexDirection:'row',alignItems:'center'}}>
                                {comprobado.contanciaMed===true ? 
                                    <Image style={styles3.logosLink}  source={require('../../assets/correcto.gif')}/>:
                                    <Image style={styles3.logosLink}  source={require('../../assets/alertaCabeceando.gif')}/>
                                }
                                <Text style={styles3.link}>
                                    Constancia Medica
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
                <>
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
                </>
            </View>
         
        </>
        // <SafeAreaView style={{flex:1}}>
        //     <ScrollView>
                
        //     </ScrollView>
        // </SafeAreaView>
    );
};

export default CorrecionScreen;


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
    texto1:{
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
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
        width:150,
        height:150,
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


