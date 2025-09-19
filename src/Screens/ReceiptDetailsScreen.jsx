// Screens/ReceiptDetailsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Cheque from "../assets/images/Cheque.png";
import DD from "../assets/images/DD.png";
import Challan from "../assets/images/Challan.png";

export default function ReceiptDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { txn } = route.params;

  // Reusable row for label + value
  const renderRow = (label, value) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[
          styles.value,
          label === "Dealer Name" && styles.dealerValue, // dealer name blue
        ]}
      >
        {value}
      </Text>
    </View>
  );

  // Render mode-specific fields + attachments
  const renderExtraFields = () => {
    switch (txn.mode) {
      case "Cheque":
        return (
          <>
            {renderRow("Cheque Number", "12245678")}
            {renderRow("Bank", "ICICI")}
            <Image source={Cheque} style={styles.attachment} />
          </>
        );
      case "Challan":
        return (
          <>
            {renderRow("Challan Number", "CHL12345")}
            {renderRow("Bank", "SBI")}
            <Image source={Challan} style={styles.attachment} />
          </>
        );
      case "DD":
        return (
          <>
            {renderRow("DD Number", "DD98765")}
            {renderRow("Bank", "HDFC")}
            <Image source={DD} style={styles.attachment} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right", "bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent={false} />

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>View Receipt</Text>
        </View>

        {/* Summary (Blue Box) */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryColumnLeft}>
            <Text style={styles.summaryLabel}>Transaction ID</Text>
            <Text style={styles.summaryValue}>{txn.txnId}</Text>
          </View>
          <View style={styles.summaryColumnRight}>
            <Text style={styles.summaryLabel}>Paid Amount</Text>
            <Text style={styles.summaryValue}>{txn.amount}</Text>
          </View>
        </View>

        {/* Payment Details */}
        <View style={styles.detailsBox}>
          {renderRow("Payment Method", txn.mode)}
          {renderRow("Date", txn.date)}
          {renderRow("Transaction Status", "Paid")}

          {/* Mode-specific fields */}
          {renderExtraFields()}
        </View>

        {/* Dealer Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detailed Information</Text>
          {renderRow("Dealer Name", "PHILIPS AUTO SALES")}
          {renderRow("Code", "PFR_000055")}
          {renderRow("Phone Number", "1234567890")}
          {renderRow("Billing Address", "Madurai")}
        </View>

        {/* Download */}
        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#24358D",
    padding: 10,
    marginBottom: 16,

  },
  summaryColumnLeft: {
    flex: 1,
  },
  summaryColumnRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  summaryLabel: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  summaryValue: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },

  detailsBox: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    padding: 12,
    marginBottom: 19,
    marginHorizontal: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  value: {
    fontSize: 14,
    color: "#000",
    textAlign: "right",
  },
  dealerValue: {
    color: "#24358D",
    fontWeight: "700",
  },

  section: {
    marginBottom: 10,
    padding: 12,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 8,
  },

  downloadBtn: {
    alignSelf: "flex-end",
    marginTop: 7,
    marginRight: 20,
  },
  downloadText: {
    color: "#FF6B00",
    fontWeight: "600",
  },

  attachment: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.6,
    resizeMode: "contain",
    marginTop: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
