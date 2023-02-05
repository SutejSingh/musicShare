import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConnectAccounts from './Screens/Auth/ConnectAccounts';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/Auth/SplashScreen';
import Login from './Screens/Auth/Login';
import CreateAccount from './Screens/Auth/CreateAccount';
import Tabs from './Screens/Tabs';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Tabs">
          {/* Stack Screen Login, Signup and splash screen */}
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              // Hiding header for Splash Screen
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              // Hiding header for Splash Screen
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              // Hiding header for Splash Screen
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConnectAccounts"
              component={ConnectAccounts}
              // Hiding header for Splash Screen
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              // Hiding header for Splash Screen
              options={{ headerShown: false }}
            />
         </Stack.Navigator>
    </NavigationContainer>
  );
}

