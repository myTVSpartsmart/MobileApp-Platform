import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { BACKARROWPNG_Image, SEARCHPNG_Image } from '../../Components/ImageManager';
import StatusBarComponent from '../../Components/StatusBarComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import sampleImage1 from '../../assets/images/brakebooster.png';
import sampleImage2 from '../../assets/images/battery.png';
import sampleImage3 from '../../assets/images/brakedisc.png';
import sampleImage4 from '../../assets/images/brakeshoe.png';

const CategoryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const images = [sampleImage1, sampleImage2, sampleImage3, sampleImage4];

  // Sample brands data - in a real app, this would come from an API
  const brandsData = [
    { id: '1', name: 'BRAKES', logo: null, color: '#4CAF50' },
    { id: '2', name: 'BATTERY', logo: null, color: '#2196F3' },
    { id: '3', name: 'DISC', logo: null, color: '#3F51B5' },
    { id: '4', name: 'COIL', logo: null, color: '#FF9800' },
    { id: '5', name: 'BRAKES', logo: null, color: '#4CAF50' },
    { id: '6', name: 'BATTERY', logo: null, color: '#2196F3' },
    { id: '7', name: 'DISC', logo: null, color: '#3F51B5' },
    { id: '8', name: 'COIL', logo: null, color: '#FF9800' },
    { id: '9', name: 'BRAKES', logo: null, color: '#4CAF50' },
    { id: '10', name: 'BATTERY', logo: null, color: '#2196F3' },
    { id: '11', name: 'DISC', logo: null, color: '#3F51B5' },
    { id: '12', name: 'COIL', logo: null, color: '#FF9800' },
    { id: '13', name: 'BRAKES', logo: null, color: '#4CAF50' },
    { id: '14', name: 'BATTERY', logo: null, color: '#2196F3' },
    { id: '15', name: 'DISC', logo: null, color: '#3F51B5' },
    { id: '16', name: 'COIL', logo: null, color: '#FF9800' },
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  const handleBrandPress = (brand) => {
    console.log('Brand selected:', brand.name);
    navigation.navigate("SubCategoryScreen");

    // Navigate to products screen or handle brand selection
  };

  const filteredBrands = brandsData.filter(brand =>
    brand.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderBrandCard = ({ item, index }) => {
    // pick image based on index
    const imageSource = images[index % images.length];

    return (
      <View style={styles.brandCardWrapper}>
        <TouchableOpacity
          style={styles.brandCard}
          onPress={() => handleBrandPress(item)}
          activeOpacity={0.7}
        >
          <View style={styles.brandLogoContainer}>
            <Image source={imageSource} style={styles.brandLogo} resizeMode="contain" />
          </View>
        </TouchableOpacity>
        <Text style={styles.brandName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={BACKARROWPNG_Image} style={styles.backArrow} />
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <Image source={SEARCHPNG_Image} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products"
            placeholderTextColor="#999999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <MaterialCommunityIcons name="cart-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        {/* Brands Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.brandsTitle}>Category</Text>
          <Text style={styles.brandsSubtitle}>Click the category to know offers</Text>
        </View>

        {/* Brands Grid */}
        <View style={styles.brandsContainer}>
          <FlatList
            data={filteredBrands}
            renderItem={renderBrandCard}
            keyExtractor={(item) => item.id}
            numColumns={4}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.gridContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  backArrow: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  cartButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    // marginHorizontal: 12,
    borderWidth: 2,
    borderColor: '#E8E8E8',
  },
  searchIcon: {
    width: 18,
    height: 18,
    tintColor: '#8E8E93',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    paddingVertical: 0,
  },
  titleContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  brandsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  brandsSubtitle: {
    fontSize: 15,
    color: '#8E8F93',
    fontWeight: '600',
  },
  brandsContainer: {
    flex: 1,
  },
  gridContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  brandCardWrapper: {
    width: '22%',
    alignItems: 'center',
  },
  brandCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  brandLogoContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandLogo: {
    width: '100%',
    height: '100%',
  },
  placeholderLogo: {
    width: '90%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandLogoText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  brandName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default CategoryScreen;
