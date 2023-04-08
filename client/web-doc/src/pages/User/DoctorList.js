import React, { useEffect, useState } from 'react'
import Doctors from '../../Components/User/Doctors'
import { getAllDoctors } from '../../Helpers/userHelper'

const DoctorList = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        getAllDoctors().then((doctor)=>{
            console.log(doctor);
            setDoctors(doctor)
            
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

  return (
    <>
    {
        doctors.map((doctor)=>{
            return(
                <Doctors doctor={doctor}/>  
            )
        })
    }
    
    </>
  )
}

export default DoctorList