import React, { useState, useEffect, useRef } from "react";
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import {Divider,Surface,Portal,Dialog,Paragraph,DataTable,Avatar,Title,Caption,} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





const ComprobarPago = (props) => {
    
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => { 
        setVisible(false);
        props.terminarProceso();
    };

    useEffect(() => {

    }, []);


    return (
        <View style={{ marginTop: 20, alignItems: "flex-start" }}>
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



            <View style={{flex:0.8}}>
                <ScrollView style={{backgroundColor:'#fff'}}>                
                    <View style={{flexDirection: 'row', backgroundColor:'#fff'}}>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>FICHA DE DEPOSITO</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>05/05/1996</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre de alumno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>Jesus Alejandro Aguilera Magana</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Referencia Bancaria</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>A15020357F210193830649279</DataTable.Cell>
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
                                    <DataTable.Cell style={styles.containerCeldaEspecial}>  Ficha de pago </DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda2}>1</DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda2}>920.00</DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda2}>920.00</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                            <Divider/>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>

            <View style={{alignItems: "center"}}>
                <Text style={{fontSize: 18,color: "#05375a",marginBottom: 10,marginTop: 10,fontWeight:'bold'}}>
                    Pago de ficha
                </Text>
                <View style={styles.containerFoto}>
                    <Surface>
                        <TouchableOpacity style={styles.imagenFoto} onPress={() => { }}>
                            <Image style={styles.foto} source={{ uri:props.comprobantePagoFoto ? props.comprobantePagoFoto.uri : null }} />
                        </TouchableOpacity>
                    </Surface>
                    <View style={{}}>
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
                        <TouchableOpacity style={styles.button} onPress={() => {props.cambiarACamara(5, false)}}>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={styles.textC}>Tomar foto</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles2.button}>
                    <TouchableOpacity
                    style={styles2.signIn}
                    onPress={() => {showDialog();}}>
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
                        -_-   Enviar Registro   -_-
                    </Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                <View style={styles2.textPrivate}>
                    <Text style={styles2.color_textPrivate}>
                        El proceso de inscripciones es seguro, para mas informaicon en:
                    </Text>
                    <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                        {" "}
                        www.itsa.edu.mx
                    </Text>
                    <Text style={styles2.color_textPrivate}> o llamar al teléfono</Text>
                    <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                        {" "}
                        453-534-8300{" "}
                    </Text>
                </View>
            </View>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>! Has completado el registro ¡</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>
                            Revisa tú correo, dentro de las siguiente 24 horas te
                            enviaremos una cuenta institucional para que puedas iniciar
                            sesión.
                        </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button mode="text" color="#2096BA" onPress={hideDialog} title='Aceptar'></Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

export default ComprobarPago;


const styles = StyleSheet.create({
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
});

const styles2 = StyleSheet.create({
    button: {
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
