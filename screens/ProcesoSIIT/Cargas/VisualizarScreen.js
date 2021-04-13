import React,{useState, useEffect} from 'react';
    import {View, SafeAreaView, StyleSheet,ScrollView,TouchableOpacity,Alert,FlatList,StatusBar} from 'react-native';
    import {Avatar,Title,Caption,Text,DataTable,Divider,RadioButton,Button } from 'react-native-paper';
    import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
    
    const VisualizarScreen = ({navigation,route}) => {
        
        let no_carga=route.params.no_carga;//este dice que carga seleccionastes

        const [selectedId, setSelectedId] = useState(null);


        const Alumno=[
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
            }
        ];
        const CargaMateria=[
            {   
                id:"0",
                clave: "ACF09026",
                descripcion: "CÁLCULO INTEGRAL",
                lunes: "07-08",
                aula_lunes: "ECC5",
                martes: "07-08",
                aula_martes: "ECC5",
                miercoles: "07-08",
                aula_miercoles: "ECC5",
                jueves: "07-08",
                aula_jueves: "ECC7",
                viernes: "07-08",
                aula_viernes: "ECC5",
                profesor:"FIDEL BÁES BENITO",
                creditos: 5,
                creditoPractico:3,
                creditoTeorico: 2,
                
            },
            {
                id:"1",
                clave: "ACF09025",
                descripcion: "mATERIA2",
                lunes: "07-08",
                aula_lunes: "ECC5",
                martes: "07-08",
                aula_martes: "ECC5",
                miercoles: "07-08",
                aula_miercoles: "ECC5",
                jueves: "07-08",
                aula_jueves: "ECC7",
                viernes: "07-08",
                aula_viernes: "ECC5",
                profesor:"FIDEL BÁES BENITO",
                creditos: 5,
                creditoPractico:3,
                creditoTeorico: 2,
                
            },
            {
                id:"2",
                clave: "ACF09024",
                descripcion: "MATERIA 3",
                lunes: "07-08",
                aula_lunes: "ECC5",
                martes: "07-08",
                aula_martes: "ECC5",
                miercoles: "07-08",
                aula_miercoles: "ECC5",
                jueves: "07-08",
                aula_jueves: "ECC7",
                viernes: "07-08",
                aula_viernes: "ECC5",
                profesor:"FIDEL BÁES BENITO",
                creditos: 5,
                creditoPractico:3,
                creditoTeorico: 2,
                
            },
            {
                id:"3",
                clave: "ACF09023",
                descripcion: "MATERIA 4",
                lunes: "07-08",
                aula_lunes: "ECC5",
                martes: "07-08",
                aula_martes: "ECC5",
                miercoles: "07-08",
                aula_miercoles: "ECC5",
                jueves: "07-08",
                aula_jueves: "ECC7",
                viernes: "07-08",
                aula_viernes: "ECC5",
                profesor:"FIDEL BÁES BENITO",
                creditos: 5,
                creditoPractico:3,
                creditoTeorico: 2,
                
            },
            {
                id:"4",
                clave: "ACF09022",
                descripcion: "MATERIA 5",
                lunes: "07-08",
                aula_lunes: "ECC5",
                martes: "07-08",
                aula_martes: "ECC5",
                miercoles: "07-08",
                aula_miercoles: "ECC5",
                jueves: "07-08",
                aula_jueves: "ECC7",
                viernes: "07-08",
                aula_viernes: "ECC5",
                profesor:"FIDEL BÁES BENITO",
                creditos: 5,
                creditoPractico:3,
                creditoTeorico: 2,
                
            },
            {
                id:"5",
                clave: "ACF09021",
                descripcion: "MATERIA 6",
                lunes: "07-08",
                aula_lunes: "ECC5",
                martes: "07-08",
                aula_martes: "ECC5",
                miercoles: "07-08",
                aula_miercoles: "ECC5",
                jueves: "07-08",
                aula_jueves: "ECC7",
                viernes: "07-08",
                aula_viernes: "ECC5",
                profesor:"FIDEL BÁES BENITO",
                creditos: 5,
                creditoPractico:3,
                creditoTeorico: 2,
                
            },
        ]
        
        const funcionDescargarArchivo =(id)=>{
            setSelectedId(id)
            Alert.alert(
                "Numero de carga",
                "Id "+no_carga,
                [
                    {
                        text: "Aceptar",
                        
                    },
                ],
            );
        }

        const imprimir =()=>{
            Alert.alert(
                "Descargando archivo...",
                "Carga de materias pdf",
                [
                    {
                        text: "Aceptar",
                        
                    },
                ],
            );
        }
    
        const Item = ({ item, onPress, backgroundColor, textColor }) => (
        
            <TouchableOpacity onPress={onPress}>
                <DataTable.Row style={[backgroundColor]}>
                    <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.clave}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.descripcion}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.lunes}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.aula_lunes}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.martes}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.aula_martes}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.miercoles}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.aula_miercoles}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.jueves}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.aula_jueves}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.viernes}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.aula_viernes}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo2,backgroundColor]}><Text>{item.creditos}</Text></DataTable.Cell>
                    <DataTable.Cell style={[styles.containerCeldaTitulo,backgroundColor]}><Text>{item.profesor}</Text></DataTable.Cell>
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
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20,margin:10,fontWeight:'bold'}}>Carga Académica</Text>
                    <Button style={{fontSize:10,backgroundColor:"#7c7bad",width:140,height:30,justifyContent:'center',marginTop:10}} mode="contained" onPress={() => imprimir()}>Imprimir</Button>
                </View>
                <ScrollView style={{marginTop:10}}>                
                    <View>
                        <ScrollView style={{flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                            <View>
                            <DataTable>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',textAlign:'auto'}}>Alumno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>15020357</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Nombre</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>JESUS ALEJANDRO</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Apellido Paterno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>AGUILERA</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Apellido Materno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>MAGAÑA</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Periodo</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>20163-JULDIC</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Carrera</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>ING.SIST.COM. -24</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Plan de Estudio</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>ISIC2010224-W</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                            </View>
                            <View>
                            <DataTable>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',textAlign:'auto'}}>Turno</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>Matutino</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Grupo</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>A</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Créditos</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>18</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Créditos minimos</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>22</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Créditos maximos</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>36</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Periodos maximos</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>12</DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row >
                                    <DataTable.Cell style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold'}}>Sem.</Text></DataTable.Cell>
                                    <DataTable.Cell style={styles.containerCelda}>3</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{marginTop:10}}>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                            <DataTable>

                                <DataTable.Header style={{backgroundColor:'#e6e6e6'}}>
                                    <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Clave M.</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Descripcion</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Lun</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Aula</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Mar</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo2}><Text style={{fontWeight:'bold',fontSize:14}}>Aula</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Mie</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Aula</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Jue</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Aula</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Vie</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Aula</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Crd</Text></DataTable.Title>
                                    <DataTable.Title style={styles.containerCeldaTitulo}><Text style={{fontWeight:'bold',fontSize:14}}>Prof.</Text></DataTable.Title>
                                </DataTable.Header>

                                <FlatList
                                    data={CargaMateria}
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
    
  export default VisualizarScreen;
  
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            backgroundColor: '#fff',
        },
        containerCeldaTitulo:{
            marginRight:20,
            justifyContent:'flex-start',
            width:120,
            backgroundColor:'#e6e6e6',
            alignContent:'center'
        },
        containerCeldaTitulo2:{
            marginRight:20,
            justifyContent:'flex-start',
            width:120,
            backgroundColor:'#e6e6e6'
        },
        containerCelda:{
            marginRight:20,
            justifyContent:'flex-start',
            width:120,
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


