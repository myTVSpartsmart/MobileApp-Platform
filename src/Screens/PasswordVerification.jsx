import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

const VerifyCodeScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]); // refs for each input
  const [email] = useState("example@gmail.com"); // dummy email

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto move to next input if a number is entered
    if (text && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // If backspace on empty, move focus to previous
    if (!text && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "272727") {
      Alert.alert("Success", "OTP verified successfully (dummy check)");
      navigation.replace("LoginScreen"); // Example redirect
      console.log("Login successful")
    } else {
      Alert.alert("Error", "Invalid OTP (dummy check)");
    }
  };

  const resendOtp = () => {
    Alert.alert("Info", `Dummy OTP sent to ${email}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/ForgotPassword.png")}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subtitle}>
          Please enter the code we just sent to email{" "}
          <Text style={styles.email}>{email}</Text>
        </Text>

        {/* OTP inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        <Text style={styles.resendText}>
          Didn’t Receive OTP?{" "}
          <Text style={styles.resendLink} onPress={resendOtp}>
            Resend Code
          </Text>
        </Text>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 450,
    height: 258,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  email: {
    fontWeight: "600",
    color: "#000",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    width: 45,
    height: 45,
    backgroundColor: "#F7F6F2",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
    color: "#000",
  },
  resendText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  resendLink: {
    color: "#007AFF",
    fontWeight: "600",
  },
  verifyButton: {
    backgroundColor: "#F36F21",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    width: "50%",
  },
  verifyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
