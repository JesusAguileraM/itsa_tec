import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import MainTabScreen from "./screens/MainTabScreen";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

import { DrawerContent } from "./screens/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RootStackScreen from "./screens/RootStackScreen";

import AsyncStorage from "@react-native-community/async-storage";
import * as global from "./database/variablesGlobales";
import { AuthContext } from "./components/context";

//Firebase auth
import Constants from 'expo-constants'; //So we can read app.json extra
import * as Google from 'expo-google-app-auth'; //google auth libraries
import firebase from 'firebase'; //basic firebase
import Firebase from './firebase/Firebase'; //This is the initialized Firebase, you can find it in my GitHub
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

import bd from './controller/bd'

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  //Tema de colores de la app
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    // tema por defecto
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    //tema personalisado
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme; //cual es que esta seleccionado
  
  //guarda si el usuario esta logueado (observe el método Glogin)
  const [userLogged, setUserLogged] = useState(false);
  //guarda la sesión de firestore
  const [userProfile, setUserProfile] = useState(null);
  //pues ya sabes es pera bloquear la interfaz con un circulito jjajajaja
  const [isLoading, setIsLoading] = useState(true);
  //para guardar el token de las notificaciones
  const [expoPushToken, setExpoPushToken] = useState({ expoPushToken: null })
  
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
        
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "HOME":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  //Este lo usamos para cuando se monta el componente pedirle al usuario los permisos de notificaciones y luego 
  //    en caso de que acepte lo guardamos en el state expoPushToken
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, [])

  //Este es el método que pide las notificaciones a expo
  const registerForPushNotificationsAsync = async () => {
    console.log('Intenta')
    if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        alert('Te pediremos permiso para las notificaciones!');
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }

    //Este es el token que debemos guardar 
    const token = await Notifications.getExpoPushTokenAsync();
    console.log("Token de entrada")
    console.log(token);
    console.log('Este es ell token que vamos a mandar al servidor ')
    //guardamos el token para usarlo después (tu mételo a la base de datos)
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


  //este efecto se ejecuta al montar el componente no lo olvides, todos los useEffect hacen eso
  //¿sabes que es lo interesante?
  //hemos creado un oyente authListener y este amiguito siempre existirá porque escuchará cuando 
  //    se inice sesión, te explico, cuando llamamos Glogin creamos una sesión con Firebase.auth()
  //    y una vez que se cree esa entonces se llamará el Firebase.auth().onAuthStateChanged de abajo
  //    esto es porque es un oyente y detecta cuando hay un cambio en la sesión, también si cerramos la sesión
  //    se llamará este mismo método para actualizar los datos de setUserLogged para si está logueado o no, de
  //    setIsLoading para si vamos a cargar o no, setUserProfile para guardar el usuario con sesión o null si no tiene sesión
  useEffect(() => {
    const authListener = Firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
      setIsLoading(false);
      setUserProfile(user);
      // vamos a imprimir el perfil del usuario
      console.log('user profile')
      console.log(user)
      console.log('fin user profile')
      if(user === null){
        //borrar cerrar de la base de datos
      }{
        ///agregar user a la base de datos
      }
    });
    return authListener; //cuando se cierre la app se desmontará el oyente
  }, []);

  ///Este es el metodo chido para iniciar sesión en google
  const Glogin = async () => {
    try {
      //Antes de loguearnos debemos comprobar si permitió las notificaciones, si es así continuamos, si no return
      console.log("Token es:")
      console.log(expoPushToken)
      // if(expoPushToken.expoPushToken === null )
      // {
      //   //pedimos de nuevo el permiso
      //   console.log('falla token pedimos de nuuevo') 
      //   await registerForPushNotificationsAsync();
      //   console.log("Token2 es:")
      //   console.log(expoPushToken)
      //   return;
      // }

      //await GoogleSignIn.askForPlayServicesAsync();
      const result = await Google.logInAsync({ //return an object with result token and user
        iosClientId: Constants.manifest.extra.IOS_KEY, //From app.json
        androidClientId: Constants.manifest.extra.ANDROID_KEY, //From app.json
      });
      if (result.type === 'success') {
        //antes de empezar con el inicio de sesión solicitamos al usuario que habilite las notifiaciones
        console.log(result);
        // console.log(result); //este es el objeto de sesion correcto para empezar el logueo con firestore
        setIsLoading(true);
        //Creamos las credenciales para prepar todo para autentificarnos con google
        const credential = firebase.auth.GoogleAuthProvider.credential( //Set the tokens to Firebase
          result.idToken,
          result.accessToken
        );

        //Empezamos la authetificación con google y una vez que se atentifique la seión nos devuelve un objeto con la sesión
        Firebase.auth()
          .signInWithCredential(credential) //Login to Firebase
          .then(sesion => {
            console.log('Sesion iniciada')
            console.log(sesion)
            console.log('Impresión terminada')
            // console.log(sesion)  //esta es la data de la sesión y su estructura la imprimimos para verla alex
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        //CANCEL
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  const authContext = React.useMemo(
    () => ({
      //aquí te dejo el objeto con toda la información de la sesión para que veas cual es y hagas lo correspondiente 
      //de igual forma este userProfile lo obtenemos en el useEfect del oyente de firestore de arriba
      userProfile: { userProfile },
      //para cerrar la sesion en firestore lo puedes llamar donde qiueras
      signOutUser: () => {
        console.log('sesión cerrada')
        setUserLogged(false);
        setUserProfile(null)
        setIsLoading(false)

        Firebase.auth().signOut()

      },
      //para activar la sesión en firestore
      //cabe decir que la sesión activa está en Firestore.auth
      handleGLogin: () => { //The new login with google handler available to context
        Glogin();
      },
      signIn: async (foundUser) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem("userToken", userToken);
          global.usuarioLogueado = true;
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
          global.usuarioLogueado = false;
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: async () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      regresarHome: async () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        let tokenHome = "testtoken";
        const userToken = "testtoken";
        try {
          await AsyncStorage.setItem("userToken", userToken);
          console.log("aqui paso goku");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "HOME", token: userToken });
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
      getExpoTokenNotifications: () => {
        return expoPushToken ? expoPushToken : null;
      }
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let entrar = "true";
      await AsyncStorage.setItem("llave", entrar);
      let saveLLave = await AsyncStorage.getItem("llave");

      //guardar temporalmente la global.primeravez para que cuando se resetee la aplicacion siga la informacion
      let userToken;
      userToken = "testtoken";
      try {
        if (global.primeraVez === true) {
          userToken = await AsyncStorage.getItem("userToken");
          global.primeraVez = false;
        } else {
          global.primeraVez = false;
        }
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading || isLoading) {//le metí isLoading para la de google
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  // return (
  //   <PaperProvider theme={theme}>
  //     <AuthContext.Provider value={authContext}>
  //       <NavigationContainer theme={theme}>
  //         {loginState.userToken !== null ? (
  //           <Drawer.Navigator
  //             drawerContent={(props) => <DrawerContent {...props} />}
  //           >
  //             <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
  //             <Drawer.Screen name="SupportScreen" component={SupportScreen} />
  //             <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
  //             <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
  //           </Drawer.Navigator>
  //         ) : (
  //           <RootStackScreen />
  //         )}
  //       </NavigationContainer>
  //     </AuthContext.Provider>
  //   </PaperProvider>
  // );
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {userLogged === true  ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
