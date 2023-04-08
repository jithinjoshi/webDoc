import axios from "axios";
axios.defaults.withCredentials = true

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL


// signup

// export async function registerUser(credentials){
//     try {
//         let user = await axios.post('/api/user/register',credentials);
//         return user

//     } catch (error) {
//         console.log(error);
//         return {error:"sign up failed"}
//     }
// }

//signup
export async function registerUser(credentials) {
    return new Promise((resolve, reject) => {
        axios.post('/api/user/register', credentials).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}

//signup with google
export async function googleRegister(token) {

    try {
        const res = await axios.get('/api/user/register-with-google', {
            headers: {
                Authorization: "Bearer " + token,
            },
        })

        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
        return error
    }

}

//sign in with google
export async function googleLogin(token) {
    try {
        const res = await axios.get('/api/user/login-with-google', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        return res.data
    } catch (err) {
        console.log(err);
        return err;

    }
}


//login
export async function loginUser(credentials) {
    return new Promise((resolve, reject) => {
        axios.post('/api/user/login', credentials).then((user) => {
            resolve(user)
        }).catch((err) => {
            reject(err)
        })
    })
}


//user
export async function getUser() {
    return new Promise((resolve, reject) => {
        axios.get('/api/user/user', { withCredentials: true }).then((user) => {
            resolve(user)
        }).catch((err) => {
            reject(err)
        })
    })
}


//refresh token
export const refreshToken = async () => {
    try {
        axios.get('/api/user/refresh', { withCredentials: true }).then((res) => {
            const data = res.data;
            return data;
        }).catch(err => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}

//get all doctors
export const getAllDoctors = async () => {
    try {
        const doctors = await axios.get('/api/user/doctors');
        return doctors.data

    } catch (error) {
        return error;
    }
}


//signout user
export const signoutUser = async () => {
    try {
        const signout = await axios.post('/api/user/signout');

    } catch (error) {
        return error;

    }
}

