import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import IniciarSecionScreen from './IniciarSecionScreen';
import RegistrarseScreen from './RegistrarseScreen';
import Parte1Screen from '../screens/registroScreen/RegistroScreen1';
import Parte2Screen from '../screens/registroScreen/RegistroScreen2';
import Parte3Screen from '../screens/registroScreen/RegistroScreen3';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="IniciarSecionScreen" component={IniciarSecionScreen}/>
        <RootStack.Screen name="RegistrarseScreen" component={RegistrarseScreen}/>
        <RootStack.Screen name="Parte1Screen" component={Parte1Screen}/>
        <RootStack.Screen name="Parte2Screen" component={Parte2Screen}/>
        <RootStack.Screen name="Parte3Screen" component={Parte3Screen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;