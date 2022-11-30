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
  import React from "react";
  import { useState, useEffect } from "react";

  import Icon from "react-native-vector-icons/FontAwesome";
const ProfileDetails = ({navigation}) => {

    const [firstname, setFirstName]= useState("");
    const [lastname, setLastName]= useState("");
    const [dob, setDateOfBirth]= useState("");
    const [gender, setGender]= useState("");
    const [healthcardno, setHealthCardNumber]= useState("");
    const [phone, setPhone]= useState("");
    const [address, setAddress]= useState("");
    const addDetails= ()=>{
        alert("Data Added Successfully");
        console.log(healthcardno);
    }
    return (
        <ScrollView>
        <View>
          <View style={styles.Wrapper}>
            <View style={styles.loginContainer}>
            <TouchableOpacity onPress={()=> navigation.pop()}>                
          <Icon name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
              <Text style={styles.heading}>Add Details</Text>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="First Name"
                onChangeText={(newText) => setFirstName(newText)}
              />
              <Text>Last Name</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Last Name"
                onChangeText={(newText) => setLastName(newText)}
              />
              <Text>Date of Birth</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="DOB"
                secureTextEntry={true}
                onChangeText={(newText) => setDateOfBirth(newText)}
              />
                <Text>Gender</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Gender"
                onChangeText={(newText) => setGender(newText)}
              />
              <Text>Health Card Number</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Health Card Number"
                secureTextEntry={true}
                onChangeText={(newText) => setHealthCardNumber(newText)}
              />
               <Text>Phone</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Phone"
                onChangeText={(newText) => setPhone(newText)}
              />
               <Text>Address</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Address"
                onChangeText={(newText) => setAddress(newText)}
              />
              <TouchableOpacity onPress={()=> addDetails()}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>ADD</Text>
                </View>
                </TouchableOpacity>
           
            </View>
          </View>
        </View>
        </ScrollView>
      );
    };

export default ProfileDetails

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