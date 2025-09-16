import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';
import HeaderIcons from '../Components/HeaderIcons'; // Adjust path as needed
import DueToday from '../assets/images/DueToday.png';
import CreateReceipt from '../assets/images/CreateReceipt.png';
import ViewReceipt from '../assets/images/ViewReceipt.png';

const { width } = Dimensions.get('window');

const summaryCards = [
  {
    id: 'daily',
    title: 'Daily Receipt',
    amount: '₹3,750',
    target: '₹5,000',
    graph: 'M0 20 Q10 10 20 15 T40 10 T60 20 T80 15 T100 20',
  },
  {
    id: 'weekly',
    title: 'Weekly Receipt',
    amount: '₹30,750',
    target: '₹30,000',
    graph: 'M0 15 Q10 20 20 12 T40 15 T60 10 T80 15 T100 12',
  },
  {
    id: 'monthly',
    title: 'Monthly Receipt',
    amount: '₹1,30,550',
    target: '₹1,50,000',
    graph: 'M0 20 Q10 18 20 22 T40 18 T60 20 T80 16 T100 18',
  },
];

const today = new Date();
const formattedToday = `${String(today.getDate()).padStart(2, '0')}/${String(
  today.getMonth() + 1,
).padStart(2, '0')}/${today.getFullYear()}`;

const receiptData = [
  {
    id: '1',
    title: 'DBV Repair Kit (300006006)',
    code: '045MSP66',
    orderDate: '27/01/2025',
    dueDate: formattedToday,
    amount: '₹1178.66',
  },
  {
    id: '2',
    title: 'DBV Repair Kit (300006006)',
    code: '045MSP66',
    orderDate: '02/02/2025',
    dueDate: formattedToday,
    amount: '₹1178.66',
  },
];

const ReceiptScreen = ({ navigation }) => {
  // Get today's date and format as dd/mm/yyyy
  const today = new Date();
  const formattedToday = `${String(today.getDate()).padStart(2, '0')}/${String(
    today.getMonth() + 1,
  ).padStart(2, '0')}/${today.getFullYear()}`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Icon name="menu-outline" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Receipt</Text>
        </View>
        <HeaderIcons
          onCartPress={() => {}}
          onProfilePress={() => {}}
          colors="black"
        />
      </View>

      {/* Summary Cards */}
      <View style={styles.cardContainer}>
        {summaryCards.map(item => {
          const amt = parseFloat(item.amount.replace(/[₹,]/g, ''));
          const tgt = parseFloat(item.target.replace(/[₹,]/g, ''));
          const color = amt >= tgt ? '#5cb85c' : '#DD0606';

          return (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={[styles.cardAmount, { color }]}>{item.amount}</Text>
              <Text style={styles.cardTarget}>Target</Text>
              <Text style={styles.cardTargetValue}>{item.target}</Text>
              <Svg width={100} height={40} viewBox="0 0 100 30">
                <Path
                  d={item.graph}
                  stroke={color}
                  strokeWidth={2}
                  fill="none"
                />
              </Svg>
            </View>
          );
        })}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        {[
          { icon: DueToday, label: 'DUE TODAY' },
          { icon: CreateReceipt, label: 'CREATE RECEIPT' },
          { icon: ViewReceipt, label: 'VIEW RECEIPT' },
        ].map((btn, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.actionButton}
            onPress={() => {
              if (btn.label === 'CREATE RECEIPT') {
                navigation.navigate('CustomerSearch'); // 👈 Navigate to CreateReceipt Page
              } else if (btn.label === 'VIEW RECEIPT') {
                // navigation.navigate('ViewReceipt'); // Optional: handle other cases
              } else if (btn.label === 'DUE TODAY') {
                // navigation.navigate('DueToday'); // Optional
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

      {/* Due Today Header */}
      <View style={styles.dueSection}>
        <Text style={styles.dueTitle}>Due today</Text>
        <Text style={styles.dueDate}>{formattedToday}</Text>
      </View>

      {/* Receipt List */}
      <FlatList
        data={receiptData}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.receiptCard}>
            <View style={styles.receiptInfo}>
              <Text style={styles.receiptTitle}>{item.title}</Text>
              <Text style={styles.receiptCode}>{item.code}</Text>
              <Text style={styles.receiptDetail}>
                Order Date: {item.orderDate}
              </Text>
              <Text style={styles.receiptDetail}>Due Date: {item.dueDate}</Text>
            </View>
            <View style={styles.receiptAction}>
              <Text style={styles.totalPriceLabel}>Total Price</Text>
              <Text style={styles.receiptAmount}>{item.amount}</Text>
              <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentText}>Make Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  headerLeft: { flexDirection: 'row' },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginLeft: 12,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  card: {
    width: (width - 48) / 3,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: { fontSize: 11, fontWeight: '600', color: '#333' },
  cardAmount: { fontSize: 18, fontWeight: '700' },
  cardTarget: { fontSize: 10, color: '#000', fontWeight: '500' },
  cardTargetValue: {
    fontSize: 11,
    color: '#000',
    marginBottom: 8,
    fontWeight: '500',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  actionButton: { alignItems: 'center' },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: { width: 60, height: 60 },
  actionLabel: {
    marginTop: 15,
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
  },
  dueSection: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  dueTitle: { fontSize: 15, fontWeight: '600', color: '#24358D' },
  dueDate: { fontSize: 14, fontWeight: '600', color: '#24358D' },
  listContent: { paddingBottom: 20 },
  receiptCard: {
    backgroundColor: '#fff',
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#eee',
  },
  receiptInfo: {},
  receiptTitle: { fontSize: 13, fontWeight: '700', color: '#000' },
  receiptCode: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
    fontWeight: '500',
  },
  receiptDetail: {
    fontSize: 11,
    color: '#000',
    marginTop: 10,
    fontWeight: '500',
  },
  receiptAction: { alignItems: 'flex-end', justifyContent: 'space-between' },
  totalPriceLabel: {
    fontWeight: '700',
    fontSize: 12,
    color: '#000',
    marginBottom: 4,
    textAlign: 'right',
  },
  receiptAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
  },
  paymentButton: {
    marginRight: '-13',
    backgroundColor: '#f18d42',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  paymentText: { fontSize: 12, fontWeight: '600', color: '#fff' },
});
