import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/AuthSlice'
import blogsReducer from '../Slice/AuthSlice'
import menuReducer from '../Slice/AuthSlice'
import dishesReducer from '../Slice/AuthSlice'
import cartReducer from '../Slice/AuthSlice'
import reviewsReducer from '../Slice/AuthSlice'
const Store = configureStore({
    reducer: {
        user: authReducer,
        menu: menuReducer,
        dishes: dishesReducer,
        cart: cartReducer,
        reviews: reviewsReducer,
        blogs: blogsReducer
    }

})


export default Store