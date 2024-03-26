import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="mx-auto container flex items-center" id="nav">
        <div className="w-full pt-2 p-4">
          <div className="mx-auto md:p-6 md:w-1/2">
            <div className="flex flex-wrap justify-center">
              <h1 className="text-3xl font-extrabold text-teal-500 hover:text-teal-500 transition duration-500 p-4">
                <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
                Sign-up
              </h1>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form>
                <div className="mb-8">
                  <label
                    for="username"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    <span className="text-teal-500">&nbsp;*</span>
                    username
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      className="block pr-10 shadow appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 transition duration-500 ease-in-out"
                      placeholder="Enter your username"
                    />
                  </div>
                  <strong className="text-red-500 text-xs italic">
                    username is require
                  </strong>
                </div>

                <div className="mb-8">
                  <label
                    for="password"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    <span className="text-teal-500">&nbsp;*</span>
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="password"
                      id="password"
                      type="text"
                      className="block pr-10 shadow appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 transition duration-500 ease-in-out"
                      placeholder="test@example.com"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    for="password"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    <span className="text-teal-500">&nbsp;*</span>
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="password"
                      id="password"
                      type="text"
                      className="block pr-10 shadow appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 transition duration-500 ease-in-out"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <button
                    className="transition duration-500 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <hr />
                <div className="mt-8">
                  <p className="text-md">
                    Already have an account? 
                    <Link href="/login" className="font-bold text-lg text-teal-500 hover:text-teal-800">
                      Sign-in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
