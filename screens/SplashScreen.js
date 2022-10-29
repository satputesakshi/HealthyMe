import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Lottie from "lottie-react-native";

import React from "react";

const SplashScreen = () => {
  return (
    <View>
      <Image
        source={require("../assets/splash.gif")}
        style={styles.splashScreenImage}
      />

      {/* <Text>Splash screen</Text> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashScreenImage: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
  },
});
