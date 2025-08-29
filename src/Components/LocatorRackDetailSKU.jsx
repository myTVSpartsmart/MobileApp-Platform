import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
 


const LocatorRackDetailSKU = ({locator, rack, itemCount, totalQuantity}) => {
  return (
    <View style={styles.ItemDetailStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <Text style={[styles.RackheaderStyle, {flex: 1, textAlign: 'left'}]}>
          Locator
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={[styles.RackFootervalue, {flex: 1, textAlign: 'left'}]}>
          {locator}
        </Text>
      </View>
      <View  style={{marginTop: 8}}/>
      <View style={styles.separator} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.totalQuantatiy}>{totalQuantity} </Text>
          <Text style={styles.quantatityStyle}>Qty</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RackheaderStyle: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#676D75',
    fontWeight: '500',
  },
  RackFootervalue: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#FDFCF7',
    fontWeight: '500',
    marginTop: 8,
  },
  ItemDetailStyle: {
    borderColor: '#1C1C1E',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#1C1C1E',
  },
 
  totalQuantatiy: {
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    color: '#FDFCF7',
    fontWeight: '500',
  },
  quantatityStyle: {
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    color: '#676D75',
    fontWeight: '500',

  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: '#2E2E30',
    width: '100%',
    borderStyle: 'dashed',
    marginVertical: 8,
  },

});

export default LocatorRackDetailSKU;
