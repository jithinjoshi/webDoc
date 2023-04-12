import React, { useState } from 'react'
import moment from 'moment';
import { scheduleTime } from '../../Helpers/doctorHelper';
import { useFormik } from 'formik';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

//validate
const validate = values => {
    const errors = {};

    //starting time
    if (!values.startingTime) {
        errors.startingTime = toast.error("starting time is required")
    }
    else if (!values.endingTime) {
        errors.endingTime = toast.error("ending time is required")
    }
    else if (!values.date) {
        errors.date = toast.error("Date is required")
    }
    return errors;;
}

const ScheduleSlot = () => {
    const history = useNavigate();
    const [startDate, setStartDate] = useState(new Date().toJSON().slice(0, 10));
    const [startTime, setStartTime] = useState();
    const [endingTime, setEndingTime] = useState();

    const formattedStartTime = moment(startTime, "HH:mm").format("hh:mm A");
    const formattedEndTime = moment(endingTime, "HH:mm").format("hh:mm A");
    let doctorId = localStorage.getItem('doctorId');

    const formik = useFormik({
        initialValues: {
            startingTime: "",
            endingTime: "",
            date: ""

        },
        validate,
        validateOnBlur: false,
        validateOnChange: false
    })



    const submitHandler = (e) => {
        e.preventDefault();
        let scheduleData = {
            startingTime: formattedStartTime,
            endingTime: formattedEndTime,
            date: startDate,
            doctorId
        }
        scheduleTime(doctorId, scheduleData).then((data)=>{
            if(data){
                history(`/doctor/schedulings/${doctorId}`)
            }
        })
    }




    return (
        <div>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                    <form action="" onSubmit={submitHandler}>

                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="time"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        starting Time
                                    </label>
                                    <input
                                        type="time"
                                        name="startingTime"
                                        id="time"
                                        selected={startTime}
                                        onChange={e => setStartTime(e.target.value)}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="time"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Ending Time
                                    </label>
                                    <input
                                        type="time"
                                        name="endingTime"
                                        id="time"
                                        selected={endingTime}
                                        required
                                        onChange={e => setEndingTime(e.target.value)}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="date"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        required
                                        selected={startDate}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={(e => setStartDate(e.target.value))}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                        </div>



                        <div>
                            <button
                                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSlot