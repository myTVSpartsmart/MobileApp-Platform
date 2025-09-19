import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { BACKARROWPNG_Image } from '../../Components/ImageManager';
import StatusBarComponent from '../../Components/StatusBarComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchCustomer = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  
  // Sample data for recent searches
  const [recentSearches] = useState([
    {
      id: '1',
      name: 'SK AUTO PARTS',
      code: 'EOTN000182',
    },
    {
      id: '2',
      name: 'SK AUTO PARTS',
      code: 'EOTN000182',
    },
    {
      id: '3',
      name: 'SK AUTO PARTS',
      code: 'EOTN000182',
    },
    {
      id: '4',
      name: 'SK AUTO PARTS',
      code: 'EOTN000182',
    },
    {
      id: '5',
      name: 'SK AUTO PARTS',
      code: 'EOTN000182',
    },
    {
      id: '6',
      name: 'SK AUTO PARTS',
      code: 'EOTN000182',
    },
    {
      id: '7',
      name: 'SK AUTO PARTS',
      code: 'EOTN000182',
    },
  ]);

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const handleCustomerSelect = (customer) => {
    console.log('Selected customer:', customer);
    navigation.navigate("CreateOrderDetail")
  };

  const renderCustomerItem = ({ item }) => (
    <TouchableOpacity
      style={styles.customerItem}
      onPress={() => handleCustomerSelect(item)}
    >
      <View style={styles.customerInfo}>
        <Text style={styles.customerName}>{item.name}</Text>
        <Text style={styles.customerCode}>{item.code}</Text>
      </View>
      <View style={styles.arrowContainer}>
        {/* <Text style={styles.arrow}>›</Text> */}
        <MaterialCommunityIcons name="chevron-right" size={27} color="#364369" />

      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={BACKARROWPNG_Image}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Orders</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter Customer Name/Code"
              placeholderTextColor="#626262"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recentSearchContainer}>
          <Text style={styles.recentSearchTitle}>Recent Search</Text>
          
          <FlatList
            data={recentSearches}
            renderItem={renderCustomerItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
     paddingTop: 10,
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 18,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E0E0E0',
  },
  backArrow: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  headerText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#263238',
    fontFamily: 'GilroySemiBold',
    fontWeight: '800',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    marginTop: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#000000',
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    fontWeight: '700',
  },
  searchButton: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    fontWeight: '700',
  },
  recentSearchContainer: {
    marginTop: 24,
    flex: 1,
  },
  recentSearchTitle: {
    color: '#364369',
    fontFamily: 'GilroySemiBold',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  customerItem: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    color: 'black',
    fontFamily: 'GilroySemiBold',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  customerCode: {
    color: '#414548',
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    fontWeight: '700',
  },
  arrowContainer: {
    marginLeft: 12,
  },
  arrow: {
    color: '#666666',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default SearchCustomer;
