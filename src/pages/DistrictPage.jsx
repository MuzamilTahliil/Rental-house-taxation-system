// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import DistrictRegistrationForm from "../components/DistrictRegistrationForm"; // Importing the district registration form

// const DistrictPage = () => {
//   const { darkMode } = useDarkMode();
//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false); // Manage form visibility
//   const [formType, setFormType] = useState("district"); // Store the form type (district, branch, zone)

//   // Fetch districts, branches, and zones when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const districtResponse = await axios.get("http://localhost:5000/api/districts");
//         const branchResponse = await axios.get("http://localhost:5000/api/branches");
//         const zoneResponse = await axios.get("http://localhost:5000/api/zones");

//         setDistricts(districtResponse.data);
//         setBranches(branchResponse.data);
//         setZones(zoneResponse.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter districts based on the search term
//   const filteredDistricts = districts.filter((district) =>
//     district?.district_name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle the Add District button click
//   const handleAddDistrict = () => {
//     setFormType("district"); // Set the form type to district
//     setShowForm(true); // Show the form
//   };

//   // Close the form
//   const handleCloseForm = () => {
//     setShowForm(false); // Hide the form
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className={`flex mt-8 ml-[-50px] bg-[#242528] ${darkMode ? "dark" : "bg-gray-100"}`}>
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-4">
//           <div className={`px-6 py-4 ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//             <h1 className="text-2xl font-bold">District Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none "
//                 placeholder="Search districts"
//               />
//             </div>
//             {/* Add Button */}
//             <button
//               onClick={handleAddDistrict}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add District</span>
//             </button>
//           </div>
//         </div>

//         {/* Table Section */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}>
//               <tr>
//                 <th className="px-6 py-3 text-left">NO</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDistricts?.map((district, index) => {
//                 // Find branches and zones related to the current district
//                 const relatedBranches = branches.filter((branch) => branch?.district_id?._id === district?._id);
//                 return relatedBranches.map((branch) => {
//                   // Find the zones related to the current branch
//                   const relatedZones = zones.filter((zone) => zone?.branch_id?._id === branch?._id);
//                   return (
//                     <tr
//                       key={branch?._id}
//                       className={`${darkMode ? "bg-[#242528] text-white hover:bg-gray-700" : "hover:bg-gray-50"}`}
//                     >
//                       <td className="px-6 py-4">{index + 1}</td>
//                       <td className="px-6 py-4">{district?.district_name}</td>
//                       <td className="px-6 py-4">{branch?.branch_name}</td>
//                       <td className="px-6 py-4">
//                         {relatedZones?.map((zone) => (
//                           <div key={zone?._id}>{zone?.zone_name}</div>
//                         ))}
//                       </td>
//                       <td className="px-6 py-4">
//                         <button className="text-blue-600 hover:text-blue-900">Edit</button>
//                         <button className="text-red-600 hover:text-red-900 ml-2">Delete</button>
//                       </td>
//                     </tr>
//                   );
//                 });
//               })}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className={`mt-4 flex justify-between items-center ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//           <div className="text-sm">
//             Showing 1 to {filteredDistricts.length} of {filteredDistricts.length} districts
//           </div>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Previous</button>
//             <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">1</button>
//             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Next</button>
//           </div>
//         </div>
//       </div>

//       {/* District Registration Form (Modal) */}
//       {showForm && <DistrictRegistrationForm show={showForm} onClose={handleCloseForm} />}
//     </div>
//   );
// };

// export default DistrictPage;
















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import DistrictRegistrationForm from "../components/DistrictRegistrationForm"; // Importing the district registration form

// const DistrictPage = () => {
//   const { darkMode } = useDarkMode();
//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false); // Manage form visibility
//   const [formType, setFormType] = useState("district"); // Store the form type (district, branch, zone)

//   // Fetch districts, branches, and zones when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const districtResponse = await axios.get("http://localhost:5000/api/districts");
//         const branchResponse = await axios.get("http://localhost:5000/api/branches");
//         const zoneResponse = await axios.get("http://localhost:5000/api/zones");

//         setDistricts(districtResponse.data);
//         setBranches(branchResponse.data);
//         setZones(zoneResponse.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter districts based on the search term
//   const filteredDistricts = districts.filter((district) =>
//     district?.district_name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle the Add District button click
//   const handleAddDistrict = () => {
//     setFormType("district"); // Set the form type to district
//     setShowForm(true); // Show the form
//   };

//   // Close the form
//   const handleCloseForm = () => {
//     setShowForm(false); // Hide the form
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className={`flex mt-8 ml-[-50px] bg-[#242528] ${darkMode ? "dark" : "bg-gray-100"}`}>
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-4">
//           <div className={`px-6 py-4 ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//             <h1 className="text-2xl font-bold">District Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none "
//                 placeholder="Search districts"
//               />
//             </div>
//             {/* Add Button */}
//             <button
//               onClick={handleAddDistrict}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add</span>
//             </button>
//           </div>
//         </div>

//         {/* Table Section */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}>
//               <tr>
//                 <th className="px-6 py-3 text-left">NO</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDistricts?.map((district, index) => {
//                 // Find branches related to the current district
//                 const relatedBranches = branches.filter((branch) => branch?.district_id?._id === district?._id);

//                 return relatedBranches.map((branch) => {
//                   // Find the zones related to the current branch
//                   const relatedZones = zones.filter((zone) => zone?.branch_id?._id === branch?._id);

//                   return relatedZones.map((zone) => (
//                     <tr
//                       key={zone._id}
//                       className={`${darkMode ? "bg-[#242528] text-white hover:bg-gray-700" : "hover:bg-gray-50"}`}
//                     >
//                       {/* Index column */}
//                       <td className="px-6 py-4">{index + 1}</td>

//                       {/* District name */}
//                       <td className="px-6 py-4">{district.district_name}</td>

//                       {/* Branch name */}
//                       <td className="px-6 py-4">{branch.branch_name}</td>

//                       {/* Zone name */}
//                       <td className="px-6 py-4">{zone.zone_name}</td>

//                       {/* Action buttons */}
//                       <td className="px-6 py-4">
//                         <button className="text-blue-600 hover:text-blue-900"><FaEdit size={16} /></button>
//                         <button className="text-red-600 hover:text-red-900 ml-2"><FaTrashAlt size={16} /></button>
//                       </td>
//                     </tr>
//                   ));
//                 });
//               })}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className={`mt-4 flex justify-between items-center ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//           <div className="text-sm">
//             Showing 1 to {filteredDistricts.length} of {filteredDistricts.length} districts
//           </div>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Previous</button>
//             <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">1</button>
//             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Next</button>
//           </div>
//         </div>
//       </div>

//       {/* District Registration Form (Modal) */}
//       {showForm && <DistrictRegistrationForm show={showForm} onClose={handleCloseForm} />}
//     </div>
//   );
// };

// export default DistrictPage;



















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import DistrictRegistrationForm from "../components/DistrictRegistrationForm"; // Importing the district registration form

// const DistrictPage = () => {
//   const { darkMode } = useDarkMode();
//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false); // Manage form visibility
//   const [formType, setFormType] = useState("district"); // Store the form type (district, branch, zone)

//   // Fetch districts, branches, and zones when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const districtResponse = await axios.get("http://localhost:5000/api/districts");
//         const branchResponse = await axios.get("http://localhost:5000/api/branches");
//         const zoneResponse = await axios.get("http://localhost:5000/api/zones");

//         setDistricts(districtResponse.data);
//         setBranches(branchResponse.data);
//         setZones(zoneResponse.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter districts based on the search term
//   const filteredDistricts = districts.filter((district) =>
//     district?.district_name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Flatten the nested data for proper indexing
//   const flattenedData = [];

//   filteredDistricts.forEach((district) => {
//     const relatedBranches = branches.filter(
//       (branch) => branch?.district_id?._id === district._id
//     );
//     if (relatedBranches.length === 0) {
//       // District with no branches
//       flattenedData.push({ district, branch: null, zone: null });
//     } else {
//       relatedBranches.forEach((branch) => {
//         const relatedZones = zones.filter(
//           (zone) => zone?.branch_id?._id === branch._id
//         );
//         if (relatedZones.length === 0) {
//           // Branch with no zones
//           flattenedData.push({ district, branch, zone: null });
//         } else {
//           relatedZones.forEach((zone) => {
//             flattenedData.push({ district, branch, zone });
//           });
//         }
//       });
//     }
//   });

//   // Handle the Add District button click
//   const handleAddDistrict = () => {
//     setFormType("district"); // Set the form type to district
//     setShowForm(true); // Show the form
//   };

//   // Close the form
//   const handleCloseForm = () => {
//     setShowForm(false); // Hide the form
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className={`flex mt-8 ml-[-50px] bg-[#242528] ${darkMode ? "dark" : "bg-gray-100"}`}>
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-4">
//           <div className={`px-6 py-4 ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//             <h1 className="text-2xl font-bold">District Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none "
//                 placeholder="Search districts"
//               />
//             </div>
//             {/* Add Button */}
//             <button
//               onClick={handleAddDistrict}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add</span>
//             </button>
//           </div>
//         </div>

//         {/* Table Section */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}>
//               <tr>
//                 <th className="px-6 py-3 text-left">NO</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flattenedData.map(({ district, branch, zone }, index) => (
//                 <tr
//                   key={`${district._id}-${branch?._id || "no-branch"}-${zone?._id || "no-zone"}`}
//                   className={`${darkMode ? "bg-[#242528] text-white hover:bg-gray-700" : "hover:bg-gray-50"}`}
//                 >
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{district.district_name}</td>
//                   <td className="px-6 py-4">{branch ? branch.branch_name : "-"}</td>
//                   <td className="px-6 py-4">{zone ? zone.zone_name : "-"}</td>
//                   <td className="px-6 py-4">
//                     <button className="text-blue-600 hover:text-blue-900"><FaEdit size={16} /></button>
//                     <button className="text-red-600 hover:text-red-900 ml-2"><FaTrashAlt size={16} /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className={`mt-4 flex justify-between items-center ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//           <div className="text-sm">
//             Showing 1 to {flattenedData.length} of {flattenedData.length} districts
//           </div>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Previous</button>
//             <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">1</button>
//             <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">Next</button>
//           </div>
//         </div>
//       </div>

//       {/* District Registration Form (Modal) */}
//       {showForm && <DistrictRegistrationForm show={showForm} onClose={handleCloseForm} />}
//     </div>
//   );
// };

// export default DistrictPage;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";
// import SidebarNavbar from "../components/Sidebar";
// import DistrictRegistrationForm from "../components/DistrictRegistrationForm";
// import UpdateLocationForm from "../components/UpdateForm";  // Import your update form here

// const DistrictPage = () => {
//   const { darkMode } = useDarkMode();
//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Add modal state for add form
//   const [showAddForm, setShowAddForm] = useState(false);

//   // Update modal state for update form
//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const [editItem, setEditItem] = useState(null);   // item to edit

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [districtResponse, branchResponse, zoneResponse] = await Promise.all([
//           axios.get("http://localhost:5000/api/districts"),
//           axios.get("http://localhost:5000/api/branches"),
//           axios.get("http://localhost:5000/api/zones"),
//         ]);
//         setDistricts(districtResponse.data);
//         setBranches(branchResponse.data);
//         setZones(zoneResponse.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredDistricts = districts.filter((district) =>
//     district?.district_name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const flattenedData = [];
//   filteredDistricts.forEach((district) => {
//     const relatedBranches = branches.filter((branch) => branch?.district_id?._id === district._id);
//     if (relatedBranches.length === 0) {
//       flattenedData.push({ district, branch: null, zone: null });
//     } else {
//       relatedBranches.forEach((branch) => {
//         const relatedZones = zones.filter((zone) => zone?.branch_id?._id === branch._id);
//         if (relatedZones.length === 0) {
//           flattenedData.push({ district, branch, zone: null });
//         } else {
//           relatedZones.forEach((zone) => {
//             flattenedData.push({ district, branch, zone });
//           });
//         }
//       });
//     }
//   });

//   // Existing Add button handler (no changes)
//   const handleAddDistrict = () => {
//     setShowAddForm(true);
//   };

//   // Close add form
//   const handleCloseAddForm = () => {
//     setShowAddForm(false);
//   };

//   // Open update form on edit button click
//   const handleEdit = (item) => {
//     setEditItem(item);
//     setShowUpdateForm(true);
//   };

//   // Close update form
//   const handleCloseUpdateForm = () => {
//     setShowUpdateForm(false);
//     setEditItem(null);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className={`flex mt-8 ml-[-50px] bg-[#242528] ${darkMode ? "dark" : "bg-gray-100"}`}>
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header and search etc unchanged */}
//         <div className="flex justify-between items-center mb-4">
//           <div className={`px-6 py-4 ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
//             <h1 className="text-2xl font-bold">District Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none"
//                 placeholder="Search districts"
//               />
//             </div>
//             <button
//               onClick={handleAddDistrict}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add</span>
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50"}`}>
//               <tr>
//                 <th className="px-6 py-3 text-left">NO</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flattenedData.map(({ district, branch, zone }, index) => (
//                 <tr
//                   key={`${district._id}-${branch?._id || "no-branch"}-${zone?._id || "no-zone"}`}
//                   className={`${darkMode ? "bg-[#242528] text-white hover:bg-gray-700" : "hover:bg-gray-50"}`}
//                 >
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{district.district_name}</td>
//                   <td className="px-6 py-4">{branch ? branch.branch_name : "-"}</td>
//                   <td className="px-6 py-4">{zone ? zone.zone_name : "-"}</td>
//                   <td className="px-6 py-4 space-x-2">
//                     <button
//                       onClick={() => handleEdit(district)}
//                       className="text-blue-600 hover:text-blue-900"
//                       title="Edit District"
//                     >
//                       <FaEdit size={16} />
//                     </button>
//                     {/* You can add delete buttons similarly */}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal for adding */}
//       {showAddForm && <DistrictRegistrationForm show={showAddForm} onClose={handleCloseAddForm} />}

//       {/* Modal for updating */}
//       {showUpdateForm && (
//         <UpdateLocationForm show={showUpdateForm} onClose={handleCloseUpdateForm} editItem={editItem} />
//       )}
//     </div>
//   );
// };

// export default DistrictPage;















// // src/pages/DistrictPage.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";
// import SidebarNavbar from "../components/Sidebar";
// import UpdateLocationForm from "../components/UpdateLocationForm";

// const DistrictPage = () => {
//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const [editItem, setEditItem] = useState(null);

//   // Fetch all data
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const [districtRes, branchRes, zoneRes] = await Promise.all([
//         axios.get("http://localhost:5000/api/districts"),
//         axios.get("http://localhost:5000/api/branches"),
//         axios.get("http://localhost:5000/api/zones"),
//       ]);
//       setDistricts(districtRes.data);
//       setBranches(branchRes.data);
//       setZones(zoneRes.data);
//     } catch (err) {
//       alert("Failed to fetch data");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Flatten data for display
//   const filteredDistricts = districts.filter((d) =>
//     d.district_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const flattenedData = [];

//   filteredDistricts.forEach((district) => {
//     const relatedBranches = branches.filter(
//       (branch) => branch.district_id?._id === district._id
//     );
//     if (relatedBranches.length === 0) {
//       flattenedData.push({ district, branch: null, zone: null });
//     } else {
//       relatedBranches.forEach((branch) => {
//         const relatedZones = zones.filter((zone) => zone.branch_id?._id === branch._id);
//         if (relatedZones.length === 0) {
//           flattenedData.push({ district, branch, zone: null });
//         } else {
//           relatedZones.forEach((zone) => {
//             flattenedData.push({ district, branch, zone });
//           });
//         }
//       });
//     }
//   });

//   // Edit handlers for branch and zone - fetch full data with populated refs
//   const handleEditBranch = async (branchId) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/branches/${branchId}`);
//       setEditItem(res.data);
//       setShowUpdateForm(true);
//     } catch (err) {
//       alert("Failed to load branch data");
//     }
//   };

//   const handleEditZone = async (zoneId) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/zones/${zoneId}`);
//       setEditItem(res.data);
//       setShowUpdateForm(true);
//     } catch (err) {
//       alert("Failed to load zone data");
//     }
//   };

//   // Edit district (simplified, pass district directly)
//   const handleEditDistrict = (district) => {
//     setEditItem(district);
//     setShowUpdateForm(true);
//   };

//   // Delete handlers
//   const handleDelete = async (type, id) => {
//     if (!window.confirm("Are you sure you want to delete?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/${type}s/${id}`);
//       alert(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);
//       fetchData();
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="flex mt-8 ml-[-50px] bg-[#242528]">
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="px-6 py-4 bg-[#242528] text-white">
//             <h1 className="text-2xl font-bold">District Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none"
//                 placeholder="Search districts"
//               />
//             </div>
//             {/* Add Button (you can reuse or create add form similarly) */}
//             <button className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2">
//               <FaPlus size={16} />
//               <span>Add</span>
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead className="bg-gray-700 text-white">
//               <tr>
//                 <th className="px-6 py-3 text-left">NO</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flattenedData.map(({ district, branch, zone }, index) => (
//                 <tr
//                   key={`${district._id}-${branch?._id || "no-branch"}-${zone?._id || "no-zone"}`}
//                   className="bg-[#242528] text-white hover:bg-gray-700"
//                 >
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{district.district_name}</td>
//                   <td className="px-6 py-4">{branch ? branch.branch_name : "-"}</td>
//                   <td className="px-6 py-4">{zone ? zone.zone_name : "-"}</td>
//                   <td className="px-6 py-4 space-x-2">
//                     {zone ? (
//                       <>
//                         <button
//                           onClick={() => handleEditZone(zone._id)}
//                           className="text-blue-600 hover:text-blue-900"
//                           title="Edit Zone"
//                         >
//                           <FaEdit size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete("zone", zone._id)}
//                           className="text-red-600 hover:text-red-900"
//                           title="Delete Zone"
//                         >
//                           <FaTrashAlt size={16} />
//                         </button>
//                       </>
//                     ) : branch ? (
//                       <>
//                         <button
//                           onClick={() => handleEditBranch(branch._id)}
//                           className="text-blue-600 hover:text-blue-900"
//                           title="Edit Branch"
//                         >
//                           <FaEdit size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete("branch", branch._id)}
//                           className="text-red-600 hover:text-red-900"
//                           title="Delete Branch"
//                         >
//                           <FaTrashAlt size={16} />
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button
//                           onClick={() => handleEditDistrict(district)}
//                           className="text-blue-600 hover:text-blue-900"
//                           title="Edit District"
//                         >
//                           <FaEdit size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete("district", district._id)}
//                           className="text-red-600 hover:text-red-900"
//                           title="Delete District"
//                         >
//                           <FaTrashAlt size={16} />
//                         </button>
//                       </>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Update Location Form Modal */}
//       {showUpdateForm && (
//         <UpdateLocationForm
//           show={showUpdateForm}
//           onClose={() => {
//             setShowUpdateForm(false);
//             setEditItem(null);
//             fetchData();
//           }}
//           editItem={editItem}
//           refreshData={fetchData}
//         />
//       )}
//     </div>
//   );
// };

// export default DistrictPage;









// // src/pages/DistrictPage.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";
// import SidebarNavbar from "../components/Sidebar";
// import UpdateLocationForm from "../components/UpdateLocationForm";
// import DistrictRegistrationForm from "../components/DistrictRegistrationForm"; // import add form

// const DistrictPage = () => {
//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const [editItem, setEditItem] = useState(null);

//   // New: State to manage Add form visibility
//   const [showAddForm, setShowAddForm] = useState(false);

//   // Fetch all data
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const [districtRes, branchRes, zoneRes] = await Promise.all([
//         axios.get("http://localhost:5000/api/districts"),
//         axios.get("http://localhost:5000/api/branches"),
//         axios.get("http://localhost:5000/api/zones"),
//       ]);
//       setDistricts(districtRes.data);
//       setBranches(branchRes.data);
//       setZones(zoneRes.data);
//     } catch (err) {
//       alert("Failed to fetch data");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Flatten data for display
//   const filteredDistricts = districts.filter((d) =>
//     d.district_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const flattenedData = [];

//   filteredDistricts.forEach((district) => {
//     const relatedBranches = branches.filter(
//       (branch) => branch.district_id?._id === district._id
//     );
//     if (relatedBranches.length === 0) {
//       flattenedData.push({ district, branch: null, zone: null });
//     } else {
//       relatedBranches.forEach((branch) => {
//         const relatedZones = zones.filter((zone) => zone.branch_id?._id === branch._id);
//         if (relatedZones.length === 0) {
//           flattenedData.push({ district, branch, zone: null });
//         } else {
//           relatedZones.forEach((zone) => {
//             flattenedData.push({ district, branch, zone });
//           });
//         }
//       });
//     }
//   });

//   // Edit handlers for branch and zone - fetch full data with populated refs
//   const handleEditBranch = async (branchId) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/branches/${branchId}`);
//       setEditItem(res.data);
//       setShowUpdateForm(true);
//     } catch (err) {
//       alert("Failed to load branch data");
//     }
//   };

//   const handleEditZone = async (zoneId) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/zones/${zoneId}`);
//       setEditItem(res.data);
//       setShowUpdateForm(true);
//     } catch (err) {
//       alert("Failed to load zone data");
//     }
//   };

//   // Edit district (simplified, pass district directly)
//   const handleEditDistrict = (district) => {
//     setEditItem(district);
//     setShowUpdateForm(true);
//   };

//   // Delete handlers
//   const handleDelete = async (type, id) => {
//     if (!window.confirm("Are you sure you want to delete?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/${type}s/${id}`);
//       alert(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);
//       fetchData();
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   // New: Open add form modal
//   const handleAdd = () => {
//     setShowAddForm(true);
//   };

//   // New: Close add form modal and refresh data
//   const handleCloseAddForm = () => {
//     setShowAddForm(false);
//     fetchData();
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="flex mt-8 ml-[-50px] bg-[#242528]">
//       <SidebarNavbar />
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="px-6 py-4 bg-[#242528] text-white">
//             <h1 className="text-2xl font-bold">District Management</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2 border p-2 rounded-md">
//               <FaSearch size={18} />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-transparent outline-none"
//                 placeholder="Search districts"
//               />
//             </div>
//             {/* Add Button */}
//             <button
//               onClick={handleAdd}
//               className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
//             >
//               <FaPlus size={16} />
//               <span>Add</span>
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg shadow-lg">
//           <table className="min-w-full bg-white border-collapse text-sm">
//             <thead className="bg-gray-700 text-white">
//               <tr>
//                 <th className="px-6 py-3 text-left">NO</th>
//                 <th className="px-6 py-3 text-left">District</th>
//                 <th className="px-6 py-3 text-left">Branch</th>
//                 <th className="px-6 py-3 text-left">Zone</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flattenedData.map(({ district, branch, zone }, index) => (
//                 <tr
//                   key={`${district._id}-${branch?._id || "no-branch"}-${zone?._id || "no-zone"}`}
//                   className="bg-[#242528] text-white hover:bg-gray-700"
//                 >
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{district.district_name}</td>
//                   <td className="px-6 py-4">{branch ? branch.branch_name : "-"}</td>
//                   <td className="px-6 py-4">{zone ? zone.zone_name : "-"}</td>
//                   <td className="px-6 py-4 space-x-2">
//                     {zone ? (
//                       <>
//                         <button
//                           onClick={() => handleEditZone(zone._id)}
//                           className="text-blue-600 hover:text-blue-900"
//                           title="Edit Zone"
//                         >
//                           <FaEdit size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete("zone", zone._id)}
//                           className="text-red-600 hover:text-red-900"
//                           title="Delete Zone"
//                         >
//                           <FaTrashAlt size={16} />
//                         </button>
//                       </>
//                     ) : branch ? (
//                       <>
//                         <button
//                           onClick={() => handleEditBranch(branch._id)}
//                           className="text-blue-600 hover:text-blue-900"
//                           title="Edit Branch"
//                         >
//                           <FaEdit size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete("branch", branch._id)}
//                           className="text-red-600 hover:text-red-900"
//                           title="Delete Branch"
//                         >
//                           <FaTrashAlt size={16} />
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button
//                           onClick={() => handleEditDistrict(district)}
//                           className="text-blue-600 hover:text-blue-900"
//                           title="Edit District"
//                         >
//                           <FaEdit size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete("district", district._id)}
//                           className="text-red-600 hover:text-red-900"
//                           title="Delete District"
//                         >
//                           <FaTrashAlt size={16} />
//                         </button>
//                       </>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Update Location Form Modal */}
//       {showUpdateForm && (
//         <UpdateLocationForm
//           show={showUpdateForm}
//           onClose={() => {
//             setShowUpdateForm(false);
//             setEditItem(null);
//             fetchData();
//           }}
//           editItem={editItem}
//           refreshData={fetchData}
//         />
//       )}

//       {/* Add District Registration Form Modal */}
//       {showAddForm && (
//         <DistrictRegistrationForm
//           show={showAddForm}
//           onClose={handleCloseAddForm}
//         />
//       )}
//     </div>
//   );
// };

// export default DistrictPage;















// src/pages/DistrictPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDarkMode } from "../contexts/DarkModeContext"; // Make sure your context is properly set up
import SidebarNavbar from "../components/Sidebar";
import UpdateLocationForm from "../components/UpdateLocationForm";
import DistrictRegistrationForm from "../components/DistrictRegistrationForm";

const DistrictPage = () => {
  const { darkMode } = useDarkMode();

  const [districts, setDistricts] = useState([]);
  const [branches, setBranches] = useState([]);
  const [zones, setZones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [showAddForm, setShowAddForm] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [districtRes, branchRes, zoneRes] = await Promise.all([
        axios.get("http://localhost:5000/api/districts"),
        axios.get("http://localhost:5000/api/branches"),
        axios.get("http://localhost:5000/api/zones"),
      ]);
      setDistricts(districtRes.data);
      setBranches(branchRes.data);
      setZones(zoneRes.data);
    } catch (err) {
      alert("Failed to fetch data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter districts by search term
  const filteredDistricts = districts.filter((d) =>
    d.district_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Flatten data for display
  const flattenedData = [];

  filteredDistricts.forEach((district) => {
    const relatedBranches = branches.filter(
      (branch) => branch.district_id?._id === district._id
    );
    if (relatedBranches.length === 0) {
      flattenedData.push({ district, branch: null, zone: null });
    } else {
      relatedBranches.forEach((branch) => {
        const relatedZones = zones.filter((zone) => zone.branch_id?._id === branch._id);
        if (relatedZones.length === 0) {
          flattenedData.push({ district, branch, zone: null });
        } else {
          relatedZones.forEach((zone) => {
            flattenedData.push({ district, branch, zone });
          });
        }
      });
    }
  });

  const handleEditBranch = async (branchId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/branches/${branchId}`);
      setEditItem(res.data);
      setShowUpdateForm(true);
    } catch {
      alert("Failed to load branch data");
    }
  };

  const handleEditZone = async (zoneId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/zones/${zoneId}`);
      setEditItem(res.data);
      setShowUpdateForm(true);
    } catch {
      alert("Failed to load zone data");
    }
  };

  const handleEditDistrict = (district) => {
    setEditItem(district);
    setShowUpdateForm(true);
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/${type}s/${id}`);
      alert(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);
      fetchData();
    } catch {
      alert("Delete failed");
    }
  };

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
    fetchData();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={`flex mt-8 ml-[-50px] ${darkMode ? "bg-[#242528]" : "bg-gray-100"}`}>
      <SidebarNavbar />
      <div className={`flex-1 ml-6 mr-6 mt-16 overflow-auto`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className={`px-6 py-4 ${darkMode ? "bg-[#242528] text-white" : "bg-gray-100 text-gray-900"}`}>
            <h1 className="text-2xl font-bold">District Management</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 border p-2 rounded-md text-black ${darkMode ? "bg-[#242528] text-white" : "bg-white text-black"}`}>
              <FaSearch size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none"
                placeholder="Search districts"
              />
            </div>
            <button
              onClick={handleAdd}
              className="bg-[#0E0144] text-white px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <FaPlus size={16} />
              <span>Add</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className={`overflow-x-auto rounded-lg shadow-lg`}>
          <table className={`min-w-full ${darkMode ? "bg-[#242528] text-white" : "bg-white text-gray-900"} border-collapse text-sm`}>
            <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-900"}`}>
              <tr>
                <th className="px-6 py-3 text-left">NO</th>
                <th className="px-6 py-3 text-left">District</th>
                <th className="px-6 py-3 text-left">Branch</th>
                <th className="px-6 py-3 text-left">Zone</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {flattenedData.map(({ district, branch, zone }, index) => (
                <tr
                  key={`${district._id}-${branch?._id || "no-branch"}-${zone?._id || "no-zone"}`}
                  className={`${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{district.district_name}</td>
                  <td className="px-6 py-4">{branch ? branch.branch_name : "-"}</td>
                  <td className="px-6 py-4">{zone ? zone.zone_name : "-"}</td>
                  <td className="px-6 py-4 space-x-2">
                    {zone ? (
                      <>
                        <button
                          onClick={() => handleEditZone(zone._id)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit Zone"
                        >
                          <FaEdit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete("zone", zone._id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Zone"
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </>
                    ) : branch ? (
                      <>
                        <button
                          onClick={() => handleEditBranch(branch._id)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit Branch"
                        >
                          <FaEdit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete("branch", branch._id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Branch"
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditDistrict(district)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit District"
                        >
                          <FaEdit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete("district", district._id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete District"
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Location Form Modal */}
      {showUpdateForm && (
        <UpdateLocationForm
          show={showUpdateForm}
          onClose={() => {
            setShowUpdateForm(false);
            setEditItem(null);
            fetchData();
          }}
          editItem={editItem}
          refreshData={fetchData}
        />
      )}

      {/* Add District Registration Form Modal */}
      {showAddForm && (
        <DistrictRegistrationForm
          show={showAddForm}
          onClose={handleCloseAddForm}
          refreshData={fetchData}
        />
      )}
    </div>
  );
};

export default DistrictPage;
