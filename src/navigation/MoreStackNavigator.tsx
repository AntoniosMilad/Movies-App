import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {MoreScreen} from 'screens/More/MoreScreen';


const Stack = createStackNavigator();

export const MoreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MoreStack" component={MoreScreen} options={{headerShown:false}}/>

    </Stack.Navigator>
  );
}

