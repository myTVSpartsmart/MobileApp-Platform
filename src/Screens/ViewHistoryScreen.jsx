import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const orders = [
  {
    id: 'IOF25190045361',
    date: '13/11/2024',
    amount: '₹1600.38',
    status: 'Imported to Oracle', // ✅ Only this one will show full screen
  },
  {
    id: 'IOF25190045362',
    date: '14/11/2024',
    amount: '₹2000.50',
    status: 'Orders Created',
  },
  {
    id: 'IOF25190045363',
    date: '15/11/2024',
    amount: '₹1800.00',
    status: 'Orders Created',
  },
];

const ViewHistoryScreen = ({ navigation }) => {
  const [activeSection, setActiveSection] = useState('');
  const [searchText, setSearchText] = useState('');

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderOrderCard = (order, index, showRequestedText) => (
    <TouchableOpacity
      key={index}
      style={styles.orderCard}
      onPress={() => navigation.navigate('OrderDetailsScreen', { order })}
    >
      <View style={styles.orderLeft}>
        <View style={styles.orderStatusRow}>
          <MaterialIcon name="info" size={16} color="#24358D" />
          <Text style={styles.orderStatusText}>  {order.status}</Text>
        </View>
        <Text style={styles.orderId}>Order ID</Text>
        <Text style={styles.orderValue}>{order.id}</Text>
        {showRequestedText && (
          <Text style={styles.requestedParts}>Requested for Auto Parts</Text>
        )}
      </View>
      <View style={styles.orderRight}>
        <Text style={styles.orderDate}>{order.date}</Text>
        <Text style={styles.orderAmount}>{order.amount}</Text>
        <Text style={styles.totalPriceLabel}>Total Price</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCollapsibleSection = (title, key, showSearch, showRequestedText, showSubText = false) => {
    const isOpen = activeSection === key;

    return (
      <View style={styles.sectionCard}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => setActiveSection(isOpen ? '' : key)}
        >
          <Text style={styles.sectionTitle}>{title}</Text>
          <Icon name={isOpen ? 'chevron-up' : 'chevron-forward'} size={20} color="#24358D" />
        </TouchableOpacity>

        {isOpen && (
          <>
            {showSubText && (
              <Text style={styles.recentSubText}>Last 10 days orders</Text>
            )}

            {showSearch && (
              <View style={styles.searchBox}>
                <Icon name="search-outline" size={18} color="#24358D" />
                <TextInput
                  placeholder="Search Transaction ID"
                  placeholderTextColor="#24358D"
                  style={styles.searchInput}
                  value={searchText}
                  onChangeText={setSearchText}
                />
              </View>
            )}

            <Text style={styles.ordersListingTitle}>Orders Listing</Text>

            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) =>
                renderOrderCard(order, index, showRequestedText)
              )
            ) : (
              <Text style={styles.noOrdersText}>No orders found</Text>
            )}
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>View History</Text>
        </View>

        <Text style={styles.subHeader}>Choose Order Type</Text>

        {renderCollapsibleSection('Partsmart Orders', 'partsmart', true, false)}
        {renderCollapsibleSection('Back Orders', 'back', true, true)}
        {renderCollapsibleSection('Recent Orders', 'recent', false, true, true)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  headerText: { fontSize: 18, fontWeight: '700', marginLeft: 25, color: '#1E1E1E' },
  subHeader: { fontSize: 16, fontWeight: '600', color: '#2B2B2B', marginVertical: 16 },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#24358D' },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchInput: { marginLeft: 8, flex: 1, color: '#000', fontSize: 14 },
  ordersListingTitle: { fontSize: 14, fontWeight: '600', color: '#2B2B2B', marginTop: 16, marginBottom: 8 },
  orderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  orderStatusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  orderStatusText: { fontSize: 13, fontWeight: '600', color: '#24358D' },
  orderId: { fontSize: 12, color: '#6B6B6B', marginTop: 6 },
  orderValue: { fontSize: 14, fontWeight: '700', color: '#000' },
  requestedParts: { fontSize: 12, color: '#24358D', textDecorationLine: 'underline', marginTop: 4 },
  orderDate: { fontSize: 12, color: '#6B6B6B' },
  orderAmount: { fontSize: 14, fontWeight: '700', color: '#000', marginTop: 6 },
  totalPriceLabel: { fontSize: 12, color: '#6B6B6B' },
  noOrdersText: { textAlign: 'center', marginTop: 20, color: '#999', fontSize: 14 },
  recentSubText: { fontSize: 12, color: '#6B6B6B', marginBottom: 12 },
  orderLeft: {},
  orderRight: { alignItems: 'flex-end' },
});

export default ViewHistoryScreen;