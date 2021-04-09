import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as crudToken from '../../../database/crudToken';

const ExpedientesScreen = ({navigation}) => {

    //el state lo debemos comenzar con el siguiente objeto ya que necesitamos un estado inicial vacío para que no nos lance una excepción de null
    const [alumno, setAlumno] = useState({
        residencias: {  
            expediente: "",
            liberado: false,
        },        
        acta: {  
            expediente: "",
            liberado: false,
        },        
        certificado: {  
            expediente: "",
            liberado: false,
        },        
        curp: {  
            expediente: "",
            liberado: false,
        },        
        ingles: {  
            expediente: "",
            liberado: false,
        },        
        constanciaNoAdeudo: {  
            expediente: "",
            liberado: false,
        },        
        fotografias: {  
            expediente: "",
            liberado: false,
        },        
        servicioSocial: {  
            expediente: "",
            liberado: false,
        },        
        pagoTitulacion: {  
            expediente: "",
            liberado: false,
        },        
        ine: {  
            expediente: "",
            liberado: false,
        },        
        vigenciaDerecho: {  
            expediente: "",
            liberado: false,
        },  
    });
    
    useEffect(() => {
        (async () => {
            const data = await crudToken.ObtenerInfoPersonalInscripcion();
            setAlumno(data[0].expedientes);
        })()
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                        <DataTable>
                            <DataTable.Header style={{backgroundColor:'#e6e6e6'}}>
                                <DataTable.Title style={{backgroundColor:'#e6e6e6'}}><Text style={{color:'#000'}}>Expediente del Alumno</Text> </DataTable.Title>
                                <DataTable.Title style={{backgroundColor:'#e6e6e6'}}><Text style={{color:'#000'}}>Liberado</Text>  </DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.residencias.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.residencias.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.acta.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.acta.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.certificado.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.certificado.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.curp.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.curp.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.ingles.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.ingles.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.constanciaNoAdeudo.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.constanciaNoAdeudo.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.fotografias.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.fotografias.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.servicioSocial.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.servicioSocial.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.pagoTitulacion.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.pagoTitulacion.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.ine.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.ine.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>{`${alumno.vigenciaDerecho.expediente}`}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ alumno.vigenciaDerecho.liberado === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ExpedientesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    containerCeldaTitulo:{
        marginRight:20,
        justifyContent:'flex-start',
        width:300,
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