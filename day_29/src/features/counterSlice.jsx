import { createSlice } from "@reduxjs/toolkit";

export const store = createSlice({
    name :" count",
    initialState : {value: 0},
    reducers : {
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementByValue:(state , action)=>{
            state.value = action.payload
        }
    }
})

export const {increment , decrement , incrementByValue} = store.actions

export default store.reducer