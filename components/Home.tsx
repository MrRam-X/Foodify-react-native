import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/ColorConstants';
import Icon from 'react-native-vector-icons/FontAwesome'
const HomeImage = require("../assets/images/HomeFoodify.jpg")

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    return <View style={styles.container}>
        <Text style={styles.mainHeader}>Foodify</Text>
        <View style={styles.inputBoxContainer}>
            <View >
                <TextInput style={styles.inputBox} />
            </View>
            <View>
                {/* <Button title="Go"/> */}
                {/* <Icon name="rocket" size={30} color="#900" />; */}
            </View>
        </View>
        <View style={styles.imageContainer}>
            <ImageBackground
                imageStyle={{
                    borderRadius: 10,
                }}
                style={styles.image}
                resizeMode="cover"
                source={HomeImage}
            >
                <View style={styles.imageTextContainer}>
                    <Text style={styles.imageTextHeader}>Upto 50% off</Text>
                    <Text style={styles.imageTextDescription}>On orders above 200/-</Text>
                </View>
            </ImageBackground>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    inputBoxContainer: {
        height: 50,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        borderColor: Colors.primaryLight,
        backgroundColor: Colors.lightText,
        borderWidth: 0.5,
        borderRadius: 30,
    },
    inputBox: {
        fontSize: 18,
        color: Colors.darkText
    },
    mainHeader: {
        textAlign: 'center',
        color: Colors.darkText,
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 20,
    },
    imageContainer: {
        height: 150,
    },
    image: {
        flex: 1,
    },
    imageTextContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        alignItems: 'center',
        borderRadius: 10,
    },
    imageTextHeader: {
        marginTop: 20,
        color: Colors.lightText,
        fontWeight: "600",
        fontSize: 30,
    },
    imageTextDescription: {
        marginTop: 20,
        fontWeight: '400',
        color: Colors.lightText,
        fontSize: 20,
    },
    header: {
        fontSize: 16,
        marginBottom: 10,
    },
    formContainer: {
        padding: 10,
        width: 300,
        marginBottom: 10,
    },
    listContainer: {
        padding: 10,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 20,
        marginBottom: 10,
    },
});
