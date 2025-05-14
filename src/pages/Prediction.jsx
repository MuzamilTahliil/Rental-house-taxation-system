import React, { useState } from "react";

const Prediction = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [houseNo, setHouseNo] = useState("");
  const [branch, setBranch] = useState("");
  const [district, setDistrict] = useState("");
  const [zone, setZone] = useState("");
  const [currentHouseRent, setCurrentHouseRent] = useState("");
  const [predictionPeriod, setPredictionPeriod] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prediction Generated!");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 max-w-5xl ">
      {/* Enter Property Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold mb-6">Enter Property Information</h1>

        {/* Tabs for Upload or Manual Entry */}
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 rounded-l-md ${
              activeTab === "upload" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTabChange("upload")}
          >
            Upload Excel File
          </button>
          <button
            className={`px-4 py-2 rounded-r-md ${
              activeTab === "manual" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTabChange("manual")}
          >
            Manual Entry
          </button>
        </div>

        {/* Form for Manual Entry */}
        {activeTab === "manual" && (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">House No</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={houseNo}
                  onChange={(e) => setHouseNo(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Branch</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">District</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Zone</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Current House Rent($)</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={currentHouseRent}
                  onChange={(e) => setCurrentHouseRent(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Prediction Period</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={predictionPeriod}
                  onChange={(e) => setPredictionPeriod(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Additional Property Information (Optional)</label>
              <textarea
                className="w-full p-2 border rounded-md"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md"
            >
              Generate Prediction
            </button>
          </form>
        )}

        {/* Upload Excel File */}
        {activeTab === "upload" && (
          <div className="mb-4">
            <p className="mb-2">Upload your Excel File containing property information and rental data:</p>
            <div className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center">
              <input type="file" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer text-blue-500">
                Choose Excel File or Drop it here
              </label>
              <p className="mt-2 text-sm text-gray-500">Rental data.xlsx</p>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Your Excel file should include columns for: House no, Branch, District, Zone, and House Rent.
            </p>
            <button
              type="button"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md mt-4"
            >
              Process Data & Generate Prediction
            </button>
          </div>
        )}
      </div>

      {/* Tax Prediction Results */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Tax Prediction Results</h1>
        <div className="mb-4">
          <p className="font-medium">Property Information:</p>
          <p>House #1234, Jabuti Branch, Hodan District, ZoneA</p>
          <p>Current Monthly Rent $1500.00</p>
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center mb-4">
          <p>[Tax Prediction Chart will appear here]</p>
        </div>
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Period</th>
              <th className="py-2 px-4 border-b">Estimated Tax</th>
              <th className="py-2 px-4 border-b">Change</th>
              <th className="py-2 px-4 border-b">%Change</th>
              <th className="py-2 px-4 border-b">Confidence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Current</td>
              <td className="py-2 px-4 border-b">$1800.00</td>
              <td className="py-2 px-4 border-b">-</td>
              <td className="py-2 px-4 border-b">-</td>
              <td className="py-2 px-4 border-b">-</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Jan 2024</td>
              <td className="py-2 px-4 border-b">$1200.00</td>
              <td className="py-2 px-4 border-b">$0.00</td>
              <td className="py-2 px-4 border-b">0%</td>
              <td className="py-2 px-4 border-b">97%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Apr 2024</td>
              <td className="py-2 px-4 border-b">$1000.00</td>
              <td className="py-2 px-4 border-b text-red-500">-$54.00</td>
              <td className="py-2 px-4 border-b">+3%</td>
              <td className="py-2 px-4 border-b">92%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Jul 2024</td>
              <td className="py-2 px-4 border-b">$2000.00</td>
              <td className="py-2 px-4 border-b text-red-500">-$55.62</td>
              <td className="py-2 px-4 border-b">0%</td>
              <td className="py-2 px-4 border-b">88%</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center gap-4 mt-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
            Download PDF Report
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Export to Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
