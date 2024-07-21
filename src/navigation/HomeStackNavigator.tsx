import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/Home/HomeScreen';
import { MovieDetails } from 'screens/MovieDetails/MovieDetails';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
}

