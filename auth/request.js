import * as crudToken from "../database/crudToken";
import * as config from './config';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

//User temporary
const postUserT = async (form) => {
    try{
        const data = await axios({
            method: 'POST',
            url: `${config.BACKENDURL}/${config.TEMPORARYUSERS}`,
            headers: { 'content-type': 'application/json' },
            data: form,
        })
        return data;
    }
    catch(error){
        console.log(error || "Error en postUserT")
    }
}

const getUserT = async () => {
    let data = [];
    try{
            data = await axios({
            method: 'GET',
            url: `${config.BACKENDURL}/${config.TEMPORARYUSERS}`,
            headers: { 'content-type': 'application/json' },
        })
    }
    catch(error){
        console.log(error || "Error en getUserT")
    }
    return data;
}

const putInfoPersonal = async (form) => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        const data = await axios({
            method: 'PUT',
            url: `${config.BACKENDURL}/${config.TEMPORARYUSERS}`,
            headers: { 'content-type': 'application/json' },
            data: form,
            params: {
                id: _id,
            }
        })
        return data;
    }
    catch(error){
        console.log('Error en putInfoPersonal')
        console.log(error || "Error en postUserT")
    }
}

const putInfoEscolar = async (form) => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        const data = await axios({
            method: 'PUT',
            url: `${config.BACKENDURL}/${config.TEMPORARYUSERS}`,
            headers: { 'content-type': 'application/json' },
            data: form,
            params: {
                id: _id,
            }
        })
        return data;
    }
    catch(error){
        console.log('Error en putInfoEscolar')
        console.log(error || "Error en putInfoEscolar")
    }
}

const getTipoPagos = async () => {
    let data = [];
    try{
            data = await axios({
            method: 'GET',
            url: `${config.BACKENDURL}/${config.TIPOPAGOS}`,
            headers: { 'content-type': 'application/json' },
        })
    }
    catch(error){
        console.log(error || "Error en getTipoPagos")
    }
    return data;
}

const getCarreras = async () => {
    let data = [];
    try{
            data = await axios({
            method: 'GET',
            url: `${config.BACKENDURL}/${config.CARRERAS}`,
            headers: { 'content-type': 'application/json' },
        })
    }
    catch(error){
        console.log(error || "Error en getCarreras")
    }
    return data;
}

const getEstados = async () => {
    let data = [];
    try{
            data = await axios({
            method: 'GET',
            url: `${config.ESTADOS}?${config.TOKEN}`,
            headers: { 'content-type': 'application/json' },
        })
    }
    catch(error){
        console.log(error || "Error en getEstados")
    }
    return data;
}
 
const getMunicipios = async (municipio) => {
    let data = [];
    try{
            data = await axios({
            method: 'GET',
            url: `${config.MUNICIPIOS}/${municipio}?${config.TOKEN}`,
            headers: { 'content-type': 'application/json' },
        })
    }
    catch(error){
        console.log(error || "Error en getMunicipios")
    }
    return data;
}

const putActaCertificadoCurpConstancia = async (form) => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        const data = await axios({
            method: 'PUT',
            url: `${config.BACKENDURL}/${config.DOCUMENTOS}`,
            headers: { 'content-type': 'multipart/form-data' },
            data: form,
            params: {
                id: _id,
            }
        })
        return data;
    }
    catch(error){
        console.log('Error en putActaCertificadoCurpConstancia')
        console.log(error || "Error en putActaCertificado")
    }
}

const putFichaAportacionDepositoBancario = async (form) => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        const data = await axios({
            method: 'PUT',
            url: `${config.BACKENDURL}/${config.DEPOSITOALUMNOINSCRIPCION}`,
            headers: { 'content-type': 'multipart/form-data' },
            data: form,
            params: {
                id: _id,
                procesado: false,
            }
        })
        return data;
    }
    catch(error){
        console.log('Error en putFichaAportacionDepositoBancario')
        console.log(error || "Error en putActaCertificado")
    }
}

const getUserDescargas = async () => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        const data = await axios({
            method: 'GET',
            url: `${config.BACKENDURL}/${config.DESCARGAS}/${_id}`,
            headers: { 'content-type': 'application/json' },
        })
        return data;
    }
    catch(error){
        console.log('Error en getUserDescargas')
        console.log(error || "Error en getUserDescargas")
    }
}

//no lo usamos pero por si lo requieres, no nos funciona porque el equipo de expo
// aun no lo arregla para poder guardar achivos que no sean imagenes en el almacenamiento local
// este solo funciona para archivos multimedia.
const getArchivos = async (fileName) => {
    try{
        const downloadResumable = FileSystem.createDownloadResumable(
            `${config.ARCHIVOS}/${fileName}`,
            FileSystem.documentDirectory + fileName,
        );
        
        const { uri } = await downloadResumable.downloadAsync();
        console.log('Finished downloading to ', uri);
     
        const asset = await MediaLibrary.createAssetAsync(uri);
        const album = await MediaLibrary.getAlbumAsync('Download');
        if (album === null) {
            await MediaLibrary.createAlbumAsync('Download', asset, false);
        } else {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        }

        return uri;
    }
    catch(error){
        console.log('Error en getArchivos')
        console.log(error || "Error en getArchivos")
    }
}

const getCalificaciones = async () => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        const data = await axios({
            method: 'GET',
            url: `${config.BACKENDURL}/${config.CALIFICACIONES}`,
            headers: { 'content-type': 'application/json' },
            params: {
                id: _id,
            }
        })
        return data;
    }
    catch(error){
        console.log('Error en getCalificaciones')
        console.log(error || "Error en getCalificaciones")
    }
}

const postDepositoBancarioAlumno = async (obj) => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        let form = {
            ...obj,
            id_user: _id,
        }
        const data = await axios({
            method: 'POST',
            url: `${config.BACKENDURL}/${config.DEPOSITOALUMNO}`,
            headers: { 'content-type': 'application/json' },
            data: form,
        })
        return data;
    }
    catch(error){
        console.log("Error en postDepositoBancario")
        console.log(error || "Error en postDepositoBancario")
    }
}

const getDepositoBancarioAlumno = async () => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        const data = await axios({
            method: 'GET',
            url: `${config.BACKENDURL}/${config.DEPOSITOALUMNO}/${_id}`,
            headers: { 'content-type': 'application/json' },
        })
        return data.data.data;
    }
    catch(error){
        console.log('no hay depositos')
        console.log(error || "Error en getDepositosAlumno")
    }
}

const cancelarDepositoBancarioAlumno = async (id) => {
    try{
        const data = await axios({
            method: 'DELETE',
            url: `${config.BACKENDURL}/${config.DEPOSITOALUMNO}/${id}`,
            headers: { 'content-type': 'application/json' },
        })
        return data;
    }
    catch(error){
        console.log('Error en putEstadoPagoDeposito')
        console.log(error || "Error en putEstadoPagoDeposito")
    }
}

const putDepositoBancarioAlumno = async (form, id) => {
    try{
        const data = await axios({
            method: 'PUT',
            url: `${config.BACKENDURL}/${config.DEPOSITOALUMNO}`,
            headers: { 'content-type': 'multipart/form-data' },
            data: form,
            params: {
                id,
            }
        })
        return data;
    }
    catch(error){
        console.log('Error en putDepositoBancarioAlumno')
        console.log(error || "Error en putDepositoBancarioAlumno")
    }
}

// const putEstadoPagoDeposito = async (estadoPago) => {
//     try{
//         const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
//         const { _id }= sesion[0];
//         const data = await axios({
//             method: 'PUT',
//             url: `${config.BACKENDURL}/${config.DEPOSITOSESTADOPAGO}/${_id}`,
//             headers: { 'content-type': 'application/json' },
//             data: {
//                 estadoPago: estadoPago,
//             }
//         })
//         return data;
//     }
//     catch(error){
//         console.log('Error en putEstadoPagoDeposito')
//         console.log(error || "Error en putEstadoPagoDeposito")
//     }
// }

// const putPagadoDeposito = async (pagado) => {
//     try{
//         const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
//         const { _id }= sesion[0];
//         const data = await axios({
//             method: 'PUT',
//             url: `${config.BACKENDURL}/${config.DEPOSITOSPAGADO }/${_id}`,
//             headers: { 'content-type': 'application/json' },
//             data: {
//                 pagado: pagado,
//             }
//         })
//         return data;
//     }
//     catch(error){
//         console.log('Error en putPagadoDeposito')
//         console.log(error || "Error en putPagadoDeposito")
//     }
// }

// const getDepositoBancarioAlumnoNoPagado = async () => {
//     try{
//         const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
//         const { _id }= sesion[0];
//         const data = await axios({
//             method: 'GET',
//             url: `${config.BACKENDURL}/${config.DEPOSITOSNOPAGADOS}/${_id}`,
//             headers: { 'content-type': 'application/json' },
//         })
//         return data;
//     }
//     catch(error){
//         console.log('Error en getCalificaciones')
//         console.log(error || "Error en getCalificaciones")
//     }
// }

export {
    getUserT, 
    postUserT, 
    getTipoPagos, 
    putInfoPersonal, 
    getCarreras, 
    getEstados, 
    getMunicipios, 
    putInfoEscolar, 
    putActaCertificadoCurpConstancia, 
    putFichaAportacionDepositoBancario, 
    getDepositoBancarioAlumno,
    cancelarDepositoBancarioAlumno,
    putDepositoBancarioAlumno,
    // getDepositoBancarioAlumnoNoPagado,
    // putEstadoPagoDeposito,
    // putPagadoDeposito,
    postDepositoBancarioAlumno,
    getUserDescargas,
    getArchivos,
    getCalificaciones,
};