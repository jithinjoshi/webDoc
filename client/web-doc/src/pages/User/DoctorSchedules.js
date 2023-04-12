import React, { useEffect, useState } from 'react'
import Schedules from '../../Components/User/Schedules'
import { getAllSchedules } from '../../Helpers/userHelper';
import Date from '../../Components/User/Date'
import { useParams } from 'react-router-dom';

const DoctorSchedules = () => {
    const { id } = useParams();
    const [availability, setAvailability] = useState([]);

    useEffect(() => {
        getAllSchedules(id).then((times) => {
            setAvailability(times.data);
        })
    }, []);

    availability.forEach((user)=>console.log(user.schedules))



    return (
        <div className='mt-4'>
            <section class="container px-4 mx-auto">
                <div class="flex flex-col">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                No:
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Date
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Time
                                            </th>

                                            {/* <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Purchase
                                </th> */}

                                            <th scope="col" class="relative py-3.5 px-4">
                                                <span class="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                        <Schedules time={availability}/>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DoctorSchedules