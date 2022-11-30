import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeD = () => {
  return (
    <View style={styles.body}>
      <View>
        <View style={styles.mainWindow}>
          <View style={styles.header}>
            <Text style={styles.welcomeHeader}>
              Hello, Dr. Kate &nbsp;
              <Icon name="heartbeat" size={25} color="#D22B2B" />
            </Text>
            <Image
              style={styles.profileImage}
              resizeMode="contain"
              source={require("../assets/female_dentist.png")}
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={{ marginTop: 30, fontSize: 20, marginLeft: 20 }}>
          Your Feedbacks:
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "powderblue",
          width: Dimensions.get("window").width / 1.2,
          height: Dimensions.get("window").height / 6,
          alignSelf: "center",
          marginTop: 20,
        }}
        
      >
        <Text style={{marginTop:25, marginLeft:10,fontWeight:"bold"}}>
          Patient: Sakshi
        </Text>
        <Text style={{marginTop:5, marginLeft:10}}>
          Comment: Love the clinic
        </Text>
      </View>
    </View>
  );
};

export default HomeD;

const styles = StyleSheet.create({
  welcomeHeader: {
    marginTop: 50,
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
  profileImage: {
    borderRadius: 60,
    height: 40,
    width: 40,
    marginTop: 15,
    marginLeft: 90,
    alignSelf: "flex-end",
  },
  body: {
    backgroundColor: "white",
    flex: 1,
  },
});
