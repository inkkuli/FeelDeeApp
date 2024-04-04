import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feeldeemonth from '../screens/Feeldeemonth';
import Feeldeediary from '../screens/Feeldeediary';

import FeeldeeInput from '../screens/FeeldeeInput';
import FeeldeeDetail from '../screens/FeeldeeDetail';

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
         name="FeeldeeInput"
         component={FeeldeeInput}
         options={{ title: "FeeldeeInput" }}
         />
      
         <Stack.Screen
         name="FeeldeeDetail"
         component={FeeldeeDetail}
         options={{ title: "FeeldeeDetail" }}
         />
         
      </Stack.Navigator>
    );
}
