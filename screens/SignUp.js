import { StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Button,
   } from 'react-native'
import React from 'react'
//rimport { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUp = () => {
  return (
    <View>
      
        <View style={styles.Wrapper}>
          <View style={styles.loginContainer}>
            <Text style={styles.heading}>Registration</Text>
            <Text style={styles.label}>Are you Doctor or Patient?</Text>
            <TextInput
              style={styles.inputBox}
              placeholder=""
              onChangeText={(newText) => setAcademyName(newText)}
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
            <TouchableOpacity >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      

    </View>
  )
}

export default SignUp

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
})