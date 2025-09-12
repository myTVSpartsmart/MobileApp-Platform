// src/components/CalendarModal.js
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import dayjs from "dayjs";
import Icon from "react-native-vector-icons/Ionicons";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

const CalendarModal = ({ visible, onClose, selectedDate, onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs(selectedDate));

  const daysInMonth = currentMonth.daysInMonth();
  const startOfMonth = currentMonth.startOf("month").day();

  // Generate array of days for grid
  const daysArray = [];
  for (let i = 0; i < startOfMonth; i++) {
    daysArray.push(null); // empty slots before first day
  }
  for (let d = 1; d <= daysInMonth; d++) {
    daysArray.push(dayjs(currentMonth).date(d));
  }

  const handleSelect = (date) => {
    onSelectDate(date);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
            >
              <Icon name="chevron-back" size={20} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.headerText}>
              {currentMonth.format("MMMM YYYY")}
            </Text>

            <TouchableOpacity
              style={styles.arrowButton}
              onPress={() => setCurrentMonth(currentMonth.add(1, "month"))}
            >
              <Icon name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Weekdays */}
          <View style={styles.weekRow}>
            {weekDays.map((day, index) => (
              <Text key={index} style={styles.weekDay}>
                {day}
              </Text>
            ))}
          </View>

          {/* Days grid */}
          <View style={styles.daysGrid}>
            {daysArray.map((date, index) => {
              const isSelected =
                date && selectedDate && date.isSame(selectedDate, "day");
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dayCell,
                    isSelected && styles.selectedDayCell,
                  ]}
                  disabled={!date}
                  onPress={() => date && handleSelect(date)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      isSelected && styles.selectedDayText,
                      !date && styles.emptyDay,
                    ]}
                  >
                    {date ? date.date() : ""}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: "90%",
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  arrowButton: {
    backgroundColor: "#FF6600",
    padding: 6,
    borderRadius: 6,
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
    color: "#555",
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayCell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
  },
  dayText: {
    color: "#000",
  },
  selectedDayCell: {
    backgroundColor: "#1E3A8A", // blue background
    borderRadius: 50,
  },
  selectedDayText: {
    color: "#fff",
    fontWeight: "bold",
  },
  emptyDay: {
    color: "transparent",
  },
});
