import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login: (state)=>{
            state.isLoggedIn = true
        },
        logout : (state)=>{
            state.isLoggedIn = false;
        },
    }
})

export const {login,logout} = userSlice.actions;
export default userSlice.reducer