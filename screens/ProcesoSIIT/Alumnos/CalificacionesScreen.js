
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
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                        <DataTable>
                            <DataTable.Header style={{backgroundColor:'#e6e6e6'}}>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Periodo</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Clave Mat</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Desc.Materia</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unidades</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Estado</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid I</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid II</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid III</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid IV</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid V</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid VI</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid VII</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid VIII</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid IX</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Unid X</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Prom.</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Opc.</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Aprob.</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:12}}>Tipo Curso</Text></DataTable.Title>

                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.periodo}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.claveMat}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.descMat}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidades}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.estado}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad1}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad2}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad3}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad4}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad5}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad6}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad7}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad8}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad9}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.unidad10}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.prom}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.opc}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.aprob}</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{Alumno.tipoCurso}</Text></DataTable.Cell>
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
        height:50,
        backgroundColor:'#e6e6e6',
        
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