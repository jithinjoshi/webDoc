import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDoctor } from '../../Redux/Doctor/doctorSlice'
import { doctorProfile, editDoctorProfile } from '../../Helpers/doctorHelper'
import { useParams } from 'react-router-dom'


const DoctorsEdit = () => {
    let { id } = useParams();
    let [doctor, setDoctor] = useState([]);

    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [email, setEmail] = useState();
    let [address, setAddress] = useState();
    let [dob, setDob] = useState();
    let [password, setPassword] = useState();
    let [about, setAbout] = useState();



    useEffect(() => {
        doctorProfile(id).then((doctor) => {
            setDoctor(doctor.data);

            setFirstName(doctor?.data?.firstName);
            setLastName(doctor?.data?.lastName);
            setEmail(doctor?.data?.email);
            setAddress(doctor?.data?.address);
            setDob(doctor?.data?.dob);
            setPassword(doctor?.data?.password);
            setAbout(doctor?.data?.about);



        }).catch((err) => {
            return err;
        })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        alert("Hello")
        const credentials = {
            firstName,
            lastName,
            email,
            address,
            dob,
            about
        }
        editDoctorProfile(id, credentials).then((doctor) => {
            console.log(doctor);
        }).catch((err) => {
            console.log(err);
        })



    }





    return (
        <section className="p-6">
            <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={submitHandler}>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Inormation</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm">First name</label>
                            <input id="firstname" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border text-center" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="lastname" className="text-sm">Last name</label>
                            <input id="lastname" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border text-center" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border text-center" />
                        </div>
                        <div className="col-span-full">
                            <label for="address" className="text-sm">Address</label>
                            <input id="address" type="text" placeholder="" onChange={(e) => setAddress(e.target.value)} value={address} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border text-center" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="city" className="text-sm">Date Of Birth</label>
                            <input id="city" type="date" value={dob} placeholder="" onChange={(e) => setDob(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border text-center text-center" />
                        </div>

                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="username" className="text-sm">email/username</label>
                            <input id="username" value={email} type="text" placeholder="Username" disabled className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border text-center" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Password</label>
                            <input id="website" type="password" disabled value={password?.substr(0, 6)} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border text-center" />
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">About Me</label>
                            <textarea id="bio" value={about} placeholder="" onChange={(e) => setAbout(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border text-center"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Photo</label>
                            <div className="flex items-center space-x-2">
                                <img src={doctor?.image?.secure_url} alt="" className="w-10 h-10 rounded-full" />
                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-700 dark:text-gray-900">Change</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="flex justify-center">
                    <button type='submit' class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">submit</button>
                </div>
            </form>

        </section>
    )
}

export default DoctorsEdit