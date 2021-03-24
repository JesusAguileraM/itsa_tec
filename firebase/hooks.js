import React, { useState, useEffect } from "react";
import firebase from 'firebase'; //basic firebase
import Firebase from '../firebase/Firebase'; //This is the initialized Firebase
import Constants from 'expo-constants'; //So we can read app.json extra
import * as Google from 'expo-google-app-auth'; //google auth libraries
import { getToken } from '../notifications/hooks';
import Odoo from 'react-native-odoo-promise-based';
import * as crudToken from "../database/crudToken";  //Aqui esta lo del crud de token y user
import * as api from '../auth/request';
import axios from 'axios';

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

    const [visitante,setVisitante]= useState(false);// no tiene cuenta

    const [inscripto,setInscripto]= useState(false);// tiene cuenta institucional

    
    
    //guarda la sesión de firestore
    const [userProfile, setUserProfile] = useState(null);
    //pues ya sabes es pera bloquear la interfaz con un circulito jjajajaja
    const [isLoading, setIsLoading] = useState(true);

    
    
    useEffect(() => {
        const authListener = Firebase.auth().onAuthStateChanged((user) => {
            if(user ? true : false){
                //setUserLogged(user ? true : false);
                const userData = user.providerData[0];
                const perfil = {
                    "name": userData.displayName,
                    "email": userData.email,
                    "picture": userData.photoURL,
                };
                crudToken.useGuardarSesion(perfil);
                setUserLogged(true);
                setVisitante(false);
                setInscripto(false);
            }else{
                crudToken.useEliminarSesion();
                crudToken.useEliminarToken();
                setUserLogged(false);
                setVisitante(true);
                setInscripto(false);
            }
            
        
            setIsLoading(false);
            setUserProfile(user);
        });
        return authListener; //cuando se cierre la app se desmontará el oyente
      }, []);   
    return {userLogged, userProfile, isLoading ,visitante,inscripto, setUserLogged, setUserProfile, setIsLoading, setVisitante, setInscripto};
}

///Este es el metodo chido para iniciar sesión en google

async function useGoogleLogin(setIsLoading,setVisitante,setInscripto,setUserLogged, expoPushToken, setExpoPushToken )  {
    setIsLoading(true);
    try {
        // Antes de loguearnos debemos comprobar si permitió las notificaciones, si es así continuamos, si no return
        let token = {};
        // console.log("Token v1 es:")
        // console.log(expoPushToken)
        if(expoPushToken){ //entra porque no hay token pero puede ser vacío
            if(!expoPushToken.expoPushToken){
                // console.log('Token indefinido pedimos de nuevo 1')
                token = await getToken();
                // console.log(token);
            }
        } else {
            // console.log('Token indefinido pedimos de nuevo 2')
            token = await getToken();
            //crudToken.useGuardarToken(token);
            // console.log(token);
        }

        //await GoogleSignIn.askForPlayServicesAsync();
        const result = await Google.logInAsync({ //return an object with result token and user
            iosClientId: Constants.manifest.extra.IOS_KEY, //From app.json
            androidClientId: Constants.manifest.extra.ANDROID_KEY, //From app.json
        });

        if (result.type === 'success') {
            // console.log(result); //este es el objeto de sesion correcto para empezar el logueo con firestore
            //Creamos las credenciales para prepar todo para autentificarnos con google
            const credential = firebase.auth.GoogleAuthProvider.credential( //Set the tokens to Firebase
                result.idToken,
                result.accessToken
            );

            //Empezamos la authetificación con google y una vez que se atentifique la seión nos devuelve un objeto con la sesión
            Firebase.auth()
            .signInWithCredential(credential) //Login to Firebase
            .then( async sesion => {
                crudToken.useGuardarToken(token);
                const profile = sesion.additionalUserInfo.profile;
                let formData = new FormData()
                formData.append("usuario", profile.name);
                formData.append("emailPersonal", profile.email);
                formData.append("tokenN", token.data);
                const obj = { 
                    "usuario": profile.name,
                    "emailPersonal": profile.email,
                    "tokenN": token.data
                }
                const user = await api.postUserT(obj, 'temporaryusers');    
                console.log("Ususario devuelto")
                console.log(user);
                
                // let resp = null;
                // try {
                //     resp = await axios.post('https://proagrimex.com/api/v1/temporaryusers', obj);
                //     console.log(resp.data);
                // } catch (err) {
                //     // Handle Error Here
                //     console.error(err);
                // }

                // postData(`${config}/users`, { 
                //     fullName: sesion.additionalUserInfo.profile.name,
                //     email: sesion.additionalUserInfo.profile.email,
                //     tokenN: token.data,
                // }).then(data => {
                //     console.log(data);
                //     alert(` Usuario creado con exito `) // JSON data parsed by `data.json()` call
                // });
                // console.log(sesion.additionalUserInfo.profile)
                // console.log(sesion.additionalUserInfo.profile.email)
                


                //conexion odoo
                // alert('Mandamos el token y correo')
                // console.log('Mandamos el token y correo al servidor porque ya se validó que el usuario existe')
                // console.log(sesion);
                // let matricula = sesion.additionalUserInfo.profile.email.slice(2, 10);
                // alert(matricula + "   " + token.data )
                // console.log(matricula + "   " + token.data);
                // instanciaOdoo(matricula, token.data);
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

const postData = async (url = '', data = {}) => {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

//conectarlo con odoo
const instanciaOdoo = (matricula, token) => {
    var odoo = new Odoo({
        // url: 'https://siit.itsa.edu.mx',  //creo que es el host
        host: 'https://siit.itsa.edu.mx',
        // port: '80',//default 80 si no se especifica
        db: 'itsa900',
        username: 'xmlrpc_user',
        password: 'Alum2021#',
        // protocol: 'http'  //si no se especifica el default será http
      });

      odoo.connect()
      .then(response => { 
          console.log('Conexión exitosa');
          console.log(response);
       })
      .catch(e => { 
          console.log('Error al conectarse al servidor');
       });

       odoo.connect()
       .then(response => {
            console.log('Connected to Odoo server. user esta conectado:');
            console.log(response);
            var inParams = [];
            inParams.push('AUMM971015HMNGGN06');
            var param = [];
            param.push(inParams);

            var params = {
                model: 'itsa.escolares.alumnos',
                method: 'siit3_get_prealumno',
                args: param,
                kwargs: {},
              };//params

            odoo.rpc_call('/', params)
            .then(response => { 
                console.log(response);
             })
            .catch(e => { 
                console.log(e);
             })

            // odoo.execute_kw('itsa.escolares.alumnos', 'siit3_get_prealumno', params, function (err2, value2) {
            //     if (err2) { return console.log(err2); }
            //     console.log('Result: ', value2);
            // });
       })
       .catch(e => {
          console.log('No se pudo conectar');
          console.log(e);
       });

      //funciona
    //   odoo.connect(function (err) {
    //     if (err) { return console.log(err); }
    //     console.log('Connected to Odoo server. user esta conectado:');
    //     var inParams = [];
    //     inParams.push('15020385');
    //     var params = [];
    //     params.push(inParams);
    //     odoo.execute_kw('itsa.escolares.alumnos', 'siit1_getalumno', params, function (err2, value2) {
    //         if (err2) { return console.log(err2); }
    //         console.log('Result: ', value2);
    //         console.log('Result:',value2.state);
    //         console.log('Result:',value2.carrera);
    //         console.log('Result:',value2.result);
    //         console.log('Result:',value2.ncontrol);
    //         console.log('Result:',value2.nombre);
    
    //     });
    //   });

    //   odoo.connect(function (err) {
    //     if (err) { return console.log(err); }
    //     console.log('Connected to Odoo server. user esta conectado:');
    //     var inParams = [];
    //     inParams.push('');
    //     inParams.push(matricula);
    //     inParams.push(token);
    //     var params = [];
    //     params.push(inParams);
    //     odoo.execute_kw('itsa.escolares.alumnos', 'siit2_registrar_alumno', params, function (err2, value2) {
    //         if (err2) { return console.log(err2); }
    //         console.log('Result: ', value2);
    //         alert('Todo excelente');
    //     });
    //   });

    //   odoo.connect(function (err) {
    //     if (err) { return console.log(err); }
    //     console.log('Connected to Odoo server. user esta conectado:');
    //     var inParams = [];
    //     inParams.push('');
    //     inParams.push('AUMJ960505HMNGGS03');
    //     inParams.push('JESUS');
    //     inParams.push('ALEJANDRO');
    //     inParams.push('al15020357@itsa.edu.mx');
    //     inParams.push('12345678');
    //     var params = [];
    //     params.push(inParams);
    //     odoo.execute_kw('itsa.escolares.alumnos', 'siit2_registrar_alumno', params, function (err2, value2) {
    //         if (err2) { return console.log(err2); }
    //         console.log('Result: ', value2);
    //     });
    //   });
}

//cerrar la sesión de google
const useGoogleSignOut = (setVisitante,setInscripto,setUserLogged) => {
    Firebase.auth().signOut();
    crudToken.useEliminarSesion();
    crudToken.useEliminarToken();
    setVisitante(true);
    setInscripto(false);
    setUserLogged(false);

}


export { useOnAuthStateChanged, useGoogleLogin, useGoogleSignOut} 