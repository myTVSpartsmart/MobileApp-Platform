// src/Components/DDPayment.js
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

const DDPayment = ({ visible, onClose, onSubmit }) => {
  const [ddNumber, setDdNumber] = useState("");
  const [date, setDate] = useState("");
  const [bank, setBank] = useState("");
  const [place, setPlace] = useState("");
  const [attachment, setAttachment] = useState(null);

  // ==============================
  // 🔹 Dummy API Logic (commented for later use)
  // ==============================
  /*
  const submitDDPayment = async () => {
    try {
      const formData = new FormData();
      formData.append("ddNumber", ddNumber);
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

      const response = await fetch("https://your-api.com/dd-payment", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "DD Payment submitted successfully");
        onSubmit?.(data);
        onClose();
      } else {
        Alert.alert("Error", data.message || "Failed to submit DD Payment");
      }
    } catch (err) {
      console.error("API Error:", err);
      Alert.alert("Error", "Something went wrong while submitting DD Payment");
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
    if (!ddNumber.trim()) {
      Alert.alert("Missing Field", "Please enter DD Number");
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

    const data = { ddNumber, date, bank, place, attachment };

    // 🔹 For now, just pass back to parent
    onSubmit?.(data);
    onClose();

    // 🔹 Later, replace with API call:
    // submitDDPayment();
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.popupBox}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>DD Payment Mode</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Input fields with labels */}
          <Text style={styles.label}>DD Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter DD Number"
            value={ddNumber}
            onChangeText={setDdNumber}
          />

          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Date"
            value={date}
            onChangeText={setDate}
          />

          <Text style={styles.label}>Bank</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Bank"
            value={bank}
            onChangeText={setBank}
          />

          <Text style={styles.label}>Place</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Place"
            value={place}
            onChangeText={setPlace}
          />

          <Text style={styles.label}>Attachment</Text>
          <TouchableOpacity style={styles.attachmentRow} onPress={handleAttach}>
            <Ionicons name="camera-outline" size={20} color="#444" />
            <Text style={styles.uploadText}>
              {attachment ? "File Attached" : "Upload"}
            </Text>
          </TouchableOpacity>

          {/* Done Button */}
          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DDPayment;

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
    borderRadius: 12,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 10,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  attachmentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 16,
  },
  uploadText: {
    marginLeft: 8,
    color: "#555",
  },
  doneButton: {
    backgroundColor: "#F36F21",   // 🔸 orange shade
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "50%",                 // ✅ half width
    alignSelf: "center",          // ✅ centers it horizontally
    marginTop: 10,
  },
  doneText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
