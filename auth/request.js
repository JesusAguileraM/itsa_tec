import * as config from './config';
import axios from 'axios';

//User temporary
const postUserT = async (form, url) => {
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

const getUserT = async (url) => {
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

const postInfoPersonal = async () => {
    
}

export {getUserT, postUserT};