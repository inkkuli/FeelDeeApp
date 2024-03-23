import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feeldeemonth from '../screens/Feeldeemonth';
import Feeldeediary from '../screens/Feeldeediary';
import Feeldeetype from '../screens/Feeldeetype';
import FeeldeeInput1 from '../screens/FeeldeeInput1';
import FeeldeeInput2 from '../screens/FeeldeeInput2';
import FeeldeeInput3 from '../screens/FeeldeeInput3';
import FeeldeeInput4 from '../screens/FeeldeeInput4';
import FeeldeeInput5 from '../screens/FeeldeeInput5';
import FeeldeeInput6 from '../screens/FeeldeeInput6';
import FeeldeeInput7 from '../screens/FeeldeeInput7';
import FeeldeeInput8 from '../screens/FeeldeeInput8';

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
         name="FeeldeeInput1"
         component={FeeldeeInput1}
         options={{ title: "FeeldeeInput1" }}
         />
         <Stack.Screen
         name="FeeldeeInput2"
         component={FeeldeeInput2}
         options={{ title: "FeeldeeInput2" }}
         />
         <Stack.Screen
         name="FeeldeeInput3"
         component={FeeldeeInput3}
         options={{ title: "FeeldeeInput3" }}
         />
         <Stack.Screen
         name="FeeldeeInput4"
         component={FeeldeeInput4}
         options={{ title: "FeeldeeInput4" }}
         />
         <Stack.Screen
         name="FeeldeeInput5"
         component={FeeldeeInput5}
         options={{ title: "FeeldeeInput5" }}
         />
         <Stack.Screen
         name="FeeldeeInput6"
         component={FeeldeeInput6}
         options={{ title: "FeeldeeInput6" }}
         />
         <Stack.Screen
         name="FeeldeeInput7"
         component={FeeldeeInput7}
         options={{ title: "FeeldeeInput7" }}
         />
         <Stack.Screen
         name="FeeldeeInput8"
         component={FeeldeeInput8}
         options={{ title: "FeeldeeInput8" }}
         />
         
      </Stack.Navigator>
    );
}
