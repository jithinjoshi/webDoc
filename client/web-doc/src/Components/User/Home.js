import React, { useEffect, useState } from 'react'
import { logout } from '../../Redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';


import { getUser, refreshToken, signoutUser } from '../../Helpers/userHelper';
import { Link } from 'react-router-dom';


let firstRender = true;

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const handleLogOut = async ()=>{
    signoutUser().then(()=>{
      dispatch(logout())
    })
  }

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      getUser().then((user) => {
        setUser(user)
      }).catch((err) => {
        return err;
      })
    }
    let intervel = setInterval(() => {
      refreshToken().then(data => {
        console.log(data);
        setUser(data.user)
      })
    }, 1000 * 28)

    return () => clearInterval(intervel)


  }, [])

  return (
    <>
      <header aria-label="Site Header" class="bg-white">
        <div
          class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
        >
          <a class="block text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <h2 style={{ fontSize: '30px' }}>webDoc</h2>
          </a>

          <div class="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                    About
                  </a>
                </li>

                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Careers
                  </a>
                </li>

                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                    History
                  </a>
                </li>

                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Services
                  </a>
                </li>

                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Projects
                  </a>
                </li>

                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              {
                isLoggedIn ? <div class="sm:flex sm:gap-4">
                  <Link
                    class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Link>
                </div>
                  :
                  <div class="sm:flex sm:gap-4">
                    <Link
                      class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                      to='/signin'
                    >
                      Login
                    </Link>

                    <Link
                      class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                      to='signup'
                    >
                      Register
                    </Link>
                  </div>

              }


              <button
                class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span class="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>


    </>
  )
}

export default Home