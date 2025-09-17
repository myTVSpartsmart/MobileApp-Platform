// This is to search the Customer Code to select them to create receipts
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // 👈 import

const CustomerSearch = ({ navigation }) => {
  const [customerCode, setCustomerCode] = useState("");

  const handleSubmit = () => {
    if (!customerCode) {
      alert("Please enter a customer name or code");
      return;
    }
    navigation.navigate("DisplayCustomer", {
      searchResults: [
        { id: "1", name: "SK AUTO PARTS", code: "EOTN0001B2 / KMS" },
      ],
    });
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Create Receipt</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Enter Customer Name / Code"
          placeholderTextColor="#999"
          value={customerCode}
          onChangeText={setCustomerCode}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    color: "#000",
  },
  content: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "#F7F6F2",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#F36F21",
    borderRadius: 6,
    alignItems: "center",
    paddingVertical: 12,
  },
  submitText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
