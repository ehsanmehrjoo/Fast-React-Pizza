import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/users/userSlice'
const store = configureStore({
    reducer:{
        user: userSlice
    }
})
export default store