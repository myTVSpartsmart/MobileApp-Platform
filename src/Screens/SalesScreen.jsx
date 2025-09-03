import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SalesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Sales Screen</Text>
  </View>
);

export default SalesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});
