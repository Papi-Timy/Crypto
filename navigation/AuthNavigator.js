import React from "react";

import {Login,Register} from '../screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Tabs from "./tabs"
import HomTab from "./bottomTab";

const Stack = createNativeStackNavigator();

function AuthNav() {
    return (
     
        <Stack.Navigator  screenOptions={{
          headerShown:false,
        }} initialRouteName='login'>
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='register' component={Register} />
          <Stack.Screen name='Home_tab' component={HomTab}/>
        </Stack.Navigator>
      
    );
  }


  export default AuthNav;