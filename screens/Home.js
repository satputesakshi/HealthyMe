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
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "@rneui/themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";

//import { BottomTabNavigator } from '../routes'

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView>
      <ScrollView vertical={true}>
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
                ></View>

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
            <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: "bold" }}>
              Our Services
            </Text>

            <ScrollView horizontal={true} style={{ marginLeft: 10 }}>
              <View style={[{ width: 180, height: 130, padding: 10 }]}>
                <TouchableOpacity style={styles.scrollButton}>
                  <Icon name="calendar-plus-o" size={30} style={styles.icon} />
                  <Text style={styles.scrollText}>Book Appointment&nbsp;</Text>
                </TouchableOpacity>
              </View>
              <View style={[{ width: 180, height: 130, padding: 10 }]}>
                <TouchableOpacity style={styles.scrollButton}>
                  <Icon name="medkit" size={30} style={styles.icon} />
                  <Text style={styles.scrollText}>
                    Order Prescription &nbsp;
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[{ width: 180, height: 130, padding: 10 }]}>
                <TouchableOpacity style={styles.scrollButton}>
                  <Icon name="flask" size={30} style={styles.icon} />
                  <Text style={styles.scrollText}>Lab Test &nbsp;</Text>
                </TouchableOpacity>
              </View>
              <View style={[{ width: 180, height: 130, padding: 10 }]}>
                <TouchableOpacity style={styles.scrollButton}>
                  <Icon name="hospital-o" size={30} style={styles.icon} />
                  <Text style={styles.scrollText}>Most Visited &nbsp;</Text>
                </TouchableOpacity>
              </View>
              <View style={[{ width: 180, height: 130, padding: 10 }]}>
                <TouchableOpacity style={styles.scrollButton}>
                  <Icon name="history" size={30} style={styles.icon} />
                  <Text style={styles.scrollText}>
                    Appointment History&nbsp;
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

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
              Upcoming Appointment
            </Text>

            <TouchableOpacity
              style={{
                paddingTop: 5,
                paddingBottom: 10,
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              <View
                style={[
                  {
                    backgroundColor: "#90e0ef",
                    borderRadius: 8,
                    alignItems: "center",
                    height: 100,
                    flexDirection: "row",
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 5,
                  },
                ]}
              >
                <View style={{ marginLeft: 10, color: "black", padding: 20 }}>
                  <Text>Appointment Date: 12th November&nbsp;</Text>
                  <Text>Time: 2:00 PM&nbsp;</Text>
                  <Text>Location: Purva Clinic&nbsp;</Text>
                </View>
                <Icon
                  name="calendar-o"
                  size={50}
                  style={{ color: "black", marginRight: 10 }}
                />
              </View>
            </TouchableOpacity>
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
            <View style={[{ width: 220, height: 70, padding: 10 }]}>
              <TouchableOpacity style={styles.scrollButton}>
                <Text style={styles.scrollText}>Dentist &nbsp;</Text>
                <Icon name="heart-o" size={20} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={[{ width: 220, height: 70, padding: 10 }]}>
              <TouchableOpacity style={styles.scrollButton}>
                <Text style={styles.scrollText}>Surgeon &nbsp;</Text>
                <Icon name="user-md" size={20} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={[{ width: 220, height: 70, padding: 10 }]}>
              <TouchableOpacity style={styles.scrollButton}>
                <Text style={styles.scrollText}>Pediatrician &nbsp;</Text>
                <Icon name="user" size={20} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
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
  header: {
    flexDirection: "row",
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
    flexDirection: "row",
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  submitText: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 95,
  },
  searchInputContainer: {
    backgroundColor: "#F0F8FF",
    borderColor: "black",
    marginLeft: 5,
    marginRight: 5,
  },
  profileImage: {
    borderRadius: 60,
    height: 40,
    width: 40,
    marginTop: 15,
    marginLeft: 90,
    alignSelf: "flex-end",
  },
  scrollButton: {
    backgroundColor: "#90e0ef",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    borderRadius: 8,
    paddingTop: 15,
  },
  scrollText: {
    color: "black",
    padding: 7,
  },
  icon: {
    color: "black",
    paddingTop: 10,
  },
});
