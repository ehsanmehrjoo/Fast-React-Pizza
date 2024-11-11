import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
    // cart : [
    //     {
    //         pizzaId : 12,
    //         name: "Mediterranean",
    //         quantity:    2,
    //         unitPrice: 16,
    //         totalPrice: 32,
    //     }
    // ]
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addCart(state, action) {
        // Add logic for adding to the cart
        // payload = new Cart
        state.cart.push(action.payload);
        

      },

      removeCart(state, action) {
        // Add logic for removing from the cart
        // payload = pizzaId
        state.cart  =  state.cart.filter(item => item.pizzaId !==  action.payload)
      },
      increasCartQuantity(state, action) {
        // Add logic for updating the cart
        // payload = pizzaId
        const item = state.cart.find(item => item.pizzaId === action.payload)
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice
      },
      decreaseCartQuantity(state, action) {
        // Add logic for updating the cart
         // payload = pizzaId
         const item = state.cart.find(item => item.pizzaId === action.payload)
         item.quantity--;
         item.totalPrice = item.quantity * item.unitPrice

         if(item.quantity  === 0)  cartSlice.caseReducers.removeCart(state , action)
      },
      clearCart(state) {
        // Add logic for clearing the cart
        state.cart = []
      },
    },
  });


  export const {addCart , removeCart, increasCartQuantity , decreaseCartQuantity ,clearCart} = cartSlice.actions;
export default cartSlice.reducer

export const getCart = (state) => state.cart.cart
export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0)
export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0)
export const getCurrentQuantityById = id => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
