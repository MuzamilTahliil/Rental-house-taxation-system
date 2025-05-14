import React, { useState } from "react";

const DistrictForm = ({ onRegister }) => {
  const [district, setDistrict] = useState("");
  const [branch, setBranch] = useState("");
  const [zone, setZone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ district, branch, zone });
    setDistrict("");
    setBranch("");
    setZone("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registration District</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">District</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Branch</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Zone</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default DistrictForm;
