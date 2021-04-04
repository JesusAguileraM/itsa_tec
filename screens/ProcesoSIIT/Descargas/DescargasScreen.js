    import React,{useState, useEffect} from 'react';
    import {View, SafeAreaView, StyleSheet,ScrollView,TouchableOpacity,Alert,FlatList,StatusBar} from 'react-native';
    import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
    import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
    
    const DescargasScreen = ({navigation}) => {

        const [selectedId, setSelectedId] = useState(null);


        const lista=[
            {   id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                nombreArchivo:"Manual SIIT del alumno",
                descripcion:"Archivo PDF del manual del SIIT para el alumno",
                nombreDocumentoPdf:"Descargar SIIT_MANUAL_ALU_REV1.PDF"
            },
            {   id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                nombreArchivo:"Manual SIIT del alumno",
                descripcion:"Archivo PDF del manual del SIIT para el alumno",
                nombreDocumentoPdf:"Descargar SIIT_MANUAL_ALU_REV1.PDF"
            },
            {   id: "58694a0f-3da1-471f-bd96-145571e29d72",
                nombreArchivo:"Manual SIIT del alumno",
                descripcion:"Archivo PDF del manual del SIIT para el alumno",
                nombreDocumentoPdf:"Descargar SIIT_MANUAL_ALU_REV1.PDF"
            },
            {   id: "58694a0f-3da1-471f-bd96-145571e29d12",
                nombreArchivo:"4",
                descripcion:"Archivo 4",
                nombreDocumentoPdf:"Descargar SIIT_MANUAL_ALU_REV1.PDF"
            },
            
        ];

        const funcionDescargarArchivo =(id)=>{
            setSelectedId(id)
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
    
        const Item = ({ item, onPress, backgroundColor, textColor }) => (
        
            <TouchableOpacity onPress={onPress}>
                <DataTable.Row style={[backgroundColor]}>
                    <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.nombreArchivo}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.descripcion}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text style={{color:'#7c7bad'}}>{item.nombreDocumentoPdf}</Text></DataTable.Cell>
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
                                    data={lista}
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
