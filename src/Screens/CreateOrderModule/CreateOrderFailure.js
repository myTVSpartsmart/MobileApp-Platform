import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { BACKARROWPNG_Image, Subtract, Tvslogo } from '../../Components/ImageManager';
import StatusBarComponent from '../../Components/StatusBarComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from "react-native-linear-gradient";


const CreateOrderFailure = ({ navigation, route }) => {
  // Sample data - in real app, this would come from route params or API
  const orderData = {
    orderId: 'YTY857656294640755',
    totalParts: 35,
    totalAmount: '22,231.00',
    orderDate: '26-02-2023, 13:22:16',
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleViewOrderSummary = () => {
    // Navigate to order summary screen
    console.log('Navigate to order summary');
  };

  return (
     <LinearGradient
               colors={["#CD4343", "#B94F4F"]}
               start={{ x: 0, y: 1 }}
               end={{ x: 0, y: 0 }} style={styles.container}>
      <StatusBarComponent />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack} style={styles.headerButton}>
          <Image source={BACKARROWPNG_Image} style={styles.backArrow} />
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <MaterialCommunityIcons name="cart-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ImageBackground
        source={Subtract}
        style={styles.subtractBackground}
        resizeMode="stretch"
      >
        <View style={{ paddingHorizontal: 50, paddingVertical: 50 }}>
          {/* Logo and Status */}
          <View style={styles.logoSection}>
            <View style={{borderWidth:1,borderColor:"#D5D5D5"}}>
            <Image
              source={Tvslogo}
              style={{height:60,width:60,resizeMode:"contain"}}
              // resizeMode="stretch"
            ></Image>
            </View>
            <Text style={styles.logoSubtext}>Partsmart</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Order Failed</Text>
            </View>
          </View>

          {/* Amount and Date */}
          <View style={styles.amountSection}>
            <Text style={styles.amountText}>₹ {orderData.totalAmount}</Text>
            <Text style={styles.dateText}>{orderData.orderDate}</Text>
          </View>

          {/* Transaction Details */}
          <View style={styles.transactionSection}>
            <Text style={styles.transactionTitle}>Transaction Details</Text>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Order ID</Text>
              <Text style={styles.detailValue}>{orderData.orderId}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Total Parts</Text>
              <Text style={styles.detailValue}>{orderData.totalParts}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Total Amount</Text>
              <Text style={styles.detailValue}>₹ {orderData.totalAmount}</Text>
            </View>
          </View>

          {/* View Order Summary Button */}
          <TouchableOpacity
            // style={styles.summaryButton}
            onPress={handleViewOrderSummary}
            activeOpacity={0.8}
          >
            <Text style={styles.summaryButtonText}>View Order Summary</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#6366F1',
  },
  headerContainer: {
     flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
 headerButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  backArrow: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  subtractBackground: {
    width: "100%",
    height: "95%",
  },
  contentArea: {
    // flex: 1,
    // paddingHorizontal: 24,
    // paddingTop: 24,
    // paddingBottom: 100,
  },
  logoSection: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoContainer: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15,
  },
  logoSubtext: {
    color: '#F35601',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 13,
    marginLeft:"2%"
  },
  statusBadge: {
    backgroundColor: '#E5E5E5',
    width: "35%",
    justifyContent: 'center',
    borderRadius:5,
    position:"absolute",
    right:"0%"
  },
  statusText: {
    color: '#CD2E2E',
    fontSize: 13,
    fontWeight: '600',
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "10%"

  },
  amountSection: {
    marginBottom: 32,
  },
  amountText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#10B981',
    marginBottom: 6,
  },
  dateText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '400',
  },
  transactionSection: {
    marginBottom: 32,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '400',
  },
  detailValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
  },
  summaryButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  summaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#04156F',
    textAlign: 'center',
  },
});

export default CreateOrderFailure;
