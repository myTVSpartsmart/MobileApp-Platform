// src/Screens/SuccessPage.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const SuccessPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background bubbles */}
      <View style={[styles.bubble, { top: 50, left: 30, width: 100, height: 100 }]} />
      <View style={[styles.bubble, { top: 200, right: 40, width: 90, height: 90 }]} />
      <View style={[styles.bubble, { bottom: 100, left: 60, width: 80, height: 80 }]} />
      <View style={[styles.bubble, { bottom: 50, right: 20, width: 120, height: 120 }]} />

      {/* Success Content */}
      <Image
        source={require("../../assets/images/SuccessPage.png")} // replace with your success icon
        style={styles.icon}
      />
      <Text style={styles.message}>Successfully Receipt Generated</Text>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bubble: {
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "#E0E0E0",
    opacity: 0.2,
  },
  icon: {
    width: 240,
    height: 240,
    marginBottom: -10,
    resizeMode: "contain",
  },
  message: {
    fontSize: 30,
    color: "green",
    fontWeight: "600",
    marginBottom: 30,
    textAlign: 'center'
  },
  homeButton: {
    backgroundColor: "#F36F2C",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  homeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
