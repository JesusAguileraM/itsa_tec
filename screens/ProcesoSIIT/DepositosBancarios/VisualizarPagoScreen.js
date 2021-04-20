import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,Alert,Image,TouchableOpacity,Dimensions} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,Button,Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Camera } from 'expo-camera';
import Feather from "react-native-vector-icons/Feather";
import {styles, styles2} from '../../styles/datailsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import dbPagoR from '../../../database/crudDatosPagosReInscripcion';

const VisualizarPagoScreen = ({navigation}) => {

    const [fotoValidada, setFotoValidada] = useState(false);   //va aparecer el boton imprimir hasta que la foto esta validada
    const [esperoRespuesta, setEsperoRespuesta] = useState(false);

    const [respuesta,setRespuesta]  = useState(false); //fech
    const [foto,setFoto]=useState(null);

    const imprimir=()=>{
        Alert.alert(
            "Cargando pdf...",
            "Archivo de datos del pago referido",
            [
                {
                    text: "Aceptar",
                    
                },
            ],
        );
        navigation.navigate('Depositos');
    }

    const tomarFotoComprobante=()=>{
        console.log('hola')
    }
    const enviarFoto=()=>{
        setEsperoRespuesta(true);
    }
    useEffect( async () => {
        // setRespuesta(fech) esperando respuesta del servidor
        if(respuesta==false){
            let datos= await AsyncStorage.getItem('RespuestaPagoReferido');//contiene localmente la variable esperoRespuesta para cuando reinicia la app siga esperando respuesta
            if(datos==true){//ocupo saber que sea el mismo usuario
                setEsperoRespuesta(true);
            }
            //aqui hago fech y setFotoValidada(true) para saver si es correcto
        }else{
            setEsperoRespuesta(true);
            setFotoValidada(respuesta);
        }

    }, []);

    return (
        <SafeAreaView style={stylesPrivados.container}>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
                        <View><Text style={{fontSize:18,fontWeight:'bold',marginBottom:10,marginLeft:10}}>Datos de pago referido </Text></View>
                        <View><Image style={{width:50,height:50,resizeMode:'contain',marginRight:10}}source={{ uri:"http://sic.gob.mx/images/62408" }} /></View>
                </View>
                <ScrollView>
                    

                    <Divider></Divider>
                    <Divider></Divider>
                    <Divider></Divider>
                    <Divider></Divider>
                
                    <View>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                            <DataTable>

                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Folio</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>0001</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Usuario</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>Jesus Alejandro Aguilera M</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={[stylesPrivados.containerCeldaTitulo,{backgroundColor:"#fff"}]}>
                                        <View style={{alignSelf:'center',width:50,height:30,justifyContent:'center',marginLeft:10,backgroundColor:'#fff'}}><Text style={{fontWeight:'bold',color:"#000"}}>Banco </Text></View>
                                        <View><Image style={{width:50,height:30,resizeMode:'contain'}}source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/1280px-BBVA_2019.svg.png" }} /></View>
                                    </DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}><Text  style={{color:'#004481',fontWeight:'bold'}}>BBVA Bancomer</Text></DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Periodo</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>20203-JULDIC</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>08/05/2020</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha de caducidad</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>09/05/2020</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Referencia bancaria</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}><Text style={{color:'#d74c4c',fontWeight:'bold'}}>15020357202005081997</Text></DataTable.Cell>
                                </DataTable.Row>
                            
                            </DataTable>

                        </ScrollView>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                        <DataTable style={{marginLeft:0}}>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Tipo de pago</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>PAGO DE RE-INSCRIPCION</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Concepto</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>APORTACIÓN PARA EL FORTALECIMIENTO INSTITUCIONAL REINGRESO</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Cantidad</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>1</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Costo</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}>{`$ 920`}</DataTable.Cell>
                                </DataTable.Row>
                                <Divider></Divider>
                                <Divider></Divider>
                                <Divider></Divider>
                                <Divider></Divider>
                                <DataTable.Row >
                                    <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Importe</Text></DataTable.Cell>
                                    <DataTable.Cell style={stylesPrivados.containerCelda}><Text style={{color:'#d74c4c',fontWeight:'bold'}}>{`$ 920`}</Text></DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                        </ScrollView>
                        
                    </View>
                    <View style={{alignItems:'center',marginTop:10,marginBottom:50}}>
    
                        { esperoRespuesta === true ? 
                            <View>
                                {fotoValidada === true ? 
                                    <Button  color="#7c7bad" style={{width:300,height:40,margin:10,marginTop:0}} mode="outlined" onPress={() => imprimir()}>
                                        Imprimir
                                    </Button>
                                : 
                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{color:"#000",fontSize:18,marginBottom:10,fontWeight:'bold'}}>IMPORTANTE</Text>
                                        <Text style={stylesPrivados.texto1} >
                                            Puede demorar unas horas la respuesta ya que la información y fotos estan siendo revisadas por el personal 
                                            del tecnologico, por lo que tendra que esperar las siguientes 24hrs hasta que regresemos una 
                                            respuesta a esta aplicación.
                                        </Text>
                                        <Image 
                                            style={{width:300, height:100}}
                                            source={require('../../../assets/cargandoBolitas.gif')}
                                        />
                                    </View>
                                    
                                } 
                            </View>
                            :
                            <View style={{alignItems:'center'}}>
                                <View style={stylesPrivados.fotoPosicion}>
                                    <Surface style={{backgroundColor:'#fff'}}>
                                            <TouchableOpacity
                                                style={styles.imagenFoto}
                                                onPress={() => {
                                                    //setActivarCamara(false)
                                                }}
                                            >
                                                <Image 
                                                    style={styles.foto}
                                                    source={{uri: foto ? foto : null}}
                                                />
                                            </TouchableOpacity>
                                    </Surface>
                                    <SafeAreaView style={{width: Dimensions.get("window").width/2,marginTop:20,alignItems:'center'}}>
                                        <View>
                                            <Text style={{fontSize:18,fontWeight: "bold",}}>
                                                Comprobante de pago
                                            </Text>
                                            <Divider/>
                                            <Divider/>
                                            <Text>
                                                - Asegurate que este iluminado la zona donde se tomara la foto.
                                            </Text>
                                            <Text>
                                                - Asegurarse sea legible.
                                            </Text>
                                        </View>
                                        <Button  color="#7c7bad" style={{width:150,height:40,margin:10,marginTop:20,marginBottom:10}} mode="outlined" onPress={() => tomarFotoComprobante}>
                                            Tomar foto
                                        </Button>
                                    </SafeAreaView>
                                </View>
                            
                                <Button  color="#05375a" style={{width:300,height:40,margin:10,marginTop:0,marginBottom:10}} mode="outlined" onPress={() => enviarFoto()}>
                                    Enviar
                                </Button>
                            </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default VisualizarPagoScreen;

const stylesPrivados = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    containerCeldaTitulo:{
        marginRight:20,
        justifyContent:'space-between',
        width:150,
    },
    containerCelda:{
        marginRight:20,
        justifyContent:'flex-start',
        width:200,
        borderRightColor:'gray',
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
    },
    userInfoSection: {
        paddingHorizontal: 10,
        marginBottom: 25,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    fotoPosicion:{
        width: Dimensions.get("window").width,
        alignContent:'center',
        justifyContent: "space-around",
        alignItems:'flex-start',
        marginLeft:10,
        flexDirection: "row",
        
    },
    texto1:{
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
        color:'#05375a',
        width: Dimensions.get("window").width -50,
    },
    logoTec2:{
        width:100,
        height:100,
        resizeMode:'contain',
        margin:10
    },
});