import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashScreen from "../Screens/DashScreen";
import "../service/apiInterceptor";
import SplashScreen from "../Screens/SplashScreen";
import HomeScreen from "../Screens/HomeScreen";
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
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
