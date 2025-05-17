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
//     district: "", // Default district field is empty
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
//         "http://localhost:5000/api/users/register", // URL to your backend
//         formData
//       );
//       console.log("User created:", response.data);
//       // Show success message and redirect to the login page
//       alert("User created successfully! Redirecting to login...");
//       setTimeout(() => {
//         navigate("/signin");
//       }, 2000); // 2 seconds delay for the message to be visible
//     } catch (error) {
//       console.error("Error creating user:", error);
//       alert("Error creating user. Please try again.");
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
//               {/* Flexbox wrapper for First Name and Last Name */}
//               <div className="flex space-x-4">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   placeholder="First Name"
//                   className="w-[48%] px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   placeholder="Last Name"
//                   className="w-[48%] px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                   required
//                 />
//               </div>

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
//                   <option value="user">Employee</option>
//                 </select>
//               </div>

//               {/* Conditionally Render District Input if Role is User */}
//               {formData.role === "user" && (
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="district"
//                     value={formData.district}
//                     onChange={handleInputChange}
//                     placeholder="District"
//                     className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
//                     required
//                   />
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="w-[200px] py-3 ml-24 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300"
//               >
//                 Sign Up
//               </button>
//             </form>

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






import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "admin",
    district: "",
  });

  const [districts, setDistricts] = useState([]); // Store districts here
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch districts on mount
    const fetchDistricts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/districts");
        setDistricts(response.data);
      } catch (error) {
        console.error("Failed to fetch districts:", error);
      }
    };
    fetchDistricts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );
      console.log("User created:", response.data);
      alert("User created successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Error creating user. Please try again.");
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
            <h2 className="text-3xl font-bold text-left text-black mb-24">
              Welcome!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 mt-13">
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
                  <option value="user">Employee</option>
                </select>
              </div>

              {/* Conditionally render district dropdown only for 'user' role */}
              {formData.role === "user" && (
                <div className="relative">
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#f0f5ff] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
                    required
                  >
                    <option value="">Select District</option>
                    {districts.map((district) => (
                      <option key={district._id} value={district._id}>
                        {district.district_name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-[200px] py-3 ml-24 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <a href="/signin" className="text-indigo-600">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
