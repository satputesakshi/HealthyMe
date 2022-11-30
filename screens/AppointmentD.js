import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Calendar } from "react-native-calendars";
import React, { useEffect, useState } from "react";

import moment from "moment";
import DatePicker from "react-native-neat-date-picker";

const AppointmentD = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [timings, setTimings] = useState(null);
  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  const onCan = () => {
    setShowDatePicker(false);
  };
  const YesHandler = () => {
    alert("Regular hours added for selected date ", date)
  };
  const NoHandler = () => {
    alert("No appointment added")
  };
  const onConf = (date) => {
    setShowDatePicker(false);
    const momentDate = moment(date).format("YYYY-MM-DD");
    setDate(momentDate);
  };
  return (
    <SafeAreaView>
      <ScrollView vertical={true}>
        <View style={styles.mainWindow}>
        <View style={styles.appointments}>
            <Text style={styles.appHeader}>Select Date:</Text>
            <TouchableOpacity
              onPress={openDatePicker}
              style={{
                alignItems: "center",
                marginTop: 20,
                backgroundColor: "#87ceeb",
                padding: 10,
                borderRadius: 8,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  color: "black",
                  borderRadius: 2,
                }}
              >
                Select Date
              </Text>
            </TouchableOpacity>
            <DatePicker
              isVisible={showDatePicker}
              mode={"single"}
              onCancel={onCan}
              onConfirm={(e) => onConf(e.date)}
              //   onConfirm={(e) => setDateAndData(e.date)}
            />
            <View style={{ margin: 10 }}></View>
            <View>
              <Text style={{ fontSize: 18, color: "black", marginLeft:20 }}>Date: {date}</Text>
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.welcomeHeader}>Add Appointments&nbsp;</Text>
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
           <View
            style={{
              borderBottomColor: "#B7C4CF",
              borderBottomWidth: 2,
              paddingTop: 10,
              opacity: 10,
              marginLeft: 20,
              marginRight: 20,
            }}
          />
          <View>
            <Text style={{fontWeight:"600", marginLeft: 20, fontSize:16,  marginTop:20}}> Do you want to add your regular work hours to: {date}</Text>
            <View >
            <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => YesHandler()}
          >
            <Text style={styles.yText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => NoHandler()}
          >
            <Text style={styles.yText}>No</Text>
          </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#B7C4CF",
              borderBottomWidth: 2,
              paddingTop: 10,
              opacity: 10,
              marginLeft: 20,
              marginRight: 20,
            }}
          />
          <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: "bold" }}>
            Latest Health Updates
          </Text>

          <ScrollView horizontal={true} style={{ marginLeft: 5 }}>
            <View style={[{ width: 180, height: 130, padding: 5 }]}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                  )
                }
              >
                <Image
                  style={{ width: 150, height: 130 }}
                  resizeMode="contain"
                  source={require("../assets/covid.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={[{ width: 180, height: 130, padding: 5 }]}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://www.who.int/teams/global-influenza-programme/surveillance-and-monitoring/influenza-updates/current-influenza-update"
                  )
                }
              >
                <Image
                  style={{ width: 150, height: 130 }}
                  resizeMode="contain"
                  source={require("../assets/flu.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={[{ width: 180, height: 130, padding: 5 }]}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://www.who.int/news-room/fact-sheets/detail/diabetes"
                  )
                }
              >
                <Image
                  style={{ width: 150, height: 130 }}
                  resizeMode="contain"
                  source={require("../assets/diab.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={[{ width: 180, height: 130, padding: 5 }]}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://www.who.int/health-topics/cardiovascular-diseases#tab=tab_1"
                  )
                }
              >
                <Image
                  style={{ width: 150, height: 130 }}
                  resizeMode="contain"
                  source={require("../assets/heart.png")}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentD;

const styles = StyleSheet.create({
  welcomeHeader: {
    marginTop: 35,
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
  appHeader: {
    color: "black",
    fontSize: 25,
    marginTop: 25,
    marginBottom: 10,
    marginLeft:20,
    fontWeight: "bold",
  },
  choiceButton: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "powderblue",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  yText: {
    color: "black",
    fontWeight: "bold",
  },
});
