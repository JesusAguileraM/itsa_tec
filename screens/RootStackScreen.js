import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import IniciarSecionScreen from './IniciarSecionScreen';
import RegistrarseScreen from './RegistrarseScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="IniciarSecionScreen" component={IniciarSecionScreen}/>
        <RootStack.Screen name="RegistrarseScreen" component={RegistrarseScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;