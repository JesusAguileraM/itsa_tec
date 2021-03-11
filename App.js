import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import {CustomDefaultTheme,CustomDarkTheme} from './tema/TemaStyles';
import { Provider as PaperProvider} from "react-native-paper";

import {NavigationContainer} from "@react-navigation/native";

import MainTabScreen from "./screens/TapScreen/MainTabScreen";//logueado (cualquier cuenta)
import MainTabScreen2 from "./screens/TapScreen/MainTabScreen2"; //visitante (ninguna cuenta)
import MainTabScreen3 from "./screens/TapScreen/MainTabScreen3";//inscripto (con cuenta institucional)

import { DrawerContent } from "./screens/DraweScreen/DrawerContent"; //logueado
import { DrawerContent2 } from "./screens/DraweScreen/DrawerContent2";  // visitante
import { DrawerContent3 } from "./screens/DraweScreen/DrawerContent3";   //inscripto


import { createDrawerNavigator } from "@react-navigation/drawer";
import RootStackScreen from "./screens/RootStackScreen";

import AsyncStorage from "@react-native-community/async-storage";
import * as global from "./database/variablesGlobales";
import { AuthContext } from "./components/context";

import { useGoogleLogin, useOnAuthStateChanged, useGoogleSignOut } from './firebase/hooks'
import { useRegisterForPushNotificationsAsync } from './notifications/hooks';


const DrawerUserLogged = createDrawerNavigator();

const App = () => {
  //Tema de colores de la app
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme; //cual es que esta seleccionado
  
  useEffect(() => {hacer()}, [])

  const hacer = async () => {
    const valueString = await AsyncStorage.getItem('DB_Notifications');
    // const value = Object.entries();
    const value = JSON.parse(valueString);
    console.log('DB');
    console.log(value)
  }

  //Manejandro Las vistas que apareceran en la app
  const [visitante,setVisitante]= useState(false);// no tiene cuenta
  
  const [inscripto,setInscripto]= useState(false);// tiene cuenta institucional

  //Manejo de la sesión
  const {isLoading, userLogged, userProfile, setIsLoading, setUserLogged, setUserProfile} = useOnAuthStateChanged();
  //Manejo de las notificaciones
  const {expoPushToken, setExpoPushToken }  = useRegisterForPushNotificationsAsync();
  
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

  const authContext = React.useMemo(
    () => ({
      eliminarToken: () => {
          ///hook();
      },
      signOutUser: () => {
        console.log('sesión cerrada')
        useGoogleSignOut();
        setUserLogged(false);
        setUserProfile(null)
        setIsLoading(false)
      },
      handleGLogin: () => { 
        useGoogleLogin(setIsLoading, expoPushToken);
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
      getIsLoading: () => {
        return isLoading;
      }, 
      getUserLogged: () => {
        return userLogged;
      },
      getUserProfile: () => {
        return userProfile;
      } ,
      getExpoPushToken: () => {
        return expoPushToken ? expoPushToken : null;
      },
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
          global.primeraVez = false; //esta linea ya no sirve
        } else {
          global.primeraVez = false; //esta linea ya no sirve global
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

  const renderIF=(VIS,UL,INS)=> {//se encarga de desirme si visitante, usuario logueado o usuario inscripto son falsos para poder entrar a inicio de sesion
    if(VIS===false && UL===false && INS ===false){
      return true
    }else{
      // console.log("hay que ordenar los componentes")
      return false
    }
  }
  
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer >
          {/* {userLogged === true  ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )} */}
           {/* esta pila de navegacion solo aparecera cuando el usuario se logueo con cualquier cuenta */}
            
              
              {userLogged === true ? (
                <DrawerUserLogged.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
                  <DrawerUserLogged.Screen name="UsuarioLogueado" component={MainTabScreen} />
                </DrawerUserLogged.Navigator>
              ): null}
              {inscripto === true ? (
                <DrawerUserLogged.Navigator drawerContent={(props) => <DrawerContent2 {...props} />} >
                  <DrawerUserLogged.Screen name="UsuarioInscripto" component={MainTabScreen2} />
                </DrawerUserLogged.Navigator>
              ): null}
              {visitante === true ? (
                <DrawerUserLogged.Navigator drawerContent={(props) => <DrawerContent3 {...props} />} >
                  <DrawerUserLogged.Screen name="Visitante" component={MainTabScreen3} />
                </DrawerUserLogged.Navigator>
              ): null}

              {renderIF(visitante,inscripto,userLogged) === true ? (
                <RootStackScreen />
              ) : null}
              
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
