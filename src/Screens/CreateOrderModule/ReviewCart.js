import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BACKARROWPNG_Image } from '../../Components/ImageManager';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductSample from '../../assets/images/ProductSample.png';

const { width } = Dimensions.get('window');

const initialItems = [
  {
    id: '1',
    code: '358.172-621',
    name: 'Brake Shoe Set Alto Wagon',
    brand: 'LUK',
    gstLabel: 'GST 28%',
    price: 50.0,
    strikePrice: undefined,
    qty: 10,
    image: ProductSample,
  },
  {
    id: '2',
    code: 'F002H236988F8',
    name: 'Brake Shoe Alto…',
    brand: 'LUK',
    gstLabel: 'GST 28%',
    price: 917.0,
    strikePrice: undefined,
    qty: 10,
    image: ProductSample,
  },
  {
    id: '3',
    code: '358.172-271',
    name: 'Brake Shoe Set Alto Wagon',
    brand: 'LUK',
    gstLabel: 'GST 28%',
    price: 57.84,
    strikePrice: 74.0,
    qty: 10,
    image: ProductSample,
  },
];

const ReviewCart = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState(initialItems);

  const totals = useMemo(() => {
    const totalQty = items.reduce((sum, it) => sum + Number(it.qty || 0), 0);
    const total = items.reduce((sum, it) => sum + (Number(it.qty || 0) * Number(it.price || 0)), 0);
    const strike = items.reduce((sum, it) => sum + (Number(it.qty || 0) * Number(it.strikePrice || it.price || 0)), 0);
    return { totalQty, total, strike };
  }, [items]);

  const updateQty = (id, nextQty) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, qty: Math.max(0, Number(nextQty) || 0) } : it)));
  };

  const increment = (id) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, qty: Number(it.qty) + 1 } : it)));
  };

  const decrement = (id) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, qty: Math.max(0, Number(it.qty) - 1) } : it)));
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.productImage} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.codeText}>{item.code}</Text>
          <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
          <Text style={{
            fontSize: 11, color: '#6B7280', fontFamily: 'GilroyMedium', marginTop: 2,
          }}>Per unit (Incl. GST)</Text>
          <Text style={styles.price}>₹ {item.price.toFixed(2)}</Text>
          
           <View style={styles.pillsRow}>
             <View style={[styles.pill, styles.brandPill]}>
               <Text style={styles.brandPillText}>{item.brand}</Text>
             </View>
             <View style={[styles.pill, styles.gstPill,{ flexDirection: 'row', alignItems: 'center', gap: 4 }]}>
               <Text style={styles.gstPillText}>{item.gstLabel}</Text>
               <MaterialCommunityIcons name="information-outline" size={20} color="#707070ff" />
             </View>

             <View style={styles.quantityContainer}>
               <TouchableOpacity onPress={() => decrement(item.id)} style={styles.qtyButton}>
                 <Text style={styles.qtyButtonText}>−</Text>
               </TouchableOpacity>
               <View style={styles.qtyValueBox}>
                 <Text style={styles.qtyValueText}>{String(item.qty)}</Text>
               </View>
               <TouchableOpacity onPress={() => increment(item.id)} style={styles.qtyButton}>
                 <Text style={styles.qtyButtonText}>+</Text>
               </TouchableOpacity>
             </View>
           </View>
          </View>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => removeItem(item.id)}>
          <MaterialCommunityIcons name="trash-can-outline" size={18} color="#FF6B6B" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BACKARROWPNG_Image} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review Cart</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={{
        fontSize: 18, color: '#000000', fontFamily: 'GilroySemiBold', fontWeight: '700', marginTop: 16, marginLeft: 16,
      }}>Your Items</Text>

      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomBar}>
        <View style={{ flex: 1 }}>
          <Text style={styles.itemsCount}>{items.length} Items</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.totalAmount}>₹ {totals.total.toFixed(2)}</Text>
            {totals.strike > totals.total ? (
              <Text style={styles.strikeAmount}>₹ {totals.strike.toFixed(2)}</Text>
            ) : null}
          </View>
        </View>
        <TouchableOpacity style={styles.placeOrderBtn} onPress={() => navigation.navigate('Confirmation')}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backArrow: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  headerTitle: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'GilroySemiBold',
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    alignItems: 'flex-start',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  codeText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '600',
  },
  name: {
    color: '#141414',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 2,
  },
  price: {
    color: '#FF7F2A',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 6,
  },
  pillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  brandPill: {
    backgroundColor: '#E6F0FF',
  },
  gstPill: {
    backgroundColor: '#F0F0F0',
  },
  brandPillText: {
    color: '#1B50C6',
    fontSize: 11,
    fontWeight: '700',
  },
  gstPillText: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '600',
  },
  qtyRow: {
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#112a9bff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  qtyButtonText: {
    color: '#141414',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 18,
  },
  qtyValueBox: {
    height: 28,
    // minWidth: 30,
    paddingHorizontal: 4,
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: '#D7D7D7',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  qtyValueText: {
    color: '#141414',
    fontSize: 13,
    fontFamily: 'GilroyMedium',
  },
  deleteBtn: {
    padding: 6,
    alignSelf: 'flex-start',
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemsCount: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  totalAmount: {
    color: '#141414',
    fontWeight: '700',
    fontSize: 16,
    marginRight: 8,
  },
  strikeAmount: {
    color: '#9CA3AF',
    fontSize: 13,
    textDecorationLine: 'line-through',
  },
  placeOrderBtn: {
    backgroundColor: '#FF7F2A',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 10,
  },
  placeOrderText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default ReviewCart;


