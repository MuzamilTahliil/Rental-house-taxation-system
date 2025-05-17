// // import React, { useState } from "react";
// // import { FaEdit, FaTrashAlt } from "react-icons/fa";
// // import SidebarNavbar from "../components/Sidebar";

// // const UserTable = () => {
// //   const [users, setUsers] = useState([
// //     { id: 1, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
// //     { id: 2, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
// //     { id: 3, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
// //     { id: 4, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "InActive" },
// //     { id: 5, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
// //     { id: 6, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
// //     { id: 7, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
// //   ]);

// //   const toggleStatus = (id) => {
// //     setUsers(users.map(user => 
// //       user.id === id ? { 
// //         ...user, 
// //         status: user.status === "Active" ? "InActive" : "Active" 
// //       } : user
// //     ));
// //   };

// //   const handleDelete = (id) => {
// //     setUsers(users.filter(user => user.id !== id));
// //   };

// //   return (
// //     <div className="flex bg-gray-100 dark:bg-gray-900 ml-[-50px]">
// //       <SidebarNavbar />
      
// //       {/* Main Content Area - Adjusted for full width */}
// //       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
// //         {/* Table Container - Removed padding and full width */}
// //         <div className="w-full">
// //           {/* Table Header - Minimal styling */}
// //           <div className="px-6 py-4">
// //             <h1 className="text-xl font-bold text-gray-800 dark:text-white">User Management</h1>
// //           </div>

// //           {/* User Table - Full width with minimal padding */}
// //           <div className="overflow-x-auto w-full">
// //             <table className="w-full">
// //               <thead className="bg-gray-50 dark:bg-gray-700">
// //                 <tr>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">USER_ID</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">NAME</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">EMAIL</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">PASSWORD</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">ROLE</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">STATUS</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">ACTIONS</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
// //                 {users.map((user) => (
// //                   <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.id}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.name}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.email}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.password}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                       <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
// //                         user.role === "Admin" 
// //                           ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" 
// //                           : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
// //                       }`}>
// //                         {user.role}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                       <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
// //                         user.status === "Active" 
// //                           ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
// //                           : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
// //                       }`}>
// //                         {user.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                       <div className="flex space-x-2">
// //                         <button 
// //                           onClick={() => console.log("Edit", user.id)} 
// //                           className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
// //                           title="Edit"
// //                         >
// //                           <FaEdit size={16} />
// //                         </button>
// //                         <button 
// //                           onClick={() => handleDelete(user.id)} 
// //                           className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
// //                           title="Delete"
// //                         >
// //                           <FaTrashAlt size={16} />
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* Simplified Pagination */}
// //           <div className="px-6 py-4 flex items-center justify-between">
// //             <div className="text-sm text-gray-700 dark:text-gray-300">
// //               Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">7</span> users
// //             </div>
// //             <div className="flex space-x-2">
// //               <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500">
// //                 Previous
// //               </button>
// //               <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
// //                 1
// //               </button>
// //               <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500">
// //                 Next
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserTable;














// import React, { useState } from "react";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import SidebarNavbar from "../components/Sidebar";
// import { useDarkMode } from "../contexts/DarkModeContext";

// const UserTable = () => {
//   const { darkMode } = useDarkMode();
//   const [users, setUsers] = useState([
//     { id: 1, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
//     { id: 2, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
//     { id: 3, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
//     { id: 4, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "InActive" },
//     { id: 5, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
//     { id: 6, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
//     { id: 7, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
//   ]);

//   const toggleStatus = (id) => {
//     setUsers(users.map(user => 
//       user.id === id ? { 
//         ...user, 
//         status: user.status === "Active" ? "InActive" : "Active" 
//       } : user
//     ));
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <div className={`flex  mt-8  ml-[-50px] ${darkMode ? 'dark' : 'bg-gray-100'}`}>
//       <SidebarNavbar />
      
//       {/* Main Content Area */}
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Table Container */}
//         <div className={`w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm`}>
//           {/* Table Header */}
//           <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 ">
//             <h1 className="text-xl font-bold text-gray-800 dark:text-white">User Management</h1>
//           </div>

//           {/* User Table */}
//           <div className="overflow-x-auto w-full">
//             <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
//               <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">USER_ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">NAME</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">EMAIL</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">PASSWORD</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ROLE</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">STATUS</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody className={`${darkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'} divide-y`}>
//                 {users.map((user) => (
//                   <tr key={user.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{user.id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.email}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.password}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                         user.role === "Admin" 
//                           ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" 
//                           : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
//                       }`}>
//                         {user.role}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                         user.status === "Active" 
//                           ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
//                           : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
//                       }`}>
//                         {user.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <div className="flex space-x-2">
//                         <button 
//                           onClick={() => console.log("Edit", user.id)} 
//                           className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
//                           title="Edit"
//                         >
//                           <FaEdit size={16} />
//                         </button>
//                         <button 
//                           onClick={() => handleDelete(user.id)} 
//                           className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
//                           title="Delete"
//                         >
//                           <FaTrashAlt size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
//             <div className="text-sm text-gray-700 dark:text-gray-300">
//               Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">7</span> users
//             </div>
//             <div className="flex space-x-2">
//               <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500">
//                 Previous
//               </button>
//               <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
//                 1
//               </button>
//               <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserTable;














// import React, { useState } from "react";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import SidebarNavbar from "../components/Sidebar";
// import { useDarkMode } from "../contexts/DarkModeContext";

// const UserTable = () => {
//   const { darkMode } = useDarkMode();
//   const [users, setUsers] = useState([
//     { id: 1, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
//     { id: 2, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
//     { id: 3, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "Admin", status: "Active" },
//     { id: 4, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "InActive" },
//     { id: 5, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
//     { id: 6, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
//     { id: 7, name: "Yariisow", email: "Yariisow@gmail.com", password: "******", role: "User", status: "Active" },
//   ]);

//   const toggleStatus = (id) => {
//     setUsers(users.map(user => 
//       user.id === id ? { 
//         ...user, 
//         status: user.status === "Active" ? "InActive" : "Active" 
//       } : user
//     ));
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <div className={`flex mt-8 ml-[-50px] ${darkMode ? 'dark' : 'bg-gray-100'}`}>
//       <SidebarNavbar />

//       {/* Main Content Area */}
//       <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
//         {/* Table Container */}
//         <div className={`w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg`}>
//           {/* Table Header */}
//           <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
//             <h1 className="text-xl font-bold">User Management</h1>
//           </div>

//           {/* User Table */}
//           <div className="overflow-x-auto w-full">
//             <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
//               <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase">USER_ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase">NAME</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase">EMAIL</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase">PASSWORD</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase">ROLE</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase">STATUS</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-white'} divide-y`}>
//                 {users.map((user) => (
//                   <tr key={user.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
//                     <td className="px-6 py-4 text-sm">{user.id}</td>
//                     <td className="px-6 py-4 text-sm">{user.name}</td>
//                     <td className="px-6 py-4 text-sm">{user.email}</td>
//                     <td className="px-6 py-4 text-sm">{user.password}</td>
//                     <td className="px-6 py-4 text-sm">
//                       <span className={`px-2 py-1 text-xs font-semibold rounded-full ${user.role === "Admin" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}`}>
//                         {user.role}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-sm">
//                       <span className={`px-2 py-1 text-xs font-semibold rounded-full ${user.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`}>
//                         {user.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-sm">
//                       <div className="flex space-x-2">
//                         <button onClick={() => console.log("Edit", user.id)} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" title="Edit">
//                           <FaEdit size={16} />
//                         </button>
//                         <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300" title="Delete">
//                           <FaTrashAlt size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
//             <div className="text-sm">
//               Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">7</span> users
//             </div>
//             <div className="flex space-x-2">
//               <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500">
//                 Previous
//               </button>
//               <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
//                 1
//               </button>
//               <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserTable;











import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SidebarNavbar from "../components/Sidebar";
import { useDarkMode } from "../contexts/DarkModeContext";
import axios from 'axios';

const UserTable = () => {
  const { darkMode } = useDarkMode();
  const [users, setUsers] = useState([]); // Initialize users state as an empty array
  const [loading, setLoading] = useState(true); // To handle loading state

  // Fetch users from the server when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');  // Adjust the API route accordingly
        console.log(response.data);  // Debugging to check the response
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error("API response is not an array", response.data);
        }
      } catch (error) {
        console.error("Error fetching users", error);
      } finally {
        setLoading(false); // Stop loading once the request completes
      }
    };

    fetchUsers();
  }, []);

  const toggleStatus = (id) => {
    setUsers(users.map(user => 
      user._id === id ? { 
        ...user, 
        status: user.status === "Active" ? "InActive" : "Active" 
      } : user
    ));
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user._id !== id));
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div className={`flex mt-8 ml-[-50px] bg-[#242528] ${darkMode ? 'dark' : 'bg-gray-100'}`}>
      <SidebarNavbar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-6 mr-6 mt-16 overflow-auto">
        <div className={`px-6 py-4 ${darkMode ? 'bg-[#242528] text-white' : 'bg-gray-100 text-gray-900'}`}>
            <h1 className="text-xl font-bold">User Management</h1>
          </div>
        {/* Table Container */}
        <div className={`overflow-x-auto rounded-lg shadow-lg`}>
          {/* Table Header */}
          

          {/* User Table */}
          <div className={`overflow-x-auto rounded-lg shadow-lg`}>
            <table className={`min-w-full ${darkMode ? "bg-[#242528] text-white" : "bg-white text-gray-900"} border-collapse text-sm`}>
              <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-900"}`}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">User ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Password</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">District</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-[#242528]' : 'bg-white'} `}>
                {users.map((user) => (
                  <tr key={user._id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <td className="px-6 py-4 text-sm">{user.firstName}</td>
                    <td className="px-6 py-4 text-sm"> {user.lastName}</td>
                    <td className="px-6 py-4 text-sm">{user.email}</td>
                    <td className="px-6 py-4 text-sm">{user.password}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${user.role === "Admin" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{user.district}</td>
                    {/* <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${user.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`}>
                        {user.status}
                      </span>
                    </td> */}
                    <td className="px-6 py-4 text-sm">
                      <div className="flex space-x-2">
                        <button onClick={() => console.log("Edit", user._id)} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" title="Edit">
                          <FaEdit size={16} />
                        </button>
                        <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300" title="Delete">
                          <FaTrashAlt size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="text-sm">
              Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">7</span> users
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500">
                Previous
              </button>
              <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
                1
              </button>
              <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500">
                Next
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default UserTable;







