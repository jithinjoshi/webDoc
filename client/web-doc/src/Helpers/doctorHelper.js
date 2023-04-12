import axios from "axios";
import { useParams } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;





//signin
export async function signinDoctor(credentials){
    return new Promise((resolve,reject)=>{
        axios.post('/api/doctor/signin',credentials).then((user)=>{
            console.log("doctor added successfully");
            resolve(user);
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}

//profile

export async function doctorProfile(id){
    
    return new Promise((resolve,reject)=>{
        axios.get(`/api/doctor/profile/${id}`).then((user)=>{
            resolve(user)
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}

//edit profile
export async function editDoctorProfile(id,credentials){
    return new Promise((resolve,reject)=>{
        axios.put(`/api/doctor/edit/${id}`,credentials).then((user)=>{
            console.log(user);
            resolve(user)
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}

//schedule
export async function scheduleTime(id,credentials){
    return new Promise((resolve,reject)=>{
        axios.post(`/api/doctor/schedule/${id}`,credentials).then((user)=>{
            console.log(user);
            resolve(user)
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}

//scheduled times
export async function scheduledTimes(id){
    return new Promise((resolve,reject) =>{
        axios.get(`/api/doctor/scheduledTime/${id}`).then((user)=>{
            console.log(user);
            resolve(user)
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}