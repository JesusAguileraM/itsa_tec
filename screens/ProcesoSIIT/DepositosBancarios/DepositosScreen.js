import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,TouchableOpacity,Alert,FlatList,StatusBar} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as api from '../../../auth/request';
import { ESTADOPAGO } from '../../../auth/config';

const styleEstados = {
	"revisión": "#ffc107",
	"aceptado": "#007bff",
	"foto rechazada": "#17a2b8",
	"rechazado": "#dc3545",
	"finalizado": "#28a745",
	"cancelado": "#dc3545",
}

const DepositosScreen = ({navigation}) => {

    const [selectedId, setSelectedId] = useState(null);
    const [listaPagos, setListaPagos] = useState([]);

    useEffect(() => {
        (async() => {
            const listaPagos = await api.getDepositoBancarioAlumno();
            if(!listaPagos)
                return;
            let lp = listaPagos.data.data;
            setListaPagos(lp);
        })();
    }, []);

    const reloadDepositosBancarios = async () => {
        const listaPagos = await api.getDepositoBancarioAlumno();
        let lp = listaPagos.data.data;
        setListaPagos(lp);
    }

    const visualizarDeposito =({_id, estadoPago})=>{
        setSelectedId(_id)
        if(estadoPago === ESTADOPAGO.cancelado)
            return;
        const deposito = listaPagos.find((deposito) => deposito._id === _id)
        navigation.navigate('VisualizarPagoScreen', {deposito: deposito});
    }

    const cancelar = async ({ _id, estadoPago }) => {
        if(estadoPago === ESTADOPAGO.cancelado || estadoPago === ESTADOPAGO.rechazado || estadoPago === ESTADOPAGO.finalizado)
            return;
        await api.cancelarDepositoBancarioAlumno(_id);
        console.log('s')
        const listaPagos = await api.getDepositoBancarioAlumno();
        if(!listaPagos)
            return;
        let lp = listaPagos.data.data;
        setListaPagos(lp);
    }

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
    
        <TouchableOpacity onPress={onPress}>
            <DataTable.Row style={[backgroundColor]}>
                <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.folioInterno}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.periodo}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.concepto}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.referenciaBancaria}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.fecha}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.usuario}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCeldaTotal,backgroundColor]}><Text>{`S${parseFloat(item.importe).toFixed(2)}`}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerBach,backgroundColor]}><Button color={styleEstados[item.estadoPago]} mode="contained">{item.estadoPago}</Button></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCancelar,backgroundColor]}><Button color="#d74c4c" onPress={() => { cancelar(item) }}>Cancelar</Button></DataTable.Cell>
            </DataTable.Row>   
        </TouchableOpacity>
    );


    const renderItem = ({ item }) => {
        const backgroundColor = item._id === selectedId ? "#eee" : "#fff";
        const color = item._id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => visualizarDeposito(item)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize:20,margin:10,fontWeight:'bold'}}>Depositos Bancarios</Text>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Button color="#d74c4c" style={{width:100,height:40,margin:10}}   mode="contained" onPress={() => navigation.navigate('CrearPagoScreen')} >
                    Crear
                </Button>
                <Text>o</Text>
                <Button color="#7c7bad" style={{width:120,height:40,margin:10}} mode="outlined" onPress={reloadDepositosBancarios}>
                    Actualizar
                </Button>
            </View>
            <ScrollView>                
                <View style={{flexDirection: 'row',marginTop:10}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>

                            <DataTable.Header style={{backgroundColor:'#e6e6e6'}}>
                                <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Folio Interno</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Periodo</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Clasificación</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Referencia Bancaria</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Fecha</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Usuario</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTotal}><Text style={{fontWeight:'bold',fontSize:14}}>Total</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerBach}><Text style={{fontWeight:'bold',fontSize:14}}>Estado</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCancelar}><Text style={{fontWeight:'bold',fontSize:14}}>Cancelar</Text></DataTable.Title>
                            </DataTable.Header>

                            <FlatList
                                data={listaPagos}
                                renderItem={renderItem}
                                keyExtractor={(item) => item._id}
                                extraData={selectedId}
                            />
                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

export default DepositosScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    containerCeldaTitulo:{
        marginRight:20,
        justifyContent:'flex-start',
        width:130,
        backgroundColor:'#e6e6e6'
    },
    containerCeldaTitulo2:{
        marginRight:20,
        justifyContent:'flex-start',
        width:130,
        backgroundColor:'#e6e6e6'
    },
    containerCeldaTotal:{
        marginRight:20,
        justifyContent:'center',
        width:130,
        borderRightColor:'gray',
    },
    containerCelda:{
        marginRight:20,
        justifyContent:'flex-start',
        width:130,
        borderRightColor:'gray',
    },
    containerBach:{
        marginRight:0,
        justifyContent:'center',
        width:180,
        borderRightColor:'gray',
    },
    containerCancelar:{
        marginRight:0,
        justifyContent:'center',
        width:130,
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



