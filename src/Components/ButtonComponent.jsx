import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const CustomButton = React.memo(({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.Positionedstyle} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.checkin}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  Positionedstyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black'
  },
  buttonContainer: {
    backgroundColor: '#21C063',
    marginHorizontal: 16,
    marginTop: 5,
    alignItems: 'center',
    bottom: 0,
  },
  checkin: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'GilroySemiBold',
    marginHorizontal: 78,
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default CustomButton;
