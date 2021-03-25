import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DatosFamiliaresScreen = ({navigation}) => {

      const [Alumno, setAlumno] = React.useState({
        nombreTutor:"J.JESUS AGUILERA GARCIA",
        direccionTutor: "",
        coloniaTutor: "",
        cp: "",
        ciudadTutor:"",
        municipioTutor:"",
        estadoTutor:"",
        nombrePadre:"J. JESUS AGUILERA GARCIA",
        padreVivo: true,
        telefonoPadre:"Masculino",
        nombreMadre:"Gloria Magaña Rodriguez",
        madreVivo:true,
        telefonoMadre:"Regular",
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
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre del Tutor</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.nombreTutor}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Dirección del Tutor</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.direccionTutor}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Colonia del Tutor</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.coloniaTutor}</DataTable.Cell>
                            </DataTable.Row>
                                
                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DatosFamiliaresScreen;

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