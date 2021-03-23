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

import { AuthContext } from "./components/context";

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as crudToken from "./database/crudToken";  //Aqui esta lo del crud de token y user

import { useGoogleLogin, useOnAuthStateChanged, useGoogleSignOut, cerrarSesion_ir_a_login} from './firebase/hooks'
import { useRegisterForPushNotificationsAsync } from './notifications/hooks';

const DrawerUserLogged = createDrawerNavigator();

const App = () => {
  
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme; //cual es que esta seleccionado

  //Manejandro Las vistas que apareceran en la app
  //Manejo de la sesión
  const {isLoading, userLogged, userProfile,visitante,inscripto, setIsLoading, setUserLogged, setUserProfile, setVisitante, setInscripto} = useOnAuthStateChanged();
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
          userToken: false,
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
        useGoogleSignOut(setVisitante,setInscripto,setUserLogged);
        setUserProfile(null)
        setIsLoading(false)
        
      },
      handleGLogin: async () => { 
        useGoogleLogin(setIsLoading,setVisitante,setInscripto,setUserLogged, expoPushToken,);
      },
      ir_a_sesion: () => {
        setVisitante(false);
        setInscripto(false);
        setUserLogged(false);
        cerrarSesion_ir_a_login(setVisitante,setInscripto,setUserLogged);
      },
      regresarHome: () => {
          setVisitante(true);
          setInscripto(false);
          setUserLogged(false);
      },
      getIsLoading: () => {
        return isLoading;
      }, 
      getUserLogged: () => {
        return userLogged;
      },
      getUserProfile: () => {
        return userProfile;
      },
      getExpoPushToken: () => {
        return expoPushToken ? expoPushToken : null;
      },
      saveToken: async(Token) => {
        await crudToken.useGuardarToken(Token);
      },
      deleteToken: async() => {
        await crudToken.useEliminarToken();
      },
      getToken: async() => {
        return await crudToken.useObtenerToken();
      },
      guardarSesion: async(ObjetSesion) => {
        await crudToken.useGuardarSesion(ObjetSesion);
      },

      eliminarSesion: async() => {
        await crudToken.useEliminarSesion();
      },

      obtenerDatosSesion: async() => {
        return await crudToken.useObtenerSesion();
      },

    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      const S=crudToken.useObtenerSesion();
      dispatch({ type: "RETRIEVE_TOKEN", token: true });
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
              {/* {userLogged === true ? (
                <DrawerUserLogged.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
                  <DrawerUserLogged.Screen name="UsuarioLogueado" component={MainTabScreen} />
                </DrawerUserLogged.Navigator>
              ): null} */}
              {inscripto === false ? (
                <DrawerUserLogged.Navigator drawerContent={(props) => <DrawerContent2 {...props} />} >
                  <DrawerUserLogged.Screen name="UsuarioInscripto" component={MainTabScreen2} />
                </DrawerUserLogged.Navigator>
              ): null}
              {/* {visitante === true ? (
                <DrawerUserLogged.Navigator drawerContent={(props) => <DrawerContent3 {...props} />} >
                  <DrawerUserLogged.Screen name="Visitante" component={MainTabScreen3} />
                </DrawerUserLogged.Navigator>
              ): null}

              {renderIF(visitante,inscripto,userLogged) === true ? (
                <RootStackScreen />
              ) : null} */}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
