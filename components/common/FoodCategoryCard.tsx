import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ListRenderItemInfo,
    Pressable,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { FoodCategory } from '../../types/foodCategory';
import { Colors } from '../../constants/ColorConstants';

type FoodCategoryProps = {
    foodData: FoodCategory;
};

const FoodCategoryCard: React.FC<FoodCategoryProps> = ({ foodData }) => {
    return (
        <Pressable
            android_ripple={{
                // borderless: true,
                foreground: true,
                // radius: 70,
                color: '#eee'
            }}
            style={styles.container}>
            <ImageBackground
                imageStyle={{
                    borderRadius: 12,
                }}
                resizeMode="cover"
                source={foodData.image}
                style={styles.image}>
                <View style={styles.imageTextContainer}>
                    <Text style={styles.imageText}>{foodData.category}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 150,
        margin: 5,
        borderRadius: 12,
    },
    image: {
        flex: 1,
    },
    imageTextContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flex: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    imageText: {
        fontSize: 22,
        fontWeight: '500',
        color: Colors.lightText,
        marginBottom: 5,
    }
});

export default FoodCategoryCard;
