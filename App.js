import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query';
import './src/service/apiInterceptor';
import store from './src/store/store';
import { Provider } from 'react-redux';
import AuthorizedStack from './src/routers/AuthorizedStack';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import SplashScreen from 'react-native-splash-screen'



const Stack = createNativeStackNavigator();


function App() {
  useEffect(() => {
    SplashScreen.hide();
    // setTimeout(() => {
    //   SplashScreen.hide();
    // },)
    // requestCameraPermission();
  }, []);
  return (
      <Provider store={store}>
        <NavigationContainer>
      <AuthorizedStack/>
        </NavigationContainer>
      </Provider>
  );  
}

export default App;