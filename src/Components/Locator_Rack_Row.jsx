// Locator.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Locator_Rack_Row = ({ header, value }) => {
  return (
    <View style={styles.locatorStyle}>
      <View style={{ marginHorizontal: 12, marginVertical: 12,}}>
        <Text style={styles.headerStyle}>{header}</Text>
        <Text style={styles.valueStyle}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locatorStyle: {
    backgroundColor: '#1C1C1E',
    marginTop: 12,
    flex: 2,
    borderColor: '#2E2E30',
    borderWidth: 1
  },
  headerStyle: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#676D75',
    fontWeight: '500',
  },
  valueStyle: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#FDFCF7',
    fontWeight: '500',
    marginTop: 8,
  },
});

export default Locator_Rack_Row;
