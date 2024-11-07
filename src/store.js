import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/users/userSlice'
import cartSlice from './features/cart/cartSlice'
const store = configureStore({
    reducer:{
        user: userSlice,
        cart : cartSlice
    }
})
export default store