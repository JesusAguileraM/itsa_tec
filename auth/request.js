import * as crudToken from "../database/crudToken";
import * as config from './config';
import axios from 'axios';


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
            url: `${config.BACKENDURL}/${config.DEPOSITOS}`,
            headers: { 'content-type': 'multipart/form-data' },
            data: form,
            params: {
                id: _id,
                procesado: true,
            }
        })
        return data;
    }
    catch(error){
        console.log('Error en putFichaAportacionDepositoBancario')
        console.log(error || "Error en putActaCertificado")
    }
}

const getDepositosAvailables = async () => {
    try{
        const sesion = await crudToken.ObtenerInfoPersonalInscripcion();
        const { _id }= sesion[0];
        const data = await axios({
            method: 'GET',
            url: `${config.BACKENDURL}/${config.DEPOSITOS}/${_id}`,
            headers: { 'content-type': 'application/json' },
        })
        return data;
    }
    catch(error){
        console.log('Error en getDepositosAvailables')
        console.log(error || "Error en getUserT")
    }
}

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
    getDepositosAvailables
};