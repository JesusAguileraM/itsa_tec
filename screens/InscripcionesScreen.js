import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView,ScrollView,Image,StatusBar,TextInput,Platform,} from "react-native";
import React, { useState, useEffect,useRef } from 'react';
import { Camera } from 'expo-camera';
import { ProgressBar,Divider,Surface,Portal,Dialog,Paragraph,} from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import Odoo from 'react-native-odoo-promise-based';
import { getToken } from '../notifications/hooks';
import * as Steps from './PasosInscripcion/index';
// import ComprobarPago from './ComprobarPago';
import Feather from "react-native-vector-icons/Feather";
//Styles
import {styles, styles2} from './styles/datailsScreen';
//api permissions
import * as config from '../auth/config';
import Axios from 'axios';


// const axios = Axios.create({
//     baseURL: config.BACKENDURL,
// })
// const cache = new LRU({ max: 10 });
// configure({ axios, cache });

const InscripcionesScreen = ({ navigation }) => 
{
    const camRef= useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [saveFoto, setSaveFoto] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [activarCamara, setActivarCamara] = useState(true);
    const [colorProgres,setColorProgress]=useState('#05375a')
    const [cumpleanos,setCumpleanos]=useState('05/05/1996')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
////////Es toda la informacion recogida de la app (recuerda que si los agarras sin completar el formulario seran null)

    const [data, setData] = React.useState({
        Nombre: "",
        ApellidoP: "",
        ApellidoM: "",
        Curp: "",
        Telefono: "",
        Fecha_nacimiento:"",
        sexo:"",
        NombreAprobado: true,
        ApellidoP_Aprobado: true,
        ApellidoM_Aprobado: true,
        Curp_Aprobado: true,
        Telefono_Aprobado: true,
        Fecha_nacimiento_Aprobado:true,
        sexo_Aprobado:true,
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

    // const [{datos, loading, error}, refetch] = useAxios('/users');

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [no_Documento, setNo_Documento] = useState(1);//Para saber que documento hago referencia
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
        alert("Vamos a subir las imagenes al servidor");
        // config.BACKENDURL        
        // acta_N_Foto



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

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const setSexo = (sexo) => {
        setData({
            ...data,
            sexo: sexo,
            sexo_Aprobado: true,
    })}

    const establecerCarreras = (valor) => {
        setCarreras(valor)
    }

    const establecerTurno = (valor) => {
        setTurno(valor)
    }

    const cambiarACamara = (value1, value2) => {
        setNo_Documento(value1); 
        setActivarCamara(value2);
    }

    ///no mover los siguientes eventos
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

    return (
        <SafeAreaView style={styles.container}>
        {activarCamara === true ? (
        <View  style={{flex:1,alignItems: 'center'}}>
            <Text style={{fontSize:20, color:"#05375a",marginBottom:10,marginTop:10}}>Proceso de Inscripcion</Text>

            <ScrollView>
            <ProgressBar progress={barraProces} color={colorProgres} />
            
            { continuar1 ?  
                <Steps.Step1 procesoCompletado1={procesoCompletado1}
                    cumpleanos={cumpleanos}
                    isDatePickerVisible={isDatePickerVisible}
                    setSexo={setSexo} 
                    data={data} 
                    showDatePicker={showDatePicker}
                    handleConfirm={handleConfirm} 
                    hideDatePicker={hideDatePicker}
                    textInputNameChange ={textInputNameChange}
                    textInputApellidoPChange={textInputApellidoPChange}
                    textInputApellidoMChange={textInputApellidoMChange}
                    validarInputCurp={validarInputCurp}
                    textInputTelChange={textInputTelChange}
                />
            : null }

            { continuar2 ?  
                <Steps.Step2 
                    data={data}
                    carreras={carreras}
                    turno={turno}
                    establecerCarreras={establecerCarreras}
                    establecerTurno={establecerTurno}
                    textInputApellidoPChange={textInputApellidoPChange}
                    procesoCompletado2={procesoCompletado2}
                    regresar_al_P1={regresar_al_P1}
                />
            : null }

            { continuar3 ?  
                <Steps.Step3 
                    acta_N_Foto={acta_N_Foto}
                    diploma_B_Foto={diploma_B_Foto}
                    procesoCompletado3={procesoCompletado3}
                    cambiarACamara={cambiarACamara}
                    regresar_al_P2={regresar_al_P2}
                />
            : null }

            { continuar4 ?  
                <Steps.Step4 
                    curp_Foto={curp_Foto}
                    estudio_H_Foto={estudio_H_Foto}
                    cambiarACamara={cambiarACamara}
                    regresar_al_P3={regresar_al_P3}
                    procesoCompletado4={procesoCompletado4}
                />
            : null }

            { continuar5 ?  
                <Steps.Step5 
                    comprobantePagoFoto={pagoFoto}
                    cambiarACamara={cambiarACamara}
                    terminarProceso={terminarProceso}
                />
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
