import Link from "next/link";
import React from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

const NoteCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-md p-6 gap-4 w-full md:w-1/2 lg:w-1/3 mb-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300">
          Title
        </h2>
        <p className="text-gray-700 mb-4 text-sm leading-6 mt-4 py-2 border-b">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quaerat quae odio tenetur expedita soluta vero non quis, blanditiis
          maiores dolore reiciendis cupiditate qui dolorum! Ipsa qui quam aut
          voluptate.
        </p>
      </div>
      <div className="flex justify-end space-x-4 text-xl">
        <button className="text-red-500 hover:text-red-700" aria-label="Delete">
          <FaTrash />
        </button>
        <Link href="/updateNote" className="text-blue-500 hover:text-blue-700" aria-label="Edit">
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
  );
};

export default NoteCard;
