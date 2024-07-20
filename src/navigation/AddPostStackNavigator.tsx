import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdPostScreen } from 'screens/AdPost/AdPostScreen';


const Stack = createStackNavigator();

export const AdPostStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AdPostStack" component={AdPostScreen}  options={{
          headerShown: false,
        }}/>

    </Stack.Navigator>
  );
}

