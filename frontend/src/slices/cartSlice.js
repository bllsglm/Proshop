import { createSlice } from "@reduxjs/toolkit";
import { UpdateCart } from "../Utils/cardUtils";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems : [], shippingAddress :{}, paymentMethod: 'PayPal'}



const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers : {
    addToCart : (state,action) =>{

      const item = action.payload;

      const existItem = state.cartItems.find((x)  => x._id === item._id )

      if(existItem){
        state.cartItems = state.cartItems.map((x) => x._id === item._id ? item : x)
      }else {
        state.cartItems = [...state.cartItems, item]
      }
      

      return UpdateCart(state)
      
    },

    removeFromCart : (state,action) => {

      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload)
      return UpdateCart(state)
    },

    saveShippingAddress : (state, action) => {
      state.shippingAddress =action.payload;
      return UpdateCart(state);
    },

    savePaymentMethod : (state,action) => {
      state.paymentMethod = action.payload;
      return UpdateCart(state)
    },

    clearCartItems : (state ,action) => {
      state.cartItems = [];
      return UpdateCart(state);
    },
    resetCart: (state) => (state = initialState),

  }
})


export const {resetCart,clearCartItems, addToCart, removeFromCart, saveShippingAddress, savePaymentMethod } = cardSlice.actions


export default cardSlice.reducer;
