// Import necessary modules
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

// Define the component
const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/fertiliser.png')} style={styles.image} />
            <Text style={styles.title}>Fertiliser Predictor</Text>
            <Text style={styles.description}>This app helps you predict the best fertiliser for your crops based on soil and weather conditions.</Text>
            <TouchableOpacity style={styles.button}>
                <Link href={'/prediction'}>
                <Text style={styles.buttonText}>Get Prediction</Text>
                </Link>
            </TouchableOpacity>
        </View>
    );
};

// Define the styles
const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

// Export the component
export default HomeScreen;
