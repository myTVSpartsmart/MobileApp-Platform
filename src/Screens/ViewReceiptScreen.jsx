// Screens/ViewReceiptScreen.js
import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
  Alert,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

export default function ViewReceiptScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [activePage, setActivePage] = useState(1);

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const allData = [
    { id: "1", date: "2025-09-15", label: "Today", txnId: "10F25190045361", amount: "₹1600", mode: "Challan" },
    { id: "2", date: "2025-09-15", label: "Today", txnId: "10F25190045362", amount: "₹1200", mode: "UPI Payment" },
    { id: "3", date: "2025-09-15", label: "Today", txnId: "10F25190045363", amount: "₹900", mode: "Cash" },
    { id: "4", date: "2025-09-14", label: "Yesterday", txnId: "10F25190045364", amount: "₹2200", mode: "Cheque" },
    { id: "5", date: "2025-09-14", label: "Yesterday", txnId: "10F25190045365", amount: "₹1800", mode: "Cheque" },
    { id: "6", date: "2025-09-14", label: "Yesterday", txnId: "10F25190045366", amount: "₹2000", mode: "Cash" },
    { id: "7", date: "2025-09-13", label: "2 days ago", txnId: "10F25190045367", amount: "₹1500", mode: "UPI Payment" },
    { id: "8", date: "2025-09-13", label: "2 days ago", txnId: "10F25190045368", amount: "₹1700", mode: "Challan" },
    { id: "9", date: "2025-09-12", label: "3 days ago", txnId: "10F25190045369", amount: "₹1100", mode: "Cash" },
    { id: "10", date: "2025-09-12", label: "3 days ago", txnId: "10F25190045370", amount: "₹1300", mode: "Cheque" },
    { id: "11", date: "2025-09-12", label: "3 days ago", txnId: "10F25190045371", amount: "₹900", mode: "UPI Payment" },
    { id: "12", date: "2025-09-11", label: "4 days ago", txnId: "10F25190045372", amount: "₹2000", mode: "Challan" },
    { id: "13", date: "2025-09-11", label: "4 days ago", txnId: "10F25190045373", amount: "₹1400", mode: "Cash" },
    { id: "14", date: "2025-09-10", label: "5 days ago", txnId: "10F25190045374", amount: "₹1200", mode: "UPI Payment" },
    { id: "15", date: "2025-09-10", label: "5 days ago", txnId: "10F25190045375", amount: "₹1600", mode: "Cheque" },
    { id: "16", date: "2025-09-09", label: "6 days ago", txnId: "10F25190045376", amount: "₹1100", mode: "Cash" },
    { id: "17", date: "2025-09-09", label: "6 days ago", txnId: "10F25190045377", amount: "₹1900", mode: "Challan" },
    { id: "18", date: "2025-09-08", label: "7 days ago", txnId: "10F25190045378", amount: "₹2200", mode: "UPI Payment" },
    { id: "19", date: "2025-09-08", label: "7 days ago", txnId: "10F25190045379", amount: "₹1500", mode: "Cheque" },
    { id: "20", date: "2025-09-07", label: "8 days ago", txnId: "10F25190045380", amount: "₹1300", mode: "Cash" },
    { id: "21", date: "2025-09-07", label: "8 days ago", txnId: "10F25190045381", amount: "₹1700", mode: "Challan" },
    { id: "22", date: "2025-09-06", label: "9 days ago", txnId: "10F25190045382", amount: "₹2000", mode: "UPI Payment" },
    { id: "23", date: "2025-09-06", label: "9 days ago", txnId: "10F25190045383", amount: "₹1800", mode: "Cash" },
    { id: "24", date: "2025-09-05", label: "10 days ago", txnId: "10F25190045384", amount: "₹2100", mode: "Cheque" },
    { id: "25", date: "2025-09-05", label: "10 days ago", txnId: "10F25190045385", amount: "₹1600", mode: "Challan" },
  ];

  const filteredData = useMemo(() => {
    return allData.filter((item) => {
      const itemDate = new Date(item.date);
      if (fromDate && itemDate < fromDate) return false;
      if (toDate && itemDate > toDate) return false;
      return true;
    });
  }, [allData, fromDate, toDate]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const startIndex = (activePage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const groupedData = paginatedData.reduce((acc, item) => {
    if (!acc[item.label]) acc[item.label] = [];
    acc[item.label].push(item);
    return acc;
  }, {});

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("ReceiptDetailsScreen", { txn: item })}
    >
      <View style={styles.rowBetween}>
        <Text style={styles.txnId}>{item.txnId}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.subText}>Transaction ID</Text>
        <Text style={styles.mode}>{item.mode}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right", "bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent={false} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View Receipt</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Customer Name / Code"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Date Range */}
      <View style={styles.dateContainer}>
        <View style={styles.dateHeader}>
          <Text style={styles.dateLabel}>Select Date Range</Text>
         
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.dateInput} onPress={() => setShowFromPicker(true)}>
            <Text style={styles.dateText}>
              {fromDate ? fromDate.toLocaleDateString() : "From date"}
            </Text>
            <Ionicons name="calendar-outline" size={20} color="#24358D" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.dateInput, { marginLeft: 8 }]} onPress={() => setShowToPicker(true)}>
            <Text style={styles.dateText}>
              {toDate ? toDate.toLocaleDateString() : "To date"}
            </Text>
            <Ionicons name="calendar-outline" size={20} color="#24358D" />
          </TouchableOpacity>
         <TouchableOpacity
  onPress={() => {
    setFromDate(null);
    setToDate(null);
    setActivePage(1);
  }}
>
  <Ionicons
    name="refresh"
    size={20}
    color="#fff"
    style={{
      marginTop: 5,
      backgroundColor: "#FF6B00",
      padding: 5,
      borderRadius: 5,
    }}
  />
</TouchableOpacity>


        </View>
      </View>

      {/* From Date Picker */}
      {showFromPicker && (
        <DateTimePicker
          value={fromDate || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, selectedDate) => {
            setShowFromPicker(false);
            if (selectedDate) {
              if (toDate && selectedDate > toDate) {
                Alert.alert("Invalid Date", "From Date cannot be after To Date");
              } else {
                setFromDate(new Date(selectedDate.setHours(0, 0, 0, 0)));
              }
            }
          }}
        />
      )}

      {/* To Date Picker */}
      {showToPicker && (
        <DateTimePicker
          value={toDate || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, selectedDate) => {
            setShowToPicker(false);
            if (selectedDate) {
              if (fromDate && selectedDate < fromDate) {
                Alert.alert("Invalid Date", "To Date cannot be before From Date");
              } else {
                setToDate(new Date(selectedDate.setHours(23, 59, 59, 999)));
              }
            }
          }}
        />
      )}

      {/* History */}
      <Text style={styles.historyTitle}>Last History</Text>
      {filteredData.length === 0 ? (
        <Text style={styles.noData}>No records found for selected date range</Text>
      ) : (
        <FlatList
          data={Object.keys(groupedData)}
          keyExtractor={(item) => item}
          contentContainerStyle={{ paddingBottom: 80 }}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.sectionHeader}>{item}</Text>
              {groupedData[item].map((txn) => (
                <View key={txn.id}>{renderItem({ item: txn })}</View>
              ))}
            </View>
          )}
        />
      )}

      {/* Pagination */}
      {filteredData.length > 0 && (
        <View style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <TouchableOpacity key={i + 1} onPress={() => setActivePage(i + 1)}>
              <Text style={[styles.page, activePage === i + 1 && styles.activePage]}>
                {i + 1}
              </Text>
            </TouchableOpacity>
          ))}
          {activePage < totalPages && (
            <TouchableOpacity onPress={() => setActivePage(activePage + 1)}>
              <Text style={styles.next}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, backgroundColor: '#fff' },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10 },
  backButton: { padding: 4 },

  searchContainer: {
    flexDirection: "row",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: "#fafafa",
  },
  submitBtn: {
    backgroundColor: "#FF6B00",
    marginLeft: 8,
    borderRadius: 6,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  submitText: { color: "#fff", fontWeight: "600" },

  dateContainer: { marginBottom: 16 },
  dateHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  dateLabel: { fontSize: 14, fontWeight: "500" },
  row: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16 },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADC",
  },
  dateText: { fontSize: 14, color: "#444" },

  historyTitle: { fontSize: 14, fontWeight: "600", marginBottom: 8, paddingHorizontal: 16, color: "#5F5F62" },
  sectionHeader: { color: "#0D47A1", fontWeight: "600", marginVertical: 6, paddingHorizontal: 16 },
  noData: { textAlign: "center", color: "#999", marginTop: 20 },

  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  txnId: { fontWeight: "600", fontSize: 14 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between" },
  subText: { color: "#666", fontSize: 12 },
  mode: { fontSize: 12, color: "#666", fontWeight: "500" },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  page: { marginHorizontal: 6, color: "#000" },
  activePage: { color: "#0D47A1", fontWeight: "700" },
  next: { marginLeft: 10, color: "#FF6B00", fontWeight: "600" },
});
