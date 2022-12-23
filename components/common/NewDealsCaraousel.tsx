import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/ColorConstants'

const HomeImage = require('../../assets/images/HomeFoodify.jpg')

const NewDealsCaraousel = () => {
    return (
        <View style={styles.imageContainer}>
            <ImageBackground
                imageStyle={{
                    borderRadius: 10,
                }}
                style={styles.image}
                resizeMode="cover"
                source={HomeImage}>
                <View style={styles.imageTextContainer}>
                    <Text style={styles.imageTextHeader}>Upto 50% off</Text>
                    <Text style={styles.imageTextDescription}>
                        On orders above 200/-
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 150,
        marginBottom: 20,
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
        fontWeight: '600',
        fontSize: 30,
    },
    imageTextDescription: {
        marginTop: 20,
        fontWeight: '400',
        color: Colors.lightText,
        fontSize: 20,
    },
})

export default NewDealsCaraousel