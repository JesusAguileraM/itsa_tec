import React, {useState, useEffect} from 'react';
import * as crudToken from "../database/crudToken";  //Aqui esta lo del crud de token y user
import {View,} from "react-native";
import { Appbar,Avatar,Text } from 'react-native-paper';

const HeaderRight = () => {

    const [fotoUsuario, setFoto]= useState('https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png');
    const [nombreCompleto, setNombre]= useState('Usuario');
    
    useEffect(() => {
        (async () => {
            const DatosGoogle= await crudToken.useObtenerSesion();
            await setFoto(DatosGoogle.picture);
            await setNombre(DatosGoogle.name);

        })();
    }, []);
  
    return (
        <View style={{ flexDirection: "row",alignItems:'center'}}>
            <View style={{alignItems:'flex-end' }}>
                <Text style={{ marginRight: 5,marginBottom:5,color:'#fff', justifyContent:'flex-end', fontSize: 12,fontWeight: "bold",}}>Cuenta de: </Text>
                <Text style={{ marginRight: 5,color:'#fff',fontSize: 10,fontWeight: "200",}}>{nombreCompleto}</Text>
            </View>
            
            <Avatar.Image
                style={{ marginLeft: 5,marginRight: 5}}
                source={{uri:fotoUsuario,}}
                size={50}
            />
        </View>
    );
}

export default HeaderRight;