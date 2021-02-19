// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const RegistroScreen1 = ({navigation}) => {
//     return (
//       <View style={styles.container}>
//         <Text>RegistroScreen1</Text>
//         {/* <Button
//             title="Go to details screen...again"
//             onPress={() => navigation.push("Details")}
//         /> */}
//           <Button
//             title="Go back"
//             onPress={() => navigation.goBack()}
//         />
//         <Button
//             title="Parte1"
//             onPress={() => navigation.navigate("Parte2Screen")}
//         />
      
//       </View>
//     );
// };

// export default RegistroScreen1;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });

import React from 'react';
import { 
    View, 
    Text,  
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import { Button, Paragraph, Dialog, Portal,Caption,ProgressBar,Colors,Title} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const RegistroScreen1 = ({navigation}) => {

    return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#0064A2' barStyle="light-content"/>
        <View style={styles.header}>
        <Animatable.Text animation="zoomInUp" style={styles.text_header}>¡Registrate para iniciar!</Animatable.Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    Registarte con la app es el primer paso para incribirte, dudas o aclaraciones entrar a la pagina oficial del instituto
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}www.itsa.edu.mx</Text>
                <Text style={styles.color_textPrivate}>{" "}o llamar al teléfono</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "} 453-534-8300 </Text>
            </View>

            <View style={styles.EnlacesContent}>
                    <Text style={{fontWeight: 'bold',  fontSize: 14, color: '#0064A2',}}>
                    Paginas asociadas al Instituto Tecnologico Superior de Apatzingan:
                    </Text>
                    <Text style={styles.Enlaces}>
                    www.facebook.com/ItsaApatzingan
                    </Text>
                    <Text style={styles.Enlaces}>
                    www.itsaextraescolares.com
                    </Text>
                    <Text style={styles.Enlaces}>
                    www.siit.itsa.edu.mx
                    </Text>
                    <Text style={styles.Enlaces}>
                    www.itsa.edu.mx
                    </Text>
            </View>

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {navigation.navigate('Parte2Screen')}}
                >
                <LinearGradient
                    colors={['#0064A2', '#2096BA']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Iniciar Registro</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#fff',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#0064A2'
                    }]}>Ya tienes cuenta</Text>
                </TouchableOpacity>
            </View>
            
            </ScrollView>
        </Animatable.View>
    </View>
    );
};

export default RegistroScreen1;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#0064A2'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 30,
    },
    footer: {
        flex: Platform.OS === 'ios' ? 10 : 15,//revisar esta parte del tamaño en ios
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10,
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey',
        fontSize:14
    },
    Enlaces:{
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
    },
    EnlacesContent:{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    }
});
