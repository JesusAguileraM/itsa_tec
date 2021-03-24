
import React from 'react';
import {View,StyleSheet,Dimensions,SafeAreaView,Image} from "react-native";
const Splash = ()=> {
    {
        return (
            <SafeAreaView style={styles.containerSplash}>
                <Image style={styles.imagenLogo} source={require('../assets/itsaLogoSplash.png')} />
                <Image style={styles.imagenGif} source={require('../assets/doubleRinCarga.gif')} />
            </SafeAreaView>
        );
    }
}
export default Splash;


const styles=StyleSheet.create({
    containerSplash:{
        width: Dimensions.get("window").width,
        height:Dimensions.get("window").height,
        display: 'flex',
        flex: 1,
        backgroundColor: 'rgba(52,52,52,0.7)',
        alignItems:'center',
        justifyContent:'center'
    },
    imagenLogo:{
        width: 250,
        height:250,
        marginBottom:50,
    },
    imagenGif:{
        width: 80,
        height:80,
    }
});