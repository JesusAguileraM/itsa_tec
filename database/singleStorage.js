import React, {useReducer,useState,useEffect, useRef} from 'react';
import { Text,Dimensions,TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import { View } from 'react-native-animatable';
import { ListItem } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';

    //const initialState = {notif: Notifications};

    // const [id, setId] = useState(0);
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    // const [body, setBody] = useState('');


    // const [data, setData] = useState([]);
    // const [toggle, setToggle] = useState('true'); //no hace nada solo lo uso para actualizar y que se actualize el useEffect

    // const iniciarSingleStorage = () => {
    //     useEffect(() => {
    //         const [id, setId] = useState(0);
    //         const [title, setTitle] = useState('');
    //         const [content, setContent] = useState('');
    //         const [body, setBody] = useState('');
    //         const [data, setData] = useState([]);   
    //     }, []);
    // }

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


     // const cantidadNotificaciones=()=>{
    //     const numero_Notifi=data;
    //     const cantidad=Object.keys(numero_Notifi).length;
    //     console.log(Object.keys(numero_Notifi));
    //     return cantidad;
    // }


    // const crud = (state, action) => { 
    //     switch (action.type) {
    //         case 'read':
                
                
    //             return {notif: Notifications};
    //         case 'add':

    //             const notif = action.newNotif;
    //             console.log(notif);
    //             AsyncStorage.setItem('DB_Notification', JSON.stringify(notif));
    //             const temp=AsyncStorage.getItem('DB_Notification');
    //             console.log(temp)
    //             return {notif: Notifications};
    //         default:
    //             alert('Hubo un error');
    //     }
    // }
    

    // const [state, dispatch] = useReducer(crud, initialState);
    // const [NotifTemp,setNotifTemp]=useState([]);
    
    
    // const notif = state.notif;
        
    // const leer = () => {
    //     const data = dispatch({type: 'read'});
    //     console.log(data);
    // };

    // const anadir = () => {                      
    //     const data = dispatch({type: 'add', newNotif: {
    //             id: 10,
    //             title: 'Check new Snacks Corner within 5 km',
    //             details: 'A new Snacks Corner is being loved by more people around you.'
    //         },
    //     });
    //     console.log(data);
    // };

    // useEffect(() => {
    //     //eliminarTodasNotificaciones()
    //     traerDB_Notification();// este se encarga de actualizar y returnar la base de datos de notificaciones
    // },[]);

    // return(
    //     <ScrollView>
    //         <TouchableOpacity
    //                 onPress={() => {
    //                     guardarNotificaciones(2,"notifi 0",'detalle 0')
    //                     // console.log(cantidadNotificaciones());
    //                 }}style={[styles.signIn,{borderColor: "#2096BA",borderWidth: 1,marginTop: 12,marginLeft: 10,flexDirection: "column",},]}
    //                 >
    //                     <Text style={[styles.textSign,{color: "#0064A2",},]}>
    //                         Agregar Notificacion
    //                     </Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //                 onPress={() => {
    //                     eliminarNotificacion(0);
    //                 }} style={[styles.signIn,{borderColor: "#2096BA",borderWidth: 1,marginTop: 12,marginLeft: 10,flexDirection: "column",},]}
    //                 >
    //                     <Text style={[styles.textSign,{color: "#0064A2",},]}>
    //                         Eliminar Notificacion
    //                     </Text>
    //         </TouchableOpacity>
    //         { data &&  (data.map((NotificationItem, index) => (
    //                         <ListItem key={index} bottomDivider>
    //                             <ListItem.Content>
    //                                 <ListItem.Title>key: {NotificationItem.id}</ListItem.Title>
    //                                 <ListItem.Subtitle>title: {NotificationItem.title}</ListItem.Subtitle>
    //                                 <ListItem.Subtitle>details: {NotificationItem.details}</ListItem.Subtitle>
    //                             </ListItem.Content>
    //                         </ListItem>
    //                         ))
    //                     )   
    //         }
    //     </ScrollView>
    // );
    
// const styles = StyleSheet.create({
//     signIn: {
//         width: Dimensions.get("window").width / 2,
//         height: 60,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 5,
//         marginBottom: 50
//     },
//     textSign: {
//         fontSize: 14,
//         fontWeight: "bold",
//     },
// });

export { useGuardarNotificaciones, useTraerDB_Notification, useEliminarNotificacion, useNotificacionesExistencia, useEliminarTodasNotificaciones };




    
    // const [listData, setListData] = useState(
    //     //la variable Notifi es el objeto con la data no lo olvides 
    //     Notifications.map((NotificationItem, index) => ({
    //         key: `${index}`,
    //         title: NotificationItem.title,
    //         details: NotificationItem.details,
    //     })),
    // );