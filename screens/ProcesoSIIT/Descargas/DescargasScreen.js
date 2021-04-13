import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,TouchableOpacity,Linking,FlatList,StatusBar} from 'react-native';
import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as api from '../../../auth/request';
import * as Permissions from 'expo-permissions';
import * as config from '../../../auth/config';

const DescargasScreen = ({navigation}) => {

    const [selectedId, setSelectedId] = useState(null);
    const [listaDocumentos, setListaDocumentos] = useState([]);

    useEffect(() => {
        (async() => {
            try{
                const data = await api.getUserDescargas();
                if(!data){
                    setListaDocumentos([]);
                    return;
                }
                    
                const desc = data.data.data.map((doc) => {
                    return {
                        id: doc._id,
                        nombre: doc.nombre,
                        descripcion: doc.descripcion,
                        fileName: doc.archivo.filename, //este se usa para buscar en el servidor el archivo
                        originalName: doc.archivo.originalname,
                    }
                });
                setListaDocumentos(desc);
            }
            catch(e){
                console.log(e);
            }
        })();
    }, []);

    const funcionDescargarArchivo = async (id)=>{
        const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (perm.status != 'granted') {
            return;
        }
        setSelectedId(id)
        let doc = listaDocumentos.find((file) => file.id === id);
        await openURLButton(`${config.ARCHIVOS}/${doc.fileName}`);
        // let archivo = await api.getArchivos(doc.fileName);

        
        // Alert.alert(
        //     "Archivo descargando...",
        //     "Es archivo es un pdf",
        //     [
        //         {
        //             text: "Aceptar",
                    
        //         },
        //     ],
        // );
    }

    const openURLButton = async ( url ) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            alert(`No se puede abrir esta URL: ${url}`);
        }
    };

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
    
        <TouchableOpacity onPress={onPress}>
            <DataTable.Row style={[backgroundColor]}>
                <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.nombre}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.descripcion}</Text></DataTable.Cell>
                <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text style={{color:'#7c7bad'}}>{item.originalName}</Text></DataTable.Cell>
            </DataTable.Row>   
        </TouchableOpacity>
    );


    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#eee" : "#fff";
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
            <Item
                item={item}
                onPress={() => funcionDescargarArchivo(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize:20,margin:10,fontWeight:'bold'}}>Descarga de documentos</Text>
            <ScrollView>                
                <View style={{flexDirection: 'row',marginTop:10}}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} >
                        <DataTable>

                            <DataTable.Header>
                                <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Nombre</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Descripcíon del archivo</Text></DataTable.Title>
                                <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Archivo en Binario</Text></DataTable.Title>
                            </DataTable.Header>

                            <FlatList
                                data={listaDocumentos}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                extraData={selectedId}
                            />
                        </DataTable>
                    </ScrollView>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

export default DescargasScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    containerCeldaTitulo:{
        marginRight:20,
        justifyContent:'flex-start',
        width:250,
    },
    containerCeldaTitulo2:{
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
