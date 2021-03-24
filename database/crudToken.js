import AsyncStorage from '@react-native-async-storage/async-storage';

export const useGuardarToken= async(Token)=>{
    try {
            const T_T=JSON.stringify(Token)
            await AsyncStorage.setItem('UToken',T_T);
            
        } catch (e) {
            console.log(e);
            console.log('Hubu un error al guardar el Token')
        }
}

export const useEliminarToken=async()=>{
    try {
        await AsyncStorage.removeItem('UToken')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al Eliminar el Token')
    }
}

export const useObtenerToken=async()=>{
    try {
        const dataUT= await AsyncStorage.getItem('UToken');
        const UToken= JSON.parse(dataUT);
        return UToken;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al recibir el Token')
        return null;
    }
    
}
//////////////////////////   Crud para Guardar un objeto de sesión    ////////////////

export const useGuardarSesion=async(UserObjet)=>{
    try {
        // console.log('UserSesion guardado exitosamente')
        await AsyncStorage.setItem("UserSesion", JSON.stringify(UserObjet));
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el UserSesion')
    }
}   

export const useEliminarSesion=async()=>{
    try {
        await AsyncStorage.removeItem("UserSesion");
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al eliminar UserSesion')
    }
    

}

export const useObtenerSesion=async()=>{
    try {
        
        const UserS= await AsyncStorage.getItem('UserSesion');
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el Token')
        return null;
    }
}


//crud token guardarInfoPersonalInscripcion
export const GuardarInfoPersonalInscripcion=async(UserObjet)=>{
    try {
        
        await AsyncStorage.setItem("guardarInfoPersonalInscripcion", JSON.stringify(UserObjet));
        // console.log('Informacion personal de inscripcion guardado exitosamente');
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el UserSesion')
    }
}   

export const EliminarInfoPersonalInscripcion=async()=>{
    try {
        await AsyncStorage.removeItem("guardarInfoPersonalInscripcion");
        // console.log('Informacion personal de inscripcion Eliminado')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al eliminar UserSesion')
    }
    

}

export const ObtenerInfoPersonalInscripcion=async()=>{
    try {
        const UserS= await AsyncStorage.getItem('guardarInfoPersonalInscripcion');
        // console.log('Informacion personal de inscripcion Obtenida')
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el Token')
        return null;
    }
}



//crud guardarInformacionPersonal
export const GuardarInfoPersonal=async(UserObjet)=>{
    try {
        await AsyncStorage.setItem("guardarInfoPersonal", JSON.stringify(UserObjet));
        console.log('Informacion personal guardado exitosamente')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar la informacion personal')
    }
}   

export const EliminarInfoPersonal=async()=>{
    try {
        await AsyncStorage.removeItem("guardarInfoPersonal");
        console.log('Informacion personal eliminada')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al eliminar la informacion personal')
    }
}

export const ObtenerInfoPersonal=async()=>{
    try {
        const UserS= await AsyncStorage.getItem('guardarInfoPersonal');
        console.log('Informacion personal obtenida');
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al obtener la informacion personal')
        return null;
    }
}


//crud documento

export const GuardarDocumento=async(UserObjet)=>{
    try {
        
        await AsyncStorage.setItem("guardarDocumento", JSON.stringify(UserObjet));
        console.log('Documento guardado exitosamente')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el documento')
    }
}   

export const EliminarDocumento=async()=>{
    try {
        await AsyncStorage.removeItem("guardarDocumento");
        console.log('Documento eliminado')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al eliminar el documento')
    }
}

export const ObtenerDocumento=async()=>{
    try {
        const UserS= await AsyncStorage.getItem('guardarDocumento');
        console.log('Documento obtenido')
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al obtener el documento')
        return null;
    }
}


//informacion bancaria

export const GuardarInfoBanco=async(UserObjet)=>{
    try {
        await AsyncStorage.setItem("guardarInfoBanco", JSON.stringify(UserObjet));
        console.log('Info del banco guardado exitosamente');
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar la info del banco')
    }
}   

export const EliminarInfoBanco=async()=>{
    try {
        await AsyncStorage.removeItem("guardarInfoBanco");
        console.log('Info del banco eliminado');
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al eliminar la info del banco')
    }
}

export const ObtenerInfoBanco=async()=>{
    try {
        const UserS= await AsyncStorage.getItem('guardarInfoBanco');
        console.log('Info del banco obtenida');
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al obtener a info del banco')
        return null;
    }
}

//isStatus
export const GuardarIsStatus=async(status)=>{
    try {
        await AsyncStorage.setItem("isStatus", JSON.stringify( status ));
        // console.log('Info del isStatus guardado exitosamente');
    } catch (e) {
        console.log(e);
        console.log('guardar Hubu un error al guardar la info del isStatus')
    }
}   

export const EliminarIsStatus=async()=>{
    try {
        await AsyncStorage.removeItem("isStatus");
        console.log('Info del isStatus eliminado');
    } catch (e) {
        console.log(e);
        console.log('Eliminar Hubu un error al eliminar la isStatus')
    }
}

export const ObtenerIsStatus=async()=>{
    try {
        const UserS= await AsyncStorage.getItem('isStatus');
        // console.log('Info del isStatus obtenida');
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Obtener un error al obtener a info del banco')
        return null;
    }
}

















const useEliminarTodoDB_AS=async()=>{ //Elimina totalmente la base de datos (nota: solo borra cuando existan datos, sino aparecera un error)
    try {
            await AsyncStorage.clear();
        } catch(e) {
            console.log(e)
        }
}