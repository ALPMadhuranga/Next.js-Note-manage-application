"use client"
import Link from "next/link";
import { validateLoginForm } from "@/validation/formValidation";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

const Login = () => {

  const {data: session, status} = useSession();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   if (sessionStatus === "authenticated") {
  //     router.replace("/");
  //   }
  // }, [sessionStatus, router]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateLoginForm(formData);
    if (Object.keys(validationErrors).length === 0) {

      console.log(formData)

      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result.error) {
        alert("Invalid Credentials");
        setLoading(false);
      } else {
        router.push("/");
      }

    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear error when user starts typing again
    });
  };

  if (status === "loading" || loading) {
    return <LoadingSpinner />;
  } else if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="mx-auto container flex items-center" id="nav">
        <div className="w-full pt-2 p-4">
          <div className="mx-auto md:p-6 md:w-1/2">
            <div className="flex flex-wrap justify-center">
              <h1 className="text-3xl font-extrabold text-teal-500 hover:text-teal-500 transition duration-500 p-4">
                <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
                Sign-in
              </h1>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    <span className="text-teal-500">&nbsp;*</span>
                    email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block pr-10 shadow appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 transition duration-500 ease-in-out"
                      placeholder="test@example.com"
                    />
                  </div>
                  {errors.email && <strong className="text-red-500 text-xs">
                    {errors.email}
                  </strong>}
                </div>

                <div className="mb-8">
                  <label
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    <span className="text-teal-500">&nbsp;*</span>
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="block pr-10 shadow appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 transition duration-500 ease-in-out"
                      placeholder="Enter your password"
                    />
                  </div>
                  {errors.password && <strong className="text-red-500 text-xs">
                    {errors.password}
                  </strong>}
                </div>

                <div className="mb-4 text-center">
                  <button
                    className="transition duration-500 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 mb-5"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <hr />
                <div className="mt-2">
                  <p className="text-md">
                    No account?
                    <Link href="/register" className="font-bold text-lg text-teal-500 hover:text-teal-800">
                      Sign-Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default Login;
