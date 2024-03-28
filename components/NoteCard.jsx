import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaTrash, FaEdit, FaEye } from "react-icons/fa";

const NoteCard = ({ session }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/note`);
      const data = await response.json();

      setNotes(data);
    };

    if (session?.user.id) {
      fetchNotes();
    }
  }, []);

  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}:${(date.getMonth() + 1).toString().padStart(2, '0')}:${date.getFullYear()} | ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    return formattedDate;
  };

  return (
    <>
      {notes && notes.length > 0 ? (
        notes.map((note, index) => (
          <div className="bg-white shadow-lg rounded-md p-6 gap-4 w-full h-80 md:w-1/2 lg:w-1/3 mb-6 flex flex-col">
            <div className=" transition-all duration-300 transform">
              <h2 className="text-xl font-semibold border-gray-300 overflow-auto flex flex-row">
                <FaAngleRight className="text-teal-500 text-2xl mr-2" />
                {note.title}
              </h2>
            </div>

            <div className="mb-2 flex-grow overflow-auto border-b border-t">
              <p className="text-gray-700 mb-4 text-sm leading-6 py-2 text-start">
                {note.description}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm " >
                <p>
                  {formatCreatedAt(note.createdAt)}
                </p>
              </div>
              <div className="flex space-x-4 text-xl" >
              <button
                className="text-red-500 hover:text-red-700"
                aria-label="Delete"
              >
                <FaTrash />
              </button>
              <Link
                href="/updateNote"
                className="text-blue-500 hover:text-blue-700"
                aria-label="Edit"
              >
                <FaEdit />
              </Link>
              <button
                className="text-teal-500 hover:text-teal-700"
                aria-label="View"
              >
                <FaEye />
              </button>
              </div>
             
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default NoteCard;
