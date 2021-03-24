import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DatosGeneralesScreen = ({navigation}) => {

    const [Alumno, setAlumno] = React.useState({
        direccion:"CALLE ALLENDE",
        numero:"#97",
        colonia:"CENTRO",
        poblacion:"AGUILILLA MICH",
        cp:"60570",
        municipio:"AGUILILLA",
        estado:"MICHOACAN",
        telefono1:"4531318005",
        telefono2:"4531698588",
        email:"al15020357@itsa.edu.mx",
        emailPersonal:"panchodelta1000@gmail.com",
        fechaAlta:"19/11/2015 12:23:38"

    });
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Datos del Alumno</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Dirección</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.direccion}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Numero</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.numero}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Colonia</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.colonia}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Poblacion</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.poblacion}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Codigo postal</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.cp}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Municipio</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.municipio}</DataTable.Cell>
                            </DataTable.Row>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Estado</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.estado}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Telefono1</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.telefono1}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Telefono2</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.telefono2}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Email</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.email}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Email personal</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.emailPersonal}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha de Alta</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.fechaAlta}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DatosGeneralesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    containerCeldaTitulo:{
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