import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image
} from "react-native";
import React, { useState, useEffect,useRef } from 'react';
import { Camera } from 'expo-camera';
import Feather from "react-native-vector-icons/Feather";
import { ProgressBar,Divider,Surface} from "react-native-paper";




const DetailsScreen = ({ navigation }) => {
    
    const camRef= useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [saveFoto, setSaveFoto] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [activarCamara, setActivarCamara] = useState(true);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const guardarFoto = async () => {
        console.log('Entro al metodo');
        if (this.camera) {
        console.log('Entro al if');
        let fotoTemp = await this.camera.takePictureAsync();
        setFoto(fotoTemp);
    }

    };
    const tomarFoto = async(DocumentoFoto) => {
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setSaveFoto(data.uri);
            console.log(data);
        }

    };

    
    return (
        <SafeAreaView style={styles.container}>
            {activarCamara === true ? (
            <View  style={{flex:1,alignItems: 'center'}}>

                <Text style={{fontSize:20, color:'#05375a',marginBottom:10}}>Proceso de Inscripcion</Text>

                <ProgressBar progress={0.33} color={"#05375a"} />

                <ScrollView>

                 
                    <View style={styles.containerFoto}>
                        <Surface>
                            <TouchableOpacity
                                style={styles.imagenFoto}
                                onPress={() => {
                                    //setActivarCamara(false)
                                }}
                            >
                                <View>
                                    <Text style={styles.textC}>Foto</Text>
                                </View>
                            </TouchableOpacity>
                        </Surface>

                        <View style={{}}>
                        <SafeAreaView style={{width: Dimensions.get("window").width/2}}>
                            <Text>
                                Tomar foto a la acta de nacimiento original, solo se necesesita de un solo lado.
                            </Text>
                        </SafeAreaView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setActivarCamara(false)}
                            >
                            <View style={{justifyContent: 'center',}}>
                                <Text  style={styles.textC} >Tomar foto</Text>
                            </View>
                        </TouchableOpacity>

                        </View>

                    </View>
                    <Divider />
                
                 
                <View style={{backgroundColor: '#EFEFEF'}}>
                    <View style={styles.containerFotoMini}>
                        <Image 
                            style={styles.foto}
                            source={{uri:saveFoto}}
                        />
                        <Image style={styles.foto}/>
                            
                    </View>                
                    <View style={styles.containerFotoMini}>
                        <Image style={styles.foto}/>
                        <Image style={styles.foto}/>
                            
                    </View>                
                </View>

                </ScrollView>
                <View>
                    <Text>hasdfasdf</Text>
                </View>
            </View>
            ) : (
            <Camera ref={camRef} style={styles.container} type={type}>
                <View style={styles.buttonContainerC}>
                <TouchableOpacity
                    style={styles.buttonC}
                    onPress={() => {
                    setActivarCamara(true);
                    }}
                >
                    <Feather name="arrow-left" color="#fff" size={35} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonC}
                    onPress={() => {
                    tomarFoto(1);
                    }}
                >
                    <Feather name="circle" color="white" size={50} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonC}
                    onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                    }}
                >
                    <Feather name="refresh-cw" color="white" size={35} />
                </TouchableOpacity>
                </View>
            </Camera>
            )}
        </SafeAreaView>
        );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    imagenFoto: {
        marginTop:20,
        marginBottom: 20,
        width: Dimensions.get("window").width/4,
        height: Dimensions.get("window").height /4,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#05375a",
        borderRadius: 10,
        elevation: 8,
    },
    container: {
        flex: 1,
    },
    containerFoto:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        alignItems:'center',
        width: Dimensions.get("window").width,
        
    
    },
    containerFotoMini:{
        flexDirection: 'row',
        backgroundColor: '#EFEFEF',
        justifyContent:'space-around',
    },
    foto:{
        width: Dimensions.get("window").width/5,
        height: Dimensions.get("window").height /5,
        
        borderRadius: 10,
        marginRight: Dimensions.get("window").width/3,
        marginBottom: 20,
        marginLeft: 20
        
    },
    button: {
        width: Dimensions.get("window").width /4,
        height: 40,
        backgroundColor: '#05375a',
        alignItems: 'center',
        justifyContent:'center',
        margin: 20,

        
    },
    buttonContainerC: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        marginBottom:40,
        justifyContent: "space-between"
    },
    buttonC: {
        flex: 0.4,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    textC: {
        fontSize: 14,
        color: '#fff',
    },
});
