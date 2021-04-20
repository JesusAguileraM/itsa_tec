import React,{useState, useEffect} from 'react';
    import {View, SafeAreaView, StyleSheet,ScrollView,TouchableOpacity,Alert,FlatList,StatusBar} from 'react-native';
    import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton } from 'react-native-paper';
    import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
    
    const CargasScreen = ({navigation}) => {

        const [selectedId, setSelectedId] = useState(null);


        const lista=[
            {   id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
                alumno:"15020357",
                periodo:"20161-ENEJUL",
                carrera:"ING. SIST. COM. -24",
                planEstudio:"ISIC2010224-W",
                turno:"Matutino",
                grupo:"A",
                tipoAlumno:"Regular",
                semestre:1,
                creditos:28,
                estado:'Cerrada'
            },
            {   id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
                alumno:"15020357",
                periodo:"20161-ENEJUL",
                carrera:"ING. SIST. COM. -24",
                planEstudio:"ISIC2010224-W",
                turno:"Matutino",
                grupo:"A",
                tipoAlumno:"Regular",
                semestre:1,
                creditos:28,
                estado:'Cerrada'
            },
            {   id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
                alumno:"15020357",
                periodo:"20161-ENEJUL",
                carrera:"ING. SIST. COM. -24",
                planEstudio:"ISIC2010224-W",
                turno:"Matutino",
                grupo:"A",
                tipoAlumno:"Regular",
                semestre:1,
                creditos:28,
                estado:'Cerrada'
            },
            {   id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                alumno:"15020357",
                periodo:"20161-ENEJUL",
                carrera:"ING. SIST. COM. -24",
                planEstudio:"ISIC2010224-W",
                turno:"Matutino",
                grupo:"A",
                tipoAlumno:"Regular",
                semestre:1,
                creditos:28,
                estado:'Cerrada'
            },

            
        ];

        const funcionDescargarArchivo =async(id)=>{
            await setSelectedId(id)
            await navigation.navigate('VisualizarScreen',{no_carga:id});
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
                    <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.alumno}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.periodo}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.carrera}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.planEstudio}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.turno}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.grupo}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.tipoAlumno}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.semestre}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.creditos}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.estado}</Text></DataTable.Cell>
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
                <Text style={{fontSize:20,margin:10,fontWeight:'bold'}}>Cargas Académicas</Text>
                <ScrollView>                
                    <View style={{flexDirection: 'row',marginTop:10}}>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                            <DataTable>

                                <DataTable.Header style={{backgroundColor:'#e6e6e6'}}>
                                    <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Alumno</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Periodo</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Carrera</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Plan de estudio</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Turno</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Grupo</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Tipo Alum.</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Sem.</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Créditos</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Estado</Text></DataTable.Title>
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
    
  export default CargasScreen;
  
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            backgroundColor: '#fff',
        },
        containerCeldaTitulo:{
            marginRight:20,
            justifyContent:'flex-start',
            width:80,
            backgroundColor:'#e6e6e6'
        },
        containerCeldaTitulo2:{
            marginRight:20,
            justifyContent:'flex-start',
            width:80,
            backgroundColor:'#e6e6e6'
        },
        containerCelda:{
            marginRight:20,
            justifyContent:'flex-start',
            width:80,
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


