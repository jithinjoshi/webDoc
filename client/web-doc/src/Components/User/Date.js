import React, { useState } from 'react'

const Date = () => {
    
    const [startDate, setStartDate] = useState();

  return (
    <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="date"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                       choose the appointment Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        required
                                        selected={startDate}
                                        
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
  )
}

export default Date