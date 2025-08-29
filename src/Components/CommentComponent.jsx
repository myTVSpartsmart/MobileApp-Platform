import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CommentInput = forwardRef(({ placeholder, label }, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    getValue: () => text,
  }));

  return (
    <View>
      {label && <Text style={styles.reasonStyle}>{label}</Text>}
      <View style={styles.comment}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor='#969CAA'
          value={text}
          onChangeText={setText}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  comment: {
    height: 88,
    borderRadius: 0,
    borderColor: '#3D3D3D',
    borderWidth: 1,
    padding: 0, // Ensure there is no padding in the comment view
  },
  reasonStyle: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#676D75',
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    height: '100%', // Ensure TextInput takes the full height of the comment view
    textAlignVertical: 'top', // Ensure text starts from the top
    padding: 10, // Add padding inside the TextInput if needed
    color: '#FDFCF7'
  },
});

export default CommentInput;