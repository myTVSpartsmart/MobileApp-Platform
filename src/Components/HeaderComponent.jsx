// HeaderWithGradient.js

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';
  // Make sure you have this library installed
import LinearGradient from 'react-native-linear-gradient';
import {BACKARROWPNG_Image, Left_Arrow} from './ImageManager';

const HeaderComponent = ({title, onBackPress}) => {
  return (
    <View>
    <View style={{backgroundColor: '#181818'}}>
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <Image
            source={BACKARROWPNG_Image}
            style={{
              width: 24,
              height: 24,
              tintColor: '#F6F6F6',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
      <LinearGradient
        colors={[
          'rgba(253, 252, 247, 0)',
          'rgba(253, 252, 247, 0.2)',
          'rgba(253, 252, 247, 0)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientLine}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 18,
    alignItems: 'center', // Center items vertically
  },
  headerText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#F6F6F6',
    fontFamily: 'GilroySemiBold',
    fontWeight: '600',
  },
  gradientLine: {
    height: 2,
    width: '100%',
    bottom: 1.5,
  },
});

export default HeaderComponent;
