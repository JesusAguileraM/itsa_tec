import React, { useState, useEffect } from "react";
import Constants from 'expo-constants'; //So we can read app.json extra
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

//Este es el método que pide las notificaciones a expo
const useRegisterForPushNotificationsAsync = async () => {
    //para guardar el token de las notificaciones
    const [expoPushToken, setExpoPushToken] = useState({ expoPushToken: null })

    useEffect( () => {
        (async () => {
            if (Constants.isDevice) {
                const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
                let finalStatus = existingStatus;
                if (existingStatus !== 'granted') {
                    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                    alert('Te pediremos permiso para las notificaciones!');
                    finalStatus = status;
                }
                if (finalStatus === 'granted') {
                    //Este es el token que debemos guardar 
                    const token = await Notifications.getExpoPushTokenAsync();
                    console.log('Token:')
                    console.log(token);
                    setExpoPushToken({ expoPushToken: token })
                } else {
                    alert('No se han permitido las notificaciones aun');
                }
            
            } else {
            alert('Error para las notificaciones');
            }
        
            // if (Platform.OS === 'android') {
            // Notifications.createChannelAndroidAsync('default', {
            //     name: 'default',
            //     sound: true,
            //     priority: 'max',
            //     vibrate: [0, 250, 250, 250],
            // });
            // }
        })()
    }, []);
    
    if(!expoPushToken && !expoPushToken.expoPushToken) //Si hay token y no es null pues no lo pedimos
    {
        console.log('No hay token debemos solicitarlo otra vez lo arreglamos después')   
    }

    return { expoPushToken, setExpoPushToken } ;
};

const getToken = async () => {
    let token = {};
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            alert('Te pediremos permiso para las notificaciones!');
            finalStatus = status;
        }
        if (finalStatus === 'granted') {
            token = await Notifications.getExpoPushTokenAsync();
        } else {
            alert('No se han permitido las notificaciones aun');
        }
    
    } else {
        alert('Error para las notificaciones');
    }
    return token;
} 


// import { Linking, View, Text } from 'react-native';
// import { Title } from "react-native-paper";

// function ClickNotification() {
// //   const [body, setBody] = useState('');
// //   const [data, setData] = useState('');
// //   const [title, setTitle] = useState('');
// //   React.useEffect(() => {
// //     const subscription = Notifications.addNotificationResponseReceivedListener(response => {
// //         setBody(response.notification.request.content.body);
// //         setData(response.notification.request.content.data);
// //         setTitle(response.notification.request.content.title);

// //     //   Linking.openURL(url);
// //     });
// //     return () => subscription.remove();
// //   }, []);

//   return (
//     <View >
//         <View >
//             <Text>{title}</Text>
//         </View>
//         <View >
//             <Text>{body}</Text>
//         </View>
//         <View >
//             <Text>{data.inscripciones}</Text>
//         </View>
//     </View>
//   );
// }




export { useRegisterForPushNotificationsAsync, getToken}

// export default ClickNotification;