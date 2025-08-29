// CustomCheckbox.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
 
import { Minus_Image, Plus_Image } from './ImageManager';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {/* <Image
        source={checked ? require('./assets/checked.png') : require('./assets/unchecked.png')}
        style={styles.checkbox}
      /> */}
      <SvgUri 
        Source={ checked ? Plus_Image : Minus_Image}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  label: {
    color: '#FFF', // Assuming white text color
    fontSize: 16,
  },
});

export default CustomCheckbox;
