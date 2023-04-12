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
import DoctorsEdit from "../pages/Doctor/DoctorsEdit"
import TimeSlot from "../Components/User/TimeSlot"
import DashBoard from "../Components/Admin/DashBoard"
import ScheduleSlot from "../Components/Doctor/ScheduleSlot"
import LandingPage from "../pages/Doctor/LandingPage"
import DoctorsProfile from "../pages/Doctor/DoctorsProfile"
import DoctorSchedulings from "../pages/Doctor/DoctorSchedulings"
import Schedules from "../Components/User/Schedules"
import DoctorSchedules from "../pages/User/DoctorSchedules"

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
    {
      path:'/schedules/:id',
      element:<DoctorSchedules/>
    },
    // {
    //   path:'/appointment',
    //   element:<TimeSlot/>
    // },
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
    {
      path:'/admin/dashboard',
      element:<DashBoard/>
    },
  
    //doctor
    {
      path:'/doctor/signin',
      element:<DoctorSignin/>
    },
    {
      path:'/doctor',
      element:<LandingPage/>
    },
    {
      path:'/doctor/profile/:id',
      element:<DoctorsProfile/>
    },
    {
      path:'/doctor/edit/:id',
      element:<DoctorsEdit/>
    },
    {
      path:'/doctor/schedule',
      element:<ScheduleSlot/>
    },
    {
      path:'/doctor/schedulings/:id',
      element:<DoctorSchedulings/>
    }
  
  ])