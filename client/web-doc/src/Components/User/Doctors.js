import React from 'react'
import { Link } from 'react-router-dom'

const Doctors = ({doctor}) => {
    return (
        <>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-4 m-5">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={doctor.image.secure_url} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{`${doctor.firstName} ${doctor.lastName}`}</h5>
                    <span className="text-sm text-gray-500">{doctor.department}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Link to={`/schedules/${doctor._id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Book Now</Link>
                        <Link className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">view Details</Link>
        </div>
    </div>
</div>

        </>
    )
}

export default Doctors