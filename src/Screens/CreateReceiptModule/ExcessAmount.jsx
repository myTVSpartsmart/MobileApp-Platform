// src/Screens/ExcessAmount.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ExcessAmount = ({ navigation }) => {
  const [showModal, setShowModal] = useState(true);

  // ==============================
  // 🔹 Dummy API logic (commented)
  // ==============================
  /*
  const handleConfirm = async () => {
    try {
      const response = await fetch("https://your-api.com/excess-amount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ excessAmount: 2.0 }),
      });
      const data = await response.json();

      if (response.ok) {
        // handle success
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", data.message || "Failed to submit excess amount");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong!");
    }
  };
  */

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pay</Text>
      </View>

      <Text style={styles.subTitle}>Choose invoice list type</Text>

      {/* Input Section */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Enter Amount to Pay</Text>
        <View style={styles.inputBox}>
          <Text style={styles.amountText}>₹ 4000</Text>
        </View>
      </View>

      {/* Popup Modal */}
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Excess Amount</Text>
            <View style={styles.excessBox}>
              <Text style={styles.excessAmount}>₹ 2.00</Text>
              <Text style={styles.excessNote}>
                Excess amount will be added as advance payment
              </Text>
            </View>

            {/* Footer Buttons */}
            <View style={styles.footer}>
              <TouchableOpacity
                style={[styles.footerButton, styles.backButton]}
                onPress={() => {
                  setShowModal(false);
                  navigation.goBack();
                }}
              >
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.footerButton, styles.continueButton]}
                onPress={() => {
                  setShowModal(false);
                  navigation.navigate("PaymentMethod"); // or call API here
                }}
              >
                <Text style={styles.continueText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ExcessAmount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    color: "#000",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    color: "#333",
  },
  inputCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 8,
    color: "#000",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#f9f9f9",
  },
  amountText: {
    fontSize: 15,
    color: "#666",
  },

  // Modal Styling
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // dim background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
  },
  excessBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
  },
  excessAmount: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#000",
  },
  excessNote: {
    fontSize: 12,
    color: "#555",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2F80ED",
  },
  continueButton: {
    backgroundColor: "#F36F21",
  },
  continueText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
