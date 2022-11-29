import {
  DatePickerIOSBase,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PropTypes from "prop-types";
import { React, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-neat-date-picker";
import moment from "moment";
import { handleSetDays } from "../action/appAction";
import { connect } from "react-redux";

const DoctorBooking = ({
  navigation,
  route,
  handleSetDays,
  appReducer: { days },
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [timings, setTimings] = useState(null);
  //   const [days, setDays] = useState(null);

  //   useEffect(() => {
  //     setDays(daysData);
  //   }, []);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  const onCan = () => {
    setShowDatePicker(false);
  };
  const onConf = (date) => {
    setShowDatePicker(false);
    const momentDate = moment(date).format("YYYY-MM-DD");
    setDate(momentDate);
    const timingsData = days.filter((day) => day.date === momentDate)[0];
    timingsData.timeSlot?.length
      ? setTimings(timingsData.timeSlot)
      : setTimings(null);
  };
  const doctor = route.params;

  //   const daysData = [
  //     {
  //       id: 0,
  //       date: "2022-11-27",
  //       timeSlot: [
  //         {
  //           id: 0,
  //           time: "9:00 AM",
  //           isBooked: false,
  //           isSelected: false,
  //         },
  //         {
  //           id: 1,
  //           time: "10:00 AM",
  //           isBooked: false,
  //           isSelected: false,
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       date: "2022-11-28",
  //       timeSlot: [
  //         {
  //           id: 0,
  //           time: "9:00 AM",
  //           isBooked: false,
  //           isSelected: false,
  //         },
  //         {
  //           id: 1,
  //           time: "10:00 AM",
  //           isBooked: false,
  //           isSelected: false,
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       date: "2022-11-29",
  //       timeSlot: [
  //         {
  //           id: 0,
  //           time: "9:00 AM",
  //           isBooked: false,
  //           isSelected: false,
  //         },
  //         {
  //           id: 1,
  //           time: "10:00 AM",
  //           isBooked: false,
  //           isSelected: false,
  //         },
  //       ],
  //     },
  //   ];

  const handleSelected = (item) => {
    console.log(`timings befotre update : ${JSON.stringify(timings)}`);
    timings.map((time) => {
      if (item.id === time.id) {
        time.isSelected = true;
      } else {
        time.isSelected = false;
      }
    });
    console.log(`timings after update : ${JSON.stringify(timings)}`);

    setTimings(timings);
  };

  const handleOnBookings = () => {
    if (timings) {
      let count = 0;
      timings.map((time) => {
        if (time.isSelected === true) {
          time.isBooked = true;
          time.backgroundColor="grey";
          count++;
        }
      });
      if (count > 0) {
        days.map((day) => {
          if (day.date === date) {
            day.timeSlot = timings;
          }
        });
      }
      handleSetDays(days);
      console.log(`days : ${JSON.stringify(days)}`);
      navigation.navigate("Appointment", doctor);
    } else {
      console.log("timings not added");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginVertical: 5,
          }}
        >
          <Image
            source={doctor.avatar}
            style={{
              borderRadius: 60,
              height: 90,
              width: 90,
              borderWidth: 2,
              borderColor: "black",
            }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 16 }}>
              {doctor.firstname} {doctor.lastname}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "grey",
                paddingBottom: 5,
              }}
            >
              {doctor.professional}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
          <Icon name="star" size={20} color="orange" />
        </View>
      </View>

      <View style={styles.description}>
        <Text>
          {"\u2022"} {doctor.description}
        </Text>
        <Text>
          {"\u2022"} Work experiences - {doctor.experiences}
        </Text>
      </View>

      <View style={styles.appointments}>
        <Text style={styles.appHeader}>Make An Appointment</Text>
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
          <Text style={{ fontSize: 18, color: "black" }}>Date: {date}</Text>
        </View>
        {date ? (
          <View style={styles.appointmentList}>
            {timings?.length &&
              timings.map((item) => {
                return (
                  <View key={item.id}>
                    {item.isBooked ? (
                      <View style={styles.appointmentTab}>
                        <Text>{item.time}</Text>
                      </View>
                    ) : (
                      <TouchableOpacity
                        style={styles.appointmentTab}
                        onPress={() => handleSelected(item)}
                      >
                        <Text>{item.time}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
          </View>
        ) : (
          <View>
            <Text>Please select a date</Text>
          </View>
        )}

        <TouchableOpacity onPress={() => handleOnBookings()}>
          <View style={styles.bookBtn}>
            <Text>Book</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 20,
  },
  subTabView: {
    marginTop: 30,
  },
  appointments: {
    flex: 1,
    backgroundColor: "powderblue",
    marginTop: 20,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  appHeader: {
    color: "black",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  appointmentTab: {
    border: "black",
    borderWidth: 2,
    padding: 15,
    width: 100,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 2,
  },
  appointmentList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 30,
  },
  bookBtn: {
    border: "black",
    backgroundColor: "#87ceeb",
    borderWidth: 1,
    padding: 15,
    width: 100,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: "center",
    alignSelf: "center",
  },
});

DoctorBooking.propTypes = {
  appReducer: PropTypes.object.isRequired,
  handleSetDays: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  appReducer: state.appReducer,
});

export default connect(mapStateToProps, { handleSetDays })(DoctorBooking);
