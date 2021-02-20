import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';

import * as global from "./database/variablesGlobales";

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  const [isDarkTheme, setIsDarkTheme] = React.useState(false); //va funcionar para guardar el tema es true or false

  const initialLoginState = { // SE ACTUALIZARA LA APLICACION CUANDO SE MODIFIQUE CUALQUIERA DE ESTOS DATOS
    isLoading: false,
    userName: null,
    userToken: null,
    logueado:null
  };

  const CustomDefaultTheme = { // tema por defecto
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = { //tema personalisado
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme; //cual es que esta seleccionado

  const loginReducer = (prevState, action) => { // aqui recivo dos parametros el primero es el estado de mi aplicacion y el segundo es un objeto de configuracion que contiene la informacion en "accion" y que puede acceder a ella usando "accion.yo_envie" ejemp. yo envie el token y usaurio entonces es accion.token y accion.user
    switch( action.type ) { // action.type es el 'LOGIN' O 'LOGUT' ES EL QUE YO ENVIO COMO PARAMETRO EN ACCION
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,   
          userName: action.id,
          userToken: action.token,
          isLoading: false,//no va cargar ningun componente hasta que is loading este en true, para todos los metodos de aqui
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const logueado = 'true';
//dispach = setLoginState
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => { //yo recivo un vector con información llamado foundUser que me lo envia el iniciarsecionScreen
      // setUserToken('fgkj');
       //setIsLoading(false); // este es para cuando se inicie secion se guarde y no se tenga que aparecer el splash otra vez
      const userToken = String(foundUser[0].userToken);//este viene de la data de user.js
      const userName = foundUser[0].username; //este viene tambien de la data user.js
    
      try {
        await AsyncStorage.setItem('userToken', userToken); //lo guardo en la base de datos local 
        await AsyncStorage.setItem('logueado', logueado); //Es para saber si estoy logueado
        global.lang='English';
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken }); //este seva a la lista del switch para ejecutar el LOGIN
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('logueado'); //Es para saber si estoy logueado
        global.lang="idioma Desconosido"
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);





  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userTokenLLave;
      userTokenLLave = null;
      // if(userToken !== 'testtoken')
      // AsyncStorage.setItem('logueado', userToken); //lo guardo en la base de datos local
      try {
        userTokenLLave = await AsyncStorage.getItem('userToken'); //aqui es donde nos saltamos el inicio de secion y splash porque obtiene el dato del userToken SI ya esta guardado
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userTokenLLave });
    }, 200);
  }, []);




  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }





  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      { loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;
