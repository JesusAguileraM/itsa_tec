import React, {useReducer,useState,useEffect} from 'react';
import { Text,Dimensions,TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import { View } from 'react-native-animatable';
import Notifications from '../model/Notifications';
import { ListItem } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SingleStorage = () => {

    const initialState = {notif: Notifications};

    const [id, setId] = useState('555');
    const [title, setTitle] = useState('Prueba 1');
    const [details, setDetails] = useState('Detalles de la prueba 1');
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState('true'); //no hace nada solo lo uso para actualizar y que se actualize el useEffect



    const guardarNotificaciones=async()=>{
        let infoNotification = {
            id,
            title,
            details,
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
        setToggle(false);
    }
    
    
    const recuperarDatos = async () => {
        try {
            const valueString = await AsyncStorage.getItem('DB_Notifications');
            const value = JSON.parse(valueString);
            
            setData(value);
            console.log(value);
        } catch (error) {
            console.log(error);
        }
    };

    const clearData = async (id) => {
        if (data !== null) {
            const newData = data.filter((_, index) => index !== id);
            setData(newData);
            await AsyncStorage.setItem('DB_Notifications', JSON.stringify(newData));
        }
    };


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

    useEffect(() => {
        
        recuperarDatos();
    },[]);

    return(
        <ScrollView>
            <TouchableOpacity
                    onPress={() => {
                        guardarNotificaciones()
                    }}style={[styles.signIn,{borderColor: "#2096BA",borderWidth: 1,marginTop: 12,marginLeft: 10,flexDirection: "column",},]}
                    >
                        <Text style={[styles.textSign,{color: "#0064A2",},]}>
                            Agregar Notificacion
                        </Text>
            </TouchableOpacity>
            { data && (data.map((NotificationItem, index) => (
                            <ListItem key={index} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>key: {NotificationItem.index}</ListItem.Title>
                                    <ListItem.Subtitle>title: {NotificationItem.title}</ListItem.Subtitle>
                                    <ListItem.Subtitle>details: {NotificationItem.details}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                            ))
                        )   
            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    signIn: {
        width: Dimensions.get("window").width / 2,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    textSign: {
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default SingleStorage;




    
    // const [listData, setListData] = useState(
    //     //la variable Notifi es el objeto con la data no lo olvides 
    //     Notifications.map((NotificationItem, index) => ({
    //         key: `${index}`,
    //         title: NotificationItem.title,
    //         details: NotificationItem.details,
    //     })),
    // );