import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { SEARCHPNG_Image } from './ImageManager';

const SearchInput = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  placeholderTextColor = '#969CAA',
}) => {
  return (
    <View style={{ marginTop: 24 }}>
      <View>
        <Image source={SEARCHPNG_Image} style={styles.inputIcon} />
      </View>
      <View style={{ marginHorizontal: 16 }}>
        <TextInput
          style={[styles.textInput, styles.placeholderPadding]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing} // Trigger search on enter/return key press
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 0,
    borderColor: '#3D3D3D',
    borderWidth: 1,
    color: '#969CAA',
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: '#121212',
  },
  inputIcon: {
    position: 'absolute',
    top: 11,
    left: 25,
    height: 28,
    width: 28,
    zIndex: 1,
  },
  placeholderPadding: {
    paddingLeft: 50,
  },
});

export default SearchInput;
