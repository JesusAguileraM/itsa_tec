import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,Linking,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import {Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";


const RevisionScreen = (props) => {

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
                        <Image style={styles3.logoTec2} source={require('../../assets/itsaLogoSplash.png')} />
                        <Text style={{color:"#000",fontSize:18,marginBottom:10,fontWeight:'bold'}}>
                            EN REVISIÓN
                        </Text>
                        <Text style={styles3.texto1} >
                            {(props.user.observaciones === 'No aplica')  ? 
                            'El personal del instituto está validando las fotos de los depositos bancarios correspondientes a la ficha de admisión y aportación institucional' :
                             props.user.observaciones}
                        </Text>
                        <Image style={styles3.logoTec3} source={require('../../assets/CargandoColores.gif')} />
                    </View>
                </View>
                
            </View>
         
        </>
        // <SafeAreaView style={{flex:1}}>
        //     <ScrollView>
                
        //     </ScrollView>
        // </SafeAreaView>
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
        width:200,
        height:200,
        resizeMode:'contain',
        margin:10
    },
    logoTec3:{
        width:50,
        height:50,
        resizeMode:'contain',
        margin:0
    },
    logosLink:{
        width:20,
        height:20,
        resizeMode:'contain',
        marginRight:5,
        marginLeft:5
    }
});


