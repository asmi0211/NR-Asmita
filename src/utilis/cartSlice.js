import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[], // initialState is empty
    },
    reducers:{ // reducers are objects which takes actions
        addItem:(state, action) =>{
            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem:(state, action) => {
            state.items.pop();
        },
        clearCart:(state) =>{
            state.items.length = 0;
            // return{items: []}
        }
    }
})
export const {addItem, removeItem, clearCart} = cartSlice.actions
// export actions
export default cartSlice.reducer;
// export reducers