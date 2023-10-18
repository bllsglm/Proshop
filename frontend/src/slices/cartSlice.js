import { createSlice } from "@reduxjs/toolkit";
import { UpdateCart } from "../Utils/cardUtils";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems : []}



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

    removoFromCart : (state,action) => {

      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload)
      
    
      return UpdateCart(state)
    }


  }
})


export const { addToCart, removoFromCart } = cardSlice.actions


export default cardSlice.reducer;
