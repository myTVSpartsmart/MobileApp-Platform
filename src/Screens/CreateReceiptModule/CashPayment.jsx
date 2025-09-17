// src/Components/CashPayment.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CashPayment = ({ visible, onClose }) => {
  // 🔹 For now, showing a dummy amount
  const dummyAmount = 1600.0;

  // React Navigation hook
  const navigation = useNavigation();

  // Handle Confirm button
  const handleConfirm = () => {
    // Close the popup first
    onClose();

    // Navigate to SuccessPage
    navigation.navigate("SuccessPage", {
      amount: dummyAmount, // passing dummy amount as param
    });

    // 🔹 Later you can replace this with an API call:
    // try {
    //   const response = await fetch("https://api.example.com/payment/confirm", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       amount: dummyAmount,
    //       paymentMode: "Cash",
    //     }),
    //   });
    //   const data = await response.json();
    //   console.log("API Response:", data);
    //   navigation.navigate("SuccessPage", { amount: dummyAmount });
    // } catch (error) {
    //   console.error("Error confirming payment:", error);
    // }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popupBox}>
          {/* Header */}
          <Text style={styles.headerTitle}>Excess Amount</Text>

          {/* Content Box */}
          <View style={styles.contentBox}>
            <Text style={styles.message}>Kindly Check your amount</Text>
            <Text style={styles.amount}>₹ {dummyAmount}</Text>
          </View>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CashPayment;

// ==============================
// 🔹 Styles
// ==============================
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // dim background
    justifyContent: "center",
    alignItems: "center",
  },
  popupBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
    alignSelf: "flex-start",
  },
  contentBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  message: {
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  confirmButton: {
    backgroundColor: "#F36F21", // orange
    paddingVertical: 12,
    borderRadius: 8,
    width: "50%", // half width
    alignSelf: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
