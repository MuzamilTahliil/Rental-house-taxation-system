import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

const UpdateLocationForm = ({ show, onClose, editItem, refreshData }) => {
  const [districtName, setDistrictName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [zoneName, setZoneName] = useState("");

  const [districtId, setDistrictId] = useState("");
  const [branchId, setBranchId] = useState("");
  const [zoneId, setZoneId] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!editItem) {
      setDistrictName("");
      setBranchName("");
      setZoneName("");
      setDistrictId("");
      setBranchId("");
      setZoneId("");
      return;
    }

    // Prefill district data (from populated fields if available)
    setDistrictName(
      editItem.district_name ||
      editItem.district_id?.district_name ||
      (editItem.branch_id?.district_id?.district_name) ||
      ""
    );

    // Prefill branch data
    setBranchName(
      editItem.branch_name ||
      editItem.branch_id?.branch_name ||
      ""
    );

    // Prefill zone data
    setZoneName(
      editItem.zone_name || ""
    );

    // IDs for update
    setDistrictId(
      editItem.district_id?._id ||
      editItem.branch_id?.district_id?._id ||
      editItem._id || // fallback for district only edit
      ""
    );

    setBranchId(
      editItem.branch_id?._id ||
      editItem._id // fallback for branch only edit
    );

    setZoneId(editItem._id || "");
  }, [editItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update district
      if (districtId && districtName) {
        await axios.put(`http://localhost:5000/api/districts/${districtId}`, {
          district_name: districtName,
        });
      }

      // Update branch
      if (branchId && branchName && districtId) {
        await axios.put(`http://localhost:5000/api/branches/${branchId}`, {
          branch_name: branchName,
          district_id: districtId,
        });
      }

      // Update zone
      if (zoneId && zoneName && branchId) {
        await axios.put(`http://localhost:5000/api/zones/${zoneId}`, {
          zone_name: zoneName,
          branch_id: branchId,
        });
      }

      alert("Update successful!");
      refreshData();
      onClose();
    } catch (error) {
      alert("Update failed: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div
    className="fixed inset-0 flex justify-center items-center z-50"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          title="Close"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Update Location
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">District Name</label>
            <input
              type="text"
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="District Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Branch Name</label>
            <input
              type="text"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Branch Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Zone Name</label>
            <input
              type="text"
              value={zoneName}
              onChange={(e) => setZoneName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Zone Name"
              required
            />
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateLocationForm;

