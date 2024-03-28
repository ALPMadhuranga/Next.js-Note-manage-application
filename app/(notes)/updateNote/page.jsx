"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useEffect, useState } from "react";

const Create = () => {
  const {data: session, status} = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const noteId = searchParams.get("id");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })
  const [isLading,setIsLoading]=useState(false)

  useEffect(() => {
    const getNoteDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/notes/${noteId}?userId=${session?.user?.id}`
        );
        const data = await response.json();

        setFormData({
          title: data.title,
          description: data.description,
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (session?.user?.id && noteId) getNoteDetails();
  }, [session?.user?.id, noteId]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

      try {
        const res = await fetch(
          `/api/notes/${noteId}?userId=${session?.user?.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: formData.title,
              description: formData.description,
            }),
          }
        );

        if (res.status === 404) {
          alert("Note not found");
          setIsLoading(false);
        } else if (res.status === 401) {
          alert("Unauthorized! you can update only your notes");
          setIsLoading(false);
        } else if (res.ok) {
          router.push("/");
          alert("Note successfully updated...!");
        }
      } catch (err) {
        alert("Something went wrong, try again!");
        console.log(err);
        setIsLoading(false);
      }
  };



  if (status === "loading" || isLading) {
    return <LoadingSpinner />;
  } else if (status === "unauthenticated") {
    router.push("/login");
  }
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="mx-auto container flex items-center" id="nav">
        <div className="w-full pt-2 p-4">
          <div className="mx-auto md:p-6 md:w-1/2">
            <div className="flex flex-wrap justify-center">
              <h1 className="text-3xl font-extrabold text-teal-500 hover:text-teal-500 transition duration-500 p-4">
                <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
                Edit Note
              </h1>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label
                    for="username"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Title
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id='title'
                      name='title'
                      type="text"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="block pr-10 shadow appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 transition duration-500 ease-in-out"
                      placeholder="Enter Note Title"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    for="password"
                    className="block text-gray-700 text-md font-bold mb-2"
                  >
                    Description
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                      id='description'
                      name='description'
                      type="text"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      className="h-48 block pr-10 shadow appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 transition duration-500 ease-in-out"
                      placeholder="Enter Description"
                    />
                  </div>
                <hr className='mt-8' />
                </div>

                <div className="mb-2 text-center">
                  <button
                    className=" transition duration-500 bg-teal-500 hover:bg-teal-700 text-lg text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Create