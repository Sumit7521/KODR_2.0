import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState : {
        username :'',
    },
    reducers : {
        addUser: (state,actions) =>{
            state.value = actions.payload
        },
        deleteuser : (state)=>{
            state.value = ''
        }
    }
})

export const {addUser , deleteuser} = userSlice.actions

export default userSlice.reducer
