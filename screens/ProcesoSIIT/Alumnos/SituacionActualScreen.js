import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as crudToken from '../../../database/crudToken';

const SituacionActualScreen = ({navigation}) => {

    const [alumno, setAlumno] = useState([]);
    
    useEffect(() => {
        (async () => {
            const data = await crudToken.ObtenerInfoPersonalInscripcion();
            setAlumno(data[0].situacionActual);
        })()
    }, []);

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
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Semestre</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.semestre}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Grupo</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.grupo}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Carga Maxima</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.cargaMaxima}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Creditos aprobados</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.creditosAprobados}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Promedio con reprobadas</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.promedioConReprobadas}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Motivo de Baja</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{(alumno.motivoBaja) ? alumno.motivoBaja : "Aún sin baja"}</DataTable.Cell>
                            </DataTable.Row>

                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Turno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.turno}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Carga Minima</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.cargaMinima}</DataTable.Cell>
                            </DataTable.Row>
                            
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Periodos Maximos</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.periodosMaximos}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Promedio sin reprobadas</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.promedioSinReprobadas}</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Inscrito</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.inscrito === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha de baja definitiva</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{(alumno.fechaBajaDefinitiva) ? alumno.fechaBajaDefinitiva : "Aún no"}</DataTable.Cell>
                            </DataTable.Row>

                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SituacionActualScreen;

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