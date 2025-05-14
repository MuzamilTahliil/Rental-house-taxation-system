import React, { useState } from "react";

const RentalTransactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [branchFilter, setBranchFilter] = useState("All Branches");
  const [districtFilter, setDistrictFilter] = useState("All Districts");

  // Sample data for transactions
  const [transactions, setTransactions] = useState([
    {
      transactionId: "TRX-10001",
      houseId: "H-5432",
      date: "2023-01-15",
      amount: "$1,500.00",
      status: "Paid",
      branch: "Main",
      district: "Central",
    },
    {
      transactionId: "TRX-10004",
      houseId: "H-1265",
      date: "2023-02-01",
      amount: "$1,800.00",
      status: "Paid",
      branch: "East",
      district: "Downtown",
    },
    {
      transactionId: "TRX-10005",
      houseId: "H-9834",
      date: "2023-02-05",
      amount: "$2,200.00",
      status: "Overdue",
      branch: "West",
      district: "Suburban",
    },
    {
      transactionId: "TRX-10006",
      houseId: "H-7632",
      date: "2023-02-10",
      amount: "$1,350.00",
      status: "Paid",
      branch: "Main",
      district: "Riverside",
    },
    {
      transactionId: "TRX-10008",
      houseId: "H-2198",
      date: "2023-02-20",
      amount: "$900.00",
      status: "Paid",
      branch: "South",
      district: "Downtown",
    },
    {
      transactionId: "TRX-10009",
      houseId: "H-6543",
      date: "2023-02-25",
      amount: "$2,500.00",
      status: "Overdue",
      branch: "East",
      district: "Uptown",
    },
    {
      transactionId: "TRX-10010",
      houseId: "H-8721",
      date: "2023-03-01",
      amount: "$1,150.00",
      status: "Paid",
      branch: "West",
      district: "Suburban",
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleBranchFilterChange = (e) => {
    setBranchFilter(e.target.value);
  };

  const handleDistrictFilterChange = (e) => {
    setDistrictFilter(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      (transaction.status === statusFilter || statusFilter === "All Statuses") &&
      (transaction.branch === branchFilter || branchFilter === "All Branches") &&
      (transaction.district === districtFilter || districtFilter === "All Districts") &&
      (transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
       transaction.houseId.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Rental Transactions</h1>

      {/* Search and Filters */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-l-md"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-4">
          <select
            className="px-4 py-2 border rounded-md"
            value={statusFilter}
            onChange={handleStatusFilterChange}
          >
            <option>All Statuses</option>
            <option>Paid</option>
            <option>Overdue</option>
          </select>
          <select
            className="px-4 py-2 border rounded-md"
            value={branchFilter}
            onChange={handleBranchFilterChange}
          >
            <option>All Branches</option>
            <option>Main</option>
            <option>East</option>
            <option>West</option>
            <option>South</option>
          </select>
          <select
            className="px-4 py-2 border rounded-md"
            value={districtFilter}
            onChange={handleDistrictFilterChange}
          >
            <option>All Districts</option>
            <option>Central</option>
            <option>Downtown</option>
            <option>Suburban</option>
            <option>Riverside</option>
            <option>Uptown</option>
          </select>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
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
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.transactionId}>
                <td className="py-2 px-4 border-b">{transaction.transactionId}</td>
                <td className="py-2 px-4 border-b">{transaction.houseId}</td>
                <td className="py-2 px-4 border-b">{transaction.date}</td>
                <td className="py-2 px-4 border-b">{transaction.amount}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`${
                      transaction.status === "Paid"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    } py-1 px-2 rounded-full`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">{transaction.branch}</td>
                <td className="py-2 px-4 border-b">{transaction.district}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default RentalTransactions;
