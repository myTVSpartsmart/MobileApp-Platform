import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentEntry = ({ navigation }) => {
  const [amount, setAmount] = useState('');

  // ==============================
  // 🔹 API Logic (commented)
  // ==============================
  /*
  useEffect(() => {
    const fetchInvoiceTypes = async () => {
      try {
        const response = await fetch("https://your-api.com/invoices/types");
        const data = await response.json();

        if (response.ok) {
          // setInvoiceTypes(data.list || []);
        } else {
          Alert.alert("Error", data.message || "Failed to fetch invoice types");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Something went wrong while fetching invoice types");
      }
    };

    fetchInvoiceTypes();
  }, []);
  */

  const handleNext = () => {
    if (!amount) {
      alert('Please enter amount');
      return;
    }
    navigation.navigate('ExcessAmount', { amount });
  };

  return (
    <View style={styles.container}>
      {/* 🔹 Header Row with Back Icon + Title */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        >
          <Ionicons name="chevron-back" size={16} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Pay</Text>
      </View>

      <Text style={styles.subHeader}>Choose invoice list type</Text>

      {/* 🔹 Box Section */}
      <View style={styles.box}>
        <Text style={styles.label}>Enter Amount to Pay</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={val => setAmount(val)}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.continueButton]}
            onPress={handleNext}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60, // pushes content down
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backIcon: { marginRight: 6 },
  header: { fontSize: 20, fontWeight: '600', color: '#000' },
  subHeader: { fontSize: 15, color: '#444', marginBottom: 20 },

  // Box styling
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
  },
  label: { fontSize: 14, fontWeight: '500', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    marginBottom: 30,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1, // ✅ Equal width
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  backButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  backText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D2A6E',
  },
  continueButton: {
    backgroundColor: '#FF6600',
  },
  continueText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});
