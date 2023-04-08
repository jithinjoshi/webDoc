import React from 'react'

const Users = ({users}) => {
    return (
        <>
        {
            users.map((user)=>{
                return(
                    <tr>
                <td class="py-4 px-4 whitespace-nowrap">
                    <div class="flex items-center">
                        {/* <div class="flex-shrink-0 h-10 w-10">
                            <img
                                class="h-10 w-10 rounded-full object-cover"
                                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                alt="" />
                        </div> */}
                        <div class="ml-4">
                            <div
                                class="text-sm font-medium text-gray-900 dark:text-white">
                                {user.username}
                            </div>
                            <div class="text-sm text-gray-500 dark:text-gray-300">
                                {user.email}
                            </div>
                        </div>
                    </div>
                </td>
                <td class="px-12 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900 dark:text-white">
                        Front-end Developer
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-300">
                        Engineering
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
                    Developer
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
                )
            })
        }
            
        </>
    )
}

export default Users