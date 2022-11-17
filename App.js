
import React from 'react';
import { CryptoDetail, Settings, Transaction } from "./screens";
import Tabs from "./navigation/tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import AuthNav from './navigation/AuthNavigator';
const App  = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <AuthNav/>


     {/* <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
        />
        
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator> */}
  </NavigationContainer>
  );
};


export default App;
