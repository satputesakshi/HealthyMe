import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView,Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import React from 'react';

const Profile = () => {
  return (
    <SafeAreaView>
    <View>
    <Image
            style={styles.profileImage}
            resizeMode="contain"
            source={require("../assets/profileImage.jpg")}
          /> 
     <Text style={styles.profile}>
      Antonello Messi
      </Text>    
      <Text style={styles.profiletext}>
<<<<<<< HEAD
      antonellomessi10@gmail.com
=======
      antonellomessi@gmail.com
>>>>>>> ae0324baf6c95e71a12dc029b957df9bab3d0523
      </Text>
      <View
      style={{
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop:20
  }}
/>
      <View style ={{flexDirection: 'row'}}> 
      <Icon style={{marginTop: 30, marginLeft:15}} name="user" size={20} color="#4169E1" /> 
      <Text style={styles.emailtext}>My Profile</Text>
      </View>

      <View
      style={{
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop:20
  }}
/>

<View style ={{flexDirection: 'row'}}> 
      <Icon style={{marginTop: 30, marginLeft:15}} name="cog" size={20} color="#4169E1" /> 
      <Text style={styles.emailtext}>Settings</Text>
      </View>

      <View
      style={{
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop:20
  }}
/>
<View style ={{flexDirection: 'row'}}> 
      <Icon style={{marginTop: 30, marginLeft:15}} name="comments" size={20} color="#4169E1" /> 
      <Text style={styles.emailtext}>Frequently Asked Questions</Text>
      </View>

      <View
      style={{
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop:20
  }}
/>
<View style ={{flexDirection: 'row'}}> 
      <Icon style={{marginTop: 30, marginLeft:15}} name="envelope" size={20} color="#4169E1" /> 
      <Text style={styles.emailtext}>Contact Us</Text>
      </View>

      <View
      style={{
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop:20
  }}
/>
<View style ={{flexDirection: 'row'}}> 
      <Icon style={{marginTop: 30, marginLeft:15}} name="phone" size={20} color="#4169E1" /> 
      <Text style={styles.emailtext}>Support</Text>
      </View>

      <View
      style={{
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop:20
  }}
/>
<View style ={{flexDirection: 'row'}}> 
      <Icon style={{marginTop: 30, marginLeft:15}} name="sign-out" size={20} color="#4169E1" /> 
      <Text style={styles.emailtext}>Logout</Text>
      </View>

    </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({

  profileImage: {
    borderRadius: 60,
    height: 120,
    width: 120,
    marginTop:75,
    marginLeft:130,
    alignContent: "center"
    
  },
  profile: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },

  profiletext: {
    fontSize: 16,
    fontWeight:"300",
    textAlign: "center"
  },

  emailtext: {
    fontSize: 16,
    marginTop: 30,
    marginLeft: 10,
    fontWeight: "600"
  }

 
})