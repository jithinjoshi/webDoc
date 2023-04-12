import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../Redux/userSlice'
import doctorReducer from '../Redux/Doctor/doctorSlice'


export const store = configureStore({
    reducer:{
        auth:authReducer,
        doctor :doctorReducer
    },
});