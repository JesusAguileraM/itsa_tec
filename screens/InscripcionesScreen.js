import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import React, { useState, useEffect,useRef } from 'react';
import { Camera } from 'expo-camera';
import Feather from "react-native-vector-icons/Feather";
import { ProgressBar,Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Odoo from 'react-native-odoo-promise-based';
import { getToken } from '../notifications/hooks';
import * as Steps from './PasosInscripcion/index';
import ComprobarPago from './ComprobarPago';
import * as valid from '../util/valadaciones';


//Styles
import {styles, styles2} from './styles/datailsScreen';

const InscripcionesScreen = ({ navigation }) => 
{
    const camRef= useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [saveFoto, setSaveFoto] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [activarCamara, setActivarCamara] = useState(true);
    const [colorProgres,setColorProgress]=useState('#05375a')
    const [cumpleanos,setCumpleanos]=useState('05/05/1996')
////////Es toda la informacion recogida de la app (recuerda que si los agarras sin completar el formulario seran null)

    const [data, setData] = React.useState({
        Nombre: "",
        ApellidoP: "",
        ApellidoM: "",
        Curp: "",
        Telefono: "",
        Fecha_nacimiento:"",
        sexo:"",
        NombreAprobado: false,
        ApellidoP_Aprobado: false,
        ApellidoM_Aprobado: false,
        Curp_Aprobado: false,
        Telefono_Aprobado: false,
        Fecha_nacimiento_Aprobado:false,
        sexo_Aprobado:false,
    });

    

    //datos del usuario
    let dataUser=[
        {   name: data.Nombre, 
            last_nameP: data.ApellidoP,
            last_nameM: data.ApellidoM,
            student_Curp: data.Curp,
            cell_phone: data.Telefono,
            carrera: carreras,
            turno: turno
        }
    ];

    const [acta_N_Foto, setAct_N_Foto] =useState(null);//Acta nacimiento
    const [diploma_B_Foto, setDiploma_B_Foto] =useState(null);// constancia de bachillerato
    const [curp_Foto, setCurp_Foto] =useState(null); //curp
    const [estudio_H_Foto, setEstudio_H_Foto] =useState(null);//Estudio de sangre del hospital
    const [pagoFoto, setPagoFoto] =useState(null);//Foto de recibo de pago de ficha para el tec
    const [ carreras, setCarreras ] = useState(null);
    const [ turno, setTurno ] = useState(null);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [no_Documento, setNo_Documento] =useState(1);//Para saber que documento hago referencia
    const [continuar1,setContinuar1] = useState(true);
    const [continuar2,setContinuar2] = useState(false);
    const [continuar3,setContinuar3] = useState(false);
    const [continuar4,setContinuar4] = useState(false);
    const [continuar5,setContinuar5] = useState(false);
    const [continuar6,setContinuar6] = useState(false);

    const [barraProces,setBarraProces]=useState(0.18);

    const procesoCompletado1=()=>{
        setContinuar1(false);
        setContinuar2(true);
        setBarraProces(0.36);
    }
    const procesoCompletado2=()=>{
        setContinuar2(false);
        setContinuar3(true);
        setBarraProces(0.54);
    }
    const procesoCompletado3=()=>{
        setContinuar3(false);
        setContinuar4(true);
        setBarraProces(0.72);
    }
    const procesoCompletado4=()=>{
        setContinuar4(false);
        setContinuar5(true);
        setColorProgress('#00bb2d');
        setBarraProces(1);
    }
    
    const regresar_al_P1=()=>{ //me regresa al formulario 1
        setContinuar1(true);
        setContinuar2(false);
        setBarraProces(0.18);
    }
    const regresar_al_P2=()=>{//me regresa al formulario 2
        setContinuar2(true);
        setContinuar3(false);
        setBarraProces(0.36);
    }
    const regresar_al_P3=()=>{ //me regresa al formulario 3
        setContinuar3(true);
        setContinuar4(false);
        setBarraProces(0.56);
    }
    const regresar_al_P4=()=>{//me regresa al formulario 4
        setContinuar4(true);
        setContinuar5(false);
        setColorProgress('#05375a');
        setBarraProces(0.72);
    }

    const saveDataUser=async(data)=>{
        try {
            await AsyncStorage.setItem("DataUser", JSON.stringify(data));
        } catch (e) {
            console.log('Error grave: ' + e);
        }
        const pruebaData = await AsyncStorage.getItem("DataUser");
        // console.log('Prueba data')
        // console.log(pruebaData);
    }

    //se encarga de ejecutar el ultimo paso de inscripcion
    const terminarProceso=()=>{//preguntarle a manuel como enviar esta funcion al componente de comprobar pago
        // console.log(dataUser)
        // console.log(dataFoto)
        setContinuar5(false);
        setContinuar1(true);
        setBarraProces(0);
        
    }

    //cuando presiono enviar
    const enviar_navegar= async ()=>{//Ejecuta la funcion de guardar datos en el storage y navega al sig. screen
        saveDataUser(dataUser);
        console.log('holaaaaa')
        const formData = new FormData();
        const matricula = '16020419';
        const token = await getToken();

        if (acta_N_Foto != null) 
        {
            console.log('#################')
            formData.append('nombre', data.Nombre);
            formData.append('apellidoP', data.ApellidoP);
            formData.append('apellidoM', data.ApellidoM);
            formData.append('curp', data.Curp);
            formData.append('telefono', data.Telefono);
            formData.append('matricula', matricula);
            formData.append('tokenNotifications', token.data);
            formData.append('acta_N', acta_N_Foto);

            console.log(data.Nombre);
            // let nomb = formData.get('nombre');
            // console.log(nomb)
            // console.log(formData.get('matricula'))
            // console.log(formData.get('tokenNotifications'))
            // console.log(formData.get('acta_N'))

            //Usando fetch

            // let options = {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Content-Type': 'multipart/form-data; ',
            //     },
            // };

            // let res = await fetch('url para enviar profe', {options} );

            // let responseJson = await res.json();
            // if (responseJson.status == 1) {
            //     alert('Upload Successful');
            // }

            //Usando Odoo
            // instanciaOdoo(matricula, token.data, formData);
        }
    }

    const instanciaOdoo = (matricula, token, formData) => {
        var odoo = new Odoo({
            // url: 'https://siit.itsa.edu.mx',  //creo que es el host
            host: 'https://siit.itsa.edu.mx',
            // port: '80',//default 80 si no se especifica
            db: 'itsa900',
            username: 'xmlrpc_user',
            password: 'Alum2021#',
            // protocol: 'http'  //si no se especifica el default será http
          });
    
          odoo.connect()
          .then(response => { 
              console.log('Conexión exitosa');
              console.log(response);
           })
          .catch(e => { 
              console.log('Error al conectarse al servidor');
           });
    
           odoo.connect()
           .then(response => {
                console.log('Connected to Odoo server. user esta conectado:');
                console.log(response);
                var inParams = [];
                inParams.push(formData);
                var param = [];
                param.push(inParams);
    
                var params = {
                    model: 'itsa.escolares.alumnos',
                    method: 'siit3_get_prealumno',
                    args: param,
                    kwargs: {},
                  };//params
    
                odoo.rpc_call('/', params)
                .then(response => { 
                    console.log(response);
                 })
                .catch(e => { 
                    console.log(e);
                 })
    
                // odoo.execute_kw('itsa.escolares.alumnos', 'siit3_get_prealumno', params, function (err2, value2) {
                //     if (err2) { return console.log(err2); }
                //     console.log('Result: ', value2);
                // });
           })
           .catch(e => {
              console.log('No se pudo conectar');
              console.log(e);
           });
    }

    

    


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

    const tomarFoto = async(DocumentoFoto) => {
        switch (DocumentoFoto) {
            case 1:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    await setAct_N_Foto(data2.uri);
                    break;
                }
            case 2:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    await setDiploma_B_Foto(data2.uri);
                    break;
                }
            case 3:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    await setCurp_Foto(data2.uri);
                    break;
                }
            case 4:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    await setEstudio_H_Foto(data2.uri);
                    break;
                }
            case 5:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    await setPagoFoto(data2.uri);
                    break;
                }
        }
    };

    const tomarFoto_Salir=async(Numero)=>{

        if(Numero < 5){ 
            await tomarFoto(Numero);
            await setActivarCamara(true);
            setNo_Documento(no_Documento+1);
            
        }
        else{
            setNo_Documento(no_Documento-4);
            await tomarFoto(no_Documento);
            await setActivarCamara(true);
        }
    }

    const cambiar_foto=async(fotoSeleccionada)=>{
        await tomarFoto(fotoSeleccionada);
        await setActivarCamara(true);

    }
    
    const handleConfirm = (date) => {
        console.log("A date has been picked: "+date);
        let anio=date.getFullYear();
        let mes=date.getMonth();
        let dia=date.getDate(); 
        let fechaC=`${anio}/${mes}/${dia}`
        setCumpleanos(fechaC);
        setData({
            ...data,
            Fecha_nacimiento: date,
            Fecha_nacimiento_Aprobado: true,
        });
        hideDatePicker();
    };

    const setSexo = (sexo) => {
        setData({
            ...data,
            sexo: sexo,
            sexo_Aprobado: true,
    })}

    return (
        <SafeAreaView style={styles.container}>
            {activarCamara === true ? (
            <View  style={{flex:1,alignItems: 'center'}}>
                <Text style={{fontSize:20, color:"#05375a",marginBottom:10,marginTop:10}}>Proceso de Inscripcion</Text>

                <ScrollView>
                <ProgressBar progress={barraProces} color={colorProgres} />
                
                { continuar3 ?  
                    <SafeAreaView style={{flex:1, }}>
                        
                        <View style={styles.containerFoto}>
                            <Surface>
                                <TouchableOpacity
                                    style={styles.imagenFoto}
                                    onPress={() => {
                                        //setActivarCamara(false)
                                    }}
                                >
                                    <Image 
                                    style={styles.foto}
                                    source={{uri:acta_N_Foto}}
                                />
                                </TouchableOpacity>
                            </Surface>

                            <View style={{}}>
                            <SafeAreaView style={{width: Dimensions.get("window").width/2}}>
                                <Text style={{fontSize:18,fontWeight: "bold",}}>
                                    Acta de nacimiento
                                </Text>
                                <Divider/>
                                <Divider/>
                                <Text>
                                    - Asegurate que este iluminado la zona donde se tomara la foto.
                                </Text>
                                
                                <Text>
                                    - Asegurarse sea legible.
                                </Text>
                            </SafeAreaView>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {setNo_Documento(1),setActivarCamara(false)}}
                                >
                                <View style={{justifyContent: 'center',}}>
                                    <Text  style={styles.textC} >Tomar foto</Text>
                                </View>
                            </TouchableOpacity>

                            </View>

                        </View>
                        <Divider />
                        <View style={styles.containerFoto}>
                            <Surface>
                                <TouchableOpacity
                                    style={styles.imagenFoto}
                                    onPress={() => {
                                        //setActivarCamara(false)
                                    }}
                                >
                                    <Image 
                                    style={styles.foto}
                                    source={{uri:diploma_B_Foto}}
                                />
                                </TouchableOpacity>
                            </Surface>

                            <View style={{}}>
                            <SafeAreaView style={{width: Dimensions.get("window").width/2}}>
                                <Text style={{fontSize:18,fontWeight: "bold",}}>
                                Constancia de bachillerato
                                </Text>
                                <Divider/>
                                <Divider/>
                                <Text>
                                    - Asegurate que este iluminado la zona donde se tomara la foto.
                                </Text>
                                
                                <Text>
                                    - Asegurarse sea legible.
                                </Text>
                            </SafeAreaView>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {setNo_Documento(2),setActivarCamara(false)}}
                                >
                                <View style={{justifyContent: 'center',}}>
                                    <Text  style={styles.textC} >Tomar foto</Text>
                                </View>
                            </TouchableOpacity>

                            </View>
                            

                        </View>
                        <Divider />
                        {acta_N_Foto != null && diploma_B_Foto != null ? 
                            <TouchableOpacity style={styles2.signIn}
                                    onPress={() => {procesoCompletado3();}}
                                    >
                                        <LinearGradient colors={["#2096BA", "#2096BA"]} style={styles2.signIn}>
                                            <Text style={[styles2.textSign,{color: "#fff",},]}>
                                                Parte 3/5
                                            </Text>
                                        </LinearGradient>
                            </TouchableOpacity>
                        :null }
                        <View style={styles2.button}>
                                <TouchableOpacity
                                    style={styles2.signIn}
                                    onPress={() => {
                                        regresar_al_P2();
                                    }}
                                >
                                    <LinearGradient
                                        colors={["#fff", "#fff"]}
                                        style={styles2.signIn}
                                    >
                                        <Text
                                        style={[
                                            styles2.textSign,
                                            {
                                            color: "#05375a",
                                            },
                                        ]}
                                        >
                                            Regresar
                                        </Text>
                                    </LinearGradient>
                            </TouchableOpacity>
                        </View>
                </SafeAreaView>
                : null }

                { continuar4 ?  
                    <SafeAreaView style={{flex:1}}>
                    
                    <View style={styles.containerFoto}>
                        <Surface>
                            <TouchableOpacity
                                style={styles.imagenFoto}
                                onPress={() => {
                                    //setActivarCamara(false)
                                }}
                            >
                                <Image 
                                style={styles.foto}
                                source={{uri:curp_Foto}}
                            />
                            </TouchableOpacity>
                        </Surface>

                        <View style={{}}>
                        <SafeAreaView style={{width: Dimensions.get("window").width/2}}>
                            <Text style={{fontSize:18,fontWeight: "bold",}}>
                                C U R P
                            </Text>
                            <Divider/>
                            <Divider/>
                            <Text>
                                - Asegurate que este iluminado la zona donde se tomara la foto.
                            </Text>
                            
                            <Text>
                                - Asegurarse sea legible.
                            </Text>
                        </SafeAreaView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {setNo_Documento(3),setActivarCamara(false)}}
                            >
                            <View style={{justifyContent: 'center',}}>
                                <Text  style={styles.textC} >Tomar foto</Text>
                            </View>
                        </TouchableOpacity>

                        </View>

                    </View>
                    <Divider />
                    <View style={styles.containerFoto}>
                        <Surface>
                            <TouchableOpacity
                                style={styles.imagenFoto}
                                onPress={() => {
                                    //setActivarCamara(false)
                                }}
                            >
                                <Image 
                                style={styles.foto}
                                source={{uri:estudio_H_Foto}}  
                            />
                            </TouchableOpacity>
                        </Surface>

                        <View style={{}}>
                            <SafeAreaView style={{width: Dimensions.get("window").width/2}}>
                                <Text style={{fontSize:18,fontWeight: "bold",}}>
                                    Estudio de tipo de sangre
                                </Text>
                                <Divider/>
                                <Divider/>
                                <Text>
                                    - Asegurate que este iluminado la zona donde se tomara la foto.
                                </Text>
                                
                                <Text>
                                    - Asegurarse sea legible.
                                </Text>
                            </SafeAreaView>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {setNo_Documento(4),setActivarCamara(false)}}
                                    >
                                    <View style={{justifyContent: 'center',}}>
                                        <Text  style={styles.textC} >Tomar foto</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>

                    </View>
                    <Divider />
                    {estudio_H_Foto != null && curp_Foto != null ? 
                        <TouchableOpacity
                                style={styles2.signIn}
                                onPress={() => {
                                    procesoCompletado4();
                                }}
                            >
                                    <LinearGradient
                                        colors={["#2096BA", "#2096BA"]}
                                        style={styles2.signIn}
                                    >
                                        <Text
                                        style={[
                                            styles2.textSign,
                                            {
                                            color: "#fff",
                                            },
                                        ]}
                                        >
                                            Parte 4/5
                                        </Text>
                                    </LinearGradient>
                        </TouchableOpacity>
                    :null}

                                        <View style={styles2.button}>
                                            <TouchableOpacity
                                                style={styles2.signIn}
                                                onPress={() => {
                                                    regresar_al_P3();
                                                }}
                                            >
                                                <LinearGradient
                                                    colors={["#fff", "#fff"]}
                                                    style={styles2.signIn}
                                                >
                                                    <Text
                                                    style={[
                                                        styles2.textSign,
                                                        {
                                                        color: "#05375a",
                                                        },
                                                    ]}
                                                    >
                                                        Regresar
                                                    </Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </View>
                </SafeAreaView>
                : null }

                
                { continuar2 ?  
                    <Steps.Step2 />
                : null }


                { continuar5 ?  
                    <ComprobarPago uri={pagoFoto}/>
                : null }


                { continuar1 ?  
                    <Steps.Step1 valid={valid} procesoCompletado1={procesoCompletado1} setSexo={setSexo} data={data} handleConfirm={handleConfirm}/>
                : null }
                
                </ScrollView>
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
                        tomarFoto_Salir(no_Documento);
                        
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

export default InscripcionesScreen;
