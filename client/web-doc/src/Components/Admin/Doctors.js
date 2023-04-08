import React from 'react'

const Doctors = ({firstName,lastName,mobile,email,department,image}) => {
  return (
    <>
        <tr>
                <td class="py-4 px-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full object-cover"
                        src={image}
                        alt="" />
                    </div>
                    <div class="ml-4">
                      <div
                        class="text-sm font-medium text-gray-900 dark:text-white">
                        {`${firstName} ${lastName}`}
                      </div>
                      <div class="text-sm text-gray-500 dark:text-gray-300">
                        {email}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-12 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900 dark:text-white">
                    {department}
                  </div>
                </td>
                <td class="px-4 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td
                  class="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {mobile}
                </td>
                <td
                  class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    class="text-gray-500 dark:text-gray-300 hover:text-indigo-600">
                    Edit
                  </a>
                </td>
              </tr>
    </>
  )
}

export default Doctors