import React, { useState } from "react";
import DistrictForm from "../components/DistrictForm";

const DistrictTable = ({ districts = [], onRegister }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Table Header with Filters */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Districts</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md"
          />
          <button
            onClick={toggleFormVisibility}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            {showForm ? "Cancel" : "Add District"}
          </button>
        </div>
      </div>

      {/* Form to Add District */}
      {showForm && <DistrictForm onRegister={onRegister} />}

      {/* District Table */}
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">District</th>
            <th className="py-2 px-4 border-b">Branch</th>
            <th className="py-2 px-4 border-b">Zone</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {districts.map((district, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{district.district}</td>
              <td className="py-2 px-4 border-b">{district.branch}</td>
              <td className="py-2 px-4 border-b">{district.zone}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-500 hover:underline mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
                <button className="text-red-500 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 011-1h4a1 1 0 011 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-l-md">
          &lt;
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white">1</button>
        <button className="px-4 py-2 bg-blue-500 text-white">2</button>
        <button className="px-4 py-2 bg-blue-500 text-white">3</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DistrictTable;
