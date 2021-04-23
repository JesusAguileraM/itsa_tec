import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,Linking,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";


const FinalizadoScreen = (props) => {

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image style={styles.logoTec2} source={require('../../../assets/logoTec.png')} />
                        <Text style={{color:"#000",fontSize:18,marginBottom:10,fontWeight:'bold'}}>{props.deposito.estadoPago.toUpperCase()}</Text>
                        <Text style={styles.texto1} >
                            {props.deposito.observaciones}
                        </Text>
                        <Image 
                            style={{width:300, height:100}}
                            source={require('../../../assets/cargandoBolitas.gif')}
                        />
                    </View>
                    <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.texto2}>
                            Cualquier duda o aclaracion puede consultar las siguientes paginas vinculadas al instituto:
                        </Text>
                        <View style={styles.contenedor}>
                            <View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image style={styles.logosLink} source={{ uri:"https://i0.wp.com/tecmonclova.com/sitio/wp-content/uploads/2019/08/cropped-iconoweb.png?fit=512%2C512&ssl=1" }} />
                                    <Text style={styles.link} onPress={ ()=>{ Linking.openURL('https://www.itsa.edu.mx/')}}>
                                        https://www.itsa.edu.mx/
                                    </Text>
                                </View>
                                <View  style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image style={styles.logosLink} source={require('../../../assets/logoTec.png')} />
                                    <Text style={styles.link} onPress={ ()=>{ Linking.openURL('https://itsaextraescolares.com/')}}>
                                        https://itsaextraescolares.com/
                                    </Text>
                                </View>
                                <View  style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image style={styles.logosLink}source={{ uri:"https://uploads-ssl.webflow.com/5f86a7ed85e2e22fbfccc7b1/5fa02c958a7482068effce1c_Odoo%20Logo.png" }} />
                                    <Text style={styles.link} onPress={ ()=>{ Linking.openURL('https://siit.itsa.edu.mx/')}}>
                                        https://siit.itsa.edu.mx/
                                    </Text>
                                </View>
                                <View  style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image style={styles.logosLink}source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" }} />
                                    <Text style={styles.link} onPress={ ()=>{ Linking.openURL('https://www.facebook.com/ItsaApatzingan/')}}>
                                        www.facebook.com/ItsaApatzingan
                                    </Text>
                                </View>
                            </View>
                            <Image style={styles.logoTec}source={{ uri:"https://img.icons8.com/carbon-copy/2x/domain.png" }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FinalizadoScreen;


const styles = StyleSheet.create({
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
        fontWeight:'400',
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
        marginTop:10
        
    },
    logoTec:{
        width:100,
        height:100,
        resizeMode:'contain',
        marginLeft:15,
        
    },
    logoTec2:{
        width:100,
        height:100,
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


