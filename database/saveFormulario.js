import AsyncStorage from '@react-native-async-storage/async-storage';

export const guardarProceso1=async(obj)=>{
    try {
        // console.log('UserSesion guardado exitosamente')
        await AsyncStorage.setItem("proceso1", JSON.stringify(obj));
        console.log('se guardo con exito el proceso1');
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el proceso1')
    }
}   

export const eliminarProceso1=async()=>{
    try {
        await AsyncStorage.removeItem("proceso1");
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al eliminar proceso1')
    }
    

}

export const obtenerProceso1=async()=>{
    try {
        
        const UserS= await AsyncStorage.getItem('proceso1');
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el proceso1')
        return null;
    }
}
////////////////////////////////////////////////// proceso2
export const guardarProceso2=async(obj)=>{
    try {
        // console.log('UserSesion guardado exitosamente')
        await AsyncStorage.setItem("proceso2", JSON.stringify(obj));
        console.log('se guardo con exito el proceso2');
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el proceso2')
    }
}   

export const eliminarProceso2=async()=>{
    try {
        await AsyncStorage.removeItem("proceso2");
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al eliminar proceso2')
    }
    
}

export const obtenerProceso2=async()=>{
    try {
        
        const UserS= await AsyncStorage.getItem('proceso2');
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el proceso2')
        return null;
    }
}

////////////////////////////////////////////////// proceso3

export const guardarFoto1= async(foto)=>{
    try {
            const F=JSON.stringify(foto)
            await AsyncStorage.setItem('Foto1',F);
            
        } catch (e) {
            console.log(e);
            console.log('Hubu un error al guardar la foto1')
        }
}

export const eliminarFoto1=async()=>{
    try {
        await AsyncStorage.removeItem('Foto1')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al Eliminar la foto1')
    }
}

export const obtenerFoto1=async()=>{
    try {
        const dataUT= await AsyncStorage.getItem('Foto1');
        const UToken= JSON.parse(dataUT);
        return UToken;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al obtener la foto1')
        return null;
    }
    
}


////////////////////////////////////////////////// proceso4

export const guardarFoto2= async(foto)=>{
    try {
            const F=JSON.stringify(foto)
            await AsyncStorage.setItem('Foto2',F);
            
        } catch (e) {
            console.log(e);
            console.log('Hubu un error al guardar la foto2')
        }
}

export const eliminarFoto2=async()=>{
    try {
        await AsyncStorage.removeItem('Foto2')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al Eliminar la foto2')
    }
}

export const obtenerFoto2=async()=>{
    try {
        const dataUT= await AsyncStorage.getItem('Foto2');
        const UToken= JSON.parse(dataUT);
        return UToken;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al obtener la foto2')
        return null;
    }
    
}

////////////////////////////////////////////////// Fotos ficha y aportacion

export const guardarDepositos= async(foto)=>{
    try {
            const F=JSON.stringify(foto)
            await AsyncStorage.setItem('depositos',F);
            
        } catch (e) {
            console.log(e);
            console.log('Hubu un error al guardar la depositos')
        }
}

export const eliminarDepositos=async()=>{
    try {
        await AsyncStorage.removeItem('depositos')
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al Eliminar la depositos')
    }
}

export const obtenerDepositos=async()=>{
    try {
        const dataUT= await AsyncStorage.getItem('depositos');
        const UToken= JSON.parse(dataUT);
        return UToken;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al obtener la depositos')
        return null;
    }
    
}

////////////////////////////////////////////////// estadoInscripcion

export const guardarEstadoIsc=async(obj)=>{
    try {
        // console.log('UserSesion guardado exitosamente')
        await AsyncStorage.setItem("estadoIsc", JSON.stringify(obj));
        console.log('se guardo con exito el estadoIsc');
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el estadoIsc')
    }
}   

export const eliminarEstadoIsc=async()=>{
    try {
        await AsyncStorage.removeItem("estadoIsc");
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al eliminar estadoIsc')
    }
    

}

export const obtenerEstadoIsc=async()=>{
    try {
        
        const UserS= await AsyncStorage.getItem('estadoIsc');
        const User= JSON.parse(UserS);
        return User;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el estadoIsc')
        return null;
    }
}



export const useEliminarTodoDB_AS=async()=>{ //Elimina totalmente la base de datos (nota: solo borra cuando existan datos, sino aparecera un error)
    try {
            await AsyncStorage.clear();
        } catch(e) {
            console.log(e)
        }
}