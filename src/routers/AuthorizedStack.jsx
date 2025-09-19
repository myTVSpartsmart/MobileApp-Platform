import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashScreen from "../Screens/DashScreen";
import "../service/apiInterceptor";
import SplashScreen from "../Screens/SplashScreen";
import SearchCustomer from "../Screens/CreateOrderModule/SearchCustomer";
import PaymentEntry from "../Screens/CreateReceiptModule/PaymentEntry"

import LoginScreen from "../Screens/LoginScreen";
import PasswordVerification from "../Screens/PasswordVerification"
import DisplayCustomer from "../Screens/CreateReceiptModule/DisplayCustomer";
import ExcessAmount from "../Screens/CreateReceiptModule/ExcessAmount";
import PaymentMethod from "../Screens/CreateReceiptModule/PaymentMethod"
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
import ViewReceiptScreen from '../Screens/ViewReceiptScreen';
import ReceiptDetailsScreen from '../Screens/ReceiptDetailsScreen';


import CreateOrderDetail from "../Screens/CreateOrderModule/CreateOrderDetail";
import BrandsScreen from "../Screens/CreateOrderModule/BrandsScreen";
import CategoryScreen from "../Screens/CreateOrderModule/CategoryScreen";
import SubCategoryScreen from "../Screens/CreateOrderModule/SubCategoryScreen";
import CreateOrderSuccess from "../Screens/CreateOrderModule/CreateOrderSuccess";
import CreateOrderFailure from "../Screens/CreateOrderModule/CreateOrderFailure";
import Confirmation from "../Screens/CreateOrderModule/Confirmation";
import ProductList from "../Screens/CreateOrderModule/ProductList";
import ReviewCart from "../Screens/CreateOrderModule/ReviewCart";


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
      <Stack.Screen
        name="ViewReceiptScreen"
        component={ViewReceiptScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
       <Stack.Screen
        name="ReceiptDetailsScreen"
        component={ReceiptDetailsScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="CreateOrderDetail"
        component={CreateOrderDetail}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="BrandsScreen"
        component={BrandsScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
       <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
        <Stack.Screen
        name="SubCategoryScreen"
        component={SubCategoryScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="CreateOrderSuccess"
        component={CreateOrderSuccess}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
        <Stack.Screen
        name="CreateOrderFailure"
        component={CreateOrderFailure}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
<Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="ReviewCart"
        component={ReviewCart}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
       
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
