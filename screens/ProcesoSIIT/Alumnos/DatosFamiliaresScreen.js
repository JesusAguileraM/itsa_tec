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
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Codigo Postal</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.cp}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Ciudad del Tutor</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.ciudadTutor}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Municipio del Tutor</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.municipioTutor}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Estado del Tutor</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.estadoTutor}</DataTable.Cell>
                            </DataTable.Row>

                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre del Padre</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.nombrePadre}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>El Padre Vive</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.padreVivo === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Telefono del Padre</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.telefonoPadre}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre de la Madre</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.nombreMadre}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>La Madre Vive</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.madreVivo === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Telefono de la madre</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.telefonoMadre}</DataTable.Cell>
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