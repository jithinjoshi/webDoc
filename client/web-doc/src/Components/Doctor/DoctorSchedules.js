import React from 'react'
import moment from 'moment';

const DoctorSchedules = ({time}) => {
    const startingTime = moment(time, ["HH"]).format("hh A");
    const addingTime = moment(time+1,["HH"]).format("hh A");
    return (
        <>
            <div class="w-max border max-w-sm px-4 py-3 bg-white rounded-md shadow-md m-5 inline-grid">
                <div>
                    <h1 class="mt-2 text-lg font-semibold text-gray-800">{`${startingTime} ${addingTime}`}</h1>
                </div>
            </div>
        </>
    )
}

export default DoctorSchedules