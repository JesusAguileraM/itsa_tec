import React, {useReducer} from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-animatable';
import Notifications from '../model/Notifications';
import { ListItem } from 'react-native-elements'

const initialState = {notif: Notifications};

const crud = (state, action) => { //para leer los datos pasados en el action es: action.type, action.newNotif por ejemplo
    switch (action.type) {
        case 'read':
            
            //implementamos lógica para obtener todas las notificaciones
            return {notif: Notifications};
        case 'add':
            const notif = action.newNotif;
            console.log(notif);
            //implementamos lógica para añadir una notificacion
            return {notif: Notifications};
        default:
            alert('Hubo un error');
    }
}

const SingleStorage = () => {
    const [state, dispatch] = useReducer(crud, initialState);
    
    //son todas las notificaciones, aquí podemos acceder a ellas por medio del estado
    const notif = state.notif;
        
    const leer = () => {
        const data = dispatch({type: 'read'});
        console.log(data);
    };

    const anadir = () => {                      //así puedes pasar datos al action
        const data = dispatch({type: 'add', newNotif: {
                id: 10,
                title: 'Check new Snacks Corner within 5 km',
                details: 'A new Snacks Corner is being loved by more people around you.'
            },
        });

        data();

        console.log(data);
    };
    
    // const [listData, setListData] = useState(
    //     //la variable Notifi es el objeto con la data no lo olvides 
    //     Notifications.map((NotificationItem, index) => ({
    //         key: `${index}`,
    //         title: NotificationItem.title,
    //         details: NotificationItem.details,
    //     })),
    // );

    return(
        <View>
            { notif && (notif.map((NotificationItem, index) => (
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
        </View>
    );
}

export default SingleStorage;