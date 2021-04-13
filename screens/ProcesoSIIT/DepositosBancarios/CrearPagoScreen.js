import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,Alert} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';
import * as api from '../../../auth/request';
import Splash from '../../../components/Splash';

const CrearPagoScreen = ({navigation}) => {
    const uri_foto = 'https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png';
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
    });
    const [dataTipoPagos, setDataTipoPagos] = useState([]);
    const [listaTipoPago, setListaTipoPago] =useState([]);
    const [listaConcepto, setListaConcepto] =useState([]);
    const [tipoPago,setTipoPago]=useState(null);
    const [concepto,setConcepto]=useState(null);
    const [cantidad,setCantidad]=useState("0");
    const [costo,setCosto]=useState("0.00");
    const [importe,setImporte]=useState("0.00");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async() => {
            const tipoPagos = await api.getTipoPagos();
            let tp = Object.entries(tipoPagos.data.data[0]);
            setDataTipoPagos(tp);
            const tiposPagos = tp.map((lista)=> lista[0]);
            setListaTipoPago(tiposPagos);
        })();
    }, []);

    const getConceptos = (tipoPago) => {
        const conceptos = dataTipoPagos.find(lista => lista[0] === tipoPago);
        setListaConcepto(conceptos[1]);
    }

    const getPrecio = (concepto) => {
        const ficha = listaConcepto.find(c => c.ficha === concepto);
        setCosto(ficha.costo);
        setCantidad("1");
        let importe = (parseInt(ficha.costo) * 1).toString();
        setImporte(importe);
    }

    const descartar=()=>{
        navigation.goBack();
    }

    const generarReferencia= async()=>{
        if(tipoPago != null && concepto!= null){
            // crear el pago bancario
            const obj = {
                tipoPago: tipoPago,
                concepto: concepto,
                cantidad: cantidad, 
                costo: costo,
                importe: importe,
                convenioCIE: "001770500",
                observaciones: "No aplica",
                estadoPago: "En proceso",
            };
            try {
                setLoading(true);
                await api.postDepositoBancarioAlumno(obj);
                setLoading(false);
                navigation.goBack();
            }
            catch(error){
                console.error(error.message);
                alert("Falló al crear el depósito");
            }
        }else{
            Alert.alert(
                "Falta un campo...",
                "Selecciona todos los campos correspondientes para generar la referencia",
                [
                    {
                        text: "Aceptar", 
                    },
                ],
                );
            }
    }
        
    if(loading){
        return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Splash/>
        </View>
        );
    }
        
    return (
        <SafeAreaView style={styles.container}>
            
            <ScrollView>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 18}}>
                        <Avatar.Image 
                            source={{
                                uri:uri_foto,
                            }}
                            size={130}
                        />
                    
                        <View style={{marginLeft: 50,marginTop:25}}>
                            <Title style={styles.titulo}>Numero de Control:</Title>
                            <Title style={styles.titulo}>{Alumno.NumeroControl}</Title>
                        </View>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row'}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>

                            
                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCelda}>
                                    <View style={{backgroundColor:'#fff',width:150,justifyContent:'center'}}>
                                    <RNPickerSelect
                                            onValueChange={(value) => {
                                                setTipoPago(value);
                                                if(value)
                                                    getConceptos(value);
                                            }}
                                            items={
                                                listaTipoPago.map((tipoPago) => {
                                                    return (
                                                        { label: tipoPago, value: tipoPago }
                                                    );
                                                })
                                            }
                                        >
                                            <Text style={{fontWeight:'bold',fontSize:16}}>Tipo de pago</Text>
                                        </RNPickerSelect>
                                    </View>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontSize:14}}>{tipoPago}</Text></DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCelda}>
                                    <View style={{backgroundColor:'#fff',width:150,justifyContent:'center'}}>
                                    <RNPickerSelect
                                            onValueChange={(value) =>{ 
                                                setConcepto(value);
                                                if(value)
                                                    getPrecio(value);
                                            }}
                                            items={
                                                listaConcepto.map((concepto) => {
                                                    return (
                                                        { label: concepto.ficha, value: concepto.ficha }
                                                    );
                                                })
                                            }
                                        >
                                            <Text style={{fontWeight:'bold',fontSize:16}}>Concepto</Text>
                                        </RNPickerSelect>
                                    </View>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontSize:14}}>{concepto}</Text></DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:16}}>Cantidad</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={styles.cantidad}>{`${cantidad}`}</Text></DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:16}}>Costo</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text>{`$ ${costo}`}</Text></DataTable.Cell>
                            </DataTable.Row>

                            <Divider></Divider>
                            <Divider></Divider>
                            <Divider></Divider>
                            <Divider></Divider>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:16}}>Importe</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={styles.negrita}>{`$ ${importe}`}</Text></DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                        

                        
                    </ScrollView>
                </View>
                <View style={{alignItems:'center', marginTop: 60}}>
                            <Button color="#d74c4c" style={{width:250,height:40,margin:10,marginBottom:0}}   mode="contained" onPress={() => generarReferencia()} >
                                Generar Referencia
                            </Button>
                            <Text style={{marginLeft:5}}>o</Text>
                            <Button  color="#7c7bad" style={{width:250,height:40,margin:10,marginTop:0}} mode="outlined" onPress={() => descartar()}>
                                Descartar
                            </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CrearPagoScreen;

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
        width:150,
        borderRightColor:'gray',
        alignItems:'center'
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
    },
    userInfoSection: {
        paddingHorizontal: 10,
        marginBottom:30
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    cantidad: {
        color: "red",
    },
    negrita: {
        fontWeight: 'bold',
    }
});