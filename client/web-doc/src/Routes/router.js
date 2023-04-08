import { createBrowserRouter } from "react-router-dom"
import Signup from "../Components/User/Signup"
import Signin from "../Components/User/Signin"
import Home from "../Components/User/Home"
import AdminSignin from "../Components/Admin/AdminSignin"
import AddDoctor from "../pages/admin/AddDoctor"
import ListDoctors from "../pages/admin/ListDoctors"
import ListUsers from "../pages/admin/ListUsers"
import DoctorSignin from "../pages/Doctor/DoctorSignin"
import DoctorList from "../pages/User/DoctorList"
import DoctorProfile from "../pages/Doctor/DoctorProfile"

export const router = createBrowserRouter([
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/signin',
      element:<Signin/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/doctors',
      element:<DoctorList/>
    },
    //admin
    {
      path:'/admin/signin',
      element:<AdminSignin/>
    },
    {
      path:'/admin/addDoctor',
      element:<AddDoctor/>
    },
    {
      path:'/admin/viewDoctors',
      element:<ListDoctors/>
    },
    {
      path:'/admin/getAllUsers',
      element:<ListUsers/>
    },
  
    //doctor
    {
      path:'/doctor/signin',
      element:<DoctorSignin/>
    },
    {
      path:'/doctor/profile',
      element:<DoctorProfile/>
    }
  
  ])