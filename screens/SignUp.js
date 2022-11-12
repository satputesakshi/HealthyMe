import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

import axios from "axios";
import { url } from "../config";
import React from "react";
import { useState, useEffect } from "react";
//rimport { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUp = ({ navigation }) => {
  const [custType, setDoctorName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (custType == "") {
      alert("Enter if you are doctor or patient");
    } else if (email == "") {
      alert("Email field can not be empty");
    } else if (pwd == "") {
      alert("Password field can not be empty");
    } else if (confirmPassword == "") {
      alert("Confirm password field can not be empty");
    } else if (pwd != confirmPassword) {
      alert("Password and confirm password doesnt match");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        console.log("Before registration");
        console.log(url);
        const cust_id = Math.floor(100000 + Math.random() * 900000);
        const loginId = Math.floor(100000 + Math.random() * 900000);
        const loginStatus = "Logged in";
        const { data } = await axios.post(
          `${url}api/users/addUser`,
          {
            cust_id,
            loginId,
            custType,
            email,
            pwd,
            loginStatus,
          },
          config
        );
        console.log(`${email}} has been registered`);
        navigation.navigate("Login");
      } catch (error) {
        alert(error);
      }
    }
  };

  useEffect(() => {
    setDoctorName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, []);
  return (
    <View>
      <View style={styles.Wrapper}>
        <View style={styles.loginContainer}>
          <Text style={styles.heading}>Registration</Text>
          <Text style={styles.label}>Are you Doctor or Patient?</Text>
          <TextInput
            style={styles.inputBox}
            placeholder=""
            onChangeText={(newText) => setDoctorName(newText)}
          />
          <Text>Email</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Email"
            onChangeText={(newText) => setEmail(newText)}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(newText) => setPassword(newText)}
          />
          <Text>Confirm Password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(newText) => setConfirmPassword(newText)}
          />
          <TouchableOpacity onPress={submitHandler}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 20,
    minWidth: "80%",
    paddingVertical: "20%",
    paddingHorizontal: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  btn: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#66b3ff",
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 15,
    textAlign: "center",
  },
});
