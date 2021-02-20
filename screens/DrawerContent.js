import React from 'react';
import { View, StyleSheet,Button,Alert,Touch,Text, 
    TouchableOpacity,Dimensions,SafeAreaView } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import{ AuthContext } from '../components/context';
import * as global from "../database/variablesGlobales";
export function DrawerContent(props) {

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                    <SafeAreaView style={styles.containerSafeArea}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                                source={{
                                    uri: 'https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Text style={styles.title}>Instituto Tecnologico Superior de Apatzingan</Text>
                                {/* <Caption style={styles.caption}>Tal15020357@itsa.edu.mx</Caption> */}
                                {global.usuarioLogueado === true ? <Caption style={styles.caption}>Tal15020357@itsa.edu.mx</Caption> :<></>}
                                
                            </View>
                        </View>
                        </SafeAreaView>


                        {global.usuarioLogueado === false ? 
                        <View style={{flexDirection:'row',marginTop: 12}}>
                            
                            <TouchableOpacity
                                onPress={() => {signOut()}}
                                style={[styles.signIn, {
                                    borderColor: '#2096BA',
                                    borderWidth: 1,
                                    marginTop: 12,
                                
                                    flexDirection:'column',
                                    backgroundColor: '#0064A2'
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Iniciar sesión</Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => navigation.navigate('Parte1Screen')}
                                style={[styles.signIn, {
                                    borderColor: '#2096BA',
                                    borderWidth: 1,
                                    marginTop: 12,
                                    marginLeft:10,
                                    flexDirection:'column',
                                    
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#0064A2'
                                }]}>Registarse</Text>
                            </TouchableOpacity>
                        </View>:<></>

                    }
                        {/* <Paragraph style={[styles.paragraph, styles.caption]}></Paragraph>            
                        <Paragraph style={[styles.paragraph, styles.caption]}>Materias</Paragraph>            
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>0</Paragraph>
                                <Caption style={styles.caption}> Cursando</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>47</Paragraph>
                                <Caption style={styles.caption}>En proceso...</Caption>
                            </View>
                        </View> */}
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-person" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Perfil"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="create-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Inscribirse"
                            onPress={() => {props.navigation.navigate('Inscribirse')}}
                        />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Perfil"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        /> */}
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="create" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Re-inscribirse"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferencias">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Modo Oscuro</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
            {global.usuarioLogueado === true ?  
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="log-out" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Cerrar sesión"
                    onPress={() => {signOut()}}
                /> : 
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="log-out" 
                        color={color}
                        size={size}
                        />
                    )}
                    label=""
                    // onPress={() => {signOut()}}
                />
            }
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
        drawerContent: {
            flex: 1,
        },
        containerSafeArea:{
            width: Dimensions.get("window").width/2,
            height:30,
            marginBottom:40,
        },
        userInfoSection: {
            paddingLeft: 20,
        
        },
        title: {
            fontSize: 16,
            marginTop: 3,
            fontWeight: 'bold',
        },title2: {
            fontSize: 12,
            marginTop: 5,
            fontWeight: 'bold',
            paddingLeft: 20,
        },
        caption: {
            fontSize: 14,
            lineHeight: 14,
            marginTop:10
        },
        row: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
        },
        section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
        },
        paragraph: {
            fontWeight: 'bold',
            marginRight: 3,
        },
            drawerSection: {
            marginTop: 15,
        },
        bottomDrawerSection: {
            marginBottom: 15,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1
        },
        preference: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 16,
        },
        signIn: {
            
            width: Dimensions.get("window").width/4,
            height:30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
        },
        textSign: {
            fontSize: 14,
            fontWeight: 'bold'
        }
    });
