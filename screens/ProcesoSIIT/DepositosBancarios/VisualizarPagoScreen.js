import React,{useState, useEffect, useRef} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,Alert,Image,TouchableOpacity,Dimensions} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,Button,Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Camera } from 'expo-camera';
import Feather from "react-native-vector-icons/Feather";
import {styles, styles2} from '../../styles/datailsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ESTADOPAGO } from '../../../auth/config';
import toFecha from '../../../util';
import FinalizadoScreen from './FinalizadoScreen';
import ErrorScreen from './ErrorScreen';

//import dbPagoR from '../../../database/crudDatosPagosReInscripcion';

const VisualizarPagoScreen = ({navigation, route}) => {

    const [deposito, setDeposito] = useState(null);
    const [hasPermission, setHasPermission] = useState(false);
    const [isActiveCamera, setIsActiveCamera] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const camRef = useRef(null);
    const [foto, setFoto] = useState(null);

    useEffect( () => {
        (async() => {
            setDeposito(route.params.deposito);
            console.log(route.params.deposito);
            // if(estadoPago === ESTADOPAGO.aceptado){
            //     //Quitamos el LoadingPage y habilitamos la vista con la camara
            // } else if(estadoPago === ESTADOPAGO.rechazado){
            //     //Habilitamos el LandingPage de error e indicamos ese error
            // } else if(estadoPago === ESTADOPAGO.revision){
            //     //Habilitamos el LandingPage de revision diciendo que espere a una estadoPago
            // } else if(estadoPago === ESTADOPAGO.cancelado){
            //     //Habilitamos el LandingPage de cancelado una vista donde no aparece nada y diciendo que lo has cancelado
            // } else if(estadoPago === ESTADOPAGO.finalizado){
            //     //Habilitamos el LandingPage de Finalizado indicando que ya ha concluido el pago y fue aprobado
            // }   

            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

    }, []);

    const setActivarCamara = () => {
        setIsActiveCamera(!isActiveCamera);        
    }

    const tomarFoto_Salir = async () => {
        if(camRef){
            const foto = await camRef.current.takePictureAsync();
            foto.name = 'pago.jpg';
            foto.type = 'image/jpg';
            setFoto(foto);
            await setActivarCamara();
        }
    }

    if (hasPermission === false) {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    const imprimir= () => { //impreme la orden de pago
        // navigation.goBack();
    }

    const enviarFoto=()=>{
        
    }

    // const ESTADOPAGO = {
    //     revision: "revisión", 
    //     aceptado: "aceptado", 
    //     rechazado: "rechazado", 
    //     finalizado: "finalizado", 
    //     cancelado: "cancelado",
    // };
    console.log(foto)
    return (
        <>
            {
                (deposito) && (deposito.estadoPago === ESTADOPAGO.revision ||
                                     deposito.estadoPago === ESTADOPAGO.aceptado) && (
                    <>
                        { 
                            (isActiveCamera) ? false : true && (
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
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{deposito.folioInterno}</DataTable.Cell>
                                                        </DataTable.Row>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Usuario</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{deposito.usuario}</DataTable.Cell>
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
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{deposito.periodo}</DataTable.Cell>
                                                        </DataTable.Row>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{toFecha.obtenerFecha(deposito.fecha)}</DataTable.Cell>
                                                        </DataTable.Row>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha de caducidad</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{toFecha.obtenerFecha(deposito.fechaCaducidad)}</DataTable.Cell>
                                                        </DataTable.Row>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Referencia bancaria</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}><Text style={{color:'#d74c4c',fontWeight:'bold'}}>{deposito.referenciaBancaria}</Text></DataTable.Cell>
                                                        </DataTable.Row>
                                                    
                                                    </DataTable>
                    
                                                </ScrollView>
                                                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                                                <DataTable style={{marginLeft:0}}>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Tipo de pago</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{deposito.tipoPago}</DataTable.Cell>
                                                        </DataTable.Row>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Concepto</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{deposito.concepto}</DataTable.Cell>
                                                        </DataTable.Row>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Cantidad</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{deposito.cantidad}</DataTable.Cell>
                                                        </DataTable.Row>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Costo</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}>{`$${deposito.costo}`}</DataTable.Cell>
                                                        </DataTable.Row>
                                                        <Divider></Divider>
                                                        <Divider></Divider>
                                                        <Divider></Divider>
                                                        <Divider></Divider>
                                                        <DataTable.Row >
                                                            <DataTable.Cell style={stylesPrivados.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Importe</Text></DataTable.Cell>
                                                            <DataTable.Cell style={stylesPrivados.containerCelda}><Text style={{color:'#d74c4c',fontWeight:'bold'}}>{`$${deposito.importe}`}</Text></DataTable.Cell>
                                                        </DataTable.Row>
                                                    </DataTable>
                                                </ScrollView>
                                                
                                            </View>
                                            
                                            { (deposito.estadoPago !== ESTADOPAGO.revision) && (
                                                    <View style={{alignItems:'center',marginTop:0,marginBottom:0}}>
                                                        <Button  color="#7c7bad" style={{width:300,height:40,margin:10,marginTop:0}} mode="outlined" onPress={() => imprimir()}>
                                                            Imprimir Order de Pago
                                                        </Button>
                                                    </View>
                                                )
                                            }
                                            
                                            {/* <View><Text style={{fontSize:18,fontWeight:'bold',marginBottom:10,marginLeft:10}}></Text></View> */}

                                            {(deposito.estadoPago !== ESTADOPAGO.revision) &&(
                                                    <View style={{alignItems:'center', marginBottom:50}}>
                                                        <View style={stylesPrivados.fotoPosicion}>
                                                            <Surface style={{backgroundColor:'#fff'}}>
                                                                    <TouchableOpacity
                                                                        style={styles.imagenFoto}
                                                                        onPress={() => {
                                                                            setActivarCamara();
                                                                        }}
                                                                    >
                                                                        <Image 
                                                                            style={styles.foto}
                                                                            source={{uri: foto ? foto.uri : null}}
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
                                                                <Button  color="#7c7bad" style={{width:150,height:40,margin:10,marginTop:20,marginBottom:10}} mode="outlined" onPress={() => setActivarCamara()}>
                                                                    Tomar foto
                                                                </Button>

                                                                <Button  color="#fff" style={{width:150,height:40,margin:10,marginTop:0,marginBottom:10, backgroundColor:"#d74c4c"}} mode="outlined" onPress={() => enviarFoto()}>
                                                                    Enviar
                                                                </Button>
                                                                
                                                            </SafeAreaView>
                                                        </View>
                                                        
                                                    </View>
                                                )
                                            }
                                            {
                                                (deposito.estadoPago === ESTADOPAGO.revision) &&(
                                                    <View style={{justifyContent:'center',alignItems:'center',marginBottom:40}}>
                                                        <Text style={{color:"#000",fontSize:18,marginBottom:10,fontWeight:'bold'}}>IMPORTANTE</Text>      
                                                        <Text style={stylesPrivados.texto1} >
                                                            Puede demorar unas horas la respuesta ya que la informacin y fotos estan siendo revisadas por el personal 
                                                            del tecnologico, por lo que tendra que esperar las siguientes 24hrs hasta que regresemos una  
                                                            respuesta a esta aplicacion
                                                        </Text>
                                                        <Image 
                                                            style={{width:300, height:100}}
                                                            source={require('../../../assets/cargandoBolitas.gif')}
                                                        />
                                                    </View>
                                                )
                                            }
                                        </ScrollView>
                                    </View>
                                </SafeAreaView>
                                                                
                            )  
                        }
                        {
                            (isActiveCamera) &&(
                                <Camera ref={camRef} style={styles.container} type={type}>
                                    <View style={styles.buttonContainerC}>
                                    <TouchableOpacity
                                        style={styles.buttonC}
                                            onPress={() => {
                                            setActivarCamara();
                                        }}
                                    >
                                        <Feather name="arrow-left" color="#fff" size={35} />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.buttonC}
                                        onPress={() => {
                                            tomarFoto_Salir();  
                                        }}
                                    >
                                        <Feather name="circle" color="white" size={50} />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.buttonC}
                                        onPress={() => {
                                        setType(
                                            type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                        );
                                        }}
                                    >
                                        <Feather name="refresh-cw" color="white" size={35} />
                                    </TouchableOpacity>
                                    </View>
                                </Camera>
                            )
                        }
                    </>
                )
            }
            {
                (deposito) && (deposito.estadoPago !== ESTADOPAGO.revision &&
                            deposito.estadoPago !== ESTADOPAGO.aceptado &&
                                     deposito.estadoPago === ESTADOPAGO.finalizado) && (
                    <FinalizadoScreen deposito={deposito}/>
                )
            }
            {
                (deposito) && (deposito.estadoPago !== ESTADOPAGO.revision &&
                            deposito.estadoPago !== ESTADOPAGO.aceptado &&
                                     deposito.estadoPago === ESTADOPAGO.rechazado) && (
                    <ErrorScreen deposito={deposito}/>
                )
            }
        </>  
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