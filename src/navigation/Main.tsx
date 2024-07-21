import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeStackNavigator} from "./HomeStackNavigator";
import {ProfileStackNavigator} from "./ProfileStackNavigator";
import {MoreStackNavigator} from "./MoreStackNavigator";
import {
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const Tab = createBottomTabNavigator();
export const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'white',
  };
  return (

    <Tab.Navigator
    
    // initialRouteName={initialRouteName}
    screenOptions={{
      headerShown: false ,
      tabBarActiveTintColor: "#0000FF",
      tabBarInactiveTintColor: "#636469",
    }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      
      />

      <Tab.Screen
        name="My account"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}