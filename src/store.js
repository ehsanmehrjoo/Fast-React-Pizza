import { configureStore } from "@reduxjs/toolkit";
import Reducer from './features/users/userSlice'
import cartReducer from './features/cart/cartSlice'
const store = configureStore({
    reducer:{
        user: Reducer,
        cart : cartReducer
    }
})
export default store