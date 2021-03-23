import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AlumnoScreen = ({navigation}) => {

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
                        <Title style={styles.titulo}>Numero de Control:</Title>
                        <Title style={styles.titulo}>{Alumno.NumeroControl}</Title>
                        <Caption>Referencia a ficha</Caption>
                    </View>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Datos Alumno</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Nombre</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.nombre}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Apellido Paterno</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.ApellidoP}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Apellido Materno</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.ApellidoM}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Tipo de Alta</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.TipoAlta}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Estado del Alumno</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.EstadoAlumno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Carrera</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.Carrera}</DataTable.Cell>
                            </DataTable.Row>
                            <Divider/>
                            <Divider/>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Fecha de Nacimiento</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.Fecha_nacimiento}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Curp</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.Curp}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Sexo</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.sexo}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Año de Ingreso</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.AnoIngreso}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Tipo de Alumno</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.TipoAlumno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}>Plan de estudios</DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{Alumno.PlanEstudios}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AlumnoScreen;

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