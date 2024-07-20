import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatScreen } from 'screens/Chat/ChatScreen';


const Stack = createStackNavigator();

export const ChatStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatStack" component={ChatScreen}  options={{
          headerShown: false,
        }}/>

    </Stack.Navigator>
  );
}

