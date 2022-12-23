import { BIRIYANI, BURGER, Category, NON_VEG, PIZZA } from "../constants/AppConstants"
import { FoodCategory } from "../types/foodCategory"

const biriyani = require('../assets/images/Biriyani.jpg')
const burger = require('../assets/images/Burger.jpg')
const pizza = require('../assets/images/Pizza.jpg')
const nonVeg = require('../assets/images/NonVeg.jpg')

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
    },
    {
        id: 4,
        category: Category.NON_VEG,
        dishes: Object.values(NON_VEG),
        image: nonVeg,
    }
]

export const restaurantList = [
    {
        restaurantId: 1,
        restaurantName: 'Pizza King',
        restaurantImage: '',
        availableDishes: [
            {
                id: 'Pizza-King-1',
                dishName: 'Chicken Meatball Pizza',
                dishImage: '',
                price: 200,
                unit: '₹',
                category: "Non Veg Pizza"
            },
            {
                id: 'Pizza-King-2',
                dishName: 'Chicken Sassauge Pizza',
                dishImage: '',
                price: 250,
                unit: '₹',
                category:  "Non Veg Pizza"
            },
        ],
        tags: ["Pizza", "Non Veg", "Chicken"]
    },
    {
        restaurantId: 2,
        restaurantName: 'Burger Paradise',
        restaurantImage: '',
        availableDishes: [
            {
                id: 'Burger-Paradise-1',
                dishName: 'Chicken Patty Burger',
                dishImage: '',
                price: 180,
                unit: '₹',
                category: "Non Veg Burger"
            },
            {
                id: 'Burger-Paradise-2',
                dishName: 'Mutton Patty Burger',
                dishImage: '',
                price: 250,
                unit: '₹',
                category: "Non Veg Burger"
            },
            {
                id: 'Burger-Paradise-3',
                dishName: 'Aloo Tikki Burger',
                dishImage: '',
                price: 150,
                unit: '₹',
                category: "Veg Burger"
            },
        ],
        tags: ["Burger", "Non Veg", "Aloo", "Chicken", "Veg"]
    }
]