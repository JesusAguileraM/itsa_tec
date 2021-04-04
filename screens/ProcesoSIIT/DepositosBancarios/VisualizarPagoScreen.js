import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VisualizarPagoScreen = ({navigation}) => {

    const [Alumno, setAlumno] = React.useState({
        NumeroControl:"15020357",
        nombre: "JESUS ALEJANDRO",
        ApellidoPaterno: "AGUILERA",
        apellidoMaterno: "MAGAÑA",
        TipoAlta:"Nuevo Ingreso",
        EstadoAlumno:"Vigente",
        Carrera:"ING.SIST",
        fechaNacimiento:"05/05/1996",
        curp: "AUMJ960505HMNGGS03",
        sexo:"Masculino",
        AnoIngreso:"0",
        TipoAlumno:"Regular",
        PlanEstudios:"ISIC2010224-W",
        uri_foto:'https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png',
    });
    return (
        <SafeAreaView style={styles.container}>
            
            <ScrollView>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 18}}>
                    <Avatar.Image 
                        source={{
                            uri:Alumno.uri_foto,
                        }}
                        size={130}
                    />
                
                    <View style={{marginLeft: 50,marginTop:25}}>
                        <Title style={styles.titulo}>Numero de Control amka:</Title>
                        <Title style={styles.titulo}>{Alumno.NumeroControl}</Title>
                        <Caption>Referencia a ficha</Caption>
                    </View>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Datos del Alumno</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.nombre}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Apellido Paterno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.ApellidoPaterno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Apellido Materno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.apellidoMaterno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Tipo de Alta</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.TipoAlta}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Estado del Alumno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.EstadoAlumno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Carrera</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.Carrera}</DataTable.Cell>
                            </DataTable.Row>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha de Nacimiento</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.fechaNacimiento}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Curp</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.curp}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Sexo</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.sexo}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Año de Ingreso</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.AnoIngreso}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Tipo de Alumno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.TipoAlumno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Plan de estudios</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.PlanEstudios}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default VisualizarPagoScreen;

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