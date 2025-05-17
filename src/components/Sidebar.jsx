// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { NavLink } from 'react-router-dom';
// // import { FaHome, FaUsers, FaUser, FaClipboard, FaChartBar, FaRegBell, FaComments, FaSignOutAlt, FaChevronDown, FaMoon, FaSun, FaUserCircle, FaBell } from "react-icons/fa";
// // import { useDarkMode } from "../contexts/DarkModeContext";

// // const SidebarNavbar = () => {
// //   const { darkMode, toggleDarkMode } = useDarkMode();
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// //   const [showHamburger, setShowHamburger] = useState(true);
// //   const user = { name: "Ahmed", image: "user.jpeg" };

// //   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //     setShowHamburger(!showHamburger);
// //   };

// //   const handleLogout = () => {
// //     console.log("Logged out");
// //   };

// //   return (
// //     <div className={`flex divide-x divide-gray-200 `}>
// //       {/* Sidebar */}
// //       <div
// //         className={`fixed left-0 top-0 h-full divide-y divide-gray-90 ${isSidebarOpen ? 'w-64' : 'w-20'} ${darkMode ? 'bg-[#242528]' : 'bg-white'} shadow-lg z-10 transition-all duration-300 mr-0`}
// //       >
// //         {/* Logo */}
// //         <div className="flex items-center justify-center p-4 h-24">
// //           {isSidebarOpen ? (
// //             <img 
// //               src="/logo3.png" 
// //               alt="Q4T Revital House" 
// //               className="h-25 object-contain w-[900rem]" 
// //             />
// //           ) : (
// //             <img 
// //               src="/logo-icon.png" 
// //               alt="Q4T" 
// //               className="h-16 object-contain max-w-full" 
// //             />
// //           )}
// //         </div>

// //         {/* Sidebar Hamburger (visible when sidebar is closed) */}
// //         {!isSidebarOpen && (
// //           <div className="flex justify-center p-3">
// //             <button 
// //               onClick={toggleSidebar}
// //               className={` rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
// //             >
// //               <div className="flex flex-col space-y-1">
// //                 <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                 <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                 <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                 <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //               </div>
// //             </button>
// //           </div>
// //         )}

// //         {/* Navigation Menu */}
        

// // <ul className="mt-2">
// //   <li className={`${isSidebarOpen} ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1'`}>
// //     <NavLink
// //       to="/dashboard"
// //       className={`flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
// //         'text-white hover:bg-white hover:text-black' : 
// //         'text-gray-900 hover:bg-gray-900 hover:text-white'} 
// //         ${({ isActive }) => (isActive ? 'bg-blue-500' : '')}`}
// //     >
// //       <FaHome size={20} className="flex-shrink-0" />
// //       {isSidebarOpen && <span className="ml-3 text-base font-medium">Dashboard</span>}
// //     </NavLink>
// //   </li>

// //   {[ 
// //     { icon: <FaUsers size={20} />, text: "Users", path: "/users" },
// //     { icon: <FaUser size={20} />, text: "Citizens", path: "/citizens" },
// //     { icon: <FaClipboard size={20} />, text: "District", path: "/districts" },
// //     { icon: <FaChartBar size={20} />, text: "Transactions", path: "/transactions" },
// //     { icon: <FaRegBell size={20} />, text: "Report", path: "/report" },
// //     { icon: <FaChartBar size={20} />, text: "Prediction", path: "/prediction" },
// //     { icon: <FaComments size={20} />, text: "Messages", path: "/messages" },
// //   ].map((item, index) => (
// //     <li key={index} className="mx-2 my-1 mr-12">
// //       <NavLink
// //         to={item.path}
// //         className={`flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
// //           'text-white hover:bg-white hover:text-black' : 
// //           'text-gray-900 hover:bg-gray-900 hover:text-white'} 
// //           ${({ isActive }) => (isActive ? 'bg-blue-500' : '')}`}
// //       >
// //         <span className="flex-shrink-0">{item.icon}</span>
// //         {isSidebarOpen && <span className="ml-3 text-base font-medium">{item.text}</span>}
// //       </NavLink>
// //     </li>
// //   ))}

// //   {/* Log Out */}
// //   <li className="mx-2 mt-8 mb-1 mr-12">
// //     <NavLink
// //       to="/"
// //       className={`flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
// //         'text-white hover:bg-white hover:text-black' : 
// //         'text-gray-900 hover:bg-gray-900 hover:text-white'} 
// //         ${({ isActive }) => (isActive ? 'bg-blue-500' : '')}`}
// //     >
// //       <FaSignOutAlt size={20} className="flex-shrink-0" />
// //       {isSidebarOpen && <span className="ml-3 text-base font-medium">Log Out</span>}
// //     </NavLink>
// //   </li>
// // </ul>

// //       </div>

// //       {/* Main Content Area */}
// //       <div
// //         className="flex-1 transition-all duration-300 divide-y divide-gray-200"
// //         style={{ marginLeft: isSidebarOpen ? '16rem' : '5rem' }}
// //       >
// //         {/* Navbar */}
// //         <div className={`flex justify-between items-center p-4 ${darkMode ? 'bg-[#242528] text-white' : 'bg-white text-gray-900'} shadow-sm fixed top-0 right-0 z-10`} 
// //           style={{ width: `calc(100% - ${isSidebarOpen ? '16rem' : '5rem'})`, left: isSidebarOpen ? '16rem' : '5rem' }}>
          
// //           {/* Left side - Hamburger or empty space */}
// //           <div className="w-8"> 
// //             {showHamburger && (
// //               <button onClick={toggleSidebar} className={`p-1 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
// //                 <div className="flex flex-col space-y-1">
// //                   <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                   <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                   <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                   <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                 </div>
// //               </button>
// //             )}
// //           </div>

// //           {/* Right Side Controls */}
// //           <div className="flex items-center space-x-4 mr-4">
// //             {/* Dark Mode Toggle */}
// //             <div className="flex items-center space-x-4 mr-4">
// //             <button onClick={toggleDarkMode} className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`} aria-label="Toggle dark mode">
// //               <span className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}>
// //                 {/* Sun Icon (Light) */}
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 text-yellow-500 absolute transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
// //                   <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
// //                 </svg>
// //                 {/* Moon Icon (Dark) */}
// //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 text-gray-600 absolute transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
// //                   <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
// //                 </svg>
// //               </span>
// //             </button>
// //           </div>

// //             {/* Notification Bell */}
// //             <button className={`relative p-2 rounded-full ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}>
// //               <FaBell size={20} />
// //               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
// //             </button>

// //             {/* User Dropdown */}
// //             <div className="relative flex items-center space-x-2">
// //               <button 
// //                 className={`flex items-center space-x-2 p-1 rounded-full ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}
// //                 onClick={toggleDropdown}
// //               >
// //                 {user.image ? (
// //                   <img src={user.image} alt="User" className="w-8 h-8 rounded-full" />
// //                 ) : (
// //                   <FaUserCircle size={22} />
// //                 )}
// //                 <span>{user.name}</span>
// //                 <FaChevronDown size={12} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
// //               </button>

// //               {dropdownOpen && (
// //                 <div className={`absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-[#242528]' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} z-20`}>
// //                   <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Profile</button>
// //                   <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Settings</button>
// //                   <button onClick={handleLogout} className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Log Out</button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className={`p-6 mt-16 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
// //           {/* Your content goes here */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SidebarNavbar;






// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import { FaHome, FaUsers, FaUser, FaClipboard, FaChartBar, FaRegBell, FaComments, FaSignOutAlt, FaChevronDown, FaUserCircle, FaBell } from "react-icons/fa";
// // import { useDarkMode } from "../contexts/DarkModeContext";

// // const SidebarNavbar = () => {
// //   const { darkMode, toggleDarkMode } = useDarkMode();
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// //   const [showHamburger, setShowHamburger] = useState(true);
// //   const user = { name: "Ahmed", image: "user.jpeg" };

// //   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //     setShowHamburger(!showHamburger);
// //   };

// //   const handleLogout = () => {
// //     console.log("Logged out");
// //   };

// //   return (
// //     <div className={`flex divide-x divide-gray-200 `}>
// //       {/* Sidebar */}
// //       <div
// //         className={`fixed left-0 top-0 h-full divide-y divide-gray-90 ${isSidebarOpen ? 'w-64' : 'w-20'} ${darkMode ? 'bg-[#242528]' : 'bg-white'} shadow-lg z-10 transition-all duration-300 mr-0`}
// //       >
// //         {/* Logo */}
// //         <div className="flex items-center justify-center p-4 h-24">
// //           {isSidebarOpen ? (
// //             <img 
// //               src="/logo3.png" 
// //               alt="Q4T Revital House" 
// //               className="h-25 object-contain w-[900rem]" 
// //             />
// //           ) : (
// //             <img 
// //               src="/logo-icon.png" 
// //               alt="Q4T" 
// //               className="h-16 object-contain max-w-full" 
// //             />
// //           )}
// //         </div>

// //         {/* Sidebar Hamburger (visible when sidebar is closed) */}
// //         {!isSidebarOpen && (
// //           <div className="flex justify-center p-3">
// //             <button 
// //               onClick={toggleSidebar}
// //               className={` rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
// //             >
// //               <div className="flex flex-col space-y-1">
// //                 <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                 <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                 <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                 <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //               </div>
// //             </button>
// //           </div>
// //         )}

// //         {/* Navigation Menu */}
// //         <ul className="mt-2">
// //           <li className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
// //             <NavLink
// //               to="/dashboard"
// //               className={`flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
// //                 'text-white hover:bg-white hover:text-black' : 
// //                 'text-gray-900 hover:bg-gray-900 hover:text-white'} 
// //                 ${({ isActive }) => (isActive ? 'bg-blue-500' : '')}`}
// //             >
// //               <FaHome size={20} className="flex-shrink-0" />
// //               {isSidebarOpen && <span className="ml-3 text-base font-medium">Dashboard</span>}
// //             </NavLink>
// //           </li>

// //           {[ 
// //             { icon: <FaUsers size={20} />, text: "Users", path: "/users" },
// //             { icon: <FaUser size={20} />, text: "Citizens", path: "/citizens" },
// //             { icon: <FaClipboard size={20} />, text: "District", path: "/districts" },
// //             { icon: <FaChartBar size={20} />, text: "Transactions", path: "/transactions" },
// //             { icon: <FaRegBell size={20} />, text: "Report", path: "/report" },
// //             { icon: <FaChartBar size={20} />, text: "Prediction", path: "/prediction" },
// //             { icon: <FaComments size={20} />, text: "Messages", path: "/messages" },
// //           ].map((item, index) => (
// //             <li key={index} className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
// //               <NavLink
// //                 to={item.path}
// //                 className={`flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
// //                   'text-white hover:bg-white hover:text-black' : 
// //                   'text-gray-900 hover:bg-gray-900 hover:text-white'} 
// //                   ${({ isActive }) => (isActive ? 'bg-blue-500' : '')}`}
// //               >
// //                 <span className="flex-shrink-0">{item.icon}</span>
// //                 {isSidebarOpen && <span className="ml-3 text-base font-medium">{item.text}</span>}
// //               </NavLink>
// //             </li>
// //           ))}

// //           {/* Log Out */}
// //           <li className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
// //             <NavLink
// //               to="/"
// //               className={`flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
// //                 'text-white hover:bg-white hover:text-black' : 
// //                 'text-gray-900 hover:bg-gray-900 hover:text-white'} 
// //                 ${({ isActive }) => (isActive ? 'bg-blue-500' : '')}`}
// //             >
// //               <FaSignOutAlt size={20} className="flex-shrink-0" />
// //               {isSidebarOpen && <span className="ml-3 text-base font-medium">Log Out</span>}
// //             </NavLink>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Main Content Area */}
// //       <div
// //         className={`flex-1 transition-all duration-300 divide-y divide-gray-200`}
// //         style={{ marginLeft: isSidebarOpen ? '16rem' : '5rem' }} // Adjust margin based on sidebar state
// //       >
// //         {/* Navbar */}
// //         <div className={`flex justify-between items-center p-4 ${darkMode ? 'bg-[#242528] text-white' : 'bg-white text-gray-900'} shadow-sm fixed top-0 right-0 z-10`} 
// //           style={{ width: `calc(100% - ${isSidebarOpen ? '16rem' : '5rem'})`, left: isSidebarOpen ? '16rem' : '5rem' }}>
          
// //           {/* Left side - Hamburger or empty space */}
// //           <div className="w-8"> 
// //             {showHamburger && (
// //               <button onClick={toggleSidebar} className={`p-1 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
// //                 <div className="flex flex-col space-y-1">
// //                   <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                   <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                   <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                   <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
// //                 </div>
// //               </button>
// //             )}
// //           </div>

// //           {/* Right Side Controls */}
// //           <div className="flex items-center space-x-4 mr-4">
// //             {/* Dark Mode Toggle */}
// //             <div className="flex items-center space-x-4 mr-4">
// //               <button onClick={toggleDarkMode} className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`} aria-label="Toggle dark mode">
// //                 <span className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}>
// //                   {/* Sun Icon (Light) */}
// //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 text-yellow-500 absolute transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
// //                     <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
// //                   </svg>
// //                   {/* Moon Icon (Dark) */}
// //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 text-gray-600 absolute transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
// //                     <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
// //                   </svg>
// //                 </span>
// //               </button>
// //             </div>

// //             {/* Notification Bell */}
// //             <button className={`relative p-2 rounded-full ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}>
// //               <FaBell size={20} />
// //               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
// //             </button>

// //             {/* User Dropdown */}
// //             <div className="relative flex items-center space-x-2">
// //               <button 
// //                 className={`flex items-center space-x-2 p-1 rounded-full ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}
// //                 onClick={toggleDropdown}
// //               >
// //                 {user.image ? (
// //                   <img src={user.image} alt="User" className="w-8 h-8 rounded-full" />
// //                 ) : (
// //                   <FaUserCircle size={22} />
// //                 )}
// //                 <span>{user.name}</span>
// //                 <FaChevronDown size={12} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
// //               </button>

// //               {dropdownOpen && (
// //                 <div className={`absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-[#242528]' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} z-20`}>
// //                   <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Profile</button>
// //                   <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Settings</button>
// //                   <button onClick={handleLogout} className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Log Out</button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className={`p-6 mt-16 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
// //           {/* Your content goes here */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SidebarNavbar;













// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaHome, FaUsers, FaUser, FaClipboard, FaChartBar, FaRegBell, FaComments, FaSignOutAlt, FaChevronDown, FaUserCircle, FaBell } from "react-icons/fa";
// import { useDarkMode } from "../contexts/DarkModeContext";

// const SidebarNavbar = () => {
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [showHamburger, setShowHamburger] = useState(true);
//   const user = { name: "Ahmed", image: "user.jpeg" };

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     setShowHamburger(!showHamburger);
//   };

//   const handleLogout = () => {
//     console.log("Logged out");
//   };

//   return (
//     <div className={`flex divide-x divide-gray-200`}>
//       {/* Sidebar */}
//       <div
//         className={`fixed left-0 top-0 h-full divide-y divide-gray-90 ${isSidebarOpen ? 'w-64' : 'w-20'} ${darkMode ? 'bg-[#242528]' : 'bg-white'} shadow-lg z-10 transition-all duration-300 mr-0`}
//       >
//         {/* Logo */}
//         <div className="flex items-center justify-center p-4 h-24">
//           {isSidebarOpen ? (
//             <img
//               src="/logo3.png"
//               alt="Q4T Revital House"
//               className="h-25 object-contain w-[900rem]"
//             />
//           ) : (
//             <img
//               src="/logo-icon.png"
//               alt="Q4T"
//               className="h-16 object-contain max-w-full"
//             />
//           )}
//         </div>

//         {/* Sidebar Hamburger (visible when sidebar is closed) */}
//         {!isSidebarOpen && (
//           <div className="flex justify-center p-3">
//             <button
//               onClick={toggleSidebar}
//               className={` rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
//             >
//               <div className="flex flex-col space-y-1">
//                 <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
//                 <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
//                 <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
//                 <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
//               </div>
//             </button>
//           </div>
//         )}

//         {/* Navigation Menu */}
//         <ul className="mt-2">
//           <li className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
//             <NavLink
//               to="/dashboard"
//               className={({ isActive }) => 
//                 `flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
//                 'text-white hover:bg-white hover:text-black' : 
//                 'text-gray-900 hover:bg-gray-900 hover:text-white'} 
//                 ${isActive ? 'bg-blue-500 text-white' : ''}`
//               }
//             >
//               <FaHome size={20} className="flex-shrink-0" />
//               {isSidebarOpen && <span className="ml-3 text-base font-medium">Dashboard</span>}
//             </NavLink>
//           </li>

//           {[ 
//             { icon: <FaUsers size={20} />, text: "Users", path: "/users" },
//             { icon: <FaUser size={20} />, text: "Citizens", path: "/citizens" },
//             { icon: <FaClipboard size={20} />, text: "District", path: "/districts" },
//             { icon: <FaChartBar size={20} />, text: "Transactions", path: "/transactions" },
//             { icon: <FaRegBell size={20} />, text: "Report", path: "/report" },
//             { icon: <FaChartBar size={20} />, text: "Prediction", path: "/prediction" },
//             { icon: <FaComments size={20} />, text: "Messages", path: "/messages" },
//           ].map((item, index) => (
//             <li key={index} className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) => 
//                   `flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
//                   'text-white hover:bg-white hover:text-black' : 
//                   'text-gray-900 hover:bg-gray-900 hover:text-white'} 
//                   ${isActive ? 'bg-gray-900 text-white' : 'bg-white text-black'}`
//                 }
//               >
//                 <span className="flex-shrink-0">{item.icon}</span>
//                 {isSidebarOpen && <span className="ml-3 text-base font-medium">{item.text}</span>}
//               </NavLink>
//             </li>
//           ))}

//           {/* Log Out */}
//           <li className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
//             <NavLink
//               to="/"
//               className={({ isActive }) => 
//                 `flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
//                 'text-white hover:bg-white hover:text-black' : 
//                 'text-gray-900 hover:bg-gray-900 hover:text-white'} 
//                 ${isActive ? 'bg-blue-500 text-white' : ''}`
//               }
//             >
//               <FaSignOutAlt size={20} className="flex-shrink-0" />
//               {isSidebarOpen && <span className="ml-3 text-base font-medium">Log Out</span>}
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content Area */}
//       <div
//         className={`flex-1 transition-all duration-300 divide-y divide-gray-200`}
//         style={{ marginLeft: isSidebarOpen ? '16rem' : '5rem' }} // Adjust margin based on sidebar state
//       >
//         {/* Navbar */}
//         <div className={`flex justify-between items-center p-4 ${darkMode ? 'bg-[#242528] text-white' : 'bg-white text-gray-900'} shadow-sm fixed top-0 right-0 z-10`} 
//           style={{ width: `calc(100% - ${isSidebarOpen ? '16rem' : '5rem'})`, left: isSidebarOpen ? '16rem' : '5rem' }}>
          
//           {/* Left side - Hamburger or empty space */}
//           <div className="w-8"> 
//             {showHamburger && (
//               <button onClick={toggleSidebar} className={`p-1 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
//                 <div className="flex flex-col space-y-1">
//                   <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
//                   <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
//                   <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
//                   <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
//                 </div>
//               </button>
//             )}
//           </div>

//           {/* Right Side Controls */}
//           <div className="flex items-center space-x-4 mr-4">
//             {/* Dark Mode Toggle */}
//             <div className="flex items-center space-x-4 mr-4">
//               <button onClick={toggleDarkMode} className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`} aria-label="Toggle dark mode">
//                 <span className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
//               </button>
//             </div>

//             {/* Notification Bell */}
//             <button className={`relative p-2 rounded-full ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}>
//               <FaBell size={20} />
//               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
//             </button>

//             {/* User Dropdown */}
//             <div className="relative flex items-center space-x-2">
//               <button 
//                 className={`flex items-center space-x-2 p-1 rounded-full ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}
//                 onClick={toggleDropdown}
//               >
//                 {user.image ? (
//                   <img src={user.image} alt="User" className="w-8 h-8 rounded-full" />
//                 ) : (
//                   <FaUserCircle size={22} />
//                 )}
//                 <span>{user.name}</span>
//                 <FaChevronDown size={12} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
//               </button>

//               {dropdownOpen && (
//                 <div className={`absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-[#242528]' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} z-20`}>
//                   <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Profile</button>
//                   <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Settings</button>
//                   <button onClick={handleLogout} className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Log Out</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className={`p-6 mt-16 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
//           {/* Your content goes here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarNavbar;












import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaUser, FaClipboard, FaChartBar, FaRegBell, FaComments, FaSignOutAlt, FaChevronDown, FaUserCircle, FaBell } from "react-icons/fa";
import { useDarkMode } from "../contexts/DarkModeContext";

const SidebarNavbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showHamburger, setShowHamburger] = useState(true);
  const user = { name: "Ahmed", image: "user.jpeg" };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // setShowHamburger(!showHamburger);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div className={`flex divide-x divide-gray-200`}>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full divide-y divide-gray-90 ${isSidebarOpen ? 'w-64' : 'w-20'} ${darkMode ? 'bg-[#242528]' : 'bg-white'} shadow-lg z-10 transition-all duration-300 mr-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 h-24">
          {isSidebarOpen ? (
            <img
              src="/logo3.png"
              alt="Q4T Revital House"
              className="h-25 object-contain w-[900rem]"
            />
          ) : (
            <img
              src="/logo-icon.png"
              alt="Q4T"
              className="h-16 object-contain max-w-full"
            />
          )}
        </div>

        {/* Sidebar Hamburger (visible when sidebar is closed) */}
        {/* {!isSidebarOpen && (
          <div className="flex justify-center p-3">
            <button
              onClick={toggleSidebar}
              className={` rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <div className="flex flex-col space-y-1">
                <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
                <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
                <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
                <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
              </div>
            </button>
          </div>
        )} */}

        {/* Navigation Menu */}
        <ul className="mt-2">
          <li className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
                'text-white hover:bg-black hover:text-white' : 
                'text-gray-900 hover:bg-gray-900 hover:text-white'} 
                ${isActive ? (darkMode ? 'bg-black text-black' : 'bg-white text-black') : ''}`
              }
            >
              <FaHome size={20} className="flex-shrink-0" />
              {isSidebarOpen && <span className="ml-3 text-base font-medium">Dashboard</span>}
            </NavLink>
          </li>

          {[ 
            { icon: <FaUsers size={20} />, text: "Users", path: "/users" },
            { icon: <FaUser size={20} />, text: "Citizens", path: "/citizens" },
            { icon: <FaClipboard size={20} />, text: "District", path: "/districts" },
            { icon: <FaChartBar size={20} />, text: "Transactions", path: "/transactions" },
            { icon: <FaRegBell size={20} />, text: "Report", path: "/report" },
            { icon: <FaChartBar size={20} />, text: "Prediction", path: "/prediction" },
            { icon: <FaComments size={20} />, text: "Messages", path: "/messages" },
          ].map((item, index) => (
            <li key={index} className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
                  'text-white hover:bg-black hover:text-white' : 
                  'text-gray-900 hover:bg-gray-900 hover:text-white'} 
                  ${isActive ? (darkMode ? 'bg-black text-black' : 'bg-gray-900 text-white') : ''}`
                }
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {isSidebarOpen && <span className="ml-3 text-base font-medium">{item.text}</span>}
              </NavLink>
            </li>
          ))}

          {/* Log Out */}
          <li className={`${isSidebarOpen ? ' mr-12 : mx-2 mb-1 mr-4' : 'mx-2 mb-1 mr-5'}`}>
            <NavLink
              to="/"
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-lg transition-colors ${darkMode ? 
                'text-white hover:bg-black hover:text-white' : 
                'text-gray-900 hover:bg-gray-900 hover:text-white'} 
                ${isActive ? (darkMode ? 'bg-black text-black' : 'bg-white text-black') : ''}`
              }
            >
              <FaSignOutAlt size={20} className="flex-shrink-0" />
              {isSidebarOpen && <span className="ml-3 text-base font-medium">Log Out</span>}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 divide-y divide-gray-200`}
        style={{ marginLeft: isSidebarOpen ? '16rem' : '5rem' }} // Adjust margin based on sidebar state
      >
        {/* Navbar */}
        <div className={`flex justify-between items-center p-4 ${darkMode ? 'bg-[#242528] text-white' : 'bg-white text-gray-900'} shadow-sm fixed top-0 right-0 z-10`} 
          style={{ width: `calc(100% - ${isSidebarOpen ? '16rem' : '5rem'})`, left: isSidebarOpen ? '16rem' : '5rem' }}>
          
          {/* Left side - Hamburger or empty space */}
          <div className="w-8"> 
            {showHamburger && (
              <button onClick={toggleSidebar} className={`p-1 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <div className="flex flex-col space-y-1">
                  <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
                  <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
                  <div className={`w-4 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
                  <div className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
                </div>
              </button>
            )}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4 mr-4">
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-4 mr-4">
              <button onClick={toggleDarkMode} className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`} aria-label="Toggle dark mode">
                <span className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Notification Bell */}
            <button className={`relative p-2 rounded-full ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}>
              <FaBell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Dropdown */}
            <div className="relative flex items-center space-x-2">
              <button 
                className={`flex items-center space-x-2 p-1 rounded-full ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white'}`}
                onClick={toggleDropdown}
              >
                {user.image ? (
                  <img src={user.image} alt="User" className="w-8 h-8 rounded-full" />
                ) : (
                  <FaUserCircle size={22} />
                )}
                <span>{user.name}</span>
                <FaChevronDown size={12} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className={`absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-[#242528]' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} z-20`}>
                  <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Profile</button>
                  <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Settings</button>
                  <button onClick={handleLogout} className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-white hover:bg-white hover:text-black' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}>Log Out</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`p-6 mt-16 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          {/* Your content goes here */}
        </div>
      </div>
    </div>
  );
};

export default SidebarNavbar;
