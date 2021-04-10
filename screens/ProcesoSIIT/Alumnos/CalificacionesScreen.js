
import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as api from '../../../auth/request';

const Materia = (props) => {
    return(
        <DataTable.Row >
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.periodo}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.claveMateria}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.materia}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidades}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.estado}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad1}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad2}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad3}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad4}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad5}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad6}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad7}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad8}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad9}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.unidad10}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.promedio}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.opc}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.aprobadas}</Text></DataTable.Cell>
            <DataTable.Cell style={styles.containerCelda}><Text style={{fontSize:12}}>{props.mat.tipoCurso}</Text></DataTable.Cell>
        </DataTable.Row>
    );
}

const CalificacionesScreen = ({navigation}) => {

    const [materia, setMateria] = useState([]);
    useEffect(() => {
        (async() => {
            const calif = await api.getCalificaciones();
            setMateria(calif.data.data);
        })();
    }, []);
    
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
                            {
                                materia.length > 0 
                                ? 
                                    materia.map((mat, index) => {
                                        return (
                                            <Materia key={index} mat={mat}/>
                                        )
                                    })
                                :
                                    null
                            }
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