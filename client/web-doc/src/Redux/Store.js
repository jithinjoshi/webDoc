import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../Redux/userSlice'


export const store = configureStore({
    reducer:{
        auth:authReducer,
    },
});