import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
  // Ensure you have the correct import for SvgUri
import {GARAGEWAREHOUSE_Image, Warehouse_Image} from './ImageManager';

const OrderSummaryStockCard = ({
  //   warehouseImage,
  garageName,
  itemQty,
  totalqty,
  mrpTag,
  showNearAddress
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View>
      <View style={{flexDirection:'row'}}>
            <Image source={GARAGEWAREHOUSE_Image} style={{height: 32,width:32}} />
            <Text style={styles.garageName}>{garageName}</Text>
          </View>
          <View>
            <View style={[styles.row,]}>
          <Text style={styles.totalQuantity}>{totalqty}</Text>
        </View>
            </View>
      </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemqty}>{itemQty}</Text>
          </View>
          <View>
          <Text style={styles.mrpStyle}>{mrpTag}</Text>
          </View>
          </View>
        </View>
        {showNearAddress
        &&
        <View>
        <Text style={styles.addressStyle}>45/59, Block A, RK Nagar, Mathigiri, Hosur,
        Krishnagiri, 635110.</Text>
        </View>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  innerContainer: {
    marginHorizontal: 12,
    marginVertical: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    backgroundColor: '#080808',
  },
  garageName: {
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    color: '#141414',
    fontWeight: '600',
    marginLeft: 8,
    marginTop: 4,
  },
  itemqty: {
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  totalQuantity: {
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    color: '#1B50C6',
    fontWeight: '600',
    marginTop: 8,
  },
  mrpStyle: {
    fontFamily: 'GilroySemiBold',
    fontSize: 14,
    color: '#EE4E38',
    fontWeight: '600',
    marginTop: 4,
  },
  addressStyle: {
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    color: '#878787',
    marginTop:8,
    fontWeight: '500',
    lineHeight: 18
  }
});

export default OrderSummaryStockCard;
