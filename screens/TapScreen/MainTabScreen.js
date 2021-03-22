import React, {useState, useEffect} from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {View,} from "react-native";

import HomeScreen from "../HomeScreen";
import Inscripciones from "../InscripcionesScreen";
import ExploreScreen from "../ExploreScreen";
import ProfileScreen from "../ProfileScreen";
import NotificationScreen from  "../NotificationScreen";
import IniciarSecionScreen from "../IniciarSecionScreen";

import { Appbar,Avatar,Text } from 'react-native-paper';
import HeaderRight from '../../components/HeaderRight';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  
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
        name="Inscribirse"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: "Inscribirse",
          tabBarColor: "#2096B4",
          tabBarIcon: ({ color }) => (
            <Icon name="create" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarColor: "#808684",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Info.",
          tabBarColor: "#006460",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-information-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
        title: "ITSA",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#0064A2"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerRight:()=>(<HeaderRight/>)
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
        headerRight:()=>(<HeaderRight/>)
      }}
    />
  </NotificationStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2096BA",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Inscribirse"
      component={Inscripciones}
      options={{
        title: "Inscripción",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#2096BA"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerRight:()=>(<HeaderRight/>)
      }}
    />
  </DetailsStack.Navigator>
);


export default MainTabScreen;

