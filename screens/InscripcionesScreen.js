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
import * as api from '../auth/request';
import Splash from "../components/Splash";

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
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [loading, setLoading] = useState(false); 
////////Es toda la informacion recogida de la app (recuerda que si los agarras sin completar el formulario seran null)
        //Paso 1 de informacion
    const [data, setData] = React.useState({
        Nombre: "",
        ApellidoP: "",
        ApellidoM: "",
        Curp: "",
        Telefono: "",
        Telefono2: "",
        Fecha_nacimiento:"",
        sexo:"",
        NombreAprobado: false,
        ApellidoP_Aprobado: false,
        ApellidoM_Aprobado: false,
        Curp_Aprobado: false,
        Telefono_Aprobado: false,
        Telefono_Aprobado2: false,
        Fecha_nacimiento_Aprobado:false,
        sexo_Aprobado:false,
    });
    const [cumpleanos,setCumpleanos]=useState('05/05/1996');
    const [fechaNacimiento,setFechaNacimiento]=useState(null);
    

                //paso de informacion 2
    const [ carreras, setCarreras ] = useState(null);
    const [ turno, setTurno ] = useState(null);
    const [ estado, setEstado ] = useState(null);
    const [ municipio, setMunicipio ] = useState(null);
    const [ poblacion, setPoblacion ] = useState(null);
    const [ colonia, setColonia ] = useState(null);
    const [ direccion, setDireccion ] = useState(null);
    const [ numero, setNumero ] = useState(null);
    const [ cp, setCp ] = useState(null);
    

            // paso de informacion fotos 3,4,5
    const [acta_N_Foto, setAct_N_Foto] =useState(null);//Acta nacimiento
    const [diploma_B_Foto, setDiploma_B_Foto] =useState(null);// constancia de bachillerato
    const [curp_Foto, setCurp_Foto] =useState(null); //curp
    const [estudio_H_Foto, setEstudio_H_Foto] =useState(null);//Estudio de sangre del hospital
    const [pagoFichaFoto, setPagoFichaFoto] =useState(null);//Foto de recibo de pago de ficha para el tec
    const [pagoAportacionFoto, setPagoAportacionFoto] =useState(null);

    // const [{datos, loading, error}, refetch] = useAxios('/users');

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [no_Documento, setNo_Documento] = useState(1);//Para saber que documento hago referencia
    const [continuar1,setContinuar1] = useState(true);
    const [continuar2,setContinuar2] = useState(false);
    const [continuar3,setContinuar3] = useState(false);
    const [continuar4,setContinuar4] = useState(false);
    const [continuar5,setContinuar5] = useState(false);
    const [continuar6,setContinuar6] = useState(false);
    // const [continuar1,setContinuar1] = useState(false);
    // const [continuar2,setContinuar2] = useState(false);
    // const [continuar3,setContinuar3] = useState(false);
    // const [continuar4,setContinuar4] = useState(true);
    // const [continuar5,setContinuar5] = useState(false);
    // const [continuar6,setContinuar6] = useState(false);

    const [barraProces,setBarraProces]=useState(0.18);

    //Data de las opciones
    const [listaCarreras, setListaCarreras] = useState([]);
    const [listaEstados, setListaEstados] = useState([]);
    const [listaMunicipios, setListaMunicipios] = useState([]);
    const [depositos, setDepositos] = useState([]);


    const procesoCompletado1= async () =>{
        setLoading(true);

        const obj = { //arreglamos los datos para enviarlos al servidor
            "nombre": data.Nombre,
            "apellidoPaterno": data.ApellidoP,
            "apellidoMaterno": data.ApellidoM,
            "curp": data.Curp,
            "telefono1": data.Telefono,
            "telefono2": data.Telefono2,
            "sexo": data.sexo,
            "fechaNacimiento": fechaNacimiento,
        }



        await api.putInfoPersonal(obj);//subimos la información del paso 1
        const carreras = await api.getCarreras();//obtenemos las carreras para el paso 2
        const listaCarreras = carreras.data.data.map((doc) => {
            return doc.carrera;
        })
        const estados = await api.getEstados();//obtenemos los estados
        
        setListaCarreras(listaCarreras);
        setListaEstados(estados.data.response.estado);
        setContinuar1(false);
        setContinuar2(true);
        setBarraProces(0.36);
        setLoading(false);
    }
    const procesoCompletado2= async ()=>{
        setLoading(true);
        const obj = { 
            "carrera": carreras,
            "turno": turno,
            "estado": estado,
            "municipio": municipio,
            "poblacion": poblacion,
            "colonia": colonia,
            "direccion": direccion,
            "numero": numero,
            "cp": cp
        }

        await api.putInfoEscolar(obj);//enviamos la información escolar al servidor

        setContinuar2(false);
        setContinuar3(true);
        setLoading(false);
        setBarraProces(0.54);
    }
    const procesoCompletado3= async ()=>{ 
        //curpFoto  actaFoto  certificadoBach  constanciaMedica
        setLoading(true);
        const formData = new FormData();
        formData.append('multi-files', acta_N_Foto);
        formData.append('multi-files', diploma_B_Foto);
        
        const obj = {
            acta: acta_N_Foto,
            certificadoBach: diploma_B_Foto,
        }

        const obj1 = {
            fotos: formData,
        }

        //Manuel no olvides que tenemos que crear una instancia de Documentos para poderlos actualizar
        await api.putActaCertificadoCurpConstancia(formData);
        setContinuar3(false);
        setContinuar4(true);
        setLoading(false);
        setBarraProces(0.72);
    }
    const procesoCompletado4= async ()=>{
        setLoading(true);
        const formData = new FormData();
        formData.append('multi-files', curp_Foto);
        formData.append('multi-files', estudio_H_Foto);
        await api.putActaCertificadoCurpConstancia(formData);
        //nos traemos los pagos bancario para mandarlos al paso 5
        const listaDepositos = await api.getDepositoBancarioAlumno();
        //Cuando lista depositos sea null debemos impedir que continue o lanzar
        //una vista indicando que la información está siendo evaluada
        if(listaDepositos.data.status !== 'notfound'){
            setDepositos(listaDepositos.data.data);
            setContinuar4(false);   
            setContinuar5(true);
            setColorProgress('#00bb2d');
            setBarraProces(1);
        } else {
            alert('No puedes continuar ya que los datos no han sido validados');
        }
        setLoading(false);
    }
    
    //se encarga de ejecutar el ultimo paso de inscripcion
    const terminarProceso= async ()=>{//preguntarle a manuel como enviar esta funcion al componente de comprobar pago
        setLoading(true);
        const formData = new FormData();
        formData.append('multi-files', pagoFichaFoto);
        formData.append('multi-files', pagoAportacionFoto);
        await api.putFichaAportacionDepositoBancario(formData);
        // setContinuar5(false);
        // setContinuar1(true);
        setLoading(false);
        setBarraProces(0);
    }

    const regresar_al_P1= async ()=>{ //me regresa al formulario 1  
        // console.log(carreras, turno, estado, municipio, poblacion, colonia, direccion, numero, cp);
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

    const getMunicipios = async (estado) => {
        const municipios = await api.getMunicipios(estado);
        setListaMunicipios(municipios.data.response.municipios);
    }

    const tomarFoto = async(DocumentoFoto) => {
        switch (DocumentoFoto) {
            case 1:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    data2.name = 'acta.jpg';
                    data2.type = 'image/jpg'
                    await setAct_N_Foto(data2);
                    break;
                }
            case 2:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    data2.name = 'certificado.jpg';
                    data2.type = 'image/jpg'
                    await setDiploma_B_Foto(data2);
                    break;
                }
            case 3:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    data2.name = 'curp.jpg';
                    data2.type = 'image/jpg'
                    await setCurp_Foto(data2);
                    break;
                }
            case 4:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    data2.name = 'constancia.jpg';
                    data2.type = 'image/jpg'
                    await setEstudio_H_Foto(data2);
                    break;
                }
            case 5:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    data2.name = 'fichaInscripcion.jpg';
                    data2.type = 'image/jpg'
                    await setPagoFichaFoto(data2);
                    break;
                }
            case 6:
                if(camRef){
                    const data2 = await camRef.current.takePictureAsync();
                    data2.name = 'aportacion.jpg';
                    data2.type = 'image/jpg'
                    await setPagoAportacionFoto(data2);
                    break;
                }
        }
    };

    const tomarFoto_Salir=async(Numero)=>{

        if(Numero < 6){ 
            await tomarFoto(Numero);
            await setActivarCamara(true);
            setNo_Documento(no_Documento+1);
            
        }
        else{
            setNo_Documento(no_Documento-5);
            await tomarFoto(no_Documento);
            await setActivarCamara(true);
        }
    }

    const cambiar_foto=async(fotoSeleccionada)=>{
        await tomarFoto(fotoSeleccionada);
        await setActivarCamara(true);

    }   

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

    const handleConfirm = (date) => { //set cumpleanos
        console.log("A date has been picked: "+date);
        let anio=date.getFullYear();
        let mes=date.getMonth();
        let dia=date.getDate(); 
        let fechaC=`${anio}/${mes}/${dia}`
        setCumpleanos(fechaC);
        setFechaNacimiento(date);//lo agrego porque necesito el objeto Date
        setData({
            ...data,
            Fecha_nacimiento: date,
            Fecha_nacimiento_Aprobado: true,
        });
        hideDatePicker();
    };

    const establecerCarreras = (valor) => {
        setCarreras(valor)
    }
    const establecerTurno = (valor) => {
        setTurno(valor)
    }
    const establecerEstado = (valor) => {
        setEstado(valor)
    }
    const establecerMunicipio = (valor) => {
        setMunicipio(valor)
    }
    const establecerPoblacion = (valor) => {
        setPoblacion(valor)
    }
    const establecerColonia = (valor) => {
        setColonia(valor)
    }
    const establecerDirecion = (value) => {
        let val = value.toUpperCase();
        if (val.length >= 3) {
            for (let index = 0; index < val.length; index++) {
                if (
                    val.charAt(index) != "." &&
                    val.charAt(index) != "@" &&
                    val.charAt(index) != '"' &&
                    val.charAt(index) != "_" &&
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
                ) { setDireccion(val);} 
            }
        }
    };
    const establecerNumeroC = (valor) => {
        setNumero(valor)
    }
    const establecerCP = (valor) => {
        setCp(valor)
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
    const textInputTelChange2 = (numero) => {
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
                Telefono2: val,
                Telefono_Aprobado2: true,
            });
            
            } else {
            setData({
                ...data,
                Telefono2: val,
                Telefono_Aprobado2: false,
            });
            index = val.length;
            }
        }
        } else {
        setData({
            ...data,
            Telefono2: val,
            Telefono_Aprobado2: false,
        });
        }
    };

    if(loading){
        return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Splash/>
        </View>
        );
    }

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
                        textInputTelChange2={textInputTelChange2}
                    />
                : null }

                { continuar2 ?  
                    <Steps.Step2 
                        carreras={carreras}
                        turno={turno}
                        estado={estado}
                        municipio={municipio}
                        poblacion={poblacion}
                        colonia={colonia}
                        direccion={direccion}
                        numero={numero}
                        cp={cp}
                        listaCarreras={listaCarreras}
                        listaEstados={listaEstados}
                        listaMunicipios={listaMunicipios}
                        getMunicipios={getMunicipios}
                        establecerCarreras={establecerCarreras}
                        establecerTurno={establecerTurno}
                        establecerEstado={establecerEstado}
                        establecerMunicipio={establecerMunicipio}
                        establecerPoblacion={establecerPoblacion}
                        establecerColonia={establecerColonia}
                        establecerDirecion={establecerDirecion}
                        establecerNumeroC={establecerNumeroC}
                        establecerCP={establecerCP}
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
                        comprobantePagoFichaFoto={pagoFichaFoto}
                        comprobantePagoAportacionFoto={pagoAportacionFoto}
                        depositos={depositos}
                        cambiarACamara={cambiarACamara}
                        regresar_al_P4={regresar_al_P4}
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
