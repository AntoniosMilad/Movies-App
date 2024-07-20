import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen } from "screens/Account/AccountScreen";
import { HomeScreen } from "screens/Home/HomeScreen";



import {HomeStackNavigator} from "./HomeStackNavigator";
import {ChatStackNavigator} from "./ChatStackNavigator";
import {AdPostStackNavigator} from "./AddPostStackNavigator";
import {ProfileStackNavigator} from "./ProfileStackNavigator";
import {MoreStackNavigator} from "./MoreStackNavigator";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
        }}
      />


      <Tab.Screen
        name="My account"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
        }}
      />


      <Tab.Screen
        name="Add your Ad"
        component={AdPostStackNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatStackNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreStackNavigator}
        options={{
          headerShown: false,
        }}
      />

      {/* <Tab.Screen
        name="Account"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
}