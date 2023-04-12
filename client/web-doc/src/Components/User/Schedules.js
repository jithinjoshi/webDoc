import React from 'react'
import moment from 'moment';

const Schedules = ({time}) => {
    const startingTime = moment(time, ["HH"]).format("hh A");
    const addingTime = moment(time+1,["HH"]).format("hh A");
    return (
        <tr>
        <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
            <div class="inline-flex items-center gap-x-3">

                <span>#3066</span>
            </div>
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 6, 2022</td>
        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 6, 2022</td>

        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div class="flex items-center gap-x-6">
                <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                    Book Now
                </button>
            </div>
        </td>
    </tr>
    )
}

export default Schedules