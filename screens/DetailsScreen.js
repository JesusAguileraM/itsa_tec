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

import RNPickerSelect from 'react-native-picker-select';



const DetailsScreen = ({ navigation }) => 
{
    const camRef= useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [saveFoto, setSaveFoto] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [activarCamara, setActivarCamara] = useState(true);
    const [colorProgres,setColorProgress]=useState('#05375a')
    
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => { setVisible(false);terminarProceso();};

    const [data, setData] = React.useState({
        Nombre: "",
        ApellidoP: "",
        ApellidoM: "",
        Curp: "",
        Telefono: "",
        NombreAprobado: false,
        ApellidoP_Aprobado: false,
        ApellidoM_Aprobado: false,
        Curp_Aprobado: false,
        Telefono_Aprobado: false,
    });



////////Es toda la informacion recogida de la app (recuerda que si los agarras sin completar el formulario seran null)

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
    //fotos del usuario
    let dataFoto=[
        {   acta_N_Foto: {acta_N_Foto}, 
            diploma_B_Foto: {diploma_B_Foto},
            curp_Foto: {curp_Foto},
            estudio_H_Foto: {estudio_H_Foto},
        }
    ];


    const terminarProceso=()=>{ //se encarga de ejecutar el ultimo paso de inscripcion


        setContinuar5(false);
        setContinuar1(true);
        setBarraProces(0);
        
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////




    const [acta_N_Foto, setAct_N_Foto] =useState(null);//Acta nacimiento
    const [diploma_B_Foto, setDiploma_B_Foto] =useState(null);// constancia de bachillerato
    const [curp_Foto, setCurp_Foto] =useState(null); //curp
    const [estudio_H_Foto, setEstudio_H_Foto] =useState(null);//Estudio de sangre del hospital
    const [pagoFoto, setPagoFoto] =useState(null);//Foto de recibo de pago de ficha para el tec
    const [ carreras, setCarreras ] = useState("");
    const [ turno, setTurno ] = useState("");




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

    const textInputNameChange = (nameUser) => {
        let val = nameUser.toUpperCase();
        if (val.length >= 3) {
        for (let index = 0; index < val.length; index++) {
            if (
            val.charAt(index) != "1" &&
            val.charAt(index) != "2" &&
            val.charAt(index) != "3" &&
            val.charAt(index) != "4" &&
            val.charAt(index) != "5" &&
            val.charAt(index) != "6" &&
            val.charAt(index) != "7" &&
            val.charAt(index) != "8" &&
            val.charAt(index) != "9" &&
            val.charAt(index) != "0" &&
            val.charAt(index) != "," &&
            val.charAt(index) != "." &&
            val.charAt(index) != "@" &&
            val.charAt(index) != '"' &&
            val.charAt(index) != "_" &&
            val.charAt(index) != "-" &&
            val.charAt(index) != "&" &&
            val.charAt(index) != "$" &&
            val.charAt(index) != "!" &&
            val.charAt(index) != "¡" &&
            val.charAt(index) != "¿" &&
            val.charAt(index) != "?" &&
            val.charAt(index) != "=" &&
            val.charAt(index) != "+" &&
            val.charAt(index) != ":" &&
            val.charAt(index) != ";" &&
            val.charAt(index) != "(" &&
            val.charAt(index) != ")" &&
            val.charAt(index) != "/" &&
            val.charAt(index) != "*" &&
            val.charAt(index) != "'"
            ) {
            setData({
                ...data,
                Nombre: val,
                NombreAprobado: true,
            });
            } else {
            setData({
                ...data,
                Nombre: val,
                NombreAprobado: false,
            });
            index = val.length;
            }
        }
        } else {
        setData({
            ...data,
            Nombre: val,
            NombreAprobado: false,
        });
        }
    };

    const textInputApellidoPChange = (apellidoPUser) => {
        let val = apellidoPUser.toUpperCase();
        if (val.length >= 3) {
        for (let index = 0; index < val.length; index++) {
            if (
            val.charAt(index) != "1" &&
            val.charAt(index) != "2" &&
            val.charAt(index) != "3" &&
            val.charAt(index) != "4" &&
            val.charAt(index) != "5" &&
            val.charAt(index) != "6" &&
            val.charAt(index) != "7" &&
            val.charAt(index) != "8" &&
            val.charAt(index) != "9" &&
            val.charAt(index) != "0" &&
            val.charAt(index) != "," &&
            val.charAt(index) != "." &&
            val.charAt(index) != "@" &&
            val.charAt(index) != '"' &&
            val.charAt(index) != "_" &&
            val.charAt(index) != "-" &&
            val.charAt(index) != "&" &&
            val.charAt(index) != "$" &&
            val.charAt(index) != "!" &&
            val.charAt(index) != "¡" &&
            val.charAt(index) != "¿" &&
            val.charAt(index) != "?" &&
            val.charAt(index) != "=" &&
            val.charAt(index) != "+" &&
            val.charAt(index) != ":" &&
            val.charAt(index) != ";" &&
            val.charAt(index) != "(" &&
            val.charAt(index) != ")" &&
            val.charAt(index) != "/" &&
            val.charAt(index) != "*" &&
            val.charAt(index) != "'"
            ) {
            setData({
                ...data,
                ApellidoP: val,
                ApellidoP_Aprobado: true,
            });
            } else {
            setData({
                ...data,
                ApellidoP: val,
                ApellidoP_Aprobado: false,
            });
            index = val.length;
            }
        }
        } else {
        setData({
            ...data,
            ApellidoP: val,
            ApellidoP_Aprobado: false,
        });
        }
    };

    const textInputApellidoMChange = (apellidoMUser) => {
        let val = apellidoMUser.toUpperCase();
        if (val.length >= 3) {
        for (let index = 0; index < val.length; index++) {
            if (
            val.charAt(index) != "1" &&
            val.charAt(index) != "2" &&
            val.charAt(index) != "3" &&
            val.charAt(index) != "4" &&
            val.charAt(index) != "5" &&
            val.charAt(index) != "6" &&
            val.charAt(index) != "7" &&
            val.charAt(index) != "8" &&
            val.charAt(index) != "9" &&
            val.charAt(index) != "0" &&
            val.charAt(index) != "," &&
            val.charAt(index) != "." &&
            val.charAt(index) != "@" &&
            val.charAt(index) != '"' &&
            val.charAt(index) != "_" &&
            val.charAt(index) != "-" &&
            val.charAt(index) != "&" &&
            val.charAt(index) != "$" &&
            val.charAt(index) != "!" &&
            val.charAt(index) != "¡" &&
            val.charAt(index) != "¿" &&
            val.charAt(index) != "?" &&
            val.charAt(index) != "=" &&
            val.charAt(index) != "+" &&
            val.charAt(index) != ":" &&
            val.charAt(index) != ";" &&
            val.charAt(index) != "(" &&
            val.charAt(index) != ")" &&
            val.charAt(index) != "/" &&
            val.charAt(index) != "*" &&
            val.charAt(index) != "'"
            ) {
            setData({
                ...data,
                ApellidoM: val,
                ApellidoM_Aprobado: true,
            });
            } else {
            setData({
                ...data,
                ApellidoM: val,
                ApellidoM_Aprobado: false,
            });
            index = val.length;
            }
        }
        } else {
        setData({
            ...data,
            ApellidoM: val,
            ApellidoM_Aprobado: false,
        });
        }
    };

  //Función para validar una CURP
    const curpValida = (curp) => {
        let re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
        let validado = curp.match(re); //este metodo lo unico que hace es regresarme una cadena que este entre los rangos de la variable re, revisar la documentacion de javascript .mach

        if (!validado)
        //Coincide con el formato general?
        return false;

        //Validar que coincida el dígito verificador
        const digitoVerificador = (curp17) => {
        //Fuente https://consultas.curp.gob.mx/CurpSP/
        var diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma = 0.0,
            lngDigito = 0.0;
        for (var i = 0; i < 17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - (lngSuma % 10);
        if (lngDigito == 10) return 0;
        return lngDigito;
        };

        if (validado[2] != digitoVerificador(validado[1])) return false;

        return true; //Validado
    };

    //Lleva la CURP a mayúsculas para validarlo
    const validarInputCurp = (val) => {
        let curp = val.toUpperCase();
        // console.log("curp: " + curp);
        if (curpValida(curp)) {
        //  Acá se comprueba
        setData({
            ...data,
            Curp: curp,
            Curp_Aprobado: true,
        });
        } else {
        setData({
            ...data,
            Curp: curp,
            Curp_Aprobado: false,
        });
        }
    };

    const textInputTelChange = (numero) => {
        let val = numero.toUpperCase();
        if (val.length == 10) {
        for (let index = 0; index < val.length; index++) {
            if (
            val.charAt(index) != " " &&
            val.charAt(index) != "A" &&
            val.charAt(index) != "B" &&
            val.charAt(index) != "C" &&
            val.charAt(index) != "D" &&
            val.charAt(index) != "E" &&
            val.charAt(index) != "F" &&
            val.charAt(index) != "G" &&
            val.charAt(index) != "H" &&
            val.charAt(index) != "I" &&
            val.charAt(index) != "J" &&
            val.charAt(index) != "K" &&
            val.charAt(index) != "L" &&
            val.charAt(index) != "M" &&
            val.charAt(index) != "N" &&
            val.charAt(index) != "Ñ" &&
            val.charAt(index) != "O" &&
            val.charAt(index) != "P" &&
            val.charAt(index) != "Q" &&
            val.charAt(index) != "R" &&
            val.charAt(index) != "S" &&
            val.charAt(index) != "T" &&
            val.charAt(index) != "W" &&
            val.charAt(index) != "X" &&
            val.charAt(index) != "Y" &&
            val.charAt(index) != "Z" &&
            val.charAt(index) != "," &&
            val.charAt(index) != "." &&
            val.charAt(index) != "@" &&
            val.charAt(index) != '"' &&
            val.charAt(index) != "_" &&
            val.charAt(index) != "-" &&
            val.charAt(index) != "&" &&
            val.charAt(index) != "$" &&
            val.charAt(index) != "!" &&
            val.charAt(index) != "¡" &&
            val.charAt(index) != "¿" &&
            val.charAt(index) != "?" &&
            val.charAt(index) != "=" &&
            val.charAt(index) != "+" &&
            val.charAt(index) != ":" &&
            val.charAt(index) != ";" &&
            val.charAt(index) != "(" &&
            val.charAt(index) != ")" &&
            val.charAt(index) != "/" &&
            val.charAt(index) != "*" &&
            val.charAt(index) != "'"
            ) {
            setData({
                ...data,
                Telefono: val,
                Telefono_Aprobado: true,
            });
            
            } else {
            setData({
                ...data,
                Telefono: val,
                Telefono_Aprobado: false,
            });
            index = val.length;
            }
        }
        } else {
        setData({
            ...data,
            Telefono: val,
            Telefono_Aprobado: false,
        });
        }
    };
  

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
                    <TouchableOpacity
                            style={styles2.signIn}
                            onPress={() => {
                                procesoCompletado3();
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
                                        Parte 3/5
                                    </Text>
                                </LinearGradient>
                        </TouchableOpacity>
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
                </SafeAreaView>
                : null }

                 
                { continuar2 ?  
                     <View style={{marginTop:20}}>
                            <View>
                                <Text>
                                    {carreras ?
                                    `-- Carrera ${carreras}` :
                                        "¿Que carrera le interesa?"
                                    }
                                </Text>
                                <RNPickerSelect
                                    useNativeAndroidPickerStyle={false}
                                    onValueChange={(carreras) => setCarreras(carreras)}
                                    items={[
                                        { label: "Ing. Sistemas Computacionales", value: "IISC" },
                                        { label: "Ing. Informatica", value: "IINF" },
                                        { label: "Ing. Civil", value: "ICIV" },
                                        { label: "Ing. Gestión Empresarial", value: "IGEM" },
                                        { label: "Ing. Inovación y energ. sustentable", value: "IIAS" },
                                        { label: "Ing. Bioquimica", value: "IBQA" },
                                        { label: "Ing. Industrial", value: "IIND" },
                                        { label: "Ing. Contador Publico", value: "COPU" },
                                    ]}
                                    placeholder={{ label: "--Seleccione una carrera--", value: null }}
                                />
                            </View> 

                        <View>
                            <Text> {turno ? `-- Turno ${turno}` : "¿Que turno le interesa inscribirse?"}</Text>
                                    <RNPickerSelect
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(turno) => setTurno(turno)}
                                        items={[
                                            { label: "Matutino", value: "Matutino" },
                                            { label: "Verpertino", value: "Verpertino" },
                                        ]}
                                        placeholder={{ label: "--Seleccione un turno--", value: null }}
                                    />
                        </View>

                        <View style={styles2.button}>
                            <TouchableOpacity
                                style={styles2.signIn}
                                onPress={() => {
                                    procesoCompletado2();
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
                                        Parte 2/5
                                    </Text>
                                </LinearGradient>
                        </TouchableOpacity>
                        </View>
                        <View style={styles2.textPrivate}>
                            <Text style={styles2.color_textPrivate}>
                            El proceso de inscripciones es seguro, para mas informaicon en:
                            </Text>
                            <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                            {" "}
                            www.itsa.edu.mx
                            </Text>
                            <Text style={styles2.color_textPrivate}> o llamar al teléfono</Text>
                            <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                            {" "}
                            453-534-8300{" "}
                            </Text>
                        </View>

                     </View>
                : null }


                { continuar5 ?  
                     <View style={{marginTop:20,alignItems:'center',}}>
                            
                        <Text style={{fontSize:15, color:'#05375a',marginBottom:10,marginTop:10}}>Pago de ficha</Text>

                        <View>
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
                                source={{uri:pagoFoto}}
                            />
                            </TouchableOpacity>
                        </Surface>

                        <View style={{}}>
                        <SafeAreaView style={{width: Dimensions.get("window").width/2}}>
                            <Text style={{fontSize:18,fontWeight: "bold",}}>
                                Rebibo de Pago del banco
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
                            onPress={() => {setNo_Documento(5),setActivarCamara(false)}}
                            >
                            <View style={{justifyContent: 'center',}}>
                                <Text  style={styles.textC} >Tomar foto</Text>
                            </View>
                        </TouchableOpacity>

                        </View>

                    </View>
                        <View style={styles2.button}>
                            <TouchableOpacity
                                style={styles2.signIn}
                                onPress={() => {
                                    showDialog();
                                }}
                            >
                                <LinearGradient
                                    colors={["#05375a", "#2096BA"]}
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
                                        Enviar Registro
                                    </Text>
                                </LinearGradient>
                        </TouchableOpacity>
                        </View>
                        <View style={styles2.textPrivate}>
                            <Text style={styles2.color_textPrivate}>
                            El proceso de inscripciones es seguro, para mas informaicon en:
                            </Text>
                            <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                            {" "}
                            www.itsa.edu.mx
                            </Text>
                            <Text style={styles2.color_textPrivate}> o llamar al teléfono</Text>
                            <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                            {" "}
                            453-534-8300{" "}
                            </Text>
                        </View>
                        </View>
                     </View>
                : null }





                { continuar1 ?  
                     <View>
                        <Text style={styles2.text_footer}>Nombre del Alumno</Text>
                        <View style={styles2.action}>
                            <TextInput
                            placeholder="Nombre Completo"
                            style={styles2.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputNameChange(val)}
                            />
                            {data.NombreAprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>

                        <Text style={styles2.text_footer}>Apellido Paterno</Text>
                        <View style={styles2.action}>
                            <TextInput
                            placeholder="Primer Apellido"
                            style={styles2.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputApellidoPChange(val)}
                            />
                            {data.ApellidoP_Aprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>

                        <Text style={styles2.text_footer}>Apellido Materno</Text>
                        <View style={styles2.action}>
                            <TextInput
                            placeholder="Segundo apellido"
                            style={styles2.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputApellidoMChange(val)}
                            />
                            {data.ApellidoM_Aprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>

                        <Text style={styles2.text_footer}>CURP</Text>
                        <View style={styles2.action}>
                            <TextInput
                            placeholder="Ejemp. PEMM780912MBCLRR00"
                            style={styles2.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => {
                               
                                // console.log(val);
                                return validarInputCurp(val);
                            }}
                            />
                            {data.Curp_Aprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>

                        <Text style={styles2.text_footer}>Telefono</Text>
                        <View style={styles2.action}>
                            <TextInput
                            placeholder="4531231234 nota: sin espacios"
                            style={styles2.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputTelChange(val)}
                            />
                            {data.Telefono_Aprobado ? (
                            <Animatable.View animation="bounceIn">
                                <Feather name="check-circle" color="green" size={20} />
                            </Animatable.View>
                            ) : null}
                        </View>
                        <View style={styles2.button}>
                        <TouchableOpacity
                            style={styles2.signIn}
                            onPress={() => {
                                procesoCompletado1();
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
                                        Parte 1/5
                                    </Text>
                                </LinearGradient>
                        </TouchableOpacity>
                        </View>
                        <View style={styles2.textPrivate}>
                            <Text style={styles2.color_textPrivate}>
                            El proceso de inscripciones es seguro, para mas informaicon en:
                            </Text>
                            <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                            {" "}
                            www.itsa.edu.mx
                            </Text>
                            <Text style={styles2.color_textPrivate}> o llamar al teléfono</Text>
                            <Text style={[styles2.color_textPrivate, { fontWeight: "bold" }]}>
                            {" "}
                            453-534-8300{" "}
                            </Text>
                        </View>

                     </View>
                : null }
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>! Has completado el registro ¡</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>
                        Revisa tú correo, dentro de las siguiente 24 horas te
                        enviaremos una cuenta institucional para que puedas iniciar
                        sesión.
                        </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button mode="text" color="#2096BA" onPress={hideDialog} title='Aceptar'>
                        
                        </Button>
                    </Dialog.Actions>
                    </Dialog>
                </Portal>
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
        justifyContent:'flex-start',
    },
    foto:{
        marginTop:20,
        marginBottom: 20,
        width: Dimensions.get("window").width/4,
        height: Dimensions.get("window").height /4,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#05375a",
        borderRadius: 10,
        marginRight: 10,
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


const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0064A2",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginTop: 10,
    },
    footer: {
        flex: Platform.OS === "ios" ? 10 : 15, //revisar esta parte del tamaño en ios
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: -20,
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
    },
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "95%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft:5
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textPrivate: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    color_textPrivate: {
        color: "grey",
    },
    });
