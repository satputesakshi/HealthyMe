import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Appointment from "./screens/Appointment";
import Icon from "react-native-vector-icons/FontAwesome";
import BookAppointment from "./screens/BookAppointment";
import DoctorBooking from "./screens/DoctorBooking"
import MainApp from "./MainApp";
import HomeD from "./screens/HomeD";
import ProfileD from "./screens/ProfileD";
import AppointmentD from "./screens/AppointmentD";
import Prescription from "./screens/Prescription";
import ProfileDetails from "./screens/ProfileDetails"
//import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Register" component={SignUp} />
        <Stack.Screen name="LandingPage" component={BottomTabNavigator}/>
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name = "DoctorBooking" component={DoctorBooking}/>
        <Stack.Screen name = "DoctorStack" component={BottomTabNavigatorDoctor}/>
        <Stack.Screen name = "Prescription" component={Prescription}/>
        <Stack.Screen name = "ProfileDetails" component={ProfileDetails}/>
      </Stack.Navigator>

  );
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }
        else{
          iconName= 'calendar'
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      headerShown: false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export const BottomTabNavigatorDoctor = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }
        else{
          iconName= 'calendar'
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      headerShown: false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeD} />
      <Tab.Screen name="Appointment" component={AppointmentD} />
      <Tab.Screen name="Profile" component={ProfileD} />
    </Tab.Navigator>
  );
};

/* const RootNav= () =>{
    return(
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
    )
} */

export default AuthRoutes;

const styles = StyleSheet.create({});
