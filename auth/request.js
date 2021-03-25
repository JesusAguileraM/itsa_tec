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
            url: `${config.PRUEBAS}/${config.TEMPORARYUSERS}`,
            headers: { 'content-type': 'application/json' },
        })
    }
    catch(error){
        console.log(error || "Error en getUserT")
    }
    return data;
}

const putInfoPersonal = async () => {
    try{
        const sesion = await crudToken.ObtenerInformacionEscolar(); //sesion{data, status, message}
        const _id = sesion.data._id;
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
        console.log(error || "Error en postUserT")
    }
}

export {getUserT, postUserT};