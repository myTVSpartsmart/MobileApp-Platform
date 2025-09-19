import React, { useMemo, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    ScrollView
} from 'react-native';
import { BACKARROWPNG_Image, SEARCHPNG_Image } from '../../Components/ImageManager';
import StatusBarComponent from '../../Components/StatusBarComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import ProductSample from '../../assets/images/ProductSample.png';
import RBSheet from 'react-native-raw-bottom-sheet';


const { width } = Dimensions.get('window');

const sampleProducts = [
    {
        id: '1',
        brand: 'HELLA',
        code: '358.172-271',
        name: 'Brake Shoe Set Alto Wagon',
        price: 74.0,
        discountPrice: 57.84,
        discount: '33% Off',
        stock: 'Limited Stock',
        delivery: '1 - 2 Days',
        image: 'https://via.placeholder.com/100', // Replace with real image
    },
    {
        id: '2',
        brand: 'HELLA',
        code: '358.172-271',
        name: 'Brake Shoe Set Alto Wagon',
        price: 74.0,
        discountPrice: 57.84,
        discount: '33% Off',
        stock: 'Limited Stock',
        delivery: '1 - 2 Days',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: '3',
        brand: 'HELLA',
        code: '358.172-271',
        name: 'Brake Shoe Set Alto Wagon',
        price: 74.0,
        discountPrice: 57.84,
        discount: '33% Off',
        stock: 'Limited Stock',
        delivery: '1 - 2 Days',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: '4',
        brand: 'HELLA',
        code: '358.172-271',
        name: 'Brake Shoe Set Alto Wagon',
        price: 74.0,
        discountPrice: 57.84,
        discount: '33% Off',
        stock: 'Limited Stock',
        delivery: '1 - 2 Days',
        image: 'https://via.placeholder.com/100', // Replace with real image
    },
    {
        id: '5',
        brand: 'HELLA',
        code: '358.172-271',
        name: 'Brake Shoe Set Alto Wagon',
        price: 74.0,
        discountPrice: 57.84,
        discount: '33% Off',
        stock: 'Limited Stock',
        delivery: '1 - 2 Days',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: '6',
        brand: 'HELLA',
        code: '358.172-271',
        name: 'Brake Shoe Set Alto Wagon',
        price: 74.0,
        discountPrice: 57.84,
        discount: '33% Off',
        stock: 'Limited Stock',
        delivery: '1 - 2 Days',
        image: 'https://via.placeholder.com/100',
    },
];

const ProductList = () => {
    const [products, setProducts] = useState(sampleProducts);
    const [searchText, setSearchText] = useState('');
    const [activeFilterTab, setActiveFilterTab] = useState('Brand');
    const [brandQuery, setBrandQuery] = useState('');
    const [selectedBrands, setSelectedBrands] = useState({});

    const bottomSheetRef = useRef(null);
    const addSheetRef = useRef(null);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const warehouses = [
        { id: 'KMS_CDA_06', code: 'KMS_CDA', qty: '06', days: 20 },
        { id: 'KMS_MDU_01', code: 'KMS_MDU', qty: '01', days: 20 },
        { id: 'KMS_SLD_03', code: 'KMS_SLD', qty: '03', days: 20 },
        { id: 'KMS_CDA_04', code: 'KMS_CDA', qty: '04', days: 20 },
        { id: 'KMS_MDU_21', code: 'KMS_MDU', qty: '21', days: 20 },
        { id: 'KMS_SLD_02', code: 'KMS_SLD', qty: '02', days: 20 },
    ];

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("ReviewCart")} style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.brand}>{item.brand}</Text>
                <TouchableOpacity onPress={() => bottomSheetRef.current?.open()}>
                    <MaterialCommunityIcons name="dots-vertical" size={18} color="#9E9E9E" />
                </TouchableOpacity>
            </View>

            <Image source={ProductSample} style={styles.productImage} />

            <View style={{ backgroundColor: '#f1f1f1', padding: 6 }}>

                <Text style={styles.codeText}>{item.code}</Text>

                <View style={styles.badgeRow}>
                    <View style={[styles.badge, styles.badgeWarning]}>
                        <Text style={styles.badgeWarningText}>{item.stock}</Text>
                    </View>
                    <View style={[styles.badge, styles.badgeNeutral]}>
                        <Text style={styles.badgeNeutralText}>{item.delivery}</Text>
                    </View>
                </View>

                <Text style={styles.name} numberOfLines={2}>{item.name}</Text>

                <View style={styles.priceRow}>
                    <Text style={styles.discountPrice}>₹ {item.discountPrice}</Text>
                    <Text style={styles.originalPrice}>₹ {item.price}</Text>
                    <View style={styles.discountPill}>
                        <Text style={styles.discountPillText}>{item.discount}</Text>
                    </View>
                </View>

                <View style={styles.footerRow}>
                    <Text style={styles.unitText}>Per Unit  (Incl. GST)</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addSheetRef.current?.open()}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

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


            {/* Filters Row */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#fff' }}>
                <View style={styles.filterRow}>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Text style={styles.filterText}>Brands</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={18} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Text style={styles.filterText}>Year</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={18} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Text style={styles.filterText}>Sort By</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={18} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Text style={styles.filterText}>Price</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={18} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Text style={styles.filterText}>Discount</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={18} color="#000" />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Product Grid */}
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderProduct}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />

            {/* Filters Bottom Sheet */}
            <RBSheet
                ref={bottomSheetRef}
                height={Math.floor((Dimensions.get('window').height * 0.85))}
                closeOnPressMask
                customStyles={{
                    wrapper: { backgroundColor: 'rgba(0,0,0,0.35)' },
                    container: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
                }}
            >
                <View style={styles.sheetContainer}>
                    {/* Sheet Header */}
                    <View style={styles.sheetHeader}>
                        <Text style={styles.sheetTitle}>All Filters</Text>
                        <TouchableOpacity onPress={() => bottomSheetRef.current?.close()} style={styles.closeIcon}>
                            <MaterialCommunityIcons name="close" size={22} color="#666" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sheetContent}>
                        {/* Left Tabs */}
                        <View style={styles.leftTabs}>
                            {['Brand', 'Make', 'Model', 'Variant', 'Fuel Type', 'Aggregate', 'Sub Aggregate', 'Component'].map((tab) => (
                                <TouchableOpacity
                                    key={tab}
                                    style={[styles.tabItem, activeFilterTab === tab && styles.tabItemActive]}
                                    onPress={() => setActiveFilterTab(tab)}
                                >
                                    <Text style={[styles.tabText, activeFilterTab === tab && styles.tabTextActive]}>{tab}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Right Content */}
                        <View style={styles.rightPane}>
                            {activeFilterTab === 'Brand' && (
                                <View style={{ flex: 1 }}>
                                    <View style={styles.searchBarMini}>
                                        <MaterialCommunityIcons name="magnify" size={18} color="#8E8E93" />
                                        <TextInput
                                            style={styles.searchMiniInput}
                                            placeholder="Search Brands"
                                            placeholderTextColor="#B0B0B0"
                                            value={brandQuery}
                                            onChangeText={setBrandQuery}
                                        />
                                    </View>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        {['3M', 'Abi Blue', 'Anabond', 'BCCOOL', 'Bosch', 'Ceekay Clutch', 'Combos', 'Contintech', 'Delphi Tech', 'Denso', 'Exedy', 'Fag', 'Finner'].filter((b) => b.toLowerCase().includes(brandQuery.toLowerCase())).map((brand) => {
                                            const checked = !!selectedBrands[brand];
                                            return (
                                                <TouchableOpacity
                                                    key={brand}
                                                    style={styles.checkboxRow}
                                                    onPress={() => setSelectedBrands(prev => ({ ...prev, [brand]: !checked }))}
                                                >
                                                    <View style={[styles.checkboxBox, checked && styles.checkboxBoxChecked]}>
                                                        {checked && (
                                                            <MaterialCommunityIcons name="check" size={14} color="#fff" />
                                                        )}
                                                    </View>
                                                    <Text style={styles.checkboxLabel}>{brand}</Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                        <View style={{ height: 80 }} />
                                    </ScrollView>
                                </View>
                            )}
                        </View>
                    </View>

                    {/* Footer Buttons */}
                    <View style={styles.sheetFooter}>
                        <TouchableOpacity style={styles.clearBtn} onPress={() => { setSelectedBrands({}); setBrandQuery(''); }}>
                            <Text style={styles.clearBtnText}>Clear Filter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.applyBtn} onPress={() => bottomSheetRef.current?.close()}>
                            <Text style={styles.applyBtnText}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet>

            {/* Add Bottom Sheet - Warehouse Selector */}
            <RBSheet
                ref={addSheetRef}
                height={Math.floor(Dimensions.get('window').height * 0.72)}
                closeOnPressMask
                customStyles={{
                    wrapper: { backgroundColor: 'rgba(0,0,0,0.35)' },
                    container: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
                }}
            >
                <View style={styles.addSheetContainer}>
                    <View style={styles.dragHandle} />
                    <View style={styles.orderRow}>
                        <View>
                            <Text style={styles.orderId}>IOF25190045361</Text>
                            <Text style={styles.orderSubTitle}>Order ID</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.totalPrice}>₹ 1600.38</Text>
                            <Text style={styles.orderSubTitle}>Total Price</Text>
                        </View>
                    </View>

                    <View style={styles.selectorCard}>
                        <Text style={styles.selectorTitle}>Select Warehouse to add Quantity</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.warehouseGrid}>
                                {warehouses.map((wh) => {
                                    const isActive = selectedWarehouse === wh.id;
                                    return (
                                        <View key={wh.id} style={styles.warehouseItem}>
                                            <TouchableOpacity
                                                onPress={() => setSelectedWarehouse(wh.id)}
                                                style={[styles.warehouseButton, isActive && styles.warehouseButtonActive]}
                                                activeOpacity={0.8}
                                            >
                                                <Text style={styles.warehouseCode}>{wh.code}</Text>
                                                <Text style={styles.warehouseQty}>{wh.qty}</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.deliveryDays}>{wh.days} Days{"\n"}Delivery</Text>
                                        </View>
                                    );
                                })}
                            </View>
                            <Text style={styles.scrollHint}>Scroll more warehouse available</Text>
                            <View style={{ height: 16 }} />
                        </ScrollView>
                    </View>

                    <View style={styles.addFooterRow}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => addSheetRef.current?.close()}>
                            <Text style={styles.backBtnText}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.continueBtn} onPress={() => addSheetRef.current?.close()}>
                            <Text style={styles.continueBtnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    filterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 10,
        gap: 8,
        marginBottom: 4,
    },
    filterBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        paddingHorizontal: 11,
        // paddingVertical: 5,
        height: 25
    },
    filterText: {
        marginRight: 4,
        fontSize: 13,
        color: '#000',
    },
    listContainer: {
        paddingHorizontal: 8,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        // padding: 10,
        marginBottom: 12,
        width: (width / 2) - 16,
        borderWidth: 1,
        borderColor: '#eee',
        marginTop:"3%"
        
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6,
        padding: 6
    },
    productImage: {
        width: '100%',
        height: 90,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    brand: {
        fontWeight: '700',
        color: '#666',
        fontSize: 11,
    },
    codeText: {
        color: '#A0A0A0',
        fontSize: 12,
        fontWeight:"800",
        marginBottom: 6,
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
    },
    badgeWarning: {
        backgroundColor: '#E5F0EB',
    },
    badgeWarningText: {
        color: '#F57C00',
        fontSize: 11,
        fontWeight: '600',
    },
    badgeNeutral: {
        backgroundColor: 'white',
    },
    badgeNeutralText: {
        color: '#616161',
        fontSize: 11,
        fontWeight: '600',
    },
    stock: {
        color: 'orange',
        fontSize: 12,
    },
    delivery: {
        fontSize: 12,
        color: '#666',
    },
    name: {
        marginTop: 4,
        fontSize: 13,
        fontWeight: '500',
        color: '#000',
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
        gap: 6,
        flexWrap: 'wrap',
    },
    discountPrice: {
        fontWeight: '700',
        color: '#000',
        fontSize: 15,
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        fontSize: 15,
        color: '#888',
    },
    discountPill: {
        backgroundColor: '#364369',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        marginLeft: 'auto',
    },
    discountPillText: {
        fontSize: 11,
        color: 'white',
        fontWeight: '700',
    },
    footerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    unitText: {
        fontSize: 11,
        color: '#9E9E9E',
        fontWeight:600
    },
    addButton: {
        backgroundColor: '#F35601',
        paddingVertical: 0,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: '600',
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
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        // marginHorizontal: 2,
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
    sheetContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sheetHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
    },
    sheetTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
    },
    sheetContent: {
        flex: 1,
        flexDirection: 'row',
    },
    leftTabs: {
        width: 150,
        borderRightWidth: 1,
        borderRightColor: '#ecececff',
        paddingVertical: 8,
    },
    tabItem: {
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    tabItemActive: {
        // backgroundColor: '#F5F7FA',
        borderRightWidth: 1.5,
        borderRightColor: '#1B50C6',
    },
    tabText: {
        color: '#6B7280',
        fontSize: 13,
        fontWeight: '600',
    },
    tabTextActive: {
        color: '#111827',
    },
    rightPane: {
        flex: 1,
        padding: 12,
    },
    searchBarMini: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 36,
        marginBottom: 8,
    },
    searchMiniInput: {
        flex: 1,
        color: '#000',
        fontSize: 14,
        paddingVertical: 0,
        marginLeft: 6,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkboxBox: {
        width: 18,
        height: 18,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#C7C7C7',
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    checkboxBoxChecked: {
        backgroundColor: '#1B50C6',
        borderColor: '#1B50C6',
    },
    checkboxLabel: {
        color: '#111827',
        fontSize: 14,
    },
    sheetFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#ECECEC',
    },
    clearBtn: {
        // backgroundColor: '#F5F5F5',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        marginRight: 8,
    },
    clearBtnText: {
        color: '#4B5563',
        fontWeight: '700',
    },
    applyBtn: {
        backgroundColor: '#F35601',
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        marginLeft: 8,
    },
    applyBtnText: {
        color: '#fff',
        fontWeight: '700',
    },
    closeIcon: {
        padding: 4,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#E8E8E8',
        borderRadius: 1000
    },
    // Add sheet styles
    addSheetContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    dragHandle: {
        alignSelf: 'center',
        width: 48,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#DADADA',
        marginBottom: 8,
    },
    orderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    orderId: {
        color: '#1B50C6',
        fontWeight: '700',
        fontSize: 14,
    },
    totalPrice: {
        color: '#1B50C6',
        fontWeight: '700',
        fontSize: 14,
    },
    orderSubTitle: {
        color: '#6B7280',
        fontSize: 12,
        marginTop: 2,
    },
    selectorCard: {
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 12,
        padding: 12,
        marginTop: 10,
        flex: 1,
    },
    selectorTitle: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#111827',
        marginBottom: 12,
    },
    warehouseGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    warehouseItem: {
        width: '32%',
        alignItems: 'center',
        marginBottom: 16,
    },
    warehouseButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#fff',
    },
    warehouseButtonActive: {
        borderColor: '#1B50C6',
        shadowColor: '#1B50C6',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    warehouseCode: {
        color: '#111827',
        fontWeight: '700',
        fontSize: 13,
        marginBottom: 6,
    },
    warehouseQty: {
        color: '#1B50C6',
        fontWeight: '700',
        fontSize: 16,
    },
    deliveryDays: {
        textAlign: 'center',
        color: '#6B7280',
        fontSize: 12,
        marginTop: 8,
    },
    scrollHint: {
        textAlign: 'center',
        color: '#9CA3AF',
        fontSize: 12,
        marginTop: 8,
    },
    addFooterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    backBtn: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 8,
    },
    backBtnText: {
        color: '#1F2937',
        fontWeight: '700',
    },
    continueBtn: {
        flex: 1,
        backgroundColor: '#F35601',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 8,
    },
    continueBtnText: {
        color: '#fff',
        fontWeight: '700',
    },
});

export default ProductList;
