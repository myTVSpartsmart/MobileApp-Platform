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
  Modal,
  FlatList,
} from 'react-native';
import { BACKARROWPNG_Image } from '../../Components/ImageManager';
import StatusBarComponent from '../../Components/StatusBarComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateOrderDetail = ({ navigation }) => {
  const [shipToCode, setShipToCode] = useState('8734897/KMS_EWH | SK AUTO PARTS');
  const [isShipToOpen, setIsShipToOpen] = useState(false);

  const shipToOptions = [
    '98734897/KMS_EWH | SK AUTO PARTS',
    '12345678/ABC_MAIN | ABC MOTORS',
    '55551234/XYZ_SEC | XYZ SPARES',
  ];

  // Sample customer data
  const customerData = {
    name: 'SK AUTO PARTS',
    code: 'EOTN000182 / KMS',
    phone: '2790949169',
    email: 'EOTN000182@gmail.com',
    address:
      'D.NO.5800 S.NO.122/6C1 BYE PASS SERVICE ROAD WARD NO.9 EAST MEENAKSHINAYAKENPATTI KURUMBAPATTI DINDIGUL. TAMIL NADU, 624002.',
    creditBalance: '34624.52',
    creditLimit: '200000.00',
    overDueInvoice: '9',
    overDueAmount: '403876.98',
    totalOutstandingAmount: '403876.98',
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    console.log('Continue pressed');
    navigation.navigate("BrandsScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={BACKARROWPNG_Image} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Orders</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Customer Information Container */}
        <View style={styles.customerContainer}>
          {/* Customer Header */}
          <View style={styles.customerHeader}>
            <Text style={styles.customerName}>{customerData.name}</Text>
            <Text style={styles.customerCode}>{customerData.code}</Text>
          </View>

          {/* Separator Line */}
          <View style={styles.separatorLine} />

          {/* Phone */}
          <Text style={styles.phoneNumber}>{customerData.phone}</Text>

          {/* Email */}
          <Text style={styles.email}>{customerData.email}</Text>

          {/* Address */}
          <Text style={styles.address}>{customerData.address}</Text>

          {/* Financial Info */}
          <View style={{marginTop:"5%"}}>
            <View style={styles.financialRow}>
              <Text style={styles.financialLabel}>Credit Balance: </Text>
              <Text style={[styles.financialValueBlue]}>{customerData.creditBalance}</Text>
            </View>

            <View style={styles.financialRow}>
              <Text style={styles.financialLabelblack}>Credit Limit: </Text>
              <Text style={styles.financialValue}>{customerData.creditLimit}</Text>
            </View>

            <View style={styles.financialRow}>
              <Text style={styles.financialLabelblack}>Over Due Invoice: </Text>
              <Text style={styles.financialValue}>{customerData.overDueInvoice}</Text>
            </View>

            <View style={styles.financialRow}>
              <Text style={styles.financialLabelblack}>Over Due Amount: </Text>
              <Text style={styles.financialValue}>{customerData.overDueAmount}</Text>
            </View>

            <View style={styles.financialRow}>
              <Text style={styles.financialLabel}>Total Outstanding Amount: </Text>
              <Text style={styles.financialValueBlue}>{customerData.totalOutstandingAmount}</Text>
            </View>
          </View>

          {/* Ship To Section */}
          <View style={styles.shipToSection}>
            <Text style={styles.shipToLabel}>Ship To:</Text>

            <View style={styles.shipToInputContainer}>
              <TextInput
                style={shipToCode ? styles.shipToInput : styles.shipToPlaceholder}
                value={shipToCode}
                onChangeText={setShipToCode}
                placeholder="98734897/KMS_EWH | SK AUTO PARTS"
                placeholderTextColor="#969CAA"
                editable={false}
              />
            <TouchableOpacity style={styles.dropdownButton} onPress={() => setIsShipToOpen(true)}>
                {/* <Text style={styles.dropdownIcon}>V</Text> */}
                <MaterialCommunityIcons name="chevron-down" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            <Text style={styles.shipToAddress}>{customerData.address}</Text>
          </View>
        </View>

      </ScrollView>

    {/* Ship To Dropdown */}
    <Modal
      visible={isShipToOpen}
      animationType="fade"
      transparent
      onRequestClose={() => setIsShipToOpen(false)}
    >
      <View style={styles.modalBackdrop}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>Select Ship To</Text>
          <FlatList
            data={shipToOptions}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => {
                  setShipToCode(item);
                  setIsShipToOpen(false);
                }}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setIsShipToOpen(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 14,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E5E5E5',
  },
  backArrow: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  headerText: {
    fontSize: 17,
    marginLeft: 12,
    color: '#000000',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  customerContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  customerHeader: {
    marginBottom: 16,
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginBottom: 16,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  customerCode: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 12,
  },
  email: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 16,
  },
  address: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 20,
    marginBottom: 0,
  },

  financialRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  financialLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#364369',
  },
  financialLabelblack: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121212',
  },
  financialValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#121212',
  },
  financialValueBlue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#364369',
  },
  shipToSection: {
    marginBottom: 80,
    marginTop: 16,
  },
  shipToLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 12,
  },
  shipToInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#ff8818ff',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 12,
  },
  shipToInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: '#999999',
    fontSize: 14,
    fontWeight: '500',
  },
  shipToPlaceholder: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: '#969CAA',
    fontSize: 14,
    fontWeight: '500',
  },
  dropdownButton: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownIcon: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  shipToAddress: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 20,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    // borderTopWidth: 1,
    // borderTopColor: '#E5E5E5',
    gap: 12,
  },
  backButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#364369',
  },
  continueButton: {
    flex: 1,
    backgroundColor: '#FF6B35',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
    
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  optionText: {
    fontSize: 14,
    color: '#121212',
    fontWeight: '500',
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  closeButton: {
    marginTop: 12,
    backgroundColor: '#FF6B35',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CreateOrderDetail;
