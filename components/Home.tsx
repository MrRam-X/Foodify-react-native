import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Home() {
    const [inputValue, setInputValue] = useState("")
    return (
        <View style={styles.container}>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
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
    inputBox: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10,
        backgroundColor: '#444',
        color: '#ccc',
        fontSize: 18,
    }, 
    listContainer: {
        padding: 10,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 20,
        marginBottom: 10,
    }
})