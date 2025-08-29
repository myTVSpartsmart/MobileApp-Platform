import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
 

const Circle_Chips = ({source, text, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.circleContainer}>
          {/* <SvgUri source={source} style={{marginTop: 8, marginLeft: 8}} /> */}
          <Image 
              source={source}
              style={{height: 32, width: 32}}
            />
        </View>
      </TouchableOpacity>
      <Text style={styles.footerstyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center', // Center align all items within this View
  },
  circleContainer: {
    backgroundColor: '#1C1C1E',
    borderRadius: 90,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center', // Ensure the SVG is centered
  },
  footerstyle: {
    fontFamily: 'GilroyRegular',
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center', // Ensure the text is centered within its container
    letterSpacing:0.5
  },
});

export default Circle_Chips;
