import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image, FlatList, StatusBar,TextInput,Platform,} from "react-native";
import {Divider,Surface,Portal,Dialog,Paragraph,DataTable,Avatar,Title,Caption,} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CorrecionScreen from './CorrecionScreen';
import FinalizadaScreen from './FinalizadaScreen';
import RechazadaScreen from './RechazadaScreen';
import RevisionScreen from './RevisionScreen';
// import RechazadaScreen from './RechazadaScreen';
import {ESTADOINSC} from '../../auth/config';
import * as api from '../../auth/request';

const Item = (props) => (
    <View>
        <View style={{flex:0.8}}>
            <ScrollView style={{backgroundColor:'#fff'}}>                
                <View style={{flexDirection: 'row', backgroundColor:'#fff'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Depósito bancario {props.index + 1}</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{props.fecha}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre de alumno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{props.usuario}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Referencia Bancaria</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{props.referenciaBancaria}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                        <Divider/>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
        
        <View style={{flex:0.8,marginTop:10}}>
            <ScrollView style={{backgroundColor:'#fff'}}>                
                <View style={{flexDirection: 'row', backgroundColor:'#fff'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={styles.containerCeldaTitulo2}>#</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTituloEspecial}>DESCRIPCIÓN</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo2}>CANTIDAD</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo2}>COSTO</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo2}>IMPORTE</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCelda2}>1</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaEspecial}> {props.concepto} </DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda2}>{props.cantidad}</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda2}>{props.costo}</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda2}>{props.importe}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                        <Divider/>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>

        <View style={{alignItems: "flex-start"}}>
            <Text style={{fontSize: 18,color: "#05375a",marginBottom: 10,marginTop: 10,fontWeight:'bold'}}>
                Pago de ficha
            </Text>
            <View style={styles.containerFoto}>
                <Surface>
                    <TouchableOpacity style={styles.imagenFoto} onPress={() => { }}>
                        <Image style={styles.foto} 
                            source={{ 
                                uri: (props.index === 0) 
                                    ? 
                                        props.comprobantePagoFichaFoto ? 
                                        props.comprobantePagoFichaFoto.uri : null 
                                    : 
                                        props.comprobantePagoAportacionFoto ? 
                                        props.comprobantePagoAportacionFoto.uri : null
                            }}    
                        />
                    </TouchableOpacity>
                </Surface>
                <View style={{alignItems: "flex-start"}}>
                    <SafeAreaView style={{ width: Dimensions.get("window").width / 2 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            Rebibo de Pago del banco
                        </Text>
                        <Divider />
                        <Divider />
                        <Text>
                            - Asegurate que este iluminado la zona donde se tomara la foto.
                        </Text>
                        <Text>- Asegurarse sea legible.</Text>
                    </SafeAreaView>
                    <TouchableOpacity style={styles.button} onPress={() => {props.cambiarACamara((props.index+5), false)}}>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={styles.textC}>Tomar foto</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
);



const ComprobarPago = (props) => {

    const [user, setUser] = useState(null);
    const [depositos, setDepositos] = useState(null);


    useEffect(() => {
        (async() => {
            let userT = await api.getUserT();
            if(userT){
                setUser(userT)
            }
            
            const listaDepositos = await api.getDepositoBancarioAlumno();
            //Cuando lista depositos sea null debemos impedir que continue o lanzar
            //una vista indicando que la información está siendo evaluada
            // ya despues puedes agregar un controlardor de pagos exclusivo para inscripciones
            setDepositos(listaDepositos);
            })();
    }, [])
    // console.log(user)

    const finalizarProcesoInscripcion = async () => {
        await props.terminarProceso();
    }

    const renderItem = (data) => {
        return <Item 
            {...data.item} 
            {...props} 
            index={data.index}
        />
    } 

    return (
        <>
            {
                (user) && (depositos) && (user.estadoInsc === ESTADOINSC.fichaAceptada || user.estadoInsc === ESTADOINSC.depositoNoAprobado) && (
                    <SafeAreaView  >
                    <View style={styles.userInfoSection}>
                        <Image style={{width:50,height:20,resizeMode:'contain'}}source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/1280px-BBVA_2019.svg.png" }} />     
                        <View style={{alignItems:'flex-start' ,flexDirection: 'row', marginTop: 18}}>    
                            <Image style={{width:150,height:100,resizeMode:'contain'}}source={{ uri:"http://sic.gob.mx/images/62408" }} />
                            <View style={{marginLeft:0,marginTop:5}}>
                                <Title style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>FICHA DE DEPOSITO:</Title>
                                <View>
                                    <Text style={{fontSize:12,fontWeight:'bold',color:'#a12141'}}>INSTITUTO TECNOLOGICO </Text>
                                    <Text style={{fontSize:12,fontWeight:'bold',color:'#a12141'}}>SUPERIOR DE APATZINGAN</Text>
                                </View>
                                <Caption>CONVENIO CIE: 001770500</Caption>
                            </View>
                        </View>
                    </View>

                    {
                        (user.estadoInsc === ESTADOINSC.depositoNoAprobado) && (
                            <View style={{justifyContent:'center',alignItems:'center',marginBottom:0}}>
                                <Text style={{color:"#dc3545",fontSize:18,marginBottom:10,fontWeight:'bold'}}>IMPORTANTE</Text>      
                                <Text style={styles.texto1} >
                                    {`${user.observaciones}`}
                                </Text>
                                <Image 
                                    style={{width:60, height:60}}
                                    source={require('../../assets/alertaOnda.gif')}
                                />
                            </View>
                        )
                    }

                    <ScrollView horizontal={true}>
                        {
                            (depositos) && (
                                <FlatList
                                    data={depositos}
                                    renderItem={renderItem}
                                    keyExtractor={data => data._id}
                                />
                            )
                        }
                    </ScrollView>                    

                    <View >
                        {
                            (depositos) && (
                                <>
                                    <View style={styles2.button}>
                                        <TouchableOpacity
                                            style={styles2.signIn}
                                            onPress={finalizarProcesoInscripcion}>
                                            <LinearGradient
                                            colors={["#05375a", "#2096BA"]}
                                            style={styles2.signIn}
                                            >
                                            <Text
                                                style={[
                                                styles2.textSign,
                                                {
                                                    color: "#fff",
                                                },
                                                ]}
                                            >
                                                Enviar comprobantes
                                            </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles2.button}>
                                        <TouchableOpacity
                                            style={styles2.signIn}
                                            onPress={props.regresar_al_P4}
                                        >
                                            <LinearGradient
                                                colors={["#fff", "#fff"]}
                                                style={styles2.signIn}
                                            >
                                                <Text
                                                style={[
                                                    styles2.textSign,
                                                    {
                                                    color: "#05375a",
                                                    },
                                                ]}
                                                >
                                                    Regresar
                                                </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            )
                        }
                        {
                            (!depositos ) && (
                                <>
                                    <View style={{justifyContent:'center',alignItems:'center',marginBottom:40}}>
                                        <Text style={{color:"#dc3545",fontSize:18,marginBottom:10,fontWeight:'bold'}}>¡IMPORTANTE!</Text>      
                                        <Text style={styles.texto1} >
                                            Puede demorar varios días, la informacion y fotos estan siendo revisadas por el personal 
                                            del tecnológico, por lo que tendra que esperar hasta que los siguientes indicadores estén 
                                            aprobados. Una vez que sea aprobada su información tendrás que continuar con el pago de tu 
                                            ficha de inscripción y el pago de aportación para el fortalecimiento institucional.
                                        </Text>
                                    </View>  
                                    <CorrecionScreen/>
                                </>
                                
                            )
                        }
                        <View style={{width:'95%',marginLeft:10}}>
                            <View style={styles2.textPrivate}>
                                <Text style={styles2.color_textPrivate}>
                                    El proceso de inscripciones es seguro, para mas informaición consulta en:
                                </Text>
                                <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                                    {" "}
                                    www.itsa.edu.mx
                                </Text>
                                <Text style={styles2.color_textPrivate}> o llamar al teléfono</Text>
                                <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                                    {" "}
                                    +52 453-534-8300{" "}
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                </SafeAreaView>
                ) 

            }
            {
                (user) && (user.estadoInsc === ESTADOINSC.fichaNoAceptada) && (
                    <>
                        <CorrecionScreen user={user} regresar={props.regresar_al_P4}/>
                    </>
                )
            }
            {
                (user) && (user.estadoInsc === ESTADOINSC.fichaFinalizada) && (
                    <>
                        <FinalizadaScreen user={user} regresar={props.regresar_al_P4}/>
                    </>
                )
            }
            {
                (user) && (user.estadoInsc === ESTADOINSC.fichaRechazada) && (
                    <>
                        <RechazadaScreen user={user} regresar={props.regresar_al_P4}/>
                    </>
                )
            }
            {
                (user) && (user.estadoInsc === ESTADOINSC.fichaRevision) && (
                    <>
                        <RevisionScreen user={user} regresar={props.regresar_al_P4}/>
                    </>
                )
            }
        </> 
    );
};

export default ComprobarPago;


const styles = StyleSheet.create({
    texto1:{
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
        color:'#05375a',
        width: Dimensions.get("window").width -50,
    },
    imagenFoto: {
        marginTop:20,
        marginBottom: 20,
        width: Dimensions.get("window").width/4,
        height: Dimensions.get("window").height /4,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#05375a",
        borderRadius: 10,
        elevation: 8,
    },
    container: {
        flex: 1,
    },
    containerFoto:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        alignItems:'center',
        width: Dimensions.get("window").width,
        
    
    },
    foto:{
        marginTop:20,
        marginBottom: 20,
        width: Dimensions.get("window").width/4,
        height: Dimensions.get("window").height /4,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#05375a",
        borderRadius: 10,
        marginRight: 10,
    },
    button: {
        width: Dimensions.get("window").width /4,
        height: 40,
        backgroundColor: '#05375a',
        alignItems: 'center',
        justifyContent:'center',
        margin: 20,

        
    },
    textC: {
        fontSize: 14,
        color: '#fff',
    },
    containerCeldaTitulo:{
        marginRight:20,
        justifyContent:'flex-start',
        width:150,
    },
    containerCeldaTitulo2:{
        marginRight:30,
        justifyContent:'flex-start',
        width:50,
    },
    containerCeldaTituloEspecial:{
        
        justifyContent:'flex-start',
        width:250,
    },
    containerCelda:{
        marginRight:20,
        justifyContent:'flex-start',
        width:300,
        borderRightColor:'gray',
    },
    containerCelda2:{
        marginRight:30,
        justifyContent:'flex-start',
        width:50,
        borderRightColor:'gray',
    },
    containerCeldaEspecial:{
        marginRight:20,
        justifyContent:'flex-start',
        width:250,
        borderRightColor:'gray',
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
    },
    userInfoSection: {
        paddingHorizontal: 10,
        marginBottom: 25,
        alignItems:'flex-start'
        
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    texto1:{
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
        color:'#05375a',
        width: Dimensions.get("window").width -50,
    },

});

const styles2 = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "95%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft:5
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textPrivate: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    color_textPrivate: {
        color: "grey",
    },
});

