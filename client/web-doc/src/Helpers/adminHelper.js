import axios from "axios";

axios.defaults.withCredentials = true;

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

//sign in
export async function signInAdmin(credentials){
    return new Promise((resolve,reject)=>{
        axios.post('/api/admin/signin',credentials).then((user)=>{
            console.log('doctor addedd successfully');
            resolve(user)
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}

//add doctor
export async function addDoctor(credentials){
    return new Promise((resolve,reject)=>{
        axios.post('/api/admin/addDoctor',credentials).then((response)=>{
            resolve(response);
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })

    })
}

//all doctors
export async function listDoctors(){
    try {
        return await axios.get('/api/admin/allDoctors');
    } catch (error) {
        console.log(error);
        return error
    }
}

//all departments
export async function getAllDepartments(){
    try {
        return await axios.get('/api/admin/departments')
    } catch (error) {
        console.log(error);
        return error;
    }
}

//all users
export async function getAllUsers(){
    try {
        return await axios.get('/api/admin/patients');
    } catch (error) {
        return error;
        
    }
}

