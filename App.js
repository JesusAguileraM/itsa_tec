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

import { useGoogleLogin, useOnAuthStateChanged, useGoogleSignOut } from './firebase/hooks'
import { useRegisterForPushNotificationsAsync } from './notifications/hooks';



const Drawer = createDrawerNavigator();

const App = () => {

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
