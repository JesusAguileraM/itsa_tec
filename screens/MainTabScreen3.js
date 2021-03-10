import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";
import NotificationScreen from  "./NotificationScreen";
import SingleStorage from '../database/singleStorage';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
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

export default MainTabScreen;

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




