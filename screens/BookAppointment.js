import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import doctors from "../const/Doctor";
import Card from "../const/Card";
import DoctorBooking from "../screens/DoctorBooking";

const BookAppointment = ({navigation}) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(doctors);
  const [masterDataSource, setMasterDataSource] = useState(doctors);
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = `${item.lastname} ${item.title}`
          ? `${item.lastname} ${item.title}`.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const { width } = Dimensions.get("screen");
  const cardWidth = width / 1.9;
  return (
    <SafeAreaView>
      <View style={styles.mainBody}>
        <ScrollView
          nestedScrollEnabled={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.textHeader}>Find your doctor here</Text>
          </View>

          <SearchBar
            round
            searchIcon={{ size: 26 }}
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInputContainer}
            placeholder="Type your doctor's name"
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            value={search}
          />
          <View>
          <FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth)
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filteredDataSource}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                disabled={activeCardIndex != index}
                activeOpacity={1}
                onPress={() => navigation.navigate("DoctorBooking", item)}
              >
                <Card doctor={item} index={index} />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.headerQuickAcess}>
          <Text style={styles.textHeaderQuickAccess}>Quick Access</Text>
        </View>

        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({ 
    container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainBody:{
    backgroundColor:"white"
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    fontSize: 16,
    paddingLeft: 15,
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 10,
  },
  searchInputContainer: {
    backgroundColor: "#F0F8FF",
    marginLeft: 10,
    marginRight: 10,
  },
  headerQuickAcess: {
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeaderQuickAccess: {
    fontSize: 26,
    fontWeight: "bold",
  },});
