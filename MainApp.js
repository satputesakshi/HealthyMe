import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./screens/SignUp";
import AuthRoutes from "./routes";
import { BottomTabNavigator } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { signin, userData } from "./action/appAction";
import AsyncStorage from "@react-native-async-storage/async-storage";



const MainApp = ({ isSplashLoading }) => {
  const isSignedIn = useSelector((state) => state.isSignedIn);
  const dispatch = useDispatch();

  const getUserSignIn = async () => {
    const userSignInInfo = await AsyncStorage.getItem("userInfo");
    console.log("useINfo"+userSignInInfo);
    if (userSignInInfo) {
      dispatch(signin());
      console.log("User is logged in.");
      console.log("isSignIn After Update"+ isSignedIn)
      const parseUserInfo = JSON.parse(userSignInInfo);
       console.log(parseUserInfo.email
        );
      dispatch(userData(parseUserInfo));
    }
  };
  
  useEffect(() => {
    console.log(isSignedIn)
    getUserSignIn();
  });

  {/* {isSplashLoading ? <SplashScreen /> :  <AuthRoutes />} */}
  return (
    <>
    {isSplashLoading ? <SplashScreen /> : (isSignedIn ? <BottomTabNavigator /> : <AuthRoutes />)}
    </>
  );
};

export default MainApp;

const styles = StyleSheet.create({});
