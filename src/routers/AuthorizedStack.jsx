import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashScreen from "../Screens/DashScreen";
import "../service/apiInterceptor";
import SplashScreen from "../Screens/SplashScreen";
import SearchCustomer from "../Screens/CreateOrderModule/SearchCustomer";
import PaymentEntry from "../Screens/CreateReceiptModule/PaymentEntry"

import LoginScreen from "../Screens/LoginScreen";
import ChallanPayment from "../Screens/CreateReceiptModule/ChallanPayment"
import PasswordVerification from "../Screens/PasswordVerification"
import DisplayCustomer from "../Screens/CreateReceiptModule/DisplayCustomer";
import ExcessAmount from "../Screens/CreateReceiptModule/ExcessAmount";
import PaymentMethod from "../Screens/CreateReceiptModule/PaymentMethod"
import CashPayment from "../Screens/CreateReceiptModule/CashPayment"
import HomeScreen from "../Screens/HomeScreen";
import ForgotPassword from "../Screens/ForgotPassword";
import ViewHistoryScreen from "../Screens/ViewHistoryScreen";
import OrderDetailsScreen from "../Screens/OrderDetailsScreen";
import TabNavigator from "../Navigation/TabNavigator";
import CustomerSearch from "../Screens/CreateReceiptModule/CustomerSearch"
import HeaderIcons from "../Components/HeaderIcons";

import ProfileScreen from "../Screens/ProfileScreen";
import SupportScreen from "../Screens/SupportScreen";
import ChangePasswordScreen from "../Screens/ChangePasswordScreen";
import DisplayInvoices from "../Screens/CreateReceiptModule/DisplayInvoices";

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
        name="CashPayment"
        component={CashPayment}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="ChallanPayment"
        component={ChallanPayment}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="CustomerSearch"
        component={CustomerSearch}
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
      <Stack.Screen
        name="PasswordVerification"
        component={PasswordVerification}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="HeaderIcons"
        component={HeaderIcons}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="DisplayCustomer"
        component={DisplayCustomer}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="DisplayInvoices"
        component={DisplayInvoices}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="PaymentEntry"
        component={PaymentEntry}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="ExcessAmount"
        component={ExcessAmount}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
