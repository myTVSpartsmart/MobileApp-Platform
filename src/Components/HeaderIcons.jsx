import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderIcons = ({ onCartPress, onProfilePress ,colors}) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={onCartPress}>
        <Icon name="shopping-cart" size={28} color={colors} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onProfilePress} style={styles.profileIcon}>
        <Icon name="person" size={28} color={colors} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginLeft: 20,
  },
});

export default HeaderIcons;
