// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing eye icons
// import axios from "axios"; // Ensure axios is imported

// const AdminSignup = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "admin", // Default role to admin
//   });

//   const [showPassword, setShowPassword] = useState(false); // For toggling password visibility

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle password visibility toggle
//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/citizens/create",
//         formData
//       );
//       console.log("User created:", response.data);
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-white justify-center items-center ">
//       {/* Container with the image and form inside the same box */}
//       <div className="flex w-full sm:w-[1000px] md:w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Left side with the image */}
//         <div className="flex-1">
//           <img
//             src="signup.png" // Placeholder for house image
//             alt="House"
//             className="w-full h-[700px] object-cover" // Adjusted the height of the image to ensure the image is fully visible
//           />
//         </div>

//         {/* Right side with the form */}
//         <div className="flex items-center justify-center w-[450px] p-8">
//           <div className="w-full">
//             {/* Title with margin-top for spacing */}
//             <h2 className="text-3xl font-bold text-left text-black ">
//               Welcome!
//             </h2>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-6 mt-13">
//               {/* Email Field */}
//               <input
//                 type="name"
//                 name="farst_name"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Farst Name"
//                 className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                 required
//               />
//               <input
//                 type="name"
//                 name="last_name"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Last name"
//                 className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Email"
//                 className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                 required
//               />

//               {/* Password Field with Eye Icon */}
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Password"
//                   className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                   required
//                 />
//                 <span
//                   onClick={togglePasswordVisibility}
//                   className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
//                 >
//                   {showPassword ? (
//                     <AiOutlineEyeInvisible size={20} />
//                   ) : (
//                     <AiOutlineEye size={20} />
//                   )}
//                 </span>
//               </div>

//               {/* Role Select Dropdown */}
//               <div className="relative">
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 pl-4 pr-10 appearance-none"
//                   required
//                 >
//                   <option value="admin">Admin</option>
//                   <option value="user">User</option>
//                 </select>

//                 <span className="absolute top-1/2 right-4 transform -translate-y-1/2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-caret-down-fill"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M3 4l5 5 5-5H3z" />
//                   </svg>
//                 </span>
//               </div>

//               {/* Sign-Up Button */}
//               <button
//                 type="submit"
//                 className="w-[200px] py-3 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300 mt-4"
//               >
//                 Sign Up
//               </button>

//               {/* "Already have an account" text */}
//               <div className="text-center mt-4">
//                 <p>
//                   Already have an account?{" "}
//                   <a href="/signin" className="text-indigo-600">Login</a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSignup;


// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing eye icons
// import axios from "axios"; // Ensure axios is imported
// import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirect

// const AdminSignup = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     role: "admin", // Default role to admin
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState(""); // For success or error messages
//   const navigate = useNavigate(); // Hook for navigating to another page

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   // Send form data to the backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/admin/register", // URL to your backend
//         formData
//       );
//       console.log("User created:", response.data);
//       // Show success message
//       setMessage("User created successfully! Redirecting to login...");
//       // After 2 seconds, redirect to the sign-in page
//       setTimeout(() => {
//         navigate("/signin");
//       }, 2000); // 2 seconds delay for the message to be visible
//     } catch (error) {
//       console.error("Error creating user:", error);
//       setMessage("Error creating user. Please try again.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-white justify-center items-center">
//       <div className="flex w-full sm:w-[1000px] md:w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Left side with the image */}
//         <div className="flex-1">
//           <img
//             src="signup.png"
//             alt="House"
//             className="w-full h-[700px] object-cover"
//           />
//         </div>

//         {/* Right side with the form */}
//         <div className="flex items-center justify-center w-[450px] p-8">
//           <div className="w-full">
//             <h2 className="text-3xl font-bold text-left text-black mb-24">
//               Welcome!
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6 mt-13">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 placeholder="First Name"
//                 className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 placeholder="Last Name"
//                 className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Email"
//                 className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                 required
//               />
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Password"
//                   className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                   required
//                 />
//                 <span
//                   onClick={togglePasswordVisibility}
//                   className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
//                 >
//                   {showPassword ? (
//                     <AiOutlineEyeInvisible size={20} />
//                   ) : (
//                     <AiOutlineEye size={20} />
//                   )}
//                 </span>
//               </div>

//               <div className="relative">
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                   required
//                 >
//                   <option value="admin">Admin</option>
//                   <option value="user">User</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-[200px] py-3 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300"
//               >
//                 Sign Up
//               </button>
//             </form>

//             {/* Success/Error Message */}
//             {message && (
//               <div
//                 className={`text-center mt-4 ${
//                   message.includes("successfully") ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 <p>{message}</p>
//               </div>
//             )}

//             <div className="text-center mt-4">
//               <p>
//                 Already have an account?{" "}
//                 <a href="/signin" className="text-indigo-600">Login</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSignup;





import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing eye icons
import axios from "axios"; // Ensure axios is imported
import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirect

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "admin", // Default role to admin
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(""); // For success or error messages
  const navigate = useNavigate(); // Hook for navigating to another page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Send form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/register", // URL to your backend
        formData
      );
      console.log("User created:", response.data);
      // Show success message
      setMessage("User created successfully! Redirecting to login...");
      // After 2 seconds, redirect to the sign-in page
      setTimeout(() => {
        navigate("/signin");
      }, 2000); // 2 seconds delay for the message to be visible
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage("Error creating user. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-white justify-center items-center">
      <div className="flex w-full sm:w-[1000px] md:w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side with the image */}
        <div className="flex-1">
          <img
            src="signup.png"
            alt="House"
            className="w-full h-[700px] object-cover"
          />
        </div>

        {/* Right side with the form */}
        <div className="flex items-center justify-center w-[450px] p-8">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-left text-black">
              Welcome!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 mt-13">
              {/* Flexbox wrapper for First Name and Last Name */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-[48%] px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-[48%] px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </span>
              </div>

              <div className="relative">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
                  required
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-[200px] py-3 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300"
              >
                Sign Up
              </button>
            </form>

            {/* Success/Error Message */}
            {message && (
              <div
                className={`text-center mt-4 ${
                  message.includes("successfully") ? "text-green-600" : "text-red-600"
                }`}
              >
                <p>{message}</p>
              </div>
            )}

            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <a href="/signin" className="text-indigo-600">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
