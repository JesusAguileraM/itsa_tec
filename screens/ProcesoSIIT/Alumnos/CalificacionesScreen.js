
import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CalificacionesScreen = ({navigation}) => {

      const [Alumno, setAlumno] = React.useState({
        periodo:"20161-ENEJUL",
        claveMat: "ACF0903",
        descMat: "ÁLGEBRA LINEAL",
        unidades:5,
        estado:"Grupo Cerrado",
        unidad1:80,
        unidad2:90,
        unidad3:70,
        unidad4:80,
        unidad5:78,
        unidad6:87,
        unidad7:0,
        unidad8:0,
        unidad9:0,
        unidad10:0,
        prom:86,
        opc: "1a",
        aprob:"AC",
        tipoCurso: "RE",
       
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Periodo</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Clave Mat</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Desc.Materia</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unidades</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Estado</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid I</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid II</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid III</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid IV</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid V</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid VI</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid VII</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid VIII</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid IX</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Unid X</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Prom.</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Opc.</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Aprob.</DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}>Tipo Curso</DataTable.Title>

                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.periodo}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.claveMat}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.descMat}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidades}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.estado}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad1}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad2}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad3}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad4}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad5}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad6}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad7}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad8}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad9}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.unidad10}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.prom}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.opc}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.aprob}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontWeight:'bold',fontSize:12}}>{Alumno.tipoCurso}</Text></DataTable.Cell>
                            </DataTable.Row>

                            

                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CalificacionesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    containerCeldaTitulo:{
        marginRight:5,
        justifyContent:'flex-start',
        width:70,
        height:50
    },
    containerCelda:{
        marginRight:5,
        justifyContent:'flex-start',
        width:70,
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