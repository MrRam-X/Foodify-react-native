import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import FoodCategoryCard from '../common/FoodCategoryCard'
import { foodCategoryList } from '../../mockData/foodCategoryList'

const FoodList = () => {
  return (
    <View style={styles.categoryCardContainer}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={foodCategoryList}
            renderItem={data => <FoodCategoryCard foodData={data.item} />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    categoryCardContainer: {
        height: 120,
        width: '100%',
        marginBottom: 20,
    },
})

export default FoodList