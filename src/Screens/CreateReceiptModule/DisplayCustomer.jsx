// src/Screens/DisplayCustomer.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
// import { useRoute } from "@react-navigation/native"; // ✅ Uncomment if using params

const DisplayCustomer = ({ navigation /*, route*/ }) => {
  // ==============================
  // 🔹 Dummy Data (for now)
  // ==============================
  const DUMMY_CUSTOMER = {
    id: "1",
    name: "SK AUTO PARTS",
    code: "EOTN0001B2 / KMS",
  };

  const [customer, setCustomer] = useState(DUMMY_CUSTOMER);
  const [searchText, setSearchText] = useState("EOTN0001B2");

  // ==============================
  // 🔹 PARAMS LOGIC (when navigating with params)
  // ==============================
  /*
  const route = useRoute();
  React.useEffect(() => {
    if (route.params?.customer) {
      setCustomer(route.params.customer);
    }
  }, [route.params]);
  */

  // ==============================
  // 🔹 API LOGIC (when using API to fetch by searchText)
  // ==============================
  /*
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://your-api.com/customer/${searchText}`);
      const data = await response.json();

      if (response.ok) {
        setCustomer(data);
      } else {
        setCustomer(null);
        Alert.alert("Error", data.message || "Customer not found");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong while fetching customer");
    }
  };
  */

  // Dummy handler for now
  const handleSearch = () => {
    Alert.alert("Submit pressed", `Searching for ${searchText}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Create Receipt</Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Enter customer code"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.submitBtn} onPress={handleSearch}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Customer Card */}
      {customer ? (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("DisplayInvoices", { customer })}
        >
          <Text style={styles.customerName}>{customer.name}</Text>
          <Text style={styles.customerCode}>{customer.code}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.noResults}>No customer details found</Text>
      )}
    </View>
  );
};

export default DisplayCustomer;

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
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 14,
    color: "#000",
  },
  submitBtn: {
    marginLeft: 10,
    backgroundColor: "#F97316", // orange
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  card: {
    backgroundColor: "#F7F6F2",
    padding: 15,
    borderRadius: 8,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  customerCode: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  noResults: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 50,
    color: "#999",
  },
});
