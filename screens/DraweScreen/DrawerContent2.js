import React, { useState, useEffect,useRef } from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Dimensions,SafeAreaView,} from "react-native";
import {useTheme,Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch,} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "../../components/context";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import * as crudToken from "../../database/crudToken";  //Aqui esta lo del crud de token y user


export function DrawerContent2(props) {

    let DatosGoogle=null;

    const [CorreoInst, setCorreoInst]= useState('');
    const [foto, setFoto]= useState('https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png');
    const [nombre, setNombre]= useState('Usuario');
    

    //Para cerrar 
    const { signOutUser } = React.useContext(AuthContext);

    
    useEffect(() => {
        (async () => {
            DatosGoogle= await crudToken.useObtenerSesion();
            await setCorreoInst(DatosGoogle.email);
            await setNombre(DatosGoogle.name);
            await AsyncStorage.setItem('CorreoElectronicoUsuario',CorreoInst);
            await AsyncStorage.setItem('FotoUsuario',foto);
            await AsyncStorage.setItem('NombreUsuario',nombre);

        })();
    }, []);
    return (
        <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <SafeAreaView style={styles.containerSafeArea}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri:foto,
                        }}
                        size={50}
                    />
                    <View style={{ marginLeft: 10, flexDirection: "column" }}>
                        <Text style={styles.title}>
                            Instituto Tecnologico Superior de Apatzingan
                        </Text>
                        <Caption style={styles.caption}>
                            {CorreoInst}
                        </Caption>
                    </View>
                </View>
                </SafeAreaView>
            </View>

            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )}
                    label="Home"
                    onPress={() => {
                    props.navigation.navigate("Home");
                }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="ios-person" color={color} size={size} />
                    )}
                    label="Alumno"
                    onPress={() => {
                    props.navigation.navigate("Alumno");
                }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="archive" color={color} size={size} />
                    )}
                    label="Cargas"
                    onPress={() => {
                    props.navigation.navigate("Cargas");
                }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="documents" color={color} size={size} />
                    )}
                    label="Descargas"
                    onPress={() => {
                    props.navigation.navigate("Descargas");
                }}
                />
                 <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="barcode" color={color} size={size} />
                    )}
                    label="Depositos Bancarios"
                    onPress={() => {
                    props.navigation.navigate("Depositos");
                }}
                />
                
            </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            
            <DrawerItem
                icon={({ color, size }) => (
                <Icon name="log-out" color={color} size={size} />
                )}
                label="Cerrar sesión"
                onPress={() => {
                    signOutUser();
                }}
            />
        </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        
    },
    containerSafeArea: {
        width: Dimensions.get("window").width / 2,
        height: 50,
        marginBottom: 50,
        
    },
    userInfoSection: {
        paddingLeft: 15,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold",
    },
    title2: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    caption: {
        fontSize: 11,
        lineHeight: 14,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold",
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
        
    },
    drawerSection: {
        marginTop: 1,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    signIn: {
        width: 250,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        
    },
    textSign: {
        fontSize: 14,
        fontWeight: "bold",
    },
});
