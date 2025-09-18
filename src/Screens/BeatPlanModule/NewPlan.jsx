import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/Ionicons';

// Custom Components
import CalendarModal from '../../Components/CalendarModal';
import TimePickerModal from '../../Components/TimePickerModal';
import SalesScreen from '../SalesScreen';

const PLAN_TYPES = [
  'New Plan',
  'Event',
  'Meeting',
  'Training',
  'Leave',
  'Holiday',
  'New Leads Creates',
];

// ===== Dummy API Data (replace later with API call) =====
const DUMMY_LOCATIONS = [
  // Chennai
  'T Nagar',
  'Velachery',
  'Anna Nagar',
  'Adyar',
  'Guindy',
  'Tambaram',
  'Kodambakkam',
  'Nungambakkam',
  // Madurai
  'Mattuthavani',
  'Thirupparankundram',
  'KK Nagar',
  'Tallakulam',
  'Simmakkal',
  'Palanganatham',
  'Koodal Nagar',
  'Periyar Bus Stand',
  // Coimbatore
  'Gandhipuram',
  'RS Puram',
  'Saibaba Colony',
  'Singanallur',
  'Peelamedu',
  'Race Course',
  'Ukkadam',
  'Vadavalli',
  'Saravanampatti',
]; // Total = 25

const DUMMY_CUSTOMERS = [
  'Customer A',
  'Customer B',
  'Customer C',
  'Customer D',
  'Customer E',
  'Customer F',
  'Customer G',
  'Customer H',
];
// =======================================================

const NewPlan = ({ navigation }) => {
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());

  const [location, setLocation] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [remarks, setRemarks] = useState('');

  const [planType, setPlanType] = useState('New Plan');
  const [showDropdown, setShowDropdown] = useState(false);

  // Modals
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  // API placeholders (replace with real API later)
  // useEffect(() => {
  //   fetch("YOUR_API_ENDPOINT/locations")
  //     .then(res => res.json())
  //     .then(data => setLocations(data));
  // }, []);

  const handleCreate = () => {
    console.log({
      planType,
      date: date.format('DD/MM/YYYY'),
      time: time.format('hh:mm A'),
      location,
      customer,
      remarks,
    });
    navigation.navigate('RepeatOn');
  };

  const toggleSelection = (item, selectedList, setSelectedList) => {
    if (selectedList.includes(item)) {
      setSelectedList(selectedList.filter(i => i !== item));
    } else {
      setSelectedList([...selectedList, item]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Plan</Text>
      </View>

      {/* Plan Type Dropdown */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowDropdown(true)}
      >
        <Text style={styles.dropdownText}>{planType}</Text>
        <Icon name="chevron-down" size={18} color="#555" />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={showDropdown}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDropdown(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setShowDropdown(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={PLAN_TYPES}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setPlanType(item);
                    setShowDropdown(false);
                  }}
                >
                  <Icon
                    name={
                      planType === item ? 'radio-button-on' : 'radio-button-off'
                    }
                    size={20}
                    color="#FF6600"
                  />
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Add New Plan Section */}
      <View style={styles.section}>
        {/* Case 1: New Plan → full form */}
        {planType === 'New Plan' && (
          <>
            {/* Date & Time Row */}
            <View style={styles.row}>
              <View style={styles.halfInput}>
                <Text style={styles.label}>Date</Text>
                <TouchableOpacity
                  style={styles.inputWithIcon}
                  onPress={() => setShowCalendar(true)}
                >
                  <Text style={styles.inputText}>
                    {date ? dayjs(date).format('DD/MM/YYYY') : 'Select Date'}
                  </Text>
                  <Icon name="calendar-outline" size={18} color="#888" />
                </TouchableOpacity>
              </View>

              <View style={styles.halfInput}>
                <Text style={styles.label}>Time</Text>
                <TouchableOpacity
                  style={styles.inputWithIcon}
                  onPress={() => setShowTime(true)}
                >
                  <Text style={styles.inputText}>
                    {time ? dayjs(time).format('hh:mm A') : 'Select Time'}
                  </Text>
                  <Icon name="time-outline" size={18} color="#888" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Location */}
            <Text style={styles.label}>Select Location</Text>
            <TouchableOpacity
              style={styles.inputWithIcon}
              onPress={() => setShowLocationModal(true)}
            >
              <Text style={styles.placeholder}>
                {location.length > 0
                  ? location.join(', ')
                  : 'Click here to Select location'}
              </Text>
              <Icon name="location-outline" size={18} color="#888" />
            </TouchableOpacity>

            {/* Customer */}
            <Text style={styles.label}>Select Customer</Text>
            <TouchableOpacity
              style={styles.inputWithIcon}
              onPress={() => setShowCustomerModal(true)}
            >
              <Text style={styles.placeholder}>
                {customer.length > 0
                  ? customer.join(', ')
                  : 'Click here to Select Customer'}
              </Text>
              <Icon name="chevron-down" size={18} color="#888" />
            </TouchableOpacity>

            {/* Remarks */}
            <Text style={styles.label}>Remarks</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Remarks"
              value={remarks}
              onChangeText={setRemarks}
            />
          </>
        )}

        {/* Case 2: Event, Meeting, Training → Date, Time, Remarks */}
        {(planType === 'Event' ||
          planType === 'Meeting' ||
          planType === 'Training') && (
          <>
            {/* Date */}
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity
              style={styles.inputWithIcon}
              onPress={() => setShowCalendar(true)}
            >
              <Text style={styles.inputText}>
                {date ? dayjs(date).format('DD/MM/YYYY') : 'Select Date'}
              </Text>
              <Icon name="calendar-outline" size={18} color="#888" />
            </TouchableOpacity>

            {/* Time */}
            <Text style={styles.label}>Time</Text>
            <TouchableOpacity
              style={styles.inputWithIcon}
              onPress={() => setShowTime(true)}
            >
              <Text style={styles.inputText}>
                {time ? dayjs(time).format('hh:mm A') : 'Select Time'}
              </Text>
              <Icon name="time-outline" size={18} color="#888" />
            </TouchableOpacity>

            {/* Remarks */}
            <Text style={styles.label}>Remarks</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Remarks"
              value={remarks}
              onChangeText={setRemarks}
            />
          </>
        )}

        {/* Case 3: Leave, Holiday, New Leads Creates → Date + Big Remarks */}
        {(planType === 'Leave' ||
          planType === 'Holiday' ||
          planType === 'New Leads Creates') && (
          <>
            {/* Date */}
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity
              style={styles.inputWithIcon}
              onPress={() => setShowCalendar(true)}
            >
              <Text style={styles.inputText}>
                {date ? dayjs(date).format('DD/MM/YYYY') : 'Select Date'}
              </Text>
              <Icon name="calendar-outline" size={18} color="#888" />
            </TouchableOpacity>

            {/* Remarks (Big Box) */}
            <Text style={styles.label}>Remarks</Text>
            <TextInput
              style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
              placeholder="Enter Remarks"
              value={remarks}
              onChangeText={setRemarks}
              multiline
            />
          </>
        )}
      </View>

      {/* Create Button */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreate}>
        <Text style={styles.createText}>Create</Text>
      </TouchableOpacity>

      {/* Calendar Modal */}
      <CalendarModal
        visible={showCalendar}
        onClose={() => setShowCalendar(false)}
        selectedDate={date}
        onSelectDate={newDate => setDate(newDate)}
      />

      {/* Time Picker Modal */}
      <TimePickerModal
        visible={showTime}
        onClose={() => setShowTime(false)}
        selectedTime={time}
        onSelectTime={newTime => setTime(newTime)}
      />

      {/* Location Modal */}
      <Modal visible={showLocationModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Locations</Text>
            <FlatList
              data={DUMMY_LOCATIONS}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => toggleSelection(item, location, setLocation)}
                >
                  <Icon
                    name={
                      location.includes(item) ? 'checkbox' : 'square-outline'
                    }
                    size={20}
                    color="#FF6600"
                  />
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.okButton}
              onPress={() => setShowLocationModal(false)}
            >
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Customer Modal */}
      <Modal visible={showCustomerModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Customers</Text>
            <FlatList
              data={DUMMY_CUSTOMERS}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => toggleSelection(item, customer, setCustomer)}
                >
                  <Icon
                    name={
                      customer.includes(item) ? 'checkbox' : 'square-outline'
                    }
                    size={20}
                    color="#FF6600"
                  />
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.okButton}
              onPress={() => setShowCustomerModal(false)}
            >
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default NewPlan;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 25,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  inputWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  inputText: {
    color: '#000',
  },
  placeholder: {
    color: '#999',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  dropdownText: {
    color: '#333',
  },
  createButton: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  createText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  okButton: {
    marginTop: 15,
    backgroundColor: '#FF6600',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  okText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
