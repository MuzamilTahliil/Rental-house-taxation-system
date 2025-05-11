// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing eye icons
// import axios from "axios"; // Ensure axios is imported

// const AdminSignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
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
//         "http://localhost:5000/api/admin/login",
//         formData
//       );
//       console.log("Admin logged in:", response.data);
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-white justify-center items-center">
//       {/* Container with the image and form inside the same box */}
//       <div className="flex w-full sm:w-[1000px] md:w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Left side with the image */}
//         <div className="flex-1">
//           <img
//             src="signup.png" // Placeholder for house image
//             alt="House"
//             className="w-full h-[700px] object-cover"
//           />
//         </div>

//         {/* Right side with the form */}
//         <div className="flex items-center justify-center w-[450px] p-8">
//           <div className="w-full">
//             {/* Title with margin-top for spacing */}
//             <h2 className="text-3xl font-bold text-left text-black mb-24">
//               Welcome Back!
//             </h2>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email Field */}
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

//               {/* Sign-In Button */}
//               <button
//                 type="submit"
//                 className="w-[200px] py-3 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300 mt-4"
//               >
//                 Sign In
//               </button>

//               {/* "Don't have an account?" text */}
//               <div className="text-center mt-4">
//                 <p>
//                   Don't have an account?{" "}
//                   <a href="/" className="text-indigo-600">Sign Up</a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSignIn;






// import React, { useState } from "react";
// import axios from "axios";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom"; // Redirect after login

// const AdminSignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
//   const navigate = useNavigate(); // Hook for redirection after login

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/admin/login", formData);
//       alert("Logged in successfully!");
//       localStorage.setItem("token", response.data.token); // Save the JWT token
//       navigate("/admin-dashboard"); // Navigate to the admin dashboard after successful login
//     } catch (error) {
//       console.error("Error logging in:", error);
//       alert("Error logging in. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-white justify-center items-center">
//       <div className="flex w-full sm:w-[1000px] md:w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="flex-1">
//           <img
//             src="signup.png" // Placeholder for house image
//             alt="House"
//             className="w-full h-[700px] object-cover"
//           />
//         </div>

//         <div className="flex items-center justify-center w-[450px] p-8">
//           <div className="w-full">
//             <h2 className="text-3xl font-bold text-left text-black mb-24">
//               Welcome Back!
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
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
//                   {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
//                 </span>
//               </div>

//               <button
//                 type="submit"
//                 className="w-[200px] py-3 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300 mt-4"
//               >
//                 Sign In
//               </button>

//               <div className="text-center mt-4">
//                 <p>
//                   Don't have an account?{" "}
//                   <a href="/signup" className="text-indigo-600">Sign Up</a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSignIn;








import React, { useState } from "react";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom"; // Redirect after login

const AdminSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const navigate = useNavigate(); // Hook for redirection after login

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", formData);
      alert("Logged in successfully!");
      localStorage.setItem("token", response.data.token); // Save the JWT token
      navigate("/admin-dashboard"); // Navigate to the admin dashboard after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in. Please check your credentials.");
    }
  };

  return (
    <div className="flex min-h-screen bg-white justify-center items-center">
      <div className="flex w-full sm:w-[1000px] md:w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1">
          <img
            src="signup.png" // Placeholder for house image
            alt="House"
            className="w-full h-[700px] object-cover"
          />
        </div>

        <div className="flex items-center justify-center w-[450px] p-8">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-left text-black mb-24">
              Welcome Back!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </span>
              </div>

              {/* Forgot Password link outside the password box */}
              <div className="text-right ">
                <a href="/forgot-password" className="text-sm text-indigo-600">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-[200px] py-3 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-300 mt-4"
              >
                Sign In
              </button>

              <div className="text-center mt-4">
                <p>
                  Don't have an account?{" "}
                  <a href="/signup" className="text-indigo-600">Sign Up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
