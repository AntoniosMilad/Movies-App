import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AccountScreen} from 'screens/Account/AccountScreen';


const Stack = createStackNavigator();

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountStack" component={AccountScreen} options={{headerShown:false}}/>

    </Stack.Navigator>
  );
}

