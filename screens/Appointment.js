import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import moment from "moment";
import { url } from "../config";

const Appointment = ({ appReducer: { days }, route }) => {
  // const latestBooking = useSelector(state => state.days)
  const [latestAppointmentTime, setLatestAppointmentTime] = useState(null);
  const [latestAppointmentDate, setLatestAppointmentDate] = useState(null);
  const [feedback, setFeedback] = useState("");
  //const navigation= useNavigation();

  const [doctorDetails, setDoctorDetails] = useState(route.params);
  useEffect(() => {
    getLatestApp();
    setFeedback();
  }, []);

  const getLatestApp = () => {
    const date = new Date();
    const currDate = moment(date).format("YYYY-MM-DD");
    const currentBookings = days.filter((day) => day.date > currDate);
    setLatestAppointmentDate(currentBookings[0].date);
    if (currentBookings) {
      const bookedDate = currentBookings[0].timeSlot.filter(
        (cb) => cb.isBooked === true
      );

      console.log(bookedDate);
      if (bookedDate.length > 0) {
        if (bookedDate[0].time) setLatestAppointmentTime(bookedDate[0].time);
        // console.log(bookedDate)
      } else {
        console.log("No appointments booked yet");
      }
    }
  };

  const sendFeedback=async (e)=>{
    if (feedback == "") {
      alert("Please enter Feedback");
    } else {
      try {
        const doctorname=  doctorDetails.firstname;
        const doctorid= doctorDetails.id;
        const servicetype= doctorDetails.professional;
        console.log("In try catch");
        console.log(feedback, doctorname,doctorid);
        const { data } = await axios.post(`${url}api/users/sendfeedback`, {
          feedback,
          doctorname,
          doctorid,
          servicetype,
        });
        //console.log("Before async storage");
        //await AsyncStorage.setItem("userInfo", JSON.stringify(data));
        // dispatch(signin());
        // const userInfo = await AsyncStorage.getItem("userInfo");
        // const parseUserInfo = JSON.parse(userInfo);
        //dispatch(loggedInAcademy(parseUserInfo.name));
        // await AsyncStorage.setItem("userInfo", JSON.stringify(data));
        // dispatch(signin())
        console.log(`Feedback saved successfully`);
        alert("Thank you for your feedback!")
      } catch (error) {
        alert(error);
        setFeedback("");
      }
  }
  }
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
      
      <View
        style={{
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
          Date : {latestAppointmentDate ? latestAppointmentDate : "N/A"}
        </Text>
        <Text style={{ fontSize: 14, marginLeft: 27, fontWeight: "normal" }}>
          Time: {latestAppointmentTime ? latestAppointmentTime : "N/A"}&nbsp;
        </Text>
        <Text style={{ fontSize: 14, marginLeft: 27, fontWeight: "normal" }}>
          Doctor Name: {doctorDetails.firstname} {doctorDetails.lastname}&nbsp;
        </Text>
        <Text style={{ fontSize: 14, marginLeft: 27, fontWeight: "normal" }}>
          Clinic Name: King Hospital, Waterloo &nbsp;
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
      <View>
          <Text style={styles.feedbackText}>Provide your Feedback </Text>
          <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Feedback"
            value={feedback}
            onChangeText={(newText) => setFeedback(newText)}
          /></View>
           <TouchableOpacity
            style={styles.submitButton}
            onPress={() => sendFeedback()}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

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
  feedbackText: {
    fontSize: 20,
    textAlign: "center",
  },
  textInput: {
    borderRadius: 5,
    margin: 2,
    padding: 5,
    
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf:"center",
    marginTop: 10,
    padding: 5,
    borderColor: "black",
    borderWidth: 0.5,
    width: Dimensions.get("window").width / 1.2,
    height: Dimensions.get("window").height / 7,
  },
  submitButton: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#90e0ef",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 30,
  },
  submitText: {
    color: "black",
    fontWeight: "bold",
  },
  icon: {
    color: "black",
    marginTop: 10,
  },
});

Appointment.propTypes = {
  appReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  appReducer: state.appReducer,
});

export default connect(mapStateToProps, {})(Appointment);
