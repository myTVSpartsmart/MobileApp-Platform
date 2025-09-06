import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Path } from 'react-native-svg';
import HeaderIcons from '../Components/HeaderIcons'; 
const { width } = Dimensions.get('window');

const salesData = [
  {
    id: 'daily',
    title: 'Daily Sales',
    amount: '₹3,750',
    target: '₹5,000',
    graphPath: 'M0 20 Q10 10 20 15 T40 10 T60 20 T80 15 T100 20',
  },
  {
    id: 'weekly',
    title: 'Weekly Sales',
    amount: '₹30,750',
    target: '₹30,000',
    graphPath: 'M0 15 Q10 20 20 12 T40 15 T60 10 T80 15 T100 12',
  },
  {
    id: 'monthly',
    title: 'Monthly Sales',
    amount: '₹1,30,550',
    target: '₹1,50,000',
    graphPath: 'M0 20 Q10 18 20 22 T40 18 T60 20 T80 16 T100 18',
  },
];

const actions = [
  { id: 'hotlist', label: 'HOT LIST', icon: 'layers-outline' },
  { id: 'createorder', label: 'CREATE ORDER', icon: 'pencil-outline' },
  { id: 'viewhistory', label: 'VIEW HISTORY', icon: 'receipt' },
];

const customers = [
  { id: '1', name: 'BHALLA MOTORS', code: 'PSW_000396' },
  { id: '2', name: 'Sam Auto Mobiles', code: 'PSW_000396' },
  { id: '3', name: 'Ak Racing', code: 'GKT Auto Group' },
  { id: '4', name: 'Jhon Car care', code: 'PSW_000396' },
  { id: '5', name: 'Wealth MOTORS Accessories', code: 'PSW_000396' },
];


const parseAmount = (amountStr) => parseFloat(amountStr.replace(/[₹,]/g, ''));


const Header = () => (
  <View style={[styles.header , {justifyContent:'space-between'}]}>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity>
      <Icon name="menu-outline" size={28} color="#000" />
    </TouchableOpacity>

    <Text style={styles.headerTitle}>Sales</Text>

    </View>
    <View>
    <HeaderIcons 
      onCartPress={() => alert("Cart clicked")}
      onProfilePress={() => alert("Profile clicked")}
      colors='black'
    />
    </View>
    
  </View>
);


const SalesCard = ({ item }) => {
  const amountValue = parseAmount(item.amount);
  const targetValue = parseAmount(item.target);
  const isTargetMet = amountValue >= targetValue;
  const color = isTargetMet ? '#5cb85c' : '#DD0606'; 

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={[styles.cardAmount, { color }]}>{item.amount}</Text>
        <Text style={styles.cardTarget}>Target</Text>
        <Text style={styles.cardTargetValue}>{item.target}</Text>
        <Svg width={100} height={40} viewBox="0 0 100 30" style={{ marginTop: 4 }}>
          <Path
            d={item.graphPath}
            stroke={color}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
          />
        </Svg>
      </View>
    </View>
  );
};

const ActionButton = ({ item }) => (
  <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
    <MaterialCommunityIcons name={item.icon} size={48} color="#f18d42" />
    <Text style={styles.actionLabel}>{item.label}</Text>
  </TouchableOpacity>
);

const CustomerRow = ({ item, index }) => (
  <View style={styles.customerRow}>
    <View style={styles.rankCircle}>
      <Text style={styles.customerRank}>{index + 1}</Text>
    </View>
    <View style={styles.customerInfo}>
      <Text style={styles.customerName}>{item.name}</Text>
      <Text style={styles.customerCode}>{item.code}</Text>
    </View>
  </View>
);

export default function SalesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header />
      <View style={styles.cardsContainer}>
        {salesData.map((item) => (
          <SalesCard key={item.id} item={item} />
        ))}
      </View>
      <View style={styles.actionsContainer}>
        {actions.map((item) => (
          <ActionButton key={item.id} item={item} />
        ))}
      </View>
      <Text style={styles.topCustomersTitle}>Top 5 Customers</Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <CustomerRow item={item} index={index} />}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft:'10'
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  cardWrapper: {
    backgroundColor: '#fff',
    borderRadius: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: (width - 56) / 3,
  },
  card: {
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },
  cardTarget: {
    fontSize: 10,
    color: '#444',
    fontWeight: '500',
  },
  cardTargetValue: {
    fontSize: 11,
    color: '#666',
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
    width: 90,
  },
  actionLabel: {
    marginTop: 8,
    fontWeight: '600',
    fontSize: 12,
    color: '#555',
  },
  topCustomersTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    color: '#222',
  },
  customerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 8,
  },
  rankCircle: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  customerRank: {
    fontWeight: '700',
    fontSize: 25,
    color: '#24358D',
    alignSelf: 'center',
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontWeight: '700',
    fontSize: 14,
    color: '#000',
    textTransform: 'uppercase',
  },
  customerCode: {
    fontSize: 12,
    color: '#24358D',
    marginTop: 2,
  },
});
