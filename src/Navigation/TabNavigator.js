import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SalesScreen from '../Screens/SalesScreen';
import ReceiptScreen from '../Screens/ReceiptScreen';
import BeatScreen from '../Screens/BeatScreen';
import ViewHistoryScreen from '../Screens/ViewHistoryScreen';
import OrderDetailsScreen from '../Screens/OrderDetailsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SupportScreen from "../Screens/SupportScreen";
import ChangePasswordScreen from "../Screens/ChangePasswordScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 📌 Stack inside Home Tab
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ViewHistoryScreen" component={ViewHistoryScreen} />
    <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="SupportScreen" component={SupportScreen} />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
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
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={26}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Sales" component={SalesScreen} />
      <Tab.Screen name="Receipt" component={ReceiptScreen} />
      <Tab.Screen name="Beat" component={BeatScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
