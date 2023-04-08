import { connect } from "mongoose";


export const database = ()=>{
    try {
        connect('mongodb://localhost:27017/webDoc').then(()=>{
            console.log('database connected successfully');
        })
    } catch (error) {
        console.log(error);
    }
}

