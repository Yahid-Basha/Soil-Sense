import { initializeApp } from "firebase/app";
import { onValue, getDatabase, ref } from "firebase/database";
import React, { useState, useEffect } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyA2eBf0OQJdAzxiDgvxaJf4bs-kmBhRyNA",
  authDomain: "ideathon-760ff.firebaseapp.com",
  databaseURL: "https://ideathon-760ff-default-rtdb.firebaseio.com",
  projectId: "ideathon-760ff",
  storageBucket: "ideathon-760ff.appspot.com",
  messagingSenderId: "790100795607",
  appId: "1:790100795607:web:656c2c6c0b04a82ddcd092",
  measurementId: "G-X0X49RXXHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const soilDataRef = ref(db, 'soil-data')

export default function prediction(){
    const [soilData, setSoilData] = useState({});
    const [cropType, setCropType] = useState("");
    const [fertiliser, setFertiliser] = useState("");

    useEffect(() => {
        onValue(soilDataRef, (snapshot) => {
        if (snapshot.val() != null) {
            setSoilData(snapshot.val());
        }
        });
    }, []);

    const handleCropTypeChange = (text) => {
        setCropType(text);
    };

    function handlePrediction(result){
        console.log(result)
        result = JSON.parse(result)
        setFertiliser(result.prediction)
    }


  const getPrediction = () =>{
    console.log(soilData)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(soilData);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://fertiliserprediction.onrender.com/predict", requestOptions)
    .then(response => response.text())
    .then(result => handlePrediction(result))
    .catch(error => console.log('error', error));
  }


  const data = [
    { label: "Moisture", value: soilData.moisture },
    { label: "Nitrogen", value: soilData.nitrogen },
    { label: "Potassium", value: soilData.potassium },
    { label: "Phosphorous", value: soilData.phosphorous },
  ];

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Prediction</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter crop type"
      onChangeText={handleCropTypeChange}
      value={cropType}
    />
      <View>
        <Text style={styles.description}>
          Soil Data for {cropType}:{"\n"}
          Moisture - {soilData.moisture}, {"\n"}Nitrogen - {soilData.nitrogen}, {"\n"}Potassium - {soilData.potassium}, {"\n"}Phosphorous - {soilData.phosphorous}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, !cropType && styles.disabledButton]}
        onPress={getPrediction}
        disabled={!cropType}
      >
        <Text style={styles.buttonText}>Get Prediction</Text>
      </TouchableOpacity>
    <Text style={styles.prediction}>
        {fertiliser}
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input:{
        fontSize: 20,
        textAlign: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        marginTop:20,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
      backgroundColor: '#2196F3',
      padding: 10,
      borderRadius: 5,
      margin: 10,
    },
    disabledButton: {
      backgroundColor: 'red',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    prediction: {
        marginTop: 20,
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#3CE155',
    },
});
