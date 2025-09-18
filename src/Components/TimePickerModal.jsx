// src/components/TimePickerModal.js
import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
const periods = ["AM", "PM"];

function toDateObject(input) {
  if (!input) return new Date();
  if (typeof input === "object" && typeof input.toDate === "function") {
    return input.toDate();
  }
  if (input instanceof Date) return input;
  const parsed = new Date(input);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

const TimePickerModal = ({ visible, onClose, selectedTime, onSelectTime }) => {
  const parsed = toDateObject(selectedTime);

  const [hour, setHour] = useState(
    String(parsed.getHours() % 12 || 12).padStart(2, "0")
  );
  const [minute, setMinute] = useState(
    String(parsed.getMinutes()).padStart(2, "0")
  );
  const [period, setPeriod] = useState(parsed.getHours() >= 12 ? "PM" : "AM");

  const handleConfirm = () => {
    let h = parseInt(hour, 10);
    const m = parseInt(minute, 10);

    if (period === "PM" && h < 12) h += 12;
    if (period === "AM" && h === 12) h = 0;

    const newDate = new Date();
    newDate.setHours(h, m, 0, 0);

    onSelectTime(newDate);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Select Time</Text>

          <View style={styles.row}>
            {/* Hour */}
            <Picker
              selectedValue={hour}
              style={styles.picker}
              onValueChange={(value) => setHour(value)}
            >
              {hours.map((h) => (
                <Picker.Item key={h} label={h} value={h} />
              ))}
            </Picker>

            <Text style={styles.separator}>:</Text>

            {/* Minute */}
            <Picker
              selectedValue={minute}
              style={styles.picker}
              onValueChange={(value) => setMinute(value)}
            >
              {minutes.map((m) => (
                <Picker.Item key={m} label={m} value={m} />
              ))}
            </Picker>

            {/* AM/PM */}
            <Picker
              selectedValue={period}
              style={styles.picker}
              onValueChange={(value) => setPeriod(value)}
            >
              {periods.map((p) => (
                <Picker.Item key={p} label={p} value={p} />
              ))}
            </Picker>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#ccc" }]}
              onPress={onClose}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#FF6600" }]}
              onPress={handleConfirm}
            >
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TimePickerModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "86%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    elevation: 6,
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  picker: {
    width: 90,
    height: 150,
  },
  separator: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginHorizontal: 6,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginLeft: 10,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  okText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
