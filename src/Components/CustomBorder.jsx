import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomBorder = () => {
  return (
    <>
      <View style={[styles.corner, styles.topLeft]} />
      <View style={[styles.corner, styles.topRight]} />
      <View style={[styles.corner, styles.bottomLeft]} />
      <View style={[styles.corner, styles.bottomRight]} />
      </>
  );
};

const styles = StyleSheet.create({
  customBorder: {
    // width: 300, 
    height: 150, 
    // backgroundColor: 'gray',
    position: 'absolute',
  },
  corner: {
    position: 'absolute',
    width: 60,  // Adjust as needed
    height: 30, // Adjust as needed
    borderColor: '#ffffff',
  },
  topLeft: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    top: -2,
    left: -2,
  },
  topRight: {
    borderTopWidth: 2,
    borderRightWidth: 2,
    top: -2,
    right: -2,
  },
  bottomLeft: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    bottom: -2,
    left: -2,
  },
  bottomRight: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    bottom: -2,
    right: -2,
  },
});

export default CustomBorder;
