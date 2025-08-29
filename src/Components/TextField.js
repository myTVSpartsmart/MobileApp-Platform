import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const CustomTextField = ({placeholder, value, onChangeText, label,}) => {
  return (
    <View>
      <Text style={styles.heardertext}>{label}</Text>
      <View
        style={[styles.container, {borderColor: '#666666', borderWidth: 1.5}]}>
        <View style={styles.iconContainer} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor= '#FDFCF7'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#121212',
    
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 14,
    fontFamily: 'GilroyRegular',
    fontWeight: '400',
    color: '#FDFCF7'
  },
  heardertext: {
    fontSize: 14,
    color: '#B9B9B6',
    fontWeight: '600',
    fontFamily: 'GilroySemiBold',
  },
});

export default CustomTextField;
