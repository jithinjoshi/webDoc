import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    department:{
        type:String,
        unique:[true,"This category is already exist"],
        required:[true,"category should added"]
    }
})

export const Department = mongoose.model('Department',departmentSchema);