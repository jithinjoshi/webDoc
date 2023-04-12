import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
    name:"doctor",
    initialState:{
        doctor:null
    },
    reducers:{
        login:(state,action)=>{
            state.doctor = action.payload;
        },
        logout:(state)=>{
            state.doctor = null;
        }
    }
})

export const {login,logout} = doctorSlice.actions;
export const selectDoctor = (state)=>state.doctor.doctor
export default doctorSlice.reducer;