import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,Alert} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';

const CrearPagoScreen = ({navigation}) => {

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
    const descartar=()=>{
        setTipoPago(null);
        setConcepto(null);
        setCantidad(null);
        setCosto(0.00)
        setImporte(0.00)
        navigation.navigate('Depositos');
    }

    const generarReferencia=()=>{

        if(tipoPago != null && concepto!= null && cantidad != null){
            setTipoPago(null);
            setConcepto(null);
            setCantidad(null);
            setCosto(0.00);
            setImporte(0.00);
            navigation.navigate('VisualizarPagoScreen');
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
    const [tipoPago,setTipoPago]=useState(null)
    const [concepto,setConcepto]=useState(null)
    const [cantidad,setCantidad]=useState(null)
    const [costo,setCosto]=useState(0.00)
    const [importe,setImporte]=useState(0.00)

    
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
                                            onValueChange={(value) => setTipoPago(value)}
                                            items={[
                                                { label: 'Fichas', value: 'Fichas' },
                                                { label: 'Inscripciones', value: 'Inscripciones' },
                                                { label: 'Re-inscripciones', value: 'Re-inscripciones' },
                                            ]}
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
                                            onValueChange={(value) => setConcepto(value)}
                                            items={[
                                                { label: 'Aportacion', value: 'Aportacion' },
                                                { label: 'Evaluacion', value: 'Evaluacion' },
                                                { label: 'Cambio Grupo', value: 'Cambio Grupo' },
                                            ]}
                                        >
                                            <Text style={{fontWeight:'bold',fontSize:16}}>Concepto</Text>
                                        </RNPickerSelect>
                                    </View>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontSize:14}}>{concepto}</Text></DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCelda}>
                                    <View style={{backgroundColor:'#fff',width:150,justifyContent:'center'}}>
                                    <RNPickerSelect
                                            onValueChange={(value) => setCantidad(value)}
                                            items={[
                                                { label: '1', value: 1 },
                                                { label: '2', value: 2 },
                                                { label: '3', value: 3 },
                                            ]}
                                        >
                                            <Text style={{fontWeight:'bold',fontSize:16}}>Cantidad</Text>
                                        </RNPickerSelect>
                                    </View>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontSize:14}}>{cantidad}</Text></DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:16}}>Costo</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}>{`$ ${costo}`}</DataTable.Cell>
                            </DataTable.Row>

                            <Divider></Divider>
                            <Divider></Divider>
                            <Divider></Divider>
                            <Divider></Divider>

                            <DataTable.Row >
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:16}}>Importe</Text></DataTable.Cell>
                                <DataTable.Cell style={styles.containerCeldaTitulo}><Text>{`$ ${importe}`}</Text></DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                        

                        
                    </ScrollView>
                </View>
                <View style={{alignItems:'center'}}>
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
});