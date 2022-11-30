import React from 'react'
import { Image, SafeAreaView, TouchableOpacity, View,Text,StyleSheet} from 'react-native'


function Prescription() {
  const submitHandler = async (e) => {
 alert("Medicines Re-Ordered successfully");
  }
  return (
    <SafeAreaView>
    <View style={styles.upperarea}>
           <Image
              style={styles.profileImage}
              resizeMode="contain"
              source={require("../assets/profileImage.jpg")}
            />
            <Text style={styles.patientName}>Sakshi Satpute</Text>
            <Text style={styles.patientAddress}>25 F, Waterloo</Text>
            </View>
            <View style={styles.wrapper}>
            <View style={styles.bottomWrapper}>
                <Text style={styles.titleMedication}>Medication Trends</Text>
                <View style={styles.misssedMedication}>
                    <View style ={styles.mainView}>
                    <View style={[styles.card1, styles.elevation1]}>
                    <Image
                    style={styles.progressBar}
                    resizeMode="contain"
                    source={require("../assets/progress.png")}
            />
                    </View>
                    <View style={[styles.card2, styles.elevation2]}>
                    <View style={styles.missedMedication}>
                        <Text style={styles.missedMedTitle}>Mostly Missed Medications</Text>
                        <View style={styles.MedDay}>
                            <Text style={styles.MedDayKey}>Day</Text>
                            <Text style={styles.MedDayValue}>Friday</Text>
                        </View>
                        <View style={styles.MedTime}>
                            <Text style={styles.MedTimeKey}>Time</Text>
                            <Text style={styles.MedTimeValue}>Evening</Text>
                        </View>
                        <View style={styles.MedPrescription}>
                            <Text style={styles.MedPrescriptionKey}>Prescription</Text>
                            <Text style={styles.MedPrescriptionValue}>Cetirizine</Text>
                        </View>
                        </View>
                    </View> 
                    </View>
                    <Text style={styles.yourMedtitle}>Your Medications</Text>
                    <View style={[styles.medicationContainer,styles.medCard, styles.medElevation]}>
                        <Image
                        style={styles.medicineImage}
                         resizeMode="contain"
                         source={require("../assets/med1.jpg")}
                        />
                        <View style={styles.medicationDetails}>
                            <Text>Cetrizine</Text>
                            <Text>Tablet</Text>
                            <Text style ={{fontWeight:"300"}}>3x</Text>
                            <Text style ={{fontWeight:"300"}}>Ends on 31st Sept 2022</Text>
                        </View>
                        <TouchableOpacity
                        style={styles.reorderButton}
                        onPress={() => submitHandler()}
                       >
                    <Text style={styles.reorderText}>Reorder</Text>
          </TouchableOpacity>
                    </View> 

                    <View style={[styles.medicationContainer,styles.medCard, styles.medElevation]}>
                        <Image
                        style={styles.medicineImage}
                         resizeMode="contain"
                        source={require("../assets/med1.jpg")}
                        />
                        <View style={styles.medicationDetails}>
                            <Text>Cetrizine</Text>
                            <Text>Tablet</Text>
                            <Text style ={{fontWeight:"300"}}>3x</Text>
                            <Text style ={{fontWeight:"300"}}>Ends on 31st Sept 2022</Text>
                        </View>
                        <TouchableOpacity
                        style={styles.reorderButton}
                        onPress={() => submitHandler()}
                       >
                    <Text style={styles.reorderText}>Reorder</Text>
          </TouchableOpacity>
                    </View>  
                    <View style={[styles.medicationContainer,styles.medCard, styles.medElevation]}>
                        <Image
                        style={styles.medicineImage}
                         resizeMode="contain"
                        source={require("../assets/med1.jpg")}
                        />
                        <View style={styles.medicationDetails}>
                            <Text>Cetrizine</Text>
                            <Text>Tablet</Text>
                            <Text style ={{fontWeight:"300"}}>3x</Text>
                            <Text style ={{fontWeight:"300"}}>Ends on 31st Sept 2022</Text>
                        </View>
                        <TouchableOpacity
                        style={styles.reorderButton}
                        onPress={() => submitHandler()}
                       >
                    <Text style={styles.reorderText}>Reorder</Text>
          </TouchableOpacity>
                    </View>               
                <View>

              </View>
              </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        height: "100%",
        width: "100%",
        backgroundColor: "#fffff",
        borderRadius: 50,
         overflow: 'hidden',
    },

    upperarea:
    {
      backgroundColor: "#90e0ef",
    },
      profileImage: {
    borderRadius: 60,
    height: 120,
    width: 120,
    marginTop:75,
    marginLeft:125,
    alignContent: "center"
    
  },

  progressBar: {
    height: 130,
    width: 140,
    marginBottom:5,
    marginLeft:5,


  },

    medicineImage: {
    borderRadius: 60,
    height: 50,
    width: 50,
    marginTop:25,
    marginLeft:25,
    alignContent: "center"
    
  },

  medicationContainer: {
  flexDirection: 'row',
  marginTop: 5,
  
  },


  medicationDetails: {
    marginLeft: 15,
    marginTop: 15,
  },

 reorderButton: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#fffff",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 20,
    height: 38,
    width:75,
    borderWidth: 1,
    borderColor: "#3F00FF",
  },
  reorderText: {
    color: "#3F00FF",
    fontWeight: "regular",
  },

    patientName: {
    fontSize: 16,
    fontWeight:"300",
    textAlign: "center"
  },
      patientAddress: {
    fontSize: 16,
    fontWeight:"300",
    textAlign: "center"
  },
     titleMedication: {
    fontSize: 18,
    fontWeight:"500",
    marginTop: 30,
    marginLeft:15
    
  },

  missedMedTitle: {
    fontSize: 13,
    marginTop: 20,
    marginLeft: 5,
    textDecorationLine: 'underline'
  },

  MedDay: {
    flexDirection: 'row',
    marginLeft:5,
    marginTop: 10,
  },

  MedDayKey: {
    fontWeight: "100",
  },

  MedDayValue: {
    marginLeft: 80,
  },

MedTime: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
  },

  MedTimeKey: {
    fontWeight: "100",
  },

  MedTimeValue: {
    marginLeft: 72,
  },

  MedPrescription: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
  },

  MedPrescriptionKey: {
    fontWeight: "100",
  },

  MedPrescriptionValue: {
    marginLeft: 32,
  },

  medCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginLeft:15,
    height: 100,
    width:345,
  },

  medElevation: {
    elevation: 25,
    shadowColor: '#52006A',
  },


   card1: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    marginLeft:10,
    marginTop: 10,
    height: 150,
    width: 150,
  },

  elevation1: {
    elevation: 25,
    shadowColor: '#52006A',
  },

    card2: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    marginLeft:10,
    marginTop: 10,
    height: 150,
    width: 180,
  },

  elevation2: {
    elevation: 25,
    shadowColor: '#52006A',
  },

  mainView: 
  {
    flexDirection: 'row'
  },

    yourMedtitle: {
    fontSize: 18,
    fontWeight:"500",
    marginTop: 20,
    marginLeft:15
    
  },
  
  
});

export default Prescription