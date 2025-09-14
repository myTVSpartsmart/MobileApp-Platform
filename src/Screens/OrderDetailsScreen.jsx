import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const orderParts = [
  {
    name: 'DBV Repair Kit (300006006)',
    code: '045MSP66',
    qty: 1,
    totalPrice: '₹1178.66',
  },
  {
    name: 'DBV Repair Kit (300006006)',
    code: '045MSP66',
    qty: 1,
    totalPrice: '₹1178.66',
  },
];

const OrderDetailsScreen = ({ navigation, route }) => {
  const { order } = route.params;

  const handleDownload = () => {
    Alert.alert('Download pressed!', 'Implement your download logic here.');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>View History</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 90 }}
        >
          {/* Blue Order Info Section */}
          <View style={styles.blueSection}>
            <View style={styles.rowBetween}>
              <View style={styles.row}>
                <MaterialIcon name="info" size={18} color="#fff" />
                <Text style={styles.sectionTitle}> Orders Created</Text>
              </View>
              <Text style={styles.sectionDate}>{order.date}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.orderId}>{order.id}</Text>
                <Text style={styles.orderIdLabel}>Order ID</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.amount}>{order.amount}</Text>
                <Text style={styles.totalPriceLabel}>Total Price</Text>
              </View>
            </View>

            <Text style={styles.autoPartsCode}>EOSLM00590 | Auto Parts</Text>
          </View>

          {/* Conditionally show Current Status only if NOT "Imported to Oracle" */}
          {order.status !== 'Not Imported to Oracle' && (
            <View style={styles.statusBox}>
              <View style={styles.statusLeft}>
                <Icon name="calendar-outline" size={28} color="#24358D" />
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.currentStatusLabel}>Current Status</Text>
                  <Text style={styles.currentStatusValue}>
                    {order.status || 'Unknown'}
                  </Text>
                </View>
              </View>
              <MaterialIcon name="info" size={16} color="#24358D" />
            </View>
          )}

          {/* Download Invoice Label */}
          <Text style={styles.downloadInvoiceLabel}>Download Invoice</Text>

          {/* Parts List Card */}
          <View style={styles.partsCard}>
            <View style={styles.partsCardHeader}>
              <Text style={styles.partsCount}>{orderParts.length} Parts</Text>
              {/* Show download button only if status is NOT "Imported to Oracle" */}
              {order.status !== 'Imported to Oracle' && (
                <TouchableOpacity
                  style={styles.downloadButton}
                  onPress={handleDownload}
                >
                  <Text style={styles.downloadButtonText}>Download</Text>
                </TouchableOpacity>
              )}
            </View>

            {orderParts.map((part, idx) => (
              <View
                key={idx}
                style={[
                  styles.partRow,
                  idx !== orderParts.length - 1 && styles.rowDivider,
                ]}
              >
                <View>
                  <Text style={styles.partName}>{part.name}</Text>
                  <Text style={styles.partCode}>{part.code}</Text>
                  <Text style={styles.partQty}>Qty : {part.qty}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.partTotalPriceLabel}>Total Price</Text>
                  <Text style={styles.partTotalPrice}>{part.totalPrice}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 12,
    color: '#1E1E1E',
  },
  blueSection: {
    backgroundColor: '#24358D',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  sectionDate: {
    color: '#fff',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#ffffff50',
    marginVertical: 12,
  },
  orderId: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  orderIdLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  amount: { color: '#fff', fontSize: 16, fontWeight: '700' },
  totalPriceLabel: { fontSize: 12, color: '#E0E0E0', marginTop: 2 },
  autoPartsCode: {
    color: '#fff',
    fontSize: 12,
    marginTop: 10,
    fontWeight: '500',
  },
  statusBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentStatusLabel: {
    fontWeight: '600',
    fontSize: 16,
    color: '#2B2B2B',
  },
  currentStatusValue: {
    fontSize: 14,
    color: '#000',
    marginTop: 4,
  },
  downloadInvoiceLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#24358D',
    marginLeft: 20,
    marginBottom: 8,
  },
  partsCard: {
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  partsCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  partsCount: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
  downloadButton: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  downloadButtonText: {
    fontWeight: '700',
    color: '#FF6F00', // orange color
    fontSize: 14,
  },
  partRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  partName: {
    fontWeight: '700',
    fontSize: 14,
    color: '#000',
  },
  partCode: {
    fontSize: 12,
    color: '#24358D',
    marginTop: 4,
  },
  partQty: {
    fontSize: 12,
    color: '#24358D',
    marginTop: 4,
  },
  partTotalPriceLabel: {
    fontSize: 12,
    color: '#6B6B6B',
  },
  partTotalPrice: {
    fontWeight: '700',
    fontSize: 14,
    color: '#000',
    marginTop: 4,
  },
});

export default OrderDetailsScreen;