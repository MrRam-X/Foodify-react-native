import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../constants/ColorConstants';

const SearchInputBox = () => {
    return (
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
    );
};

const styles = StyleSheet.create({
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
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
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
});

export default SearchInputBox;
