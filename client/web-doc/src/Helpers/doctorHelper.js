import axios from "axios";
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
export async function doctorProfile(){
    try {
        axios.get('/api/doctor/profile',{withCredentials:true}).then((user)=>{
            console.log(user);
        }).catch((err)=>{
            console.log(err);
        }) 
    } catch (error) {
        return error;
    }
}