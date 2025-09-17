// src/Components/ChequePayment.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const ChequePayment = ({ visible, onClose, onSubmit, navigation }) => {
  const [chequeNumber, setChequeNumber] = useState("");
  const [date, setDate] = useState("");
  const [bank, setBank] = useState("");
  const [place, setPlace] = useState("");
  const [attachment, setAttachment] = useState(null);

  // ==============================
  // 🔹 Dummy API Logic (commented for later use)
  // ==============================
  /*
  const submitChequePayment = async () => {
    try {
      const formData = new FormData();
      formData.append("chequeNumber", chequeNumber);
      formData.append("date", date);
      formData.append("bank", bank);
      formData.append("place", place);
      if (attachment) {
        formData.append("attachment", {
          uri: attachment.uri,
          type: attachment.type || "image/jpeg",
          name: attachment.fileName || "attachment.jpg",
        });
      }

      const response = await fetch("https://your-api.com/cheque-payment", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Cheque Payment submitted successfully");
        onSubmit?.(data);
        navigation.navigate("SuccessPage");
      } else {
        Alert.alert("Error", data.message || "Failed to submit Cheque Payment");
      }
    } catch (err) {
      console.error("API Error:", err);
      Alert.alert("Error", "Something went wrong while submitting Cheque Payment");
    }
  };
  */

  // ✅ Attach file
  const handleAttach = () => {
    Alert.alert(
      "Upload Attachment",
      "Choose an option",
      [
        {
          text: "Camera",
          onPress: () =>
            launchCamera({ mediaType: "photo" }, (res) => {
              if (!res.didCancel && !res.errorCode) {
                setAttachment(res.assets[0]);
              }
            }),
        },
        {
          text: "Gallery",
          onPress: () =>
            launchImageLibrary({ mediaType: "photo" }, (res) => {
              if (!res.didCancel && !res.errorCode) {
                setAttachment(res.assets[0]);
              }
            }),
        },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  // ✅ Validation before submit
  const handleDone = () => {
    if (!chequeNumber.trim()) {
      Alert.alert("Missing Field", "Please enter Cheque Number");
      console.log("Checking the same..")
      return;
    }
    if (!date.trim()) {
      Alert.alert("Missing Field", "Please enter Date");
      return;
    }
    if (!bank.trim()) {
      Alert.alert("Missing Field", "Please enter Bank");
      return;
    }
    if (!place.trim()) {
      Alert.alert("Missing Field", "Please enter Place");
      return;
    }
    if (!attachment) {
      Alert.alert("Missing Field", "Please upload an Attachment");
      return;
    }

    const data = { chequeNumber, date, bank, place, attachment };

    // 🔹 Navigate to SuccessPage
    onSubmit?.(data);
    navigation.navigate("SuccessPage");

    // 🔹 Later, replace with API call:
    // submitChequePayment();
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.popupBox}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Cheque Payment Mode</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Cheque Number */}
          <Text style={styles.label}>Cheque Number</Text>
          <TextInput
            style={styles.input}
            // placeholder="Enter Cheque Number"
            value={chequeNumber}
            onChangeText={setChequeNumber}
          />

          {/* Date */}
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            // placeholder="Enter Date"
            value={date}
            onChangeText={setDate}
          />

          {/* Bank */}
          <Text style={styles.label}>Bank</Text>
          <TextInput
            style={styles.input}
            // placeholder="Enter Bank Name"
            value={bank}
            onChangeText={setBank}
          />

          {/* Place */}
          <Text style={styles.label}>Place</Text>
          <TextInput
            style={styles.input}
            // placeholder="Enter Place"
            value={place}
            onChangeText={setPlace}
          />

          {/* Attachment */}
          <Text style={styles.label}>Attachment</Text>
          <View style={styles.attachmentRow}>
            <TouchableOpacity onPress={handleAttach} style={styles.attachBtn}>
              <Ionicons name="camera-outline" size={20} color="#444" />
              <Text style={styles.uploadText}>
                {attachment ? "File Attached" : "Upload"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Done Button */}
          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChequePayment;

// ==============================
// 🔹 Styles
// ==============================
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupBox: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 6,
    fontSize: 14,
    marginBottom: 12,
  },
  attachmentRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 6,
  },
  attachBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadText: {
    marginLeft: 8,
    color: "#007AFF",
    fontWeight: "500",
  },
  doneButton: {
    backgroundColor: "#F36F21",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  doneText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
