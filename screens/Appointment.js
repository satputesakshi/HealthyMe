import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Calendar } from "react-native-calendars";
const Appointment = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainWindow}>
        <View style={styles.header}>
          <Text style={styles.welcomeHeader}>
            Your Upcoming Appointments&nbsp;
          </Text>
        </View>
        <Calendar
          markingType={"custom"}
          markedDates={{
            "2022-11-20": {
              customStyles: {
                container: { backgroundColor: "red", elevation: 2 },
                text: { color: "white" },
              },
            },
          }}
        />
      </View>
      <View
        style={{
          alignItems: "screenLeft",
          backgroundColor: "#90e0ef",
          padding: 10,
          borderRadius: 8,
          marginLeft: 10,
          marginBottom: 10,
          marginRight: 10,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Icon name="stethoscope" size={20} style={styles.icon} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Appointment Details &nbsp;
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            marginLeft: 27,
            marginTop: 10,
            fontWeight: "normal",
          }}
        >
          Date: November 20, 2022&nbsp;
        </Text>
        <Text style={{ fontSize: 14, marginLeft: 27, fontWeight: "normal" }}>
          Time: 11:00 AM&nbsp;
        </Text>
        <Text style={{ fontSize: 14, marginLeft: 27, fontWeight: "normal" }}>
          Clinic Name: King Dental&nbsp;
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginLeft: 27,
            fontWeight: "normal",
            marginBottom: 10,
          }}
        >
          Clinic Address:247, King Dental&nbsp;
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  welcomeHeader: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainWindow: {
    backgroundColor: "white",
    borderRadius: 8,
  },

  icon: {
    color: "black",
    marginTop: 10,
  },
});
