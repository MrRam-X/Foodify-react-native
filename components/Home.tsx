import {
    FlatList,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/ColorConstants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FoodCategoryCard from './common/FoodCategoryCard';
import { foodCategoryList } from '../mockData/foodCategoryList';

const HomeImage = require('../assets/images/HomeFoodify.jpg');

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.mainHeader}>Foodify</Text>
            <View style={styles.searchContainer}>
                <View style={styles.inputBoxContainer}>
                    <TextInput
                        placeholder="e.g. Burger, Pizza, etc. "
                        placeholderTextColor={Colors.greyText}
                        style={styles.inputBox}
                    />
                </View>
                <View style={styles.iconContainer}>
                    <Pressable
                        android_ripple={{
                            color: Colors.primary,
                            radius: 20,
                            borderless: true,
                        }}>
                        <AntDesign name="search1" style={styles.searchIcon} />
                    </Pressable>
                </View>
            </View>
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
            <View style={styles.categoryCardContainer}>
                <FlatList
                    horizontal={true}
                    data={foodCategoryList}
                    renderItem={(data) => <FoodCategoryCard foodData={data.item}/>}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchContainer: {
        height: 50,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        borderColor: Colors.primaryLight,
        backgroundColor: Colors.lightText,
        borderWidth: 1,
        borderRadius: 30,
    },
    inputBoxContainer: {
        width: '85%',
        borderRightColor: Colors.primaryLight,
        borderRightWidth: 1,
        borderRightRadius: 1,
        margin: 5,
        // backgroundColor: '#ccc'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#ccc',
    },
    searchIcon: {
        fontSize: 20,
        color: Colors.primaryLight,
    },
    inputBox: {
        paddingTop: 5,
        fontSize: 18,
        color: Colors.darkText,
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
    categoryCardContainer: {
        height: 120,
        width: '100%',
    },

});
