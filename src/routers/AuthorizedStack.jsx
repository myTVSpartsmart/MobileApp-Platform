import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashScreen from "../Screens/DashScreen";
import "../service/apiInterceptor";
import SplashScreen from "../Screens/SplashScreen";
import SearchCustomer from "../Screens/CreateOrderModule/SearchCustomer";



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

    </Stack.Navigator>
  );
};

export default AuthorizedStack;
