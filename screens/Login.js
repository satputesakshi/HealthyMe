import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { url } from "../config";
import axios from "axios";
// import SignUp from "./SignUp";
// import { useNavigation } from "@react-navigation/native";
// import { routes } from "../routes";

const Login = ({ navigation }) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  //const navigation= useNavigation();
  useEffect(() => {
    setemail("");
    setPass("");
  }, []);
  const validate = (newText) => {
    console.log(newText);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(newText) === false) {
      alert("Please enter email in right format");
      setemail({ email: newText });
      return false;
    } else {
      setemail({ email: newText });
      console.log("Email is Correct");
    }
  };
  const submitHandler = async (e) => {
    if (email == "") {
      alert("Please enter Username");
    } else if (reg.test(email) === false) {
      alert("Please enter email in right format");
      return false;
    } else if (pass == "") {
      alert("Please enter Password");
    } else {
      try {
        console.log("In try catch");
        console.log(email, pass);
        const { data } = await axios.post(`${url}api/users/login`, {
          email,
          pass,
        });
        //console.log("Before async storage");
        //await AsyncStorage.setItem("userInfo", JSON.stringify(data));
        // dispatch(signin());
        // const userInfo = await AsyncStorage.getItem("userInfo");
        // const parseUserInfo = JSON.parse(userInfo);
        //dispatch(loggedInAcademy(parseUserInfo.name));
        navigation.navigate("LandingPage");
        console.log(`${email} Successfully logged in`);
      } catch (error) {
        alert(error);
        setemail("");
        setPass("");
      }
    }
    //navigation.navigate("LandingPage");
  };

  return (
    <SafeAreaView>
      <View style={styles.mainWindow}>
        <Image
          source={require("../assets/splash.gif")}
          style={styles.loginImage}
        />
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={25} color="black" />
            <TextInput
              style={styles.textInput}
              placeholder="&nbsp;&nbsp;Email"
              value={email}
              onChangeText={(newText) => setemail(newText)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={25} color="black" />
            <TextInput
              style={styles.textInput}
              placeholder="&nbsp;Password"
              value={pass}
              secureTextEntry={true}
              onChangeText={(newText) => setPass(newText)}
            />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => submitHandler()}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lowerTextContainer}>
          <Text style={styles.lowerText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signUpContainer}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.signuptext}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

/* const InputText = (props) => {
  return (
    <TextInput
      style={styles.textInput}
      color={"black"}
      //   value={}
      secureTextEntry={props.isPassword}
      placeholderTextColor={"black"}
      //   onChangeText={(txt) => onChange(txt)}
      //   keyboardType={props.numeric && "number-pad"}
      //   maxLength={props.numeric && 10}
      placeholder={props.placeholderText}
    />
  );
}; */

const styles = StyleSheet.create({
  loginImage: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
    marginTop: Dimensions.get("window").height / 10,
  },
  loginContainer: {
    paddingHorizontal: 40,
  },
  loginText: {
    fontSize: 30,
    textAlign: "center",
  },
  textInput: {
    borderRadius: 5,
    margin: 2,
    padding: 5,
    width: Dimensions.get("window").width / 1.5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 5,
    borderColor: "black",
    borderWidth: 0.5,
  },
  submitButton: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
  },
  lowerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  lowerText: {
    color: "black",
  },
  signUpContainer: {
    justifyContent: "center",
  },
  signuptext: {
    color: "black",
    marginLeft: 5,
    fontWeight: "bold",
  },
  mainWindow: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
  },
});
