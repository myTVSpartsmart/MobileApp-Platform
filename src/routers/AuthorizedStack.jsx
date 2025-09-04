import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashScreen from "../Screens/DashScreen";
import "../service/apiInterceptor";
import SplashScreen from "../Screens/SplashScreen";
import SearchCustomer from "../Screens/CreateOrderModule/SearchCustomer";

import LoginScreen from "../Screens/LoginScreen";

import HomeScreen from "../Screens/HomeScreen";
import ForgotPassword from "../Screens/ForgotPassword";
import TabNavigator from "../Navigation/TabNavigator";

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
<<<<<<< HEAD
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
=======
       <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
>>>>>>> 5d431026c49fd293ce80ce6155f1efd1f5c6f797
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
