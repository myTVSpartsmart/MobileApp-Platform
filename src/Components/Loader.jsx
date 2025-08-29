import LottieView from 'lottie-react-native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
  // Make sure you have this library installed

const LoaderPage = () => {
 
  return (
    <View style={styles.loaderOverlay}>
    <LottieView 
        source={require('../assets/animations/loader.json')}
        autoPlay
        loop={true}
        style={{width: 64, height:  64,}}
    />
    </View> 
  );
};

const styles = StyleSheet.create({
    loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(255, 255, 255, 0.20)",
    backgroundColor: '#0D0D0D',
    justifyContent: "center",
    alignItems: "center",
    height: '100%'
  },
});

export default LoaderPage;
