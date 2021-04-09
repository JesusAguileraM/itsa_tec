import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as crudToken from '../../../database/crudToken';


const AlumnoScreen = ({navigation}) => {

    const [alumno, setAlumno] = useState([]);
    const [photo, setPhoto] = useState("https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png");

    useEffect(() => {
        (async () => {
            const data = await crudToken.ObtenerInfoPersonalInscripcion();
            const profile = await crudToken.useObtenerSesion();
            setAlumno(data[0].datosAlumno);
            setPhoto(profile.picture);
        })()
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            
            <ScrollView>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 18}}>
                    <Avatar.Image 
                        source={{
                            uri: photo
                        }}
                        size={130}
                    />
                
                    <View style={{marginLeft: 50,marginTop:25}}>
                        <Title style={styles.titulo}>Numero de Control:</Title>
                        <Title style={styles.titulo}>{alumno.matricula}</Title>
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
                                <DataTable.Cell style={styles.containerCelda}>{alumno.nombre}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Apellido Paterno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.apellidoPaterno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Apellido Materno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.apellidoMaterno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Tipo de Alta</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.tipoAlta}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Estado del Alumno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.estadoAlumno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Carrera</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.carrera}</DataTable.Cell>
                            </DataTable.Row>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <Divider/>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Fecha de Nacimiento</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.fechaNacimiento}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Curp</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.curp}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Sexo</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.sexo}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Año de Ingreso</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.anioIngreso}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Tipo de Alumno</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.tipoAlumno}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Plan de estudios</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCelda}>{alumno.planEstudios}</DataTable.Cell>
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