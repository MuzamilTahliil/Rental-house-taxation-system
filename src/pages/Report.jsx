import React, { useState } from "react";

const Report = () => {
  const [dateRange, setDateRange] = useState("This Month");
  const [propertyType, setPropertyType] = useState("All Property Types");
  const [branch, setBranch] = useState("All Branches");
  const [paymentStatus, setPaymentStatus] = useState("All Statuses");
  const [houseId, setHouseId] = useState("");

  // Sample data for transactions
  const [transactions, setTransactions] = useState([
    {
      transactionId: "TX-39201",
      houseId: "H-1234",
      date: "Aug 15, 2023",
      amount: "$300.00",
      status: "Paid",
      branch: "North Branch",
      district: "Downtown",
    },
    {
      transactionId: "TX-39202",
      houseId: "H-5678",
      date: "Aug 14, 2023",
      amount: "$396.00",
      status: "Paid",
      branch: "East Branch",
      district: "Suburban",
    },
    {
      transactionId: "TX-39203",
      houseId: "H-9012",
      date: "Aug 17, 2023",
      amount: "$324.00",
      status: "Paid",
      branch: "West Branch",
      district: "Industrial",
    },
    {
      transactionId: "TX-39204",
      houseId: "H-3456",
      date: "Aug 12, 2023",
      amount: "$275.00",
      status: "Paid",
      branch: "South Branch",
      district: "Residential",
    },
    {
      transactionId: "TX-39205",
      houseId: "H-7890",
      date: "Aug 10, 2023",
      amount: "$412.50",
      status: "Overdue",
      branch: "North Branch",
      district: "Commercial",
    },
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // Handle each filter change here
    if (name === "dateRange") setDateRange(value);
    if (name === "propertyType") setPropertyType(value);
    if (name === "branch") setBranch(value);
    if (name === "paymentStatus") setPaymentStatus(value);
    if (name === "houseId") setHouseId(value);
  };

  const handleReset = () => {
    setDateRange("This Month");
    setPropertyType("All Property Types");
    setBranch("All Branches");
    setPaymentStatus("All Statuses");
    setHouseId("");
  };

  const handleApplyFilters = () => {
    alert("Filters Applied");
  };

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = transactions.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      {/* Report Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Report Filters</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Date Range</label>
            <select
              className="px-4 py-2 border rounded-md"
              name="dateRange"
              value={dateRange}
              onChange={handleFilterChange}
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Property Type</label>
            <select
              className="px-4 py-2 border rounded-md"
              name="propertyType"
              value={propertyType}
              onChange={handleFilterChange}
            >
              <option>All Property Types</option>
              <option>Residential</option>
              <option>Commercial</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Branch</label>
            <select
              className="px-4 py-2 border rounded-md"
              name="branch"
              value={branch}
              onChange={handleFilterChange}
            >
              <option>All Branches</option>
              <option>North Branch</option>
              <option>East Branch</option>
              <option>West Branch</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Payment Status</label>
            <select
              className="px-4 py-2 border rounded-md"
              name="paymentStatus"
              value={paymentStatus}
              onChange={handleFilterChange}
            >
              <option>All Statuses</option>
              <option>Paid</option>
              <option>Overdue</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">House ID (Optional)</label>
            <input
              type="text"
              className="px-4 py-2 border rounded-md"
              name="houseId"
              value={houseId}
              onChange={handleFilterChange}
              placeholder="e.g., H-1234"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Report Data Summary */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Total Tax Revenue */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-lg font-semibold">Total Tax Revenue</div>
          <div className="text-2xl font-bold text-blue-600">$24,856</div>
          <div className="text-sm text-green-500">↑ 12.5% from last month</div>
        </div>

        {/* Total Transactions */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-lg font-semibold">Total Transactions</div>
          <div className="text-2xl font-bold text-blue-600">142</div>
          <div className="text-sm text-green-500">↑ 4.8% from last month</div>
        </div>

        {/* Average Tax Amount */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-lg font-semibold">Average Tax Amount</div>
          <div className="text-2xl font-bold text-blue-600">$175</div>
          <div className="text-sm text-green-500">↑ 7.3% from last month</div>
        </div>

        {/* On-Time Payment Rate */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-lg font-semibold">On-Time Payment Rate</div>
          <div className="text-2xl font-bold text-blue-600">92%</div>
          <div className="text-sm text-red-500">↓ 2.1% from last month</div>
        </div>
      </div>

      {/* Transaction Trends */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Transaction Trends</h2>
          <select className="px-4 py-2 border rounded-md">
            <option>Monthly View</option>
            <option>Weekly View</option>
            <option>Yearly View</option>
          </select>
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <p>[Transaction Volume & Revenue Chart by Time Period]</p>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Transaction Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Transaction ID</th>
                <th className="py-2 px-4 border-b">House ID</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Branch</th>
                <th className="py-2 px-4 border-b">District</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((transaction) => (
                <tr key={transaction.transactionId}>
                  <td className="py-2 px-4 border-b">{transaction.transactionId}</td>
                  <td className="py-2 px-4 border-b">{transaction.houseId}</td>
                  <td className="py-2 px-4 border-b">{transaction.date}</td>
                  <td className="py-2 px-4 border-b">{transaction.amount}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`${
                        transaction.status === "Paid"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } text-white py-1 px-2 rounded-full`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">{transaction.branch}</td>
                  <td className="py-2 px-4 border-b">{transaction.district}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="text-blue-500 hover:underline">View</button>
                    <button className="text-green-500 hover:underline ml-2">
                      Export
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Previous
            </button>
            <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
