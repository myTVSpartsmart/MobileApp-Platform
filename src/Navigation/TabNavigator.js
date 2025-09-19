import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../Screens/HomeScreen';
import SalesScreen from '../Screens/SalesScreen';
import ReceiptScreen from '../Screens/ReceiptScreen';
import ViewReceiptScreen from '../Screens/ViewReceiptScreen';
import BeatScreen from '../Screens/BeatScreen';
import ViewHistoryScreen from '../Screens/ViewHistoryScreen';
import OrderDetailsScreen from '../Screens/OrderDetailsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SupportScreen from '../Screens/SupportScreen';
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
import ReceiptDetailsScreen from '../Screens/ReceiptDetailsScreen';
import SearchCustomer from "../Screens/CreateOrderModule/SearchCustomer";
import CreateOrderDetail from "../Screens/CreateOrderModule/CreateOrderDetail";
import BrandsScreen from "../Screens/CreateOrderModule/BrandsScreen";
import CategoryScreen from "../Screens/CreateOrderModule/CategoryScreen";
import SubCategoryScreen from "../Screens/CreateOrderModule/SubCategoryScreen";
import CreateOrderSuccess from "../Screens/CreateOrderModule/CreateOrderSuccess";
import CreateOrderFailure from "../Screens/CreateOrderModule/CreateOrderFailure";
import Confirmation from "../Screens/CreateOrderModule/Confirmation";
import ProductList from "../Screens/CreateOrderModule/ProductList";
import ReviewCart from "../Screens/CreateOrderModule/ReviewCart";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for Receipt
const ReceiptStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ReceiptMain" component={ReceiptScreen} />
    <Stack.Screen name="ViewReceiptScreen" component={ViewReceiptScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="SupportScreen" component={SupportScreen} />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    <Stack.Screen name="ReceiptDetailsScreen" component={ReceiptDetailsScreen} />
  </Stack.Navigator>
);

// Stack Navigator for Sales
const SalesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SalesScreen" component={SalesScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="SupportScreen" component={SupportScreen} />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    <Stack.Screen name="ViewHistoryScreen" component={ViewHistoryScreen} />
    <Stack.Screen name="SearchCustomer" component={SearchCustomer} />
    <Stack.Screen name="CreateOrderDetail" component={CreateOrderDetail} />
    <Stack.Screen name="BrandsScreen" component={BrandsScreen} />
    <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    <Stack.Screen name="SubCategoryScreen" component={SubCategoryScreen} />
    <Stack.Screen name="CreateOrderSuccess" component={CreateOrderSuccess} />
    <Stack.Screen name="CreateOrderFailure" component={CreateOrderFailure} />
    <Stack.Screen name="Confirmation" component={Confirmation} />
    <Stack.Screen name="ProductList" component={ProductList} />
    <Stack.Screen name="ReviewCart" component={ReviewCart} />

  </Stack.Navigator>
);

// Stack Navigator for Home
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ViewHistoryScreen" component={ViewHistoryScreen} />
    <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="SupportScreen" component={SupportScreen} />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    <Stack.Screen name="ReceiptMain" component={ReceiptScreen} />
    <Stack.Screen name="ViewReceiptScreen" component={ViewReceiptScreen} />
    <Stack.Screen name="ReceiptDetailsScreen" component={ReceiptDetailsScreen} />
    <Stack.Screen name="SearchCustomer" component={SearchCustomer} />
    <Stack.Screen name="CreateOrderDetail" component={CreateOrderDetail} />
    <Stack.Screen name="BrandsScreen" component={BrandsScreen} />
    <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    <Stack.Screen name="SubCategoryScreen" component={SubCategoryScreen} />
    <Stack.Screen name="CreateOrderSuccess" component={CreateOrderSuccess} />
    <Stack.Screen name="CreateOrderFailure" component={CreateOrderFailure} />
    <Stack.Screen name="Confirmation" component={Confirmation} />
    <Stack.Screen name="ProductList" component={ProductList} />
    <Stack.Screen name="ReviewCart" component={ReviewCart} />


  </Stack.Navigator>
);

// Stack Navigator for Beat
const BeatStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="BeatScreen" component={BeatScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="SupportScreen" component={SupportScreen} />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    <Stack.Screen name="ReceiptMain" component={ReceiptScreen} />
    <Stack.Screen name="ViewReceiptScreen" component={ViewReceiptScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#24358D',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Sales':
              iconName = 'cart-outline';
              break;
            case 'Receipt':
              iconName = 'file-document-outline';
              break;
            case 'Beat':
              iconName = 'map-marker-alert-outline';

              break;
            default:
              iconName = 'home-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Sales" component={SalesStack} />
      <Tab.Screen name="Receipt" component={ReceiptStack} />
      <Tab.Screen name="Beat" component={BeatStack} />

    </Tab.Navigator>
  );
};

export default TabNavigator;
