import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { signInAdmin } from '../../Helpers/adminHelper'

const validate = values => {
  const errors = {};

  //email
  if (!values.email) {
    errors.email = toast.error("email is required")
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = toast.error("invalid email address")
  }

  //password
  else if (!values.password) {
    errors.password = toast.error('password is required');
  } else if (values.password.includes(' ')) {
    errors.password = toast.error('wrong password');
  }
  return errors

}

const AdminSignin = () => {
  const history = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      let signin = signInAdmin(values)
      toast.promise(signin, {
        loading: 'searching...',
        success: <b>sign in successfull</b>,
        error: <b>can't find the user</b>
      })

      signin.then((user) => {
        if (user) {
          console.log("login success");
          history("/admin/viewDoctors")

        }
      }).catch((err)=>{
        console.log("login failure");
      })

    }
  })


  return (

    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          webDoc
        </h1>



        <form
          action=""
          class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={formik.handleSubmit}
        >
          <p class="text-center text-lg font-medium">Sign in to admin panel</p>

          <div>
            <label for="email" class="sr-only">Email</label>

            <div class="relative">
              <input
                type="email"
                name='email'
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>

            <div class="relative">
              <input
                type="password"
                name='password'
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
          </div>

          <button
            type="submit"
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>

  )
}

export default AdminSignin