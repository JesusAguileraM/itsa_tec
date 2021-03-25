import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {View, SafeAreaView, StyleSheet,ScrollView,TouchableOpacity,Text} from 'react-native';
import {Avatar,Title,Caption,Surface} from 'react-native-paper';

import NotificationScreen from  "../NotificationScreen";
import HomeScreen from "../HomeScreen";
import AlumnoScreen from '../ProcesoSIIT/Alumnos/AlumnoScreen';
    import Procedencia from '../ProcesoSIIT/Alumnos/ProcedenciaScreen';
    import DatosGenerales from '../ProcesoSIIT/Alumnos/DatosGeneralesScreen';
    import DatosFamiliares from '../ProcesoSIIT/Alumnos/DatosFamiliaresScreen';
    import SituacionActual from '../ProcesoSIIT/Alumnos/SituacionActualScreen';
    import Calificaciones from '../ProcesoSIIT/Alumnos/CalificacionesScreen';
    import Expedientes from '../ProcesoSIIT/Alumnos/ExpedientesScreen';
import CargasScreen from '../ProcesoSIIT/Cargas/CargasScreen';
import DescargasScreen from '../ProcesoSIIT/Descargas/DescargasScreen';
import DepositosScreen from '../ProcesoSIIT/DepositosBancarios/DepositosScreen';
    import VisualizarPagoScreen from '../ProcesoSIIT/DepositosBancarios/VisualizarPagoScreen';
    import CrearPagoScreen from '../ProcesoSIIT/DepositosBancarios/CrearPagoScreen';

    
import SingleStorage from '../../database/singleStorage';


const HomeStack = createStackNavigator();
const AlumnoStack = createStackNavigator();
const DescargasStack = createStackNavigator();
const DepositosBancariosStack = createStackNavigator();
const CargasStack = createStackNavigator();

const NotificationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen2 = () => {
  
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#0064A2",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Notificaciones',
        tabBarColor: '#006460',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Alumno"
      component={AlumnoStackScreen}
      options={{
        tabBarLabel: "Alumno",
        tabBarColor: "#808684",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Cargas"
      component={CargasStackScreen}
      options={{
        tabBarLabel: "Cargas",
        tabBarColor: "#006460",
        tabBarIcon: ({ color }) => (
          <Icon name="archive" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Descargas"
      component={DescargasStackScreen}
      options={{
        tabBarLabel: "Descargas",
        tabBarColor: "#808684",
        tabBarIcon: ({ color }) => (
          <Icon name="documents" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Depositos"
      component={DepositosBancariosStackScreen}
      options={{
        tabBarLabel: "Depositos",
        tabBarColor: "#006460",
        tabBarIcon: ({ color }) => (
          <Icon name="barcode" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
export default MainTabScreen2;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#0064A2",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#0064A2"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);


const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#006460',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#006460"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationStack.Navigator>
);



const AlumnoStackScreen = ({navigation}) => {
  
  return (
    <AlumnoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#000', // iOS
          elevation: 0, // Android
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <AlumnoStack.Screen
          name="Alumno"
          component={AlumnoScreen}
          options={{
            title: ' ',
            headerLeft: () => (
              <View style={{marginLeft: 5,flexDirection: 'row',width:400,}}>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={true} pagingEnabled={false} >
                <Surface>
                  <TouchableOpacity onPress={() => navigation.navigate('DatosGenerales')} style={styles.botonTabHeader}>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#000'}}>Datos Generales</Text> 
                  </TouchableOpacity>
                  </Surface> 
                  <TouchableOpacity onPress={() => navigation.navigate('Procedencia')} style={styles.botonTabHeader}>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#000'}}>Procedencia</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('DatosFamiliares')} style={styles.botonTabHeader}>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#000'}}>Datos Familiares</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('SituacionActual')} style={styles.botonTabHeader}>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#000'}}>Situación Actual</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Calificaciones')} style={styles.botonTabHeader}>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#000'}}>Calificaciones</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Expedientes')} style={styles.botonTabHeader}>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#000'}}>Expedientes</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            ),
            
          }}
        />
        <AlumnoStack.Screen 
          name="Procedencia"
          component={Procedencia}
          options={{
            title: 'Procedencia',
          }}
        />
        <AlumnoStack.Screen 
          name="DatosGenerales"
          component={DatosGenerales}
          options={{
            title: 'Datos generales',
          }}
        />
        <AlumnoStack.Screen 
          name="DatosFamiliares"
          component={DatosFamiliares}
          options={{
            title: 'Datos Familiares',
          }}
        />
        <AlumnoStack.Screen 
          name="SituacionActual"
          component={SituacionActual}
          options={{
            title: 'Situación Actual',
          }}
        />
        <AlumnoStack.Screen 
          name="Calificaciones"
          component={Calificaciones}
          options={{
            title: 'Calificaciones',
          }}
        />
        <AlumnoStack.Screen 
          name="Expedientes"
          component={Expedientes}
          options={{
            title: 'Expedientes',
          }}
        />
    </AlumnoStack.Navigator>
  );
};

const DepositosBancariosStackScreen = ({navigation}) => {
  
  return (
    <DepositosBancariosStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#006460',
          shadowColor: '#000', // iOS
          elevation: 0, // Android
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <DepositosBancariosStack.Screen
          name="Depositos"
          component={DepositosScreen}
          options={{
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#006460"
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
        <DepositosBancariosStack.Screen 
          name="CrearPagoScreen"
          component={CrearPagoScreen}
          options={{
            title: 'Procedencia',
          }}
        />
        <DepositosBancariosStack.Screen 
          name="VisualizarPagoScreen"
          component={VisualizarPagoScreen}
          options={{
            title: 'Datos generales',
          }}
        />
        <DepositosBancariosStack.Screen 
          name="ventana1"
          component={CrearPagoScreen}
          options={{
            title: 'Datos Familiares',
          }}
        />
        <DepositosBancariosStack.Screen 
          name="ventana2"
          component={CrearPagoScreen}
          options={{
            title: 'Situación Actual',
          }}
        />
        <DepositosBancariosStack.Screen 
          name="ventana3"
          component={CrearPagoScreen}
          options={{
            title: 'Calificaciones',
          }}
        />
        <DepositosBancariosStack.Screen 
          name="Ventana4"
          component={CrearPagoScreen}
          options={{
            title: 'Expedientes',
          }}
        />
    </DepositosBancariosStack.Navigator>
  );
};


const DescargasStackScreen = ({ navigation }) => (
  <DescargasStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#808684",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DescargasStack.Screen
      name="Descargas"
      component={DescargasScreen}
      options={{
        title: "Descargas",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#808684"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DescargasStack.Navigator>
);

const CargasStackScreen = ({ navigation }) => (
  <CargasStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#006460",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <CargasStack.Screen
      name="Cargas"
      component={CargasScreen}
      options={{
        title: "Cargas",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#006460"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </CargasStack.Navigator>
);










const styles = StyleSheet.create({
  botonTabHeader:{
    borderBottomColor:'#fff',
    borderTopColor:'#fff',
    borderLeftColor:'#fff',
    borderRightColor:'gray',
    backgroundColor: '#fff', 
    height:50,
    padding:5,
    justifyContent:'center',
    margin:5,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 25 ,
    shadowOffset : { width: 56, height: 13},
    borderWidth:0,
    borderRadius:0,
  }

})