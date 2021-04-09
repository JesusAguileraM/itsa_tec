import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,Alert,Image} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VisualizarPagoScreen = ({navigation}) => {

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
    return (
        <SafeAreaView style={styles.container}>
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
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Folio</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>0001</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Usuario</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>Jesus Alejandro Aguilera M</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={[styles.containerCeldaTitulo,{backgroundColor:"#fff"}]}>
                                    <View style={{alignSelf:'center',width:50,height:30,justifyContent:'center',marginLeft:10}}><Text style={{fontWeight:'bold',color:"#000"}}>Banco </Text></View>
                                    <View><Image style={{width:50,height:30,resizeMode:'contain'}}source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/1280px-BBVA_2019.svg.png" }} /></View>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text  style={{color:'#004481',fontWeight:'bold'}}>BBVA Bancomer</Text></DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Periodo</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>20203-JULDIC</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>08/05/2020</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha de caducidad</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>09/05/2020</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Referencia bancaria</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{color:'#d74c4c',fontWeight:'bold'}}>15020357202005081997</Text></DataTable.Cell>
                            </DataTable.Row>
                        
                        </DataTable>

                    </ScrollView>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                    <DataTable style={{marginLeft:0}}>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Tipo de pago</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>PAGO DE RE-INSCRIPCION</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Concepto</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>APORTACIÓN PARA EL FORTALECIMIENTO INSTITUCIONAL REINGRESO</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Cantidad</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>1</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Costo</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{`$ 920`}</DataTable.Cell>
                            </DataTable.Row>
                            <Divider></Divider>
                            <Divider></Divider>
                            <Divider></Divider>
                            <Divider></Divider>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Importe</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{color:'#d74c4c',fontWeight:'bold'}}>{`$ 920`}</Text></DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </ScrollView>
                </View>
                <View style={{alignItems:'center',marginTop:10}}>
                            <Button  color="#7c7bad" style={{width:300,height:40,margin:10,marginTop:0}} mode="outlined" onPress={() => imprimir()}>
                                Imprimir
                            </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default VisualizarPagoScreen;

const styles = StyleSheet.create({
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
});