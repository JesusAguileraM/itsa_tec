import React, { useState, useContext, useEffect } from 'react';
import { Text, Button, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';


const NotificationsPush = (props) => {
    const [expoPushToken, setExpoPushToken] = useState({})

    useEffect(() => {
        registerForPushNotificationsAsync();
    }, [])
    
    //Hacer fetch al servidor para enviar el token del usuario

    const registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        const token = await Notifications.getExpoPushTokenAsync();
        console.log("Token de entrada")
        console.log(token);
        console.log("No hay error")
        //   this.setState({ expoPushToken: token });
        setExpoPushToken({ expoPushToken: token })
        } else {
        alert('Must use physical device for Push Notifications');
        }
    
        // if (Platform.OS === 'android') {
        // Notifications.createChannelAndroidAsync('default', {
        //     name: 'default',
        //     sound: true,
        //     priority: 'max',
        //     vibrate: [0, 250, 250, 250],
        // });
        // }
        
    };
    
    // console.log(props.token)
    // console.log(props.token.data)

    if(expoPushToken.data){
        // console.log('NO');
        return(
            <View>
                <Text>No hay token bebé</Text>
            </View>
        );
    }
    
        // console.log('SI');
        return(
            <View>
                <Text>Si hayy</Text>
                <Text>{expoPushToken.expoPushToken.data}</Text>
            </View>
        );
}

export default NotificationsPush;