import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as crudToken from '../../../database/crudToken';

const DatosGeneralesScreen = ({navigation}) => {
    const [alumno, setAlumno] = useState([]);
    
    useEffect(() => {
        (async () => {
            const data = await crudToken.ObtenerInfoPersonalInscripcion();
            setAlumno(data[0].datosGenerales);
        })()
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Datos del Alumno</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Dirección</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.direccion}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Numero</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.numero}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Colonia</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.colonia}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Poblacion</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.poblacion}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Codigo postal</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.cp}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Municipio</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.municipio}</DataTable.Cell>
                            </DataTable.Row>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Estado</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.estado}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Telefono1</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.telefono1}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Telefono2</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.telefono2}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Email</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.email}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Email personal</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.emailPersonal}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha de Alta</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.fechaAlta}</DataTable.Cell>
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