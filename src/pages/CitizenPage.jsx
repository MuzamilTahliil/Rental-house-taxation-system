// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { FaPlus, FaSearch } from "react-icons/fa";
// // import { useDarkMode } from "../contexts/DarkModeContext";
// // import SidebarNavbar from "../components/Sidebar";
// // import CitizenRegistrationForm from "../components/CitizenRegistrationForm"; // Assuming you have a CitizenRegistrationForm component

// // const CitizenPage = () => {
// //   const { darkMode } = useDarkMode();
// //   const [citizens, setCitizens] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
// //   const [showForm, setShowForm] = useState(false); // Manage form visibility
// //   const [formType, setFormType] = useState("citizen"); // Store the form type (citizen)

// //   // Fetch citizens from the server when the component mounts
// //   useEffect(() => {
// //     const fetchCitizens = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5000/api/citizens");
// //         setCitizens(response.data);
// //       } catch (error) {
// //         console.error("Error fetching citizens", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCitizens();
// //   }, []);

// //   // Filter citizens based on the search term
// //   const filteredCitizens = citizens.filter((citizen) =>
// //     citizen?.name?.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // Handle the Add Citizen button click
// //   const handleAddCitizen = () => {
// //     setFormType("citizen"); // Set the form type to citizen
// //     setShowForm(true); // Show the form
// //   };

// //   // Close the form
// //   const handleCloseForm = () => {
// //     setShowForm(false); // Hide the form
// //   };

// //   if (loading) return <div>Loading...</div>;

// //   return (
// //     <div className={`flex mt-8 ml-[-50px] bg-[#242528] ${darkMode ? "dark" : "bg-gray-100"}`}>
// //       <SidebarNavbar />
// //       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
// //         {/* Header Section */}
// //         <div className="flex justify-between items-center mb-4">
// //           <div className={`px-6 py-4 ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
// //             <h1 className="text-2xl font-bold">Citizen Management</h1>
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             {/* Search Bar */}
// //             <div className="flex items-center space-x-2 border p-2 rounded-md">
// //               <FaSearch size={18} />
// //               <input
// //                 type="text"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="bg-transparent outline-none"
// //                 placeholder="Search citizens"
// //               />
// //             </div>
// //             {/* Add Citizen Button */}
// //             <button
// //               onClick={handleAddCitizen}
// //               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
// //             >
// //               <FaPlus size={16} />
// //               <span>Add Citizen</span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* Table Section */}
// //         <div className="overflow-x-auto rounded-lg shadow-lg">
// //           <table className="min-w-full bg-white border-collapse text-sm">
// //             <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}>
// //               <tr>
// //                 <th className="px-6 py-3 text-left">NO</th>
// //                 <th className="px-6 py-3 text-left">Name</th>
// //                 <th className="px-6 py-3 text-left">Email</th>
// //                 <th className="px-6 py-3 text-left">Phone</th>
// //                 <th className="px-6 py-3 text-left">Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredCitizens.map((citizen, index) => (
// //                 <tr key={citizen._id} className={`${darkMode ? "bg-[#242528] text-white hover:bg-gray-700" : "hover:bg-gray-50"}`}>
// //                   <td className="px-6 py-4">{index + 1}</td>
// //                   <td className="px-6 py-4">{citizen.name}</td>
// //                   <td className="px-6 py-4">{citizen.email}</td>
// //                   <td className="px-6 py-4">{citizen.phone}</td>
// //                   <td className="px-6 py-4">
// //                     <button
// //                       onClick={() => handleEdit(citizen)}
// //                       className="text-blue-600 hover:text-blue-900 mr-2"
// //                     >
// //                       Edit
// //                     </button>
// //                     <button
// //                       onClick={() => handleDelete(citizen._id)}
// //                       className="text-red-600 hover:text-red-900"
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //         <div className={`mt-4 flex justify-between items-center ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
// //           <div className="text-sm">Showing 1 to {filteredCitizens.length} of {filteredCitizens.length} citizens</div>
// //           <div className="flex space-x-2">
// //             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Previous</button>
// //             <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">1</button>
// //             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Next</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Citizen Registration Form (Modal) */}
// //       {showForm && <CitizenRegistrationForm show={showForm} onClose={handleCloseForm} />}
// //     </div>
// //   );
// // };

// // // Function to handle Edit Citizen
// // const handleEdit = (citizen) => {
// //   console.log("Edit citizen:", citizen);
// //   // Implement your edit logic here
// // };

// // // Function to handle Delete Citizen
// // const handleDelete = (citizenId) => {
// //   console.log("Delete citizen with ID:", citizenId);
// //   // Implement your delete logic here
// // };

// // export default CitizenPage;












// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import CitizenRegistrationForm from "../components/CitizenRegistrationForm";

// const CitizenPage = () => {
//   const { darkMode } = useDarkMode();
//   const [citizens, setCitizens] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedCitizen, setSelectedCitizen] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [citizensRes, propertiesRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/citizens"),
//           axios.get("http://localhost:5000/api/properties"),
//         ]);
//         setCitizens(citizensRes.data);
//         setProperties(propertiesRes.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Merge citizen with property by matching citizen._id === property.citizen_id._id
//   const mergedData = citizens.map((citizen) => {
//     const property = properties.find((p) => p.citizen_id?._id === citizen._id);
//     return {
//       ...citizen,
//       property,
//     };
//   });

//   const filteredData = mergedData.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (item.phone_number && item.phone_number.includes(searchTerm))
//   );

//   const handleAddCitizen = () => {
//     setSelectedCitizen(null);
//     setShowForm(true);
//   };

//   const handleEdit = (citizen) => {
//     setSelectedCitizen(citizen);
//     setShowForm(true);
//   };

//   const handleDelete = async (citizenId) => {
//     if (!window.confirm("Are you sure you want to delete this citizen?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/citizens/${citizenId}`);
//       setCitizens(citizens.filter((c) => c._id !== citizenId));
//       alert("Citizen deleted successfully");
//     } catch (error) {
//       alert("Failed to delete citizen: " + error.message);
//     }
//   };

//   const handleView = (citizen) => {
//     alert(
//       `Citizen Details:\n
//       Name: ${citizen.name}\n
//       Phone: ${citizen.phone_number}\n
//       House No: ${citizen.property?.house_no || "N/A"}\n
//       District: ${citizen.property?.district_id?.district_name || "N/A"}\n
//       Branch: ${citizen.property?.branch_id?.branch_name || "N/A"}\n
//       Zone: ${citizen.property?.zone_id?.zone_name || "N/A"}`
//     );
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedCitizen(null);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className={`flex mt-8 ml-[-50px] bg-[#242528] ${darkMode ? "dark" : "bg-gray-100"}`}>
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <div className={`px-6 py-4 ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//             <h1 className="text-2xl font-bold">Citizen Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none"
//                 placeholder="Search citizens"
//               />
//             </div>
//             {/* Add Button */}
//             <button
//               onClick={handleAddCitizen}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add Citizen</span>
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}>
//               <tr>
//                 <th className="px-6 py-3 text-left">No</th>
//                 <th className="px-6 py-3 text-left">Name</th>
//                 <th className="px-6 py-3 text-left">Phone</th>
//                 <th className="px-6 py-3 text-left">House No</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((citizen, index) => (
//                 <tr key={citizen._id} className={`${darkMode ? "bg-[#242528] text-white hover:bg-gray-700" : "hover:bg-gray-50"}`}>
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{citizen.name}</td>
//                   <td className="px-6 py-4">{citizen.phone_number}</td>
//                   <td className="px-6 py-4">{citizen.property?.house_no || "-"}</td>
//                   <td className="px-6 py-4">{citizen.property?.district_id?.district_name || "-"}</td>
//                   <td className="px-6 py-4">{citizen.property?.branch_id?.branch_name || "-"}</td>
//                   <td className="px-6 py-4">{citizen.property?.zone_id?.zone_name || "-"}</td>
//                   <td className="px-6 py-4 flex space-x-2">
//                     <button onClick={() => handleView(citizen)} className="text-green-600 hover:text-green-900" title="View">
//                       <FaEye />
//                     </button>
//                     <button onClick={() => handleEdit(citizen)} className="text-blue-600 hover:text-blue-900" title="Edit">
//                       <FaEdit />
//                     </button>
//                     <button onClick={() => handleDelete(citizen._id)} className="text-red-600 hover:text-red-900" title="Delete">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <CitizenRegistrationForm
//           show={showForm}
//           onClose={handleCloseForm}
//           citizen={selectedCitizen}
//           refreshCitizens={() => window.location.reload()}
//         />
//       )}
//     </div>
//   );
// };

// export default CitizenPage;










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaSearch, FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import CitizenRegistrationForm from "../components/CitizenRegistrationForm"; // your form component

// const CitizenPage = () => {
//   const { darkMode } = useDarkMode();
//   const [citizens, setCitizens] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [formType, setFormType] = useState("citizen");
//   const [selectedCitizen, setSelectedCitizen] = useState(null);

//   // Fetch citizens with populated properties on mount
//   useEffect(() => {
//     const fetchCitizens = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/citizens");
//         setCitizens(response.data);
//       } catch (error) {
//         console.error("Error fetching citizens", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCitizens();
//   }, []);

//   // Filter citizens by name search
//   const filteredCitizens = citizens.filter((citizen) =>
//     citizen?.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleAddCitizen = () => {
//     setFormType("citizen");
//     setSelectedCitizen(null);
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedCitizen(null);
//   };

//   // Edit / Delete / View placeholders
//   const handleEdit = (citizen) => {
//     setSelectedCitizen(citizen);
//     setFormType("citizen");
//     setShowForm(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this citizen?")) {
//       axios
//         .delete(`http://localhost:5000/api/citizens/${id}`)
//         .then(() => {
//           setCitizens((prev) => prev.filter((c) => c._id !== id));
//         })
//         .catch((err) => {
//           alert("Failed to delete citizen: " + err.message);
//         });
//     }
//   };

//   const handleView = (citizen) => {
//     alert(`Viewing citizen: ${citizen.name}`);
//     // You can implement modal or page navigation here
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className={`flex mt-8 ml-[-50px] bg-[#242528] ${darkMode ? "dark" : "bg-gray-100"}`}>
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-4">
//           <div className={`px-6 py-4 ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//             <h1 className="text-2xl font-bold">Citizen Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none"
//                 placeholder="Search citizens"
//               />
//             </div>
//             {/* Add Citizen Button */}
//             <button
//               onClick={handleAddCitizen}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add Citizen</span>
//             </button>
//           </div>
//         </div>

//         {/* Table Section */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}>
//               <tr>
//                 <th className="px-6 py-3 text-left">No</th>
//                 <th className="px-6 py-3 text-left">Citizen Name</th>
//                 <th className="px-6 py-3 text-left">House No</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Phone Number</th>
//                 <th className="px-6 py-3 text-left">Password</th>
//                 <th className="px-6 py-3 text-left">Status</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCitizens.map((citizen, index) => (
//                 <tr
//                   key={citizen._id}
//                   className={`${darkMode ? "bg-[#242528] text-white hover:bg-gray-700" : "hover:bg-gray-50"}`}
//                 >
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{citizen.name}</td>
//                   <td className="px-6 py-4">{citizen.property?.house_no || "-"}</td>
//                   <td className="px-6 py-4">{citizen.property?.district_id?.district_name || "-"}</td>
//                   <td className="px-6 py-4">{citizen.property?.branch_id?.branch_name || "-"}</td>
//                   <td className="px-6 py-4">{citizen.property?.zone_id?.zone_name || "-"}</td>
//                   <td className="px-6 py-4">{citizen.phone_number}</td>
//                   <td className="px-6 py-4">••••••</td> {/* Masked password */}
//                   <td className="px-6 py-4">{citizen.status || "Active"}</td>
//                   <td className="px-6 py-4 flex space-x-2">
//                     <button onClick={() => handleEdit(citizen)} title="Edit" className="text-blue-600 hover:text-blue-900">
//                       <FaEdit />
//                     </button>
//                     <button onClick={() => handleDelete(citizen._id)} title="Delete" className="text-red-600 hover:text-red-900">
//                       <FaTrash />
//                     </button>
//                     <button onClick={() => handleView(citizen)} title="View" className="text-green-600 hover:text-green-900">
//                       <FaEye />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className={`mt-4 flex justify-between items-center ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//           <div className="text-sm">
//             Showing 1 to {filteredCitizens.length} of {filteredCitizens.length} citizens
//           </div>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Previous</button>
//             <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">1</button>
//             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Next</button>
//           </div>
//         </div>
//       </div>

//       {/* Citizen Registration Form (Modal) */}
//       {showForm && <CitizenRegistrationForm show={showForm} onClose={handleCloseForm} />}
//     </div>
//   );
// };

// export default CitizenPage;














// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import CitizenRegistrationForm from "../components/CitizenRegistrationForm";

// const CitizenPage = () => {
//   const { darkMode } = useDarkMode();
//   const [citizens, setCitizens] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedCitizen, setSelectedCitizen] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [citizensRes, propertiesRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/citizens"),
//           axios.get("http://localhost:5000/api/properties"),
//         ]);
//         setCitizens(citizensRes.data);
//         setProperties(propertiesRes.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Merge citizen with property by matching citizen._id === property.citizen_id._id
//   const mergedData = citizens.map((citizen) => {
//     const property = properties.find(
//       (p) => p.citizen_id?._id === citizen._id
//     );
//     return { ...citizen, property };
//   });

//   const filteredData = mergedData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (item.phone_number && item.phone_number.includes(searchTerm))
//   );

//   const handleAddCitizen = () => {
//     setSelectedCitizen(null);
//     setShowForm(true);
//   };

//   const handleEdit = (citizen) => {
//     setSelectedCitizen(citizen);
//     setShowForm(true);
//   };

//   const handleDelete = async (citizenId) => {
//     if (!window.confirm("Are you sure you want to delete this citizen?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/citizens/${citizenId}`);
//       setCitizens((prev) => prev.filter((c) => c._id !== citizenId));
//       alert("Citizen deleted successfully");
//     } catch (error) {
//       alert("Failed to delete citizen: " + error.message);
//     }
//   };

//   const handleView = (citizen) => {
//     alert(`Citizen Details:
// Name: ${citizen.name}
// Phone: ${citizen.phone_number}
// House No: ${citizen.property?.house_no || "N/A"}
// District: ${citizen.property?.district_id?.district_name || "N/A"}
// Branch: ${citizen.property?.branch_id?.branch_name || "N/A"}
// Zone: ${citizen.property?.zone_id?.zone_name || "N/A"}
// Password: ${citizen.password}
// Status: ${citizen.status || "Active"}`);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedCitizen(null);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div
//       className={`flex mt-8 ml-[-50px] bg-[#242528] ${
//         darkMode ? "dark" : "bg-gray-100"
//       }`}
//     >
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <div
//             className={`px-6 py-4 ${
//               darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"
//             }`}
//           >
//             <h1 className="text-2xl font-bold">Citizen Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none"
//                 placeholder="Search citizens"
//               />
//             </div>
//             {/* Add Button */}
//             <button
//               onClick={handleAddCitizen}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add Citizen</span>
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead
//               className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}
//             >
//               <tr>
//                 <th className="px-6 py-3 text-left">No</th>
//                 <th className="px-6 py-3 text-left">Citizen Name</th>
//                 <th className="px-6 py-3 text-left">House No</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Phone Number</th>
//                 <th className="px-6 py-3 text-left">Password</th>
//                 <th className="px-6 py-3 text-left">Status</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((citizen, index) => (
//                 <tr
//                   key={citizen._id}
//                   className={`${
//                     darkMode
//                       ? "bg-[#242528] text-white hover:bg-gray-700"
//                       : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{citizen.name}</td>
//                   <td className="px-6 py-4">{citizen.property?.house_no || "-"}</td>
//                   <td className="px-6 py-4">
//                     {citizen.property?.district_id?.district_name || "-"}
//                   </td>
//                   <td className="px-6 py-4">
//                     {citizen.property?.branch_id?.branch_name || "-"}
//                   </td>
//                   <td className="px-6 py-4">
//                     {citizen.property?.zone_id?.zone_name || "-"}
//                   </td>
//                   <td className="px-6 py-4">{citizen.phone_number}</td>
//                   <td className="px-6 py-4">{citizen.password}</td>
//                   <td className="px-6 py-4">{citizen.status || "Active"}</td>
//                   <td className="px-6 py-4 flex space-x-2">
//                     <button
//                       onClick={() => handleView(citizen)}
//                       className="text-green-600 hover:text-green-900"
//                       title="View"
//                     >
//                       <FaEye />
//                     </button>
//                     <button
//                       onClick={() => handleEdit(citizen)}
//                       className="text-blue-600 hover:text-blue-900"
//                       title="Edit"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(citizen._id)}
//                       className="text-red-600 hover:text-red-900"
//                       title="Delete"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <CitizenRegistrationForm
//           show={showForm}
//           onClose={handleCloseForm}
//           citizen={selectedCitizen}
//           refreshCitizens={() => window.location.reload()}
//         />
//       )}
//     </div>
//   );
// };

// export default CitizenPage;










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import CitizenRegistrationForm from "../components/CitizenRegistrationForm";

// const CitizenPage = () => {
//   const { darkMode } = useDarkMode();
//   const [citizens, setCitizens] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedCitizen, setSelectedCitizen] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [citizensRes, propertiesRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/citizens"),
//           axios.get("http://localhost:5000/api/properties"),
//         ]);
//         setCitizens(citizensRes.data);
//         setProperties(propertiesRes.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Merge citizen with property by matching citizen._id === property.citizen_id._id
//   const mergedData = citizens.map((citizen) => {
//     const property = properties.find(
//       (p) => p.citizen_id?._id === citizen._id
//     );
//     return { ...citizen, property };
//   });

//   const filteredData = mergedData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (item.phone_number && item.phone_number.includes(searchTerm))
//   );

//   const handleAddCitizen = () => {
//     setSelectedCitizen(null);
//     setShowForm(true);
//   };

//   const handleEdit = (citizen) => {
//     setSelectedCitizen(citizen);
//     setShowForm(true);
//   };

//   const handleDelete = async (citizenId) => {
//     if (!window.confirm("Are you sure you want to delete this citizen?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/citizens/${citizenId}`);
//       setCitizens((prev) => prev.filter((c) => c._id !== citizenId));
//       alert("Citizen deleted successfully");
//     } catch (error) {
//       alert("Failed to delete citizen: " + error.message);
//     }
//   };

//   const handleView = (citizen) => {
//     alert(`Citizen Details:
// Name: ${citizen.name}
// Phone: ${citizen.phone_number}
// House No: ${citizen.property?.house_no || "N/A"}
// District: ${citizen.property?.district_id?.district_name || "N/A"}
// Branch: ${citizen.property?.branch_id?.branch_name || "N/A"}
// Zone: ${citizen.property?.zone_id?.zone_name || "N/A"}
// Password: ${citizen.password}
// Status: ${citizen.status || "Active"}
// Property Registered On: ${citizen.property?.createdAt ? new Date(citizen.property.createdAt).toLocaleDateString() : "N/A"}`);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedCitizen(null);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div
//       className={`flex mt-8 ml-[-50px] bg-[#242528] ${
//         darkMode ? "dark" : "bg-gray-100"
//       }`}
//     >
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <div
//             className={`px-6 py-4 ${
//               darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"
//             }`}
//           >
//             <h1 className="text-2xl font-bold">Citizen Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none"
//                 placeholder="Search citizens"
//               />
//             </div>
//             {/* Add Button */}
//             <button
//               onClick={handleAddCitizen}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add Citizen</span>
//             </button>
//           </div>
//         </div>

//         {/* Table with horizontal scroll */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-max w-full bg-white border-collapse text-sm">
//             <thead
//               className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}
//             >
//               <tr>
//                 <th className="px-8 py-3 text-left">No</th>
//                 <th className="px-8 py-3 text-left">Citizen Name</th>
//                 <th className="px-8 py-3 text-left">House No</th>
//                 <th className="px-8 py-3 text-left">District</th>
//                 <th className="px-8 py-3 text-left">Branch</th>
//                 <th className="px-8 py-3 text-left">Zone</th>
//                 <th className="px-8 py-3 text-left">Phone Number</th>
//                 <th className="px-8 py-3 text-left">Password</th>
//                 <th className="px-8 py-3 text-left">Status</th>
//                 <th className="px-8 py-3 text-left">Registered Date</th>
//                 <th className="px-8 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((citizen, index) => (
//                 <tr
//                   key={citizen._id}
//                   className={`${
//                     darkMode
//                       ? "bg-[#242528] text-white hover:bg-gray-700"
//                       : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <td className="px-8 py-4">{index + 1}</td>
//                   <td className="px-8 py-4">{citizen.name}</td>
//                   <td className="px-8 py-4">{citizen.property?.house_no || "-"}</td>
//                   <td className="px-8 py-4">
//                     {citizen.property?.district_id?.district_name || "-"}
//                   </td>
//                   <td className="px-8 py-4">
//                     {citizen.property?.branch_id?.branch_name || "-"}
//                   </td>
//                   <td className="px-8 py-4">{citizen.property?.zone_id?.zone_name || "-"}</td>
//                   <td className="px-8 py-4">{citizen.phone_number}</td>
//                   <td className="px-8 py-4">{citizen.password}</td>
//                   <td className="px-8 py-4">{citizen.status || "Active"}</td>
//                   <td className="px-8 py-4">
//                     {citizen.property?.createdAt ? new Date(citizen.property.createdAt).toLocaleDateString() : "-"}
//                   </td>
//                   <td className="px-8 py-4 flex space-x-2">
//                     <button
//                       onClick={() => handleView(citizen)}
//                       className="text-green-600 hover:text-green-900"
//                       title="View"
//                     >
//                       <FaEye />
//                     </button>
//                     <button
//                       onClick={() => handleEdit(citizen)}
//                       className="text-blue-600 hover:text-blue-900"
//                       title="Edit"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(citizen._id)}
//                       className="text-red-600 hover:text-red-900"
//                       title="Delete"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <CitizenRegistrationForm
//           show={showForm}
//           onClose={handleCloseForm}
//           citizen={selectedCitizen}
//           refreshCitizens={() => window.location.reload()}
//         />
//       )}
//     </div>
//   );
// };

// export default CitizenPage;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import CitizenRegistrationForm from "../components/CitizenRegistrationForm";

// const CitizenPage = () => {
//   const { darkMode } = useDarkMode();
//   const [citizens, setCitizens] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedCitizen, setSelectedCitizen] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [citizensRes, propertiesRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/citizens"),
//           axios.get("http://localhost:5000/api/properties"),
//         ]);
//         setCitizens(citizensRes.data);
//         setProperties(propertiesRes.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Merge citizen with property by matching citizen._id === property.citizen_id._id
//   const mergedData = citizens.map((citizen) => {
//     const property = properties.find(
//       (p) => p.citizen_id?._id === citizen._id
//     );
//     return { ...citizen, property };
//   });

//   const filteredData = mergedData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (item.phone_number && item.phone_number.includes(searchTerm))
//   );

//   const handleAddCitizen = () => {
//     setSelectedCitizen(null);
//     setShowForm(true);
//   };

//   const handleEdit = (citizen) => {
//     setSelectedCitizen(citizen);
//     setShowForm(true);
//   };

//   const handleDelete = async (citizenId) => {
//     if (!window.confirm("Are you sure you want to delete this citizen?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/citizens/${citizenId}`);
//       setCitizens((prev) => prev.filter((c) => c._id !== citizenId));
//       alert("Citizen deleted successfully");
//     } catch (error) {
//       alert("Failed to delete citizen: " + error.message);
//     }
//   };

//   const handleView = (citizen) => {
//     alert(`Citizen Details:
// Name: ${citizen.name}
// Phone: ${citizen.phone_number}
// House No: ${citizen.property?.house_no || "N/A"}
// District: ${citizen.property?.district_id?.district_name || "N/A"}
// Branch: ${citizen.property?.branch_id?.branch_name || "N/A"}
// Zone: ${citizen.property?.zone_id?.zone_name || "N/A"}
// Password: ${citizen.password}
// Status: ${citizen.status || "Active"}
// Property Registered On: ${
//       citizen.property?.createdAt
//         ? new Date(citizen.property.createdAt).toLocaleDateString()
//         : "N/A"
//     }`);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedCitizen(null);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div
//       className={`flex mt-8 ml-[-50px] bg-[#242528] ${
//         darkMode ? "dark" : "bg-gray-100"
//       }`}
//     >
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <div
//             className={`px-6 py-4 ${
//               darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"
//             }`}
//           >
//             <h1 className="text-2xl font-bold">Citizen Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className={`flex items-center space-x-2 border p-2 rounded-md text-black ${darkMode ? "bg-[#242528] text-white" : "bg-white text-black"}`}>
//                           <FaSearch size={18} />
//                           <input
//                             type="text"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="bg-transparent outline-none"
//                             placeholder="Search districts"
//                           />
//                         </div>
//             {/* Add Button */}
//             <button
//               onClick={handleAddCitizen}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add Citizen</span>
//             </button>
//           </div>
//         </div>

//         {/* Table with horizontal scroll */}
//         <div className="overflow-x-auto rounded-lg shadow-lg max-h-[600px] overflow-y-auto">
//           <table className="min-w-max w-full bg-white border-collapse text-sm">
//             <thead
//               className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}
//             >
//               <tr>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">No</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">Citizen Name</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">House No</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">District</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">Branch</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">Zone</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">House Rent</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">Phone Number</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">Password</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">Registered Date</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">Status</th>
//                 <th className="px-8 py-3 text-left whitespace-nowrap">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((citizen, index) => (
//                 <tr
//                   key={citizen._id}
//                   className={`${
//                     darkMode
//                       ? "bg-[#242528] text-white hover:bg-gray-700"
//                       : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <td className="px-8 py-4 whitespace-nowrap">{index + 1}</td>
//                   <td className="px-8 py-4 whitespace-nowrap">{citizen.name}</td>
//                   <td className="px-8 py-4 whitespace-nowrap">{citizen.property?.house_no || "-"}</td>
//                   <td className="px-8 py-4 whitespace-nowrap">{citizen.property?.district_id?.district_name || "-"}</td>
//                   <td className="px-8 py-4 whitespace-nowrap">{citizen.property?.branch_id?.branch_name || "-"}</td>
//                   <td className="px-8 py-4 whitespace-nowrap">{citizen.property?.zone_id?.zone_name || "-"}</td>
//                   <td className="px-8 py-4 whitespace-nowrap">
//         {citizen.property?.house_rent
//           ? Number(citizen.property.house_rent.$numberDecimal || citizen.property.house_rent).toFixed(2)
//           : "-"}
//       </td>
//                   <td className="px-8 py-4 whitespace-nowrap">{citizen.phone_number}</td>
//                   <td className="px-8 py-4 whitespace-nowrap">{citizen.password}</td>
//                   <td className="px-8 py-4 whitespace-nowrap">
//                     {citizen.property?.register_date ? new Date(citizen.property.register_date).toLocaleDateString() : "-"}
//                   </td>
//                   <td className="px-8 py-4 whitespace-nowrap">{citizen.status || "Active"}</td>
                  
//                   <td className="px-8 py-4 whitespace-nowrap flex space-x-2">
//                     <button
//                       onClick={() => handleView(citizen)}
//                       className="text-green-600 hover:text-green-900"
//                       title="View"
//                     >
//                       <FaEye />
//                     </button>
//                     <button
//                       onClick={() => handleEdit(citizen)}
//                       className="text-blue-600 hover:text-blue-900"
//                       title="Edit"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(citizen._id)}
//                       className="text-red-600 hover:text-red-900"
//                       title="Delete"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//         </div>
        
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <CitizenRegistrationForm
//           show={showForm}
//           onClose={handleCloseForm}
//           citizen={selectedCitizen}
//           refreshCitizens={() => window.location.reload()}
//         />
//       )}
//     </div>
//   );
// };

// export default CitizenPage;








import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaSearch, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useDarkMode } from "../contexts/DarkModeContext";
import SidebarNavbar from "../components/Sidebar";
import CitizenRegistrationForm from "../components/CitizenRegistrationForm";

const CitizenPage = () => {
  const { darkMode } = useDarkMode();
  const [citizens, setCitizens] = useState([]);
  const [properties, setProperties] = useState([]);
  const [taxes, setTaxes] = useState([]); // <-- New tax state
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedCitizen, setSelectedCitizen] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [citizensRes, propertiesRes, taxesRes] = await Promise.all([
          axios.get("http://localhost:5000/api/citizens"),
          axios.get("http://localhost:5000/api/properties"),
          axios.get("http://localhost:5000/api/taxes"), // <-- Fetch taxes
        ]);
        setCitizens(citizensRes.data);
        setProperties(propertiesRes.data);
        setTaxes(taxesRes.data); // <-- Set tax data
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Merge citizen with property by matching citizen._id === property.citizen_id._id
  // Also merge tax by matching tax.property_id === property._id
  const mergedData = citizens.map((citizen) => {
    const property = properties.find((p) => p.citizen_id?._id === citizen._id);
    const tax = property ? taxes.find((t) => t.property_id?._id === property._id) : null;
    return { ...citizen, property, tax };
  });

  const filteredData = mergedData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.phone_number && item.phone_number.includes(searchTerm))
  );

  const handleAddCitizen = () => {
    setSelectedCitizen(null);
    setShowForm(true);
  };

  const handleEdit = (citizen) => {
    setSelectedCitizen(citizen);
    setShowForm(true);
  };

  const handleDelete = async (citizenId) => {
    if (!window.confirm("Are you sure you want to delete this citizen?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/citizens/${citizenId}`);
      setCitizens((prev) => prev.filter((c) => c._id !== citizenId));
      alert("Citizen deleted successfully");
    } catch (error) {
      alert("Failed to delete citizen: " + error.message);
    }
  };

  const handleView = (citizen) => {
    alert(`Citizen Details:
Name: ${citizen.name}
Phone: ${citizen.phone_number}
House No: ${citizen.property?.house_no || "N/A"}
District: ${citizen.property?.district_id?.district_name || "N/A"}
Branch: ${citizen.property?.branch_id?.branch_name || "N/A"}
Zone: ${citizen.property?.zone_id?.zone_name || "N/A"}
House Rent: ${
      citizen.property?.house_rent
        ? Number(citizen.property.house_rent.$numberDecimal || citizen.property.house_rent).toFixed(2)
        : "N/A"
    }
Tax Amount: ${
      citizen.tax?.tax_amount
        ? Number(citizen.tax.tax_amount.$numberDecimal || citizen.tax.tax_amount).toFixed(2)
        : "N/A"
    }
Password: ${citizen.password}
Status: ${citizen.status || "Active"}
Property Registered On: ${
      citizen.property?.register_date
        ? new Date(citizen.property.register_date).toLocaleDateString()
        : "N/A"
    }`);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedCitizen(null);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div
      className={`flex mt-8 ml-[-50px] bg-[#242528] ${
        darkMode ? "dark" : "bg-gray-100"
      }`}
    >
      <SidebarNavbar />
      <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div
            className={`px-6 py-4 ${
              darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"
            }`}
          >
            <h1 className="text-2xl font-bold">Citizen Management</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className={`flex items-center space-x-2 border p-2 rounded-md text-black ${darkMode ? "bg-[#242528] text-white" : "bg-white text-black"}`}>
              <FaSearch size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none"
                placeholder="Search citizens"
              />
            </div>
            {/* Add Button */}
            <button
              onClick={handleAddCitizen}
              className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <FaPlus size={16} />
              <span>Add Citizen</span>
            </button>
          </div>
        </div>

        {/* Table with horizontal scroll */}
        <div className="overflow-x-auto rounded-lg shadow-lg max-h-[600px] overflow-y-auto">
          <table className="min-w-max w-full bg-white border-collapse text-sm">
            <thead
              className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}
            >
              <tr>
                <th className="px-8 py-3 text-left whitespace-nowrap">No</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">Citizen Name</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">House No</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">District</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">Branch</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">Zone</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">House Rent</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">Tax Amount</th> {/* New Column */}
                <th className="px-8 py-3 text-left whitespace-nowrap">Phone Number</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">Password</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">Registered Date</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">Status</th>
                <th className="px-8 py-3 text-left whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((citizen, index) => (
                <tr
                  key={citizen._id}
                  className={`${
                    darkMode
                      ? "bg-[#242528] text-white hover:bg-gray-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <td className="px-8 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-8 py-4 whitespace-nowrap">{citizen.name}</td>
                  <td className="px-8 py-4 whitespace-nowrap">{citizen.property?.house_no || "-"}</td>
                  <td className="px-8 py-4 whitespace-nowrap">{citizen.property?.district_id?.district_name || "-"}</td>
                  <td className="px-8 py-4 whitespace-nowrap">{citizen.property?.branch_id?.branch_name || "-"}</td>
                  <td className="px-8 py-4 whitespace-nowrap">{citizen.property?.zone_id?.zone_name || "-"}</td>
                  <td className="px-8 py-4 whitespace-nowrap">
                    {citizen.property?.house_rent
                      ? Number(citizen.property.house_rent.$numberDecimal || citizen.property.house_rent).toFixed(2)
                      : "-"}
                  </td>
                  <td className="px-8 py-4 whitespace-nowrap">
                    {citizen.tax?.tax_amount
                      ? Number(citizen.tax.tax_amount.$numberDecimal || citizen.tax.tax_amount).toFixed(2)
                      : "-"}
                  </td>
                  <td className="px-8 py-4 whitespace-nowrap">{citizen.phone_number}</td>
                  <td className="px-8 py-4 whitespace-nowrap">{citizen.password}</td>
                  <td className="px-8 py-4 whitespace-nowrap">
                    {citizen.property?.register_date
                      ? new Date(citizen.property.register_date).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-8 py-4 whitespace-nowrap">{citizen.status || "Active"}</td>

                  <td className="px-8 py-4 whitespace-nowrap flex space-x-2">
                    <button
                      onClick={() => handleView(citizen)}
                      className="text-green-600 hover:text-green-900"
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleEdit(citizen)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(citizen._id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <CitizenRegistrationForm
          show={showForm}
          onClose={handleCloseForm}
          citizen={selectedCitizen}
          refreshCitizens={() => window.location.reload()}
        />
      )}
    </div>
  );
};

export default CitizenPage;
