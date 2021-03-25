import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,TouchableOpacity,Alert} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DepositosScreen = ({navigation}) => {

    const funcionDescargarArchivo =()=>{
        Alert.alert(
            "Archivo descargando...",
            "Es archivo es un pdf",
            [
                {
                    text: "Aceptar",
                    
                },
            ],
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>                
                <View style={{flexDirection: 'row',marginTop:10}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>

                            <DataTable.Header>
                                <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Nombre</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Descripcíon del archivo</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Archivo en Binario</Text></DataTable.Title>
                            </DataTable.Header>

                            <TouchableOpacity onPress={funcionDescargarArchivo}>
                                <DataTable.Row>
                                    <DataTable.Cell style={styles.containerCeldaTitulo2}><Text>Manual SIIT del alumno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text>Archivo PDF del manual del SIIT para el alumno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text>Descargar "SIIT_MANUAL_ALU_REV1.pdf" -1694 kB-)</Text></DataTable.Cell>
                                </DataTable.Row>   
                            </TouchableOpacity>

                            <TouchableOpacity onPress={funcionDescargarArchivo}>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo2}><Text>Contrato con el alumno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text>Contrato que el alumno deberá firmar antes de ingresar al ITSA</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text>Descargar "CONTRATO_CON_ALUMNO.pdf" -104 kB-</Text></DataTable.Cell>
                                </DataTable.Row>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={funcionDescargarArchivo}>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo2}><Text>Manual SIIT del alumno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text>Archivo en formato pdf, que contiene las instrucciones básicas de acceso y manejo de la información del alumno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text></Text></DataTable.Cell>
                                </DataTable.Row>
                            </TouchableOpacity>
                                
                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DepositosScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    containerCeldaTitulo:{
        marginRight:20,
        justifyContent:'flex-start',
        width:250,
    },
    containerCeldaTitulo2:{
        marginRight:20,
        justifyContent:'flex-start',
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