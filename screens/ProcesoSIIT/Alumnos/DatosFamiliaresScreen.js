import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as crudToken from '../../../database/crudToken';

const DatosFamiliaresScreen = ({navigation}) => {

    const [alumno, setAlumno] = useState({
        padre: {
            nombre: "",
            vive: false,
            celular: "",
        },
        madre: {
            nombre: "",
            vive: false,
            celular: "",
        },
    });
    
    useEffect(() => {
        (async () => {
            const data = await crudToken.ObtenerInfoPersonalInscripcion();
            setAlumno(data[0].datosFamiliares.padres);
        })()
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <View>
                             <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Datos de los Padres</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre del Padre</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>{alumno.padre.nombre}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Vive</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>{(alumno.padre.vive) ? "Si" : "No"}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Celular del Padre</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>{alumno.padre.celular}</DataTable.Cell>
                                </DataTable.Row>
                                    
                            </DataTable>
                            <DataTable>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre de la Madre</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>{alumno.madre.nombre}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Vive</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>{(alumno.madre.vive) ? "Si" : "No"}</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Celular de la Madre</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>{alumno.madre.celular}</DataTable.Cell>
                                </DataTable.Row>
                                    
                            </DataTable>
                        </View>
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