import { createSlice } from "@reduxjs/toolkit";
 import cartItems from "../json/cartItems"

const initialState ={
 cartItems: cartItems,
 amount: 0,
 total: 0,
 isLoading: true,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems= [];
            state.amount = 0
        },
        removeItem: (state,action)=>{
         const removeId = action.payload
        state.cartItems = state.cartItems.filter((item) => item.id !== removeId)
        },
        increase:(state,action)=>{
         const cartItem =  state.cartItems.find((item) => item.id === action.payload.id  )
         cartItem.amount = cartItem.amount +1 
        },
        decrease:(state,action) =>{
            const actionItem = state.cartItems.find(item => item.id === action.payload.id);
             actionItem.amount = actionItem.amount -1
        },
       calculateTotals:(state)=> { 
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((items)=>{
            amount += items.amount;
            total +=  (items.price * items.amount)
        });
        state.amount = amount
        state.total = total.toFixed(2)
       }
    },
})

export const {clearCart, increase, decrease,removeItem,calculateTotals} = cartSlice.actions;

export default cartSlice.reducer