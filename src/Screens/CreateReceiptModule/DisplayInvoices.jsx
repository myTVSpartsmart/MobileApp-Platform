// src/Screens/DisplayInvoices.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const DisplayInvoices = ({ navigation /* , route */ }) => {
  const [customerCode, setCustomerCode] = useState("");

  // ==============================
  // 🔹 Dummy Data
  // ==============================
  const customer = {
    name: "SK AUTO PARTS",
    code: "EOTN000182 / KMS",
  };

  const orders = [
    {
      id: "1",
      orderId: "IOP25190045361",
      status: "Orders Created",
      date: "13/11/2024",
      price: "₹ 1598",
    },
    {
      id: "2",
      orderId: "IOP25190045362",
      status: "Orders Created",
      date: "13/11/2024",
      price: "₹ 1600.38",
    },
    {
      id: "3",
      orderId: "IOP25190045363",
      status: "Orders Created",
      date: "13/11/2024",
      price: "₹ 1600.38",
    },
  ];

  // ==============================
  // 🔹 API Logic (commented)
  // ==============================
  /*
  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`https://your-api.com/orders?code=${customerCode}`);
        const data = await response.json();
        if (response.ok) {
          setOrders(data.orders || []);
        } else {
          Alert.alert("Error", data.message || "Failed to fetch orders");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Something went wrong while fetching orders");
      }
    };

    if (customerCode) fetchOrders();
  }, [customerCode]);
  */

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={18} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Create Receipt</Text>
      </View>

      {/* Main Card (Customer + Orders) */}
      <View style={styles.mainCard}>
        {/* Customer Info */}
        <View style={styles.customerSection}>
          <Text style={styles.customerName}>{customer.name}</Text>
          <Text style={styles.customerCode}>{customer.code}</Text>
        </View>

        {/* Orders List */}
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.orderCard}>
              {/* Top Row (Status + Date) */}
              <View style={styles.statusRow}>
                <View style={styles.statusLeft}>
                  <Image
                    source={require("../../assets/images/info-circle.png")} // <-- replace with your icon path
                    style={styles.infoIcon}
                  />
                  <Text style={styles.orderStatus}>{item.status}</Text>
                </View>
                <Text style={styles.orderDate}>{item.date}</Text>
              </View>

              {/* Bottom Row (OrderId + Price) */}
              <View style={styles.bottomRow}>
                <View>
                  <Text style={styles.orderId}>{item.orderId}</Text>
                  <Text style={styles.orderIdLabel}>Order ID</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.orderPrice}>{item.price}</Text>
                  <Text style={styles.totalLabel}>Total Price</Text>
                </View>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.noResults}>No orders available</Text>
          }
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, styles.backButton]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.continueButton]}
          onPress={() => navigation.navigate("PaymentEntry")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DisplayInvoices;

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
  mainCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
  },
  customerSection: {
    marginBottom: 15,
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
  orderCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  statusLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
    resizeMode: "contain",
  },
  orderStatus: {
    fontSize: 13,
    fontWeight: "500",
    color: "#000",
  },
  orderDate: {
    fontSize: 12,
    color: "#666",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderId: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  orderIdLabel: {
    fontSize: 12,
    color: "#666",
  },
  orderPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  totalLabel: {
    fontSize: 12,
    color: "#666",
  },
  noResults: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    color: "#999",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  footerButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: "#fff",
    marginRight: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2F80ED",
  },
  continueButton: {
    backgroundColor: "#F36F21",
    marginLeft: 10,
  },
  continueText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
