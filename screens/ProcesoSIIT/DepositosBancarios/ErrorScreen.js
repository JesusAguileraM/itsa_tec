import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,Linking,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import {Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";


const ErrorScreen = (props) => {

    const [comprobado, setComprobado] = React.useState({
        Form_parte1:true,
        Form_parte2:true,
        Acta:true,
        curp:false,
        certificadoBach:false,
        contanciaMed:true
    });
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image style={styles7.logoTec2} source={require('../../../assets/alertaOnda.gif')} />
                        <Text style={{color:"#000",fontSize:18,marginBottom:10,fontWeight:'bold'}}>{props.deposito.estadoPago.toUpperCase()}</Text>
                        <Text style={styles7.texto1} >
                            {props.deposito.observaciones}
                        </Text>
                    </View>
                    <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles7.texto2}>
                            Corrabore que la información y las fotos esten bien:
                        </Text>
                        <View style={styles7.contenedor}>
                            <View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    {comprobado.Form_parte1===true ? 
                                        <Image style={styles7.logosLink}  source={require('../../../assets/correcto.gif')}/>:
                                        <Image style={styles7.logosLink}  source={require('../../../assets/alertaCabeceando.gif')}/>
                                    }


                                    <Text style={styles7.link}>
                                        Formulario parte 1
                                    </Text>
                                </View>
                                <View  style={{flexDirection:'row',alignItems:'center'}}>
                                    {comprobado.Form_parte2===true ? 
                                        <Image style={styles7.logosLink}  source={require('../../../assets/correcto.gif')}/>:
                                        <Image style={styles7.logosLink}  source={require('../../../assets/alertaCabeceando.gif')}/>
                                    }
                                    <Text style={styles7.link}>
                                        Formulario parte 2
                                    </Text>
                                </View>
                                <View  style={{flexDirection:'row',alignItems:'center'}}>
                                    {comprobado.Acta===true ? 
                                        <Image style={styles7.logosLink}  source={require('../../../assets/correcto.gif')}/>:
                                        <Image style={styles7.logosLink}  source={require('../../../assets/alertaCabeceando.gif')}/>
                                    }
                                    <Text style={styles7.link}>
                                        Acta de nacimiento
                                    </Text>
                                </View>
                                <View  style={{flexDirection:'row',alignItems:'center'}}>
                                    {comprobado.certificadoBach===true ? 
                                        <Image style={styles7.logosLink}  source={require('../../../assets/correcto.gif')}/>:
                                        <Image style={styles7.logosLink}  source={require('../../../assets/alertaCabeceando.gif')}/>
                                    }
                                    <Text style={styles7.link}>
                                        Certificado de bachillerato
                                    </Text>
                                </View>
                                <View  style={{flexDirection:'row',alignItems:'center'}}>
                                    {comprobado.curp===true ? 
                                        <Image style={styles7.logosLink}  source={require('../../../assets/correcto.gif')}/>:
                                        <Image style={styles7.logosLink}  source={require('../../../assets/alertaCabeceando.gif')}/>
                                    }
                                    <Text style={styles7.link}>
                                        Curp
                                    </Text>
                                </View>
                                <View  style={{flexDirection:'row',alignItems:'center'}}>
                                    {comprobado.contanciaMed===true ? 
                                        <Image style={styles7.logosLink}  source={require('../../../assets/correcto.gif')}/>:
                                        <Image style={styles7.logosLink}  source={require('../../../assets/alertaCabeceando.gif')}/>
                                    }
                                    <Text style={styles7.link}>
                                        Constancia Medica
                                    </Text>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ErrorScreen;


const styles7 = StyleSheet.create({
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
        marginBottom:10,
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
        marginLeft:10
        
    },
    logoTec:{
        width:100,
        height:100,
        resizeMode:'contain',
        marginLeft:15,
        
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
        
    }
});


