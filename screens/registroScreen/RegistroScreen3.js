import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Linking
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Button,  Avatar, Card, Title, Paragraph, Dialog, Portal,Caption,ProgressBar,Colors} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';




const RegistroScreen3 = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const [ carreras, setCarreras ] = useState("");
    const [ turno, setTurno ] = useState("");

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#0064A2' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Parte 2</Text> 

            <ProgressBar progress={0.66} color={'#fff'} /> 
        </View>
        <Animatable.View 
            animation="bounceIn"
            style={styles.footer}
        >
            <ScrollView>
              <View>
            <Text>
                {carreras ?
                  `-- Carrera ${carreras}` :
                    "¿Que carrera le interesa?"
                }
            </Text>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={(carreras) => setCarreras(carreras)}
                
                items={[
                    { label: "Ing. Sistemas Computacionales", value: "IISC" },
                    { label: "Ing. Informatica", value: "IINF" },
                    { label: "Ing. Civil", value: "ICIV" },
                    { label: "Ing. Gestión Empresarial", value: "IGEM" },
                    { label: "Ing. Inovación y energ. sustentable", value: "IIAS" },
                    { label: "Ing. Bioquimica", value: "IBQA" },
                    { label: "Ing. Industrial", value: "IIND" },
                    { label: "Ing. Contador Publico", value: "COPU" },
                ]}
                placeholder={{ label: "--Seleccione una carrera--", value: null }}
            />
</View>


<View>
            <Text>
                {turno ?
                  `-- Turno ${turno}` :
                    "¿Que turno le interesa inscribirse?"
                }
            </Text>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={(turno) => setTurno(turno)}
                
                items={[
                    { label: "Matutino", value: "Matutino" },
                    { label: "Verpertino", value: "Verpertino" },
                  
                ]}
                placeholder={{ label: "--Seleccione un turno--", value: null }}
            />
</View>
<View style={styles.contenidoCard}>
  <ScrollView>
    <Card  onPress={ ()=>{ Linking.openURL('https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf')}}>
        <Card.Content>
          <Title>Ing.Sistemas en Computacionales</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://moodle.itq.edu.mx/pluginfile.php/42340/course/overviewfiles/Ingenieria-en-Sistemas-Computacionales.jpg' }} />
        <Card.Actions>
          <Button>Ver Reticula</Button>
        </Card.Actions>
      </Card>

      <Card  onPress={ ()=>{ Linking.openURL('https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf')}}>
        <Card.Content>
          <Title>Ing. en adiministración de Empresas</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://edec.mx/wp-content/uploads/2017/08/Licenciatura-en-Administracion-de-Empresas.jpg' }} />
        <Card.Actions>
          <Button>Ver Reticula</Button>
        </Card.Actions>
      </Card>

      <Card  onPress={ ()=>{ Linking.openURL('https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf')}}>
        <Card.Content>
          <Title>Ing. Informática</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT38B0x3dvMrR9GwtzvwDQDi2XFMRDIsbFyA&usqp=CAU' }} />
        <Card.Actions>
          <Button>Ver Reticula</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  </View>


            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    Crear la cuenta es el primer paso para incribirte dudas o aclaraciones entrar a la pagina oficial del instituto
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}www.itsa.edu.mx</Text>
                <Text style={styles.color_textPrivate}>{" "}o llamar al teléfono</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "} 453-534-8300 </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {navigation.navigate('RegistrarseScreen')}}
                >
                <LinearGradient
                    colors={['#0064A2', '#2096BA']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Siguiente</Text>
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
                    }]}>Regresar</Text>
                </TouchableOpacity>
                
            </View>
            </ScrollView>
        </Animatable.View>
    </View>
    );
};

export default RegistroScreen3;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#0064A2'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginTop: 10,
    },
    contenidoCard:{
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height /3 + 20,
    },
    footer: {
        flex: Platform.OS === 'ios' ? 10 : 15,//revisar esta parte del tamaño en ios
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: -20,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
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
        color: 'grey'
    } 
});
