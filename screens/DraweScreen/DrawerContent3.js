import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
} from "react-native";
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
} from "react-native-paper";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/Ionicons";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { AuthContext } from "../../components/context";
import * as global from "../../database/variablesGlobales";


export function DrawerContent3(props) {
    
const CorreoInst= 'Tal15020357@itsa.edu.mx';
const paperTheme = useTheme();
const { signOut, toggleTheme } = React.useContext(AuthContext);
//Para cerrar 
const { signOutUser,handleGLogin,ir_a_sesion } = React.useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <SafeAreaView style={styles.containerSafeArea}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri:
                            "https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png",
                        }}
                        size={50}
                    />
                    <View style={{ marginLeft: 10, flexDirection: "column" }}>
                        <Text style={styles.title}>
                            Instituto Tecnologico Superior de Apatzingan
                        </Text>
                    
                    </View>
                </View>
                
                
                <View style={{ marginBottom:5,marginTop:20 }}>
                    <TouchableOpacity
                    onPress={() => {
                        ir_a_sesion();
                    }}
                    style={[
                        styles.signIn,
                        {
                        borderColor: "#2096BA",
                        borderWidth: 1,
                        marginTop: 12,
                        flexDirection: "column",
                        backgroundColor: "#0064A2",
                        
                        },
                    ]}
                    >
                    <Text style={[styles.textSign,{color: "#fff",},]}>
                        Iniciar Sesión ITSA
                    </Text>
                    </TouchableOpacity>

                </View>
                <View style={{marginBottom:5 }}>
                    <TouchableOpacity
                    onPress={() => {handleGLogin()}}
                    style={[
                        styles.signIn,
                        {
                        borderColor: "#2096BA",
                        borderWidth: 1,
                        marginTop: 12,
                        flexDirection: "column",
                        backgroundColor: "#fff",
                        
                        },
                    ]}
                    >
                    <Text style={[styles.textSign,{color: "#0064A2",},]}>
                        Iniciar Sesión con Google
                    </Text>
                    </TouchableOpacity>

                </View>
                    <View style={{marginBottom:5,marginTop:40 }}>
                    
                        <Text style={[styles.textSign,{color: "#0064A2",},]}>
                            Bienvenido futuro ingeniero...
                        </Text>
                        <Caption style={styles.caption}>
                        Para poder inscribirte al tecnologico tendras que Iniciar
                            sesión con una cuenta proporcionada por la institución
                        </Caption>

                    </View>
                </SafeAreaView>
            </View>

        
            </View>
        </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        
    },
    containerSafeArea: {
        width: Dimensions.get("window").width / 1.6,
        height: Dimensions.get("window").height,
        marginBottom: 100,
        
        
    },
    userInfoSection: {
        paddingLeft: 15,
    },
    title: {
        fontSize: 18,
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
        fontSize: 12,
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
        marginTop: 15,
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

