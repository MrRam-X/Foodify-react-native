import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/ColorConstants';
import NewDealsCaraousel from './common/NewDealsCaraousel';
import FoodList from './Landing/FoodList';
import SearchInputBox from './common/SearchInputBox';
import RestaurantList from './Landing/RestaurantList';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.mainHeader}>Foodify</Text>
            <SearchInputBox />
            <NewDealsCaraousel />
            <FoodList />
            <View style={styles.browseAllContainer}>
                <View>
                    <Text style={styles.browseAllText}>Browse all foods</Text>
                </View>
                <View>
                    <Pressable
                        android_ripple={{
                            // borderless: true,
                            color: Colors.tertiary,
                            foreground: true,
                        }}>
                        <Text style={styles.seeAllText}>See All</Text>
                    </Pressable>
                </View>
            </View>
            <RestaurantList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    mainHeader: {
        textAlign: 'center',
        color: Colors.darkText,
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 20,
    },
    browseAllContainer: {
        padding: 10,
        marginBottom: 10,
        borderTopColor: Colors.primary,
        borderTopWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    browseAllText: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.darkText,
        // marginLeft: 5,
    },
    seeAllText: {
        fontWeight: '600',
        fontSize: 16,
        color: Colors.tertiary,
    },
});
