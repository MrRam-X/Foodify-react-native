import { BIRIYANI, BURGER, Category, PIZZA } from "../constants/AppConstants"
import { FoodCategory } from "../types/foodCategory"

const biriyani = require('../assets/images/Biriyani.jpg')
const burger = require('../assets/images/Burger.jpg')
const pizza = require('../assets/images/Pizza.jpg')

export const foodCategoryList: FoodCategory[] = [
    {
        id: 1,
        category: Category.BIRIYANI,
        dishes: Object.values(BIRIYANI),
        image: biriyani
    },
    {
        id: 2,
        category: Category.BURGER,
        dishes: Object.values(BURGER),
        image: burger,
    },
    {
        id: 3,
        category: Category.PIZZA,
        dishes: Object.values(PIZZA),
        image: pizza,
    }
]