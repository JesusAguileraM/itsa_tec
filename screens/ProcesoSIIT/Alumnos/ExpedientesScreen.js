import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ExpedientesScreen = ({navigation}) => {

      const [Alumno, setAlumno] = React.useState({
        residenciaLiberada:false,
        actaNacimiento:true,
        certificadoBachiller:true,
        copiaCurp:true,
        acreditacionIngles:false,
        constanciNoAdeudo:false,
        fotografias:false,
        servicioSocial:false,
        recibo:false,
        copiaIne:true,
        vigenciaDerecho:false,
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Expediente del Alumno</DataTable.Title>
                                <DataTable.Title>Liberado</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>RESIDENCIA LIBERADA</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.residenciaLiberada === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>ACTA DE NACIMIENTO ORIGINAL</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.actaNacimiento === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>CERTIFICADO DE BACHILLERATO LEGALIZADO</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.certificadoBachiller === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>COPIA DE LA CURP</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.copiaCurp === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>ACREDITACIÓN DE INGLES</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.acreditacionIngles === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>CONSTANCIA DE NO ADEUDO</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.constanciNoAdeudo === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>FOTOGRAFIAS /2 T-DIPLOMA Y 8 T-CREDENCIAL OVALADA</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.fotografias === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>SERVICIO SOCIAL</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.servicioSocial === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>RECIBO DE PAGO DE TITULACIÓN</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.recibo === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>COPIA DEL INE</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.copiaIne === true ? 'checked' : 'unchecked' }
                                        // onPress={() => setChecked('first')}
                                      />
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>VIGENCIA DE DERECHO</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>
                                    <RadioButton
                                        value="first"
                                        status={ Alumno.vigenciaDerecho === true ? 'checked' : 'unchecked' }
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