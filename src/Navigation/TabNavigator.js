import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SalesScreen from '../Screens/SalesScreen';
import ReceiptScreen from '../Screens/ReceiptScreen';
import BeatScreen from '../Screens/BeatScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

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
              iconName = 'home-outline'; // 🏠
              break;
            case 'Sales':
              iconName = 'cart-outline'; // 🛒
              break;
            case 'Receipt':
              iconName = 'file-document-outline'; // 📄
              break;
            case 'Beat':
              iconName = 'map-marker-alert-outline'; // 📍
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sales" component={SalesScreen} />
      <Tab.Screen name="Receipt" component={ReceiptScreen} />
      <Tab.Screen name="Beat" component={BeatScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
