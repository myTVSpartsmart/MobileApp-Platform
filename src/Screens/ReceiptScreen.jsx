import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import DueToday from "../assets/DueToday.png";
import CreateReceipt from "../assets/CreateReceipt.png";
import ViewReceipt from "../assets/ViewReceipt.png";

const ReceiptScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy API logic (replace with your real API call)
    const fetchData = async () => {
      const dummyData = [
        { id: "1", name: "Customer A", amount: "₹5000", status: "Pending" },
        { id: "2", name: "Customer B", amount: "₹3000", status: "Paid" },
        { id: "3", name: "Customer C", amount: "₹2000", status: "Pending" },
      ];
      setData(dummyData);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
      <Text style={styles.status}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        {[
          { icon: DueToday, label: "DUE TODAY" },
          { icon: CreateReceipt, label: "CREATE RECEIPT" },
          { icon: ViewReceipt, label: "VIEW RECEIPT" },
        ].map((btn, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.actionButton}
            onPress={() => {
              if (btn.label === "CREATE RECEIPT") {
                navigation.navigate("CreateReceipt"); // ✅ Only this navigates
              }
            }}
          >
            <View style={styles.circle}>
              <Image
                source={btn.icon}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.actionLabel}>{btn.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Customer List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  actionButton: {
    alignItems: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#FAFAFA",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 14,
    color: "#444",
    marginTop: 5,
  },
  status: {
    fontSize: 13,
    color: "#888",
    marginTop: 3,
  },
});