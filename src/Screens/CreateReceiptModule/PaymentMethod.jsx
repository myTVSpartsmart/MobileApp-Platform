// src/Screens/PaymentMethod.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentMethod = ({ navigation, route }) => {
  const [selectedMethod, setSelectedMethod] = useState('Cash');
  const [totalAmount, setTotalAmount] = useState(0);

  // Read amount passed via route params (safe fallback)
  useEffect(() => {
    const amt = route?.params?.amount ?? 0;
    setTotalAmount(Number(amt));
  }, [route?.params?.amount]);

  // ==============================
  // 🔹 Dummy API Logic (commented)
  // ==============================
  /*
  // fetch available payment methods
  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await fetch("https://your-api.com/payment-methods");
        const data = await response.json();
        // setPaymentMethods(data.methods || []);
      } catch (error) {
        console.error("Error fetching methods:", error);
        Alert.alert("Error", "Failed to fetch payment methods");
      }
    };
    fetchPaymentMethods();
  }, []);

  // submit selected payment method
  const handleContinueApi = async () => {
    try {
      const response = await fetch("https://your-api.com/submit-payment-method", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ method: selectedMethod, amount: totalAmount }),
      });
      const data = await response.json();
      if (response.ok) {
        navigation.navigate("NextScreen", { data });
      } else {
        Alert.alert("Error", data.message || "Failed to submit");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Something went wrong");
    }
  };
  */

  const paymentOptions = ['Cash', 'Cheque', 'DD', 'Challan', 'UPI Payment'];

  const handleContinue = () => {
    if (!selectedMethod) {
      Alert.alert(
        'Select Method',
        'Please select a payment method to continue',
      );
      return;
    }

    switch (selectedMethod) {
      case 'Cash':
        navigation.navigate('CashPayment', { amount: totalAmount });
        break;
      case 'Cheque':
        navigation.navigate('ChequePayment', { amount: totalAmount });
        console.log("Cheque Payment")
        break;
      case 'DD':
        navigation.navigate('DDPayment', { amount: totalAmount });
        break;
      case 'Challan':
        navigation.navigate('ChallanPayment', { amount: totalAmount });
        break;
      case 'UPI Payment':
        Alert.alert(
          'Unavailable',
          'UPI Payment option is under maintenance. Fix in progress.',
        );
        break;
      default:
        Alert.alert('Error', 'Invalid payment method selected');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      {/* MISSING TEXT: Select payment method */}
      <Text style={styles.subtitle}>Select payment method</Text>

      {/* Total Amount Box */}
      <View style={styles.amountBox}>
        <Text style={styles.amountLabel}>Total Amount</Text>
        <Text style={styles.amountValue}>₹ {totalAmount.toFixed(2)}</Text>
      </View>

      {/* Payment Options */}
      <View style={styles.optionsBox}>
        <FlatList
          data={paymentOptions}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => setSelectedMethod(item)}
            >
              <Ionicons
                name={
                  selectedMethod === item
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={20}
                color={selectedMethod === item ? '#F36F21' : '#999'}
              />
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.footerButton, styles.continueButton]}
          onPress={handleContinue} // ✅ calls the switch-case function
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    marginTop: 20,
  },
  amountBox: {
    backgroundColor: '#1E3C72', // solid fallback color
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 16,
  },
  amountLabel: {
    color: '#fff',
    fontSize: 12,
  },
  amountValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  optionsBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 30,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerButton: {
    flex: 1,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  backButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F80ED',
  },
  continueButton: {
    backgroundColor: '#F36F21',
  },
  continueText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
