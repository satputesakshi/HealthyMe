import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView,Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "@rneui/themed";
import FontAwesome from '@expo/vector-icons/FontAwesome';

//import { BottomTabNavigator } from '../routes'

const Home = () => {
  const [search, setSearch] = useState("");
   
  return (
    <SafeAreaView>
      <View style={styles.mainWindow}>
        <View style={styles.header}>
          <Text style={styles.welcomeHeader}>
            Hello, Antonello&nbsp;
            <Icon name="heartbeat" size={25} color="#D22B2B" />
          </Text>
          <Image
            style={styles.profileImage}
            resizeMode="contain"
            source={require("../assets/profileImage.jpg")}
          />
        </View>
        <SearchBar
          round
          searchIcon={{ size: 26 }}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          placeholder="Search"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          value={search}
        />
        <View>
          <View style={styles.introCard}>
            <LinearGradient colors={["lightblue", "white"]}>
              <View
                style={{
                  position: "relative",
                  flexDirection: "row",
                  padding: 0,
                }}
              >
                <Text style={styles.secondaryText}>
                  How can we help you today?
                </Text>
                <Image
                  style={{ width: "40%", height: 100, marginTop: 10 }}
                  resizeMode="contain"
                  source={require("../assets/doctor.png")}
                />
              </View>
              <View
                style={{
                  position: "relative",
                  flexDirection: "row",
                  padding: 0,
                }}
              >
              </View>
              
              <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => submitHandler()}
                >
                  <Text style={styles.submitText}>Urgent Care &nbsp;</Text>
                  <Icon name="medkit" size={20} color="#880808" />
                </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View>
          <Text style={{marginTop:20, marginLeft:20, fontWeight:"500"}}>Let's find you a Doctor</Text>
        <ScrollView  horizontal={true} style={styles.container}>    
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                <TouchableOpacity
                  style={styles.scrollButton}
                >
                  <Text style={styles.scrollText}>General &nbsp;</Text>
                  <Icon name="stethoscope" size={20} style={styles.icon} />
                </TouchableOpacity>
                </View> 
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                <TouchableOpacity
                  style={styles.scrollButton}
                >
                  <Text style={styles.scrollText}>Psychologist &nbsp;</Text>
                  <Icon name="lightbulb-o" size={20} style={styles.icon} />
                </TouchableOpacity>
                </View> 
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                <TouchableOpacity
                  style={styles.scrollButton}
                >
                  <Text style={styles.scrollText}>Dentist &nbsp;</Text>
                  <Icon name="heart-o" size={20} style={styles.icon} />
                </TouchableOpacity>
                </View> 
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                <TouchableOpacity
                  style={styles.scrollButton}
                >
                  <Text style={styles.scrollText}>Surgeon &nbsp;</Text>
                  <Icon name="user-md" size={20} style={styles.icon} />
                </TouchableOpacity>
                </View>  
                <View style={[{ width: 220,height: 70,padding: 10 }]}>  
                <TouchableOpacity
                  style={styles.scrollButton}
                >
                  <Text style={styles.scrollText}>Pediatrician &nbsp;</Text>
                  <Icon name="user" size={20} style={styles.icon} />
                </TouchableOpacity> 
                </View> 
                 
            </ScrollView></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  welcomeHeader: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  header:{
   flexDirection:"row" ,
   alignItems: "center",
  },
  mainWindow: {
    backgroundColor: "white",
  },
  secondaryText: {
    fontSize: 15,
    marginLeft: 5,
    padding: 10,
    fontWeight: "bold",
  },
  introCard: {
    paddingHorizontal: 20,
    borderColor: "black",
  },
  searchContainer: {
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 10,
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#ace5ee",
    padding: 10,
    borderRadius: 8,
    flexDirection:"row",
    paddingHorizontal: 20,
    borderRadius:6
  },
  submitText: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 95
  },
  searchInputContainer: {
    backgroundColor: "#F0F8FF",
    borderColor:"black",
    marginLeft: 5,
    marginRight: 5,
  },
  profileImage: {
    borderRadius: 60,
    height: 40,
    width: 40,
    marginTop:15,
    marginLeft:90,
    alignSelf:"flex-end"
  },
  scrollButton:{
    backgroundColor:"#E1E7F3",
    alignItems: "center",
    flex:1,
    flexDirection:"row",
    borderRadius: 8,
    padding:10,
  },
  scrollText: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 40
    },
    icon:{
      color:"black"
    }
});
