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
        console.log('UserSesion guardado exitosamente')
        await AsyncStorage.setItem("UserSesion", JSON.stringify(Us_Objet));
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
        const US= JSON.parse(UserS);
        return US;
    } catch (e) {
        console.log(e);
        console.log('Hubu un error al guardar el Token')
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