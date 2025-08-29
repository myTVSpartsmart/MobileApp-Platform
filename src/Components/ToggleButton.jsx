import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ToggleButton = ({
  title,
  onPress,
  fontColor,
  backgroundColor,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor, borderColor}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: fontColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 36,
    width: 66,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ToggleButton;
