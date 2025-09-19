import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import NewPlan from "../assets/images/NewPlan.png";
import Visitplan from "../assets/images/Visitplan.png";
import ViewPlan from "../assets/images/ViewPlan.png";
import HeaderIcons from '../Components/HeaderIcons';

const { width } = Dimensions.get('window');

const beatSummary = [
  { id: 'daily', title: 'Daily Beat', value: 3, target: 4, graph: 'M0 20 Q10 10 20 15 T40 10 T60 20 T80 15 T100 20' },
  { id: 'weekly', title: 'Weekly Beat', value: 45, target: 43, graph: 'M0 15 Q10 20 20 12 T40 15 T60 10 T80 15 T100 12' },
  { id: 'monthly', title: 'Monthly Beat', value: 235, target: 300, graph: 'M0 20 Q10 18 20 22 T40 18 T60 20 T80 16 T100 18' },
];

const beatActions = [
  { id: '1', label: 'New Plan', icon: NewPlan, screen: 'NewPlanScreen' },
  { id: '2', label: 'View Plan', icon: ViewPlan, screen: 'ViewPlanScreen' },
  { id: '3', label: 'Visit Plan', icon: Visitplan, screen: 'VisitPlanScreen' },
];

const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB');

const storeList = Array(4).fill({
  name: 'Balaji Auto part store',
  phone: '1234567890',
  address: '1/38, Ponmeni, Bypass Road, Madurai-625 016',
});

const BeatScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.openDrawer?.()}>
            <Icon name="menu-outline" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Beat</Text>
        </View>
        <HeaderIcons
          onCartPress={() => navigation.navigate("CartScreen")}
          onProfilePress={() => navigation.navigate("ProfileScreen")}
          colors="black"
        />
      </View>

      {/* Summary Cards */}
      <View style={styles.cardContainer}>
        {beatSummary.map((item) => {
          const color = item.value >= item.target ? '#5cb85c' : '#DD0606';
          return (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={[styles.cardValue, { color }]}>{item.value}</Text>
              <Text style={styles.cardTarget}>Target</Text>
              <Text style={styles.cardTargetValue}>{item.target}</Text>
              <Svg width={100} height={30}>
                <Path d={item.graph} stroke={color} strokeWidth={2} fill="none" />
              </Svg>
            </View>
          );
        })}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        {beatActions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.actionButton}
            onPress={() => navigation.navigate(action.screen)}
          >
            <View style={styles.circle}>
              <Image source={action.icon} style={styles.iconImage} resizeMode="contain" />
            </View>
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Today's Plan */}
      <View style={styles.todayPlan}>
        <Text style={styles.todayTitle}>Today Plan</Text>
        <Text style={styles.todayDate}>{formattedDate}</Text>
      </View>

      {/* Store List */}
      <FlatList
        data={storeList}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.storeCard}>
            <Text style={styles.storeName}>{item.name}</Text>
            <Text style={styles.storePhone}>{item.phone}</Text>
            <Text style={styles.storeAddress}>{item.address}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default BeatScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#000', marginLeft: 12 },

  cardContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 16 },
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
  cardTitle: { fontSize: 13, fontWeight: '600', color: '#000' },
  cardValue: { fontSize: 18, fontWeight: '700' },
  cardTarget: { fontSize: 12, fontWeight: '600', color: '#000' },
  cardTargetValue: { fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#000' },

  actionsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  actionButton: { alignItems: 'center' },
  circle: {
    marginTop: 12,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: { width: 60, height: 60 },
  actionLabel: { marginTop: 12, fontSize: 12, fontWeight: '600', color: '#333' },

  todayPlan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  todayTitle: { fontSize: 15, fontWeight: '600', color: '#24358D' },
  todayDate: { fontSize: 14, fontWeight: '600', color: '#24358D' },

  listContent: { paddingBottom: 80 },
  storeCard: {
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    borderBottomColor: 'C1C1C1',
    borderBottomWidth: 0.2,
  },
  storeName: { fontSize: 14, fontWeight: '700', color: '#000' },
  storePhone: { fontSize: 13, fontWeight: '500', marginTop: 6, color: '#000' },
  storeAddress: { fontSize: 13, fontWeight: '500', marginTop: 6, color: '#000' },
});
