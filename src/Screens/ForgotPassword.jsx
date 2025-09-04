// src/Screens/ForgotPasswordScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 🔹 Email regex validator
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleResetPassword = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // 🔹 Dummy success response (for now)
    Alert.alert("Success", "Password reset successful (dummy response)");
    navigation.goBack();

    /*
    // 🔹 Uncomment when API is ready
    try {
      const response = await fetch("https://your-api-url.com/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", data.message || "Password reset successful");
        navigation.goBack(); // or navigate to Login
      } else {
        Alert.alert("Error", data.message || "Something went wrong");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to connect to server");
      console.error(error);
    }
    */
  };

  return (
    <View style={styles.container}>
      {/* Background wave image */}
      <Image
        source={require("../assets/images/ForgotPassword.png")} // <-- put your image here
        style={styles.backgroundImage}
        resizeMode="cover" // ensures it touches bottom fully
      />

      {/* Content */}
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your registered email to reset your password
        </Text>

        {/* Form */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={[styles.label, { marginTop: 20 }]}>
            Confirm Password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Re-enter new password"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Reset Button */}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleResetPassword}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center", // centers vertically
    paddingHorizontal: 24,
    paddingBottom: 60, // avoids overlap with bottom image
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 450,
    height: 258, // ✅ Adjust ratio instead of fixed width
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
  },
  formContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F7F6F2",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#000",
  },
  signInButton: {
    backgroundColor: "#F36F21",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    marginTop: 30,
    width: "50%",
    alignSelf: "center",
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
