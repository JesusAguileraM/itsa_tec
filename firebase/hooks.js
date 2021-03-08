import React, { useState, useEffect } from "react";
import firebase from 'firebase'; //basic firebase
import Firebase from '../firebase/Firebase'; //This is the initialized Firebase
import Constants from 'expo-constants'; //So we can read app.json extra
import * as Google from 'expo-google-app-auth'; //google auth libraries
import { getToken } from '../notifications/hooks';

  //este efecto se ejecuta al montar el componente no lo olvides, todos los useEffect hacen eso
  //¿sabes que es lo interesante?
  //hemos creado un oyente authListener y este amiguito siempre existirá porque escuchará cuando 
  //    se inice sesión, te explico, cuando llamamos Glogin creamos una sesión con Firebase.auth()
  //    y una vez que se cree esa entonces se llamará el Firebase.auth().onAuthStateChanged de abajo
  //    esto es porque es un oyente y detecta cuando hay un cambio en la sesión, también si cerramos la sesión
  //    se llamará este mismo método para actualizar los datos de setUserLogged para si está logueado o no, de
  //    setIsLoading para si vamos a cargar o no, setUserProfile para guardar el usuario con sesión o null si no tiene sesión
const useOnAuthStateChanged = () => {
    //guarda si el usuario esta logueado (observe el método Glogin)
    const [userLogged, setUserLogged] = useState(false);
    //guarda la sesión de firestore
    const [userProfile, setUserProfile] = useState(null);
    //pues ya sabes es pera bloquear la interfaz con un circulito jjajajaja
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const authListener = Firebase.auth().onAuthStateChanged((user) => {
          setUserLogged(user ? true : false);
          setIsLoading(false);
          setUserProfile(user);
        });
        return authListener; //cuando se cierre la app se desmontará el oyente
      }, []);   
    return {userLogged, userProfile, isLoading, setUserLogged, setUserProfile, setIsLoading};
}

///Este es el metodo chido para iniciar sesión en google

const useGoogleLogin = async (setIsLoading, expoPushToken, setExpoPushToken ) => {
// const useGoogleLogin = async (setIsLoading) => {
    try {
        // Antes de loguearnos debemos comprobar si permitió las notificaciones, si es así continuamos, si no return
        let token = {};
        console.log("Token v1 es:")
        console.log(expoPushToken)
        if(expoPushToken){ //entra porque no hay token pero puede ser vacío
            if(!expoPushToken.expoPushToken){
                console.log('Token indefinido pedimos de nuevo 1')
                token = await getToken();
                console.log(token);
            }
        } else {
            console.log('Token indefinido pedimos de nuevo 2')
            token = await getToken();
            console.log(token);
        }

        //await GoogleSignIn.askForPlayServicesAsync();
        const result = await Google.logInAsync({ //return an object with result token and user
            iosClientId: Constants.manifest.extra.IOS_KEY, //From app.json
            androidClientId: Constants.manifest.extra.ANDROID_KEY, //From app.json
        });

        if (result.type === 'success') {
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
                alert('Mandamos el token y correo')
                console.log('Mandamos el token y correo al servidor porque ya se validó que el usuario existe')

                // console.log(sesion)  //esta es la data de la sesión y su estructura la imprimimos para verla alex
            })
            .catch((error) => {
                console.log(error);
                alert('No hay conexión a internet')
            });
        } else {
            //CANCEL
        }
    } catch ({ message }) {
        alert('login: Error:' + message);
    }

}

//cerrar la sesión de google
const useGoogleSignOut = () => {
    Firebase.auth().signOut();
}

export { useOnAuthStateChanged, useGoogleLogin, useGoogleSignOut } 