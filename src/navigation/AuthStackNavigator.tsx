import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'screens/Login/Login';


const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
  );
}

