 import { createSlice } from "@reduxjs/toolkit";

 const initialCounterState = { count: 0 };


 const counterSlice = createSlice({
    name:"counter",
    initialState: initialCounterState,
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },

    }
 })

 export const {increment,decrement} = counterSlice.actions;

 export default counterSlice.reducer;