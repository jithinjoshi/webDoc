import React from 'react'

const Doctors = ({doctor}) => {
    return (
        <>

            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-4 m-5">
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={doctor.image.secure_url} alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900">{`${doctor.firstName} ${doctor.lastName}`}</h5>
                    <span class="text-sm text-gray-500">{doctor.department}</span>
                    <div class="flex mt-4 space-x-3 md:mt-6">
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:ring-blue-800">Book Now</a>
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">view Details</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Doctors