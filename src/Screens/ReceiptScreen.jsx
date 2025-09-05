import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReceiptScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Receipt Screen</Text>
  </View>
);

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});
