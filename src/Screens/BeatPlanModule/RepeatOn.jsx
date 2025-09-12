// src/Screens/RepeatOn.js
import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import dayjs from "dayjs";
import CalendarModal from "../../Components/CalendarModal";
import Icon from "react-native-vector-icons/MaterialIcons";

const RepeatOn = ({ visible, onClose, navigation }) => {
  const [repeatOption, setRepeatOption] = useState("Custom Date");
  const [showDropdown, setShowDropdown] = useState(false);
  const [date, setDate] = useState(dayjs());
  const [showCalendar, setShowCalendar] = useState(false);
  const [weeklyDays, setWeeklyDays] = useState([]);

  const options = ["Custom Date", "Weekly", "Not Required"];
  const daysOfWeek = [
    { key: "Sun", label: "S" },
    { key: "Mon", label: "M" },
    { key: "Tue", label: "T" },
    { key: "Wed", label: "W" },
    { key: "Thu", label: "T" },
    { key: "Fri", label: "F" },
    { key: "Sat", label: "S" },
  ];

  const toggleDay = (dayKey) => {
    if (weeklyDays.includes(dayKey)) {
      setWeeklyDays(weeklyDays.filter((d) => d !== dayKey));
    } else {
      setWeeklyDays([...weeklyDays, dayKey]);
    }
  };

  const handleSelectOption = (option) => {
    setRepeatOption(option);
    setShowDropdown(false);
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Repeat On</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Dropdown */}
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.dropdownText}>{repeatOption}</Text>
            <Icon
              name={showDropdown ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={20}
              color="#F36F21"
            />
          </TouchableOpacity>

          {showDropdown && (
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItemRadio}
                  onPress={() => handleSelectOption(item)}
                >
                  <View style={styles.radioCircle}>
                    {repeatOption === item && <View style={styles.radioDot} />}
                  </View>
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          {/* Custom Date */}
          {repeatOption === "Custom Date" && (
            <View style={styles.section}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setShowCalendar(true)}
              >
                <Text style={styles.dateText}>{date.format("DD-MM-YYYY")}</Text>
                <Text style={styles.calendarIcon}>📅</Text>
              </TouchableOpacity>
              <View style={styles.underline} />
            </View>
          )}

          {/* Weekly */}
          {repeatOption === "Weekly" && (
            <View style={styles.section}>
              <Text style={styles.label}>Weekly</Text>
              <View style={styles.weekContainer}>
                {daysOfWeek.map((day) => (
                  <TouchableOpacity
                    key={day.key}
                    style={[
                      styles.dayButton,
                      weeklyDays.includes(day.key) && styles.dayButtonSelected,
                    ]}
                    onPress={() => toggleDay(day.key)}
                  >
                    <Text
                      style={[
                        styles.dayButtonText,
                        weeklyDays.includes(day.key) &&
                          styles.dayButtonTextSelected,
                      ]}
                    >
                      {day.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Done button */}
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => {
              onClose(); // close the modal
              navigation.navigate("SuccessPage"); // navigate to SuccessPage
            }}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CalendarModal
        visible={showCalendar}
        onClose={() => setShowCalendar(false)}
        selectedDate={date}
        onSelectDate={(selected) => {
          setDate(selected);
          setShowCalendar(false);
        }}
      />
    </Modal>
  );
};

export default RepeatOn;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { fontSize: 16, fontWeight: "bold" },
  closeButton: { fontSize: 20, fontWeight: "bold" },
  dropdown: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F36F21",
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  dropdownText: { fontSize: 14, color: "#000" },
  dropdownItemRadio: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#F36F21",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#F36F21",
  },
  dropdownItemText: { fontSize: 14 },
  section: { marginTop: 16 },
  label: { fontSize: 14, marginBottom: 6 },
  dateInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: { fontSize: 14 },
  underline: {
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 4,
  },
  calendarIcon: { fontSize: 16, color: "#555" },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  dayButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dayButtonSelected: { backgroundColor: "#F36F21", borderColor: "#F36F21" },
  dayButtonText: { fontSize: 14, fontWeight: "bold" },
  dayButtonTextSelected: { color: "white" },
  doneButton: {
    backgroundColor: "#F36F21",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  doneButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
