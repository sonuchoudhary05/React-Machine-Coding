import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart : []
}

const shoppingSlice = createSlice({
    name : "shoping",
    initialState:initialState,
    reducers : {
        addProductToCart : (state,action) => {
            return{...state, cart : [...state.cart,{...action.payload,qty:1}]}
            //state.cart = [...state.cart,{...action.payload,qty:1}];
        },
        removeProductFromCart : (state,action) => {
           return{...state,cart: state.cart.filter((c) => c.id !== action.payload.id)}
          // state.cart = {...state, cart :state.cart.filter((c) => c.id !== action.payload.id)}
        }

    } 
})

export const {addProductToCart, removeProductFromCart} = shoppingSlice.actions;
export default shoppingSlice.reducer;