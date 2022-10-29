import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./screens/SignUp";
import AuthRoutes from "./routes";

const MainApp = ({ isSplashLoading }) => {
  return (
    <>
      {isSplashLoading ? <SplashScreen /> : <AuthRoutes />}
    </>
  );
};

export default MainApp;

const styles = StyleSheet.create({});
