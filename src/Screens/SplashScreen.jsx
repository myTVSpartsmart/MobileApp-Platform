import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("DashScreen");
    }, 2000);
    console.log("DashScreen")
  }, [navigation]);
  return (
    <View style={styles.container}>
      {/* Background Image (moved lower) */}
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.content}>
        {/* Top Logo */}
        <View style={styles.topContainer}>
          <Image
            source={require("../assets/images/mytvslogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.text}>Welcome Back!</Text>
        </View>
        {/* Illustration */}
        <View style={styles.middleContainer}>
          <Image
            source={require("../assets/images/welcomeimg.png")}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.supportText}>
            Get in touch with us if any support.
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:helpdesk.mobility@tvs.in")}
          >
            <Text style={styles.email}>helpdesk.mobility@tvs.in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Allow for absolute positioning of background
  },
  backgroundImage: {
    position: 'absolute',
    top: 70,  // Move the background image down (adjust as needed)
    left: 0,
    right: 0,
    width: "100%",
    height: "100%", // Ensure the background image covers the entire screen
    zIndex: -1, // Put the background behind all content
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70, // Keep your content's padding intact
    paddingBottom: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  topContainer: {
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 0,
    marginTop: 50
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  illustration: {
    width: 560,
    height: 600,
    marginTop: 150,
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 100, // Adjust as needed
  },
  supportText: {
    fontSize: 18,
    color: "#000",
    fontWeight: 'bold'
  },
  email: {
    fontSize: 16,
    color: "#007AFF",
    textDecorationLine: "underline",
    marginTop: 4,
  },
});