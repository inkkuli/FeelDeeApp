import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feeldeemonth from '../screens/Feeldeemonth';
import Feeldeediary from '../screens/Feeldeediary';
import Feeldeetype from '../screens/Feeldeetype';
import FeleldeeInput from '../screens/FeeldeeInput';

const Stack = createStackNavigator();

export default function HomeStack() {
   return (
      <Stack.Navigator initialRouteName="Feeldeemonth">
         <Stack.Screen
         name="Feeldeemonth"
         component={Feeldeemonth}
         options={{ title: "Feeldeemonth" }}
         />
        <Stack.Screen
         name="Feeldeediary"
         component={Feeldeediary}
         options={{ title: "Feeldeediary" }}
         />
         <Stack.Screen
         name="Feeldeetype"
         component={Feeldeetype}
         options={{ title: "Feeldeetype" }}
         />
         <Stack.Screen
         name="FeleldeeInput"
         component={FeleldeeInput}
         options={{ title: "FeleldeeInput" }}
         />
         
      </Stack.Navigator>
    );
}
