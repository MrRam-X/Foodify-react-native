import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantList = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Checkout your favourite restaurants!</Text>
            </View>
            <RestaurantCard />
            <RestaurantCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    }
})

export default RestaurantList