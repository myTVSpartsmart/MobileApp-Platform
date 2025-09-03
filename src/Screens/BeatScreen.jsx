import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BeatScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Beat Screen</Text>
  </View>
);

export default BeatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});
