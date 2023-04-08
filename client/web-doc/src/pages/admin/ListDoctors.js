import React, { useEffect, useState } from 'react'
import Doctors from '../../Components/Admin/Doctors'
import { listDoctors } from '../../Helpers/adminHelper'
import { Link, useNavigate } from 'react-router-dom';

const ListDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        listDoctors().then((data) => {
            setDoctors(data?.data?.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    console.log(doctors);
    
    const history = useNavigate();
    return (
        <>
            <section class="container px-4 mx-auto py-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-lg font-medium text-gray-800 dark:text-dark">
                            All Doctors
                        </h2>
                    </div>
                    <div>
                        <button
                            class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500">
                            <Link to='/admin/addDoctor'>Add Doctor</Link>
                            
                        </button>
                    </div>
                </div>
                <div class="flex flex-col mt-6">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div
                                class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table
                                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <span>Doctor</span>
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Department
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Mobile
                                            </th>
                                            <th scope="col" class="relative py-3.5 px-4">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            doctors.length ? doctors.map((doctor, index) => <Doctors key={index} firstName={doctor.firstName} lastName={doctor.lastName} department={doctor.department} email={doctor.email} mobile={doctor.mobile} image={doctor.image.secure_url} />) : <></>
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ListDoctors