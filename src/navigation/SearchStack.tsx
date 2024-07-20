import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'screens/Login/Login';


const Stack = createStackNavigator();

export const searchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="searchStack" component={Login} />

    </Stack.Navigator>
  );
}

