import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';

import Users from '../model/users';

const IniciarSecionScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn,regresarHome } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => { //estraigo con el filter del archivo user.js la informacion que solo y solo sea igual a los campos que estoy poniendo en la condicione y si coincide me regresa el vector completo de es json.
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {//verifica que los campos esten llenos
            Alert.alert('Campo vacio', 'Usuario o Contraseña no pueden estar vacios.', [
                {text: 'Aceptar'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) { //sí el elemento filtrado es igual a 0 en foundUser significa que no existe ningun usuario igual en la base de datos
            Alert.alert('Usuario invalido!', 'Usuario o Contraseña incorrectos', [
                {text: 'Aceptar'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#0064A2' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Text animation="bounceIn" style={styles.text_header}>Bienvenido</Animatable.Text>
            <Animatable.Text animation="bounceIn" style={styles.text_headerBottom}>Inicia secion para poder Inscribirte</Animatable.Text>
            
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Correo institucional</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Correo"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Usuario no valido</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Contraseña</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Contraseña"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>La contraseña debe ser minimo 8 caracteres</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#0064A2', marginTop:15}}>¿Olvidastes la contraseña?</Text>
            </TouchableOpacity>
        
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['#0064A2', '#2096BA']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Iniciar Secion</Text>
                </LinearGradient>
                </TouchableOpacity>
            
                <TouchableOpacity
                    onPress={() => navigation.navigate('Parte1Screen')}
                    style={[styles.signIn, {
                        borderColor: '#2096BA',
                        borderWidth: 1,
                        marginTop: 15,
                        marginBottom: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#0064A2'
                    }]}>Registrarse</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {regresarHome()}}
                >
                
                <LinearGradient
                    colors={['#0064A2', '#2096BA']}
                    style={styles.regresar}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}><FontAwesome 
                    name="home"
                    color={'#fff'}
                    size={30}
                />   Regresar a home</Text>
                </LinearGradient>
                </TouchableOpacity>
            


            </View>
        </Animatable.View>
    </View>
    );
};

export default IniciarSecionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#0064A2'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 34
    },
    text_headerBottom:{
        color: '#fff',
        
        fontSize: 18
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    regresar: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection:'row'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
