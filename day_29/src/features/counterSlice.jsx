import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState : {value : 0 },
    reducers : {
        increment: (state , action) =>{
            state.value += 1
        },
        decrement: (state , action) =>{
            state.value -= 1
        },
        incrementByValue :(state , action) =>{
            state.value += Number(action.payload)
        }
    }
})

export const {increment , decrement , incrementByValue} = counterSlice.actions

export default counterSlice.reducer