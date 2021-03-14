import AsyncStorage from '@react-native-async-storage/async-storage';

    const useGuardarNotificaciones=async(idN,titleN,contentN,bodyN)=>{
        setId(idN);
        setTitle(titleN);
        setContent(contentN);
        setBody(bodyN);
        let infoNotification = {
            id,
            title,
            content,
            body,
            key: Math.random(),
        };

        const arrData = [infoNotification]; // [{ id, title, details}]

        const storedData = await AsyncStorage.getItem('DB_Notifications');//me va dar vacio porque es la primera entrada
        const storedDataParsed = JSON.parse(storedData);
        setData(storedDataParsed);

        let newData = [];

        if (storedData === null) {
          // save
            await AsyncStorage.setItem('DB_Notifications', JSON.stringify(arrData));
            
        } else {
            newData = [...storedDataParsed, infoNotification];
            await AsyncStorage.setItem('DB_Notifications', JSON.stringify(newData));
            
        }
        
    }
    
    const useTraerDB_Notification = async () => {
        try {
            const valueString = await AsyncStorage.getItem('DB_Notifications');
            const value = JSON.parse(valueString);
            
            setData(value);
            console.log(value);
            return value;
        } catch (error) {
            alert('Error en traerDB_Notification')
            return 
        }
    };

    const useEliminarNotificacion = async (id) => {
        if (data !== null) {
            const newData = data.filter((_, index) => index !== id);
            setData(newData);
            await AsyncStorage.setItem('DB_Notifications', JSON.stringify(newData));
        }
    };

    const useNotificacionesExistencia=()=>{
        if (storedData === null) {
            setToggle(false);
            console.log('No existen Notifiaciones almacenadas')
            return false;
        }else{
            setToggle(true);
            console.log('Existen notificaciones')
            return true;
        }
    }

    const useEliminarTodasNotificaciones=()=>{c
        //AsyncStorage.clear();
    }
export { useGuardarNotificaciones, useTraerDB_Notification, useEliminarNotificacion, useNotificacionesExistencia, useEliminarTodasNotificaciones };
