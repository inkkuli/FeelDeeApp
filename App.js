import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feeldeemonth from './screens/Feeldeemonth.js';
import Feeldeediary from './screens/Feeldeediary.js';
import Feeldeetype from './screens/Feeldeetype.js';
import HomeStack from './navigations/Homestack.js';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <HomeStack/>
    </NavigationContainer>
    


  );
}

