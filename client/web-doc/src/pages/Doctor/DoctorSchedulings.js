import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DoctorSchedules from '../../Components/Doctor/DoctorSchedules'
import { scheduledTimes } from '../../Helpers/doctorHelper';

let timeSchedules = [];

const DoctorSchedulings = () => {
    let { id } = useParams();
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        scheduledTimes(id).then((time) => {
            setSchedules(time.data);
        })
    }, []);


    schedules.forEach((time) => {
        
        timeSchedules = time.schedules;
        
    })

    return (
        <>
            {
                timeSchedules.map((schedule) => {
                    return (
                        <DoctorSchedules time={schedule} />
                    )
                })
            }

        </>
    )
}

export default DoctorSchedulings