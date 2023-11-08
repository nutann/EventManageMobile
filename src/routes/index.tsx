import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Text, View, Button } from 'react-native';
import { Welcome } from "../pages/Welcome";
import { SignIn } from "../pages/SignIn";
import { Login } from "../pages/Login";
import { AppCode } from "../pages/AppCode";
import { Profile } from "../pages/Profile";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function EmptyScreen() {
  return <View />;
}


function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile"   
     options={{
      tabBarShowLabel: false,
      // Custom Name
      headerShown: false, 
  }} component={Profile} />
      <Tab.Screen name="Feed" component={EmptyScreen} />
      <Tab.Screen name="Notifications" component={EmptyScreen} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();
type StackNavigation = {
  Welcome: undefined;
  SignIn: undefined;
  Login: undefined;
  };
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
            <Stack.Screen
        name="AppCode"
        component={AppCode}
        options={{ headerShown: false }}
      />
                <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
}
