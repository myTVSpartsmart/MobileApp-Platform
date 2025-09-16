import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashScreen from "../Screens/DashScreen";
import "../service/apiInterceptor";
import SplashScreen from "../Screens/SplashScreen";
import SearchCustomer from "../Screens/CreateOrderModule/SearchCustomer";

import LoginScreen from "../Screens/LoginScreen";
import PasswordVerification from "../Screens/PasswordVerification"

import HomeScreen from "../Screens/HomeScreen";
import ForgotPassword from "../Screens/ForgotPassword";
import ViewHistoryScreen from "../Screens/ViewHistoryScreen";
import OrderDetailsScreen from "../Screens/OrderDetailsScreen";
import TabNavigator from "../Navigation/TabNavigator";
import HeaderIcons from '../Components/HeaderIcons'; // Adjust path if needed


import ProfileScreen from "../Screens/ProfileScreen";
import SupportScreen from "../Screens/SupportScreen";
import ChangePasswordScreen from "../Screens/ChangePasswordScreen";
const AuthorizedStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={"SplashScreen"}
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="DashScreen"
        component={DashScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="SearchCustomer"
        component={SearchCustomer}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
       <Stack.Screen
        name="ViewHistoryScreen"
        component={ViewHistoryScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
       <Stack.Screen
        name="OrderDetailsScreen"
        component={OrderDetailsScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
       <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
