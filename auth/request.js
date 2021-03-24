import * as config from './config';
import axios from 'axios';

const postUserT = async (form, url) => {
    let data = [];
    try{
        // console.log(`${config.PRUEBAS}/${url}`)
            console.log(form)
            
            data = await axios({
            method: 'POST',
            url: `${config.BACKENDURL}/${url}`,
            headers: { 'content-type': 'multipart/form-data' },
            data: form,
        })
    }
    catch(error){
        console.log(error || "Error en postUserT")
    }
    return data;
}

const getUserT = async (url) => {
    let data = [];
    try{
            data = await axios({
            method: 'GET',
            url: `${config.PRUEBAS}/${url}`,
            headers: { 'content-type': 'application/json' },
        })
    }
    catch(error){
        console.log(error || "Error en getUserT")
    }
    return data;
}

export {getUserT, postUserT};