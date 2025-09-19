import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import StatusBarComponent from '../../Components/StatusBarComponent';
import { BACKARROWPNG_Image, AlarmPNG_Image, BrakeShoePNG_Image } from '../../Components/ImageManager';

const Confirmation = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BACKARROWPNG_Image} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirmation</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Timer/Progress Section */}
        <View style={styles.timerSection}>
          <View style={styles.timerRow}>
            <View style={styles.clockContainer}>
              <Image source={AlarmPNG_Image} style={styles.clockIcon} />
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBackground}>
                <View style={styles.progressBarFill} />
              </View>
            </View>
          </View>
          <View style={styles.timerTextRow}>
            <Text style={styles.timerText}>Proceed to checkout, expires in</Text>
            <Text style={styles.timerValue}>14:59</Text>
          </View>
        </View>

        {/* Your Items Section */}
        <Text style={styles.sectionTitle}>Your Items</Text>

        {/* Item 1 */}
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <View style={styles.itemImagePlaceholder}>
              <Image source={BrakeShoePNG_Image} style={styles.itemImageIcon} />
            </View>
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Brake Shoe Set Alto Wagon...</Text>
            <Text style={styles.itemCode}>35B172-G21</Text>
            <View style={styles.qtyPriceRow}>
              <View style={styles.qtyContainer}>
                <Text style={styles.qtyText}>QTY : 10</Text>
              </View>
              <Text style={styles.itemPrice}>₹ 500.00</Text>
            </View>
          </View>
        </View>

        {/* Item 2 */}
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <View style={styles.itemImagePlaceholder}>
              <Image source={BrakeShoePNG_Image} style={styles.itemImageIcon} />
            </View>
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Brake Shoe Alto...</Text>
            <Text style={styles.itemCode}>F0024236988F8</Text>
            <View style={styles.qtyPriceRow}>
              <View style={styles.qtyContainer}>
                <Text style={styles.qtyText}>QTY : 20</Text>
              </View>
              <Text style={styles.itemPrice}>₹ 18,340.00</Text>
            </View>
          </View>
        </View>

        {/* Price Details Section */}
        <Text style={styles.sectionTitle}>Price Details</Text>
        <View style={styles.priceDetailsCard}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Basic Price</Text>
            <Text style={styles.priceValue}>₹ 18,840.00</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>GST</Text>
            <Text style={styles.priceValue}>₹ 3,391.2</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Round Off</Text>
            <Text style={styles.priceValue}>₹ 22,231.00</Text>
          </View>
          <View style={styles.dividerLine} />
          <View style={styles.priceRow}>
            <Text style={styles.youPayLabel}>You Pay</Text>
            <Text style={styles.youPayValue}>₹ 22,231.00</Text>
          </View>
        </View>

        {/* Wishlist Note */}
        <Text style={styles.wishlistNote}>Remaining items (or) Quantities added in Wishlist</Text>

        {/* Bottom padding for buttons */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate('CreateOrderSuccess')}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backArrow: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  headerTitle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    fontFamily: 'GilroySemiBold',
  },
  scrollContainer: {
    flex: 1,
  },
  // Timer Section Styles
  timerSection: {
    backgroundColor: '#F8F9FA',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  clockContainer: {
    marginRight: 8,
  },
  clockIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  progressContainer: {
    flex: 1,
  },
  progressBarBackground: {
    height: 3,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
  },
  progressBarFill: {
    width: '80%',
    height: '130%',
    backgroundColor: '#0B0474',
    borderRadius: 2,
  },
  timerTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timerText: {
    color: '#14203C',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'GilroyMedium',
  },
  timerValue: {
    color: '#14203C',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'GilroySemiBold',
  },
  // Section Title
  sectionTitle: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'GilroySemiBold',
    marginTop: 24,
    marginLeft: 16,
    marginBottom: 12,
  },

  // Item Styles
  itemContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  itemImageContainer: {
    marginRight: 12,
  },
  itemImagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImageIcon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    color: '#0C4A6E',
    fontWeight: '700',
    fontFamily: 'GilroySemiBold',
    marginBottom: 2,
  },
  itemCode: {
    fontSize: 12,
    color: '#9CA3AF',
    fontFamily: 'GilroyMedium',
    marginBottom: 6,
  },
  qtyPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyContainer: {
    backgroundColor: '#DFEAFD',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  qtyText: {
    fontSize: 11,
    color: '#00AC41',
    fontWeight: '700',
    fontFamily: 'GilroySemiBold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#141414',
    fontWeight: '700',
    fontFamily: 'GilroySemiBold',
  },
  // Price Details Styles
  priceDetailsCard: {
    backgroundColor: '#FEC6C6',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  priceLabel: {
    fontSize: 14,
    color: '#7C7C7C',
    fontWeight: '600',
    fontFamily: 'GilroySemiBold',
  },
  priceValue: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'GilroySemiBold',
  },
  dividerLine: {
    height: 2,
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#E4B3B3',
    marginVertical: 8,
  },
  youPayLabel: {
    fontSize: 15,
    color: '#FF6B35',
    fontWeight: '700',
    fontFamily: 'GilroySemiBold',
  },
  youPayValue: {
    fontSize: 16,
    color: '#E45A1E',
    fontWeight: '800',
    fontFamily: 'GilroySemiBold',
  },
  // Wishlist Note
  wishlistNote: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    color: '#04156F',
    fontSize: 13,
    fontFamily: 'GilroyMedium',
    textAlign:"center",
    fontWeight:"700"
  },

  // Bottom Section
  bottomPadding: {
    height: 100, // Space for fixed bottom buttons
  },
  bottomButtonsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#04156F',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'GilroySemiBold',
  },
  proceedButton: {
    flex: 1,
    backgroundColor: '#F35601',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'GilroySemiBold',
  },
});

export default Confirmation;


