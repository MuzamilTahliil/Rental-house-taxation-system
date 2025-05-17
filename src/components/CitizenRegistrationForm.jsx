// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaTimes } from "react-icons/fa";

// const CitizenPropertyRegistrationForm = ({ show, onClose }) => {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [houseNo, setHouseNo] = useState("");
//   const [district, setDistrict] = useState("");
//   const [branch, setBranch] = useState("");
//   const [zone, setZone] = useState("");
//   const [houseRent, setHouseRent] = useState("");

//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);

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
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Create citizen first
//       const citizenPayload = {
//         name,
//         phone_number: phoneNumber,
//         password: "defaultPassword123", // default or collect securely
//         status: "Active",
//       };

//       const citizenResponse = await axios.post('http://localhost:5000/api/citizens/create', citizenPayload);
//       const createdCitizen = citizenResponse.data;

//       // 2. Create property using the citizen_id from above
//       const propertyPayload = {
//         citizen_id: createdCitizen._id,  // use returned _id
//         house_no: houseNo,
//         district_id: district,
//         branch_id: branch,
//         zone_id: zone,
//         house_rent: parseFloat(houseRent),
//         tax: 0,
//       };

//       await axios.post('http://localhost:5000/api/properties/create', propertyPayload);

//       alert('Citizen and Property registered successfully');
//       onClose();

//       // Clear form after success (optional)
//       setName("");
//       setPhoneNumber("");
//       setHouseNo("");
//       setDistrict("");
//       setBranch("");
//       setZone("");
//       setHouseRent("");

//     } catch (error) {
//       alert('Error registering citizen and property: ' + (error.response?.data?.message || error.message));
//     }
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50"
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative"
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
//       >
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold">Citizen and Property Registration</h2>
//           <button onClick={onClose} className="text-gray-500">
//             <FaTimes size={20} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="mt-4 space-y-4">
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 block w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="mt-1 block w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4 flex space-x-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">House No</label>
//               <input
//                 type="text"
//                 value={houseNo}
//                 onChange={(e) => setHouseNo(e.target.value)}
//                 className="mt-1 block w-full p-2 border rounded-md"
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">District</label>
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="mt-1 block w-full p-2 border rounded-md"
//                 required
//               >
//                 <option value="">Select District</option>
//                 {districts.map((d) => (
//                   <option key={d._id} value={d._id}>
//                     {d.district_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="mb-4 flex space-x-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">Branch</label>
//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="mt-1 block w-full p-2 border rounded-md"
//                 required
//               >
//                 <option value="">Select Branch</option>
//                 {branches.map((b) => (
//                   <option key={b._id} value={b._id}>
//                     {b.branch_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">Zone</label>
//               <select
//                 value={zone}
//                 onChange={(e) => setZone(e.target.value)}
//                 className="mt-1 block w-full p-2 border rounded-md"
//                 required
//               >
//                 <option value="">Select Zone</option>
//                 {zones.map((z) => (
//                   <option key={z._id} value={z._id}>
//                     {z.zone_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">House Rent</label>
//             <input
//               type="number"
//               value={houseRent}
//               onChange={(e) => setHouseRent(e.target.value)}
//               className="mt-1 block w-full p-2 border rounded-md"
//               required
//               min="0"
//             />
//           </div>

//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-500 text-white px-4 py-2 rounded-md"
//             >
//               Close
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CitizenPropertyRegistrationForm;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CitizenPropertyRegistrationForm = ({ show, onClose }) => {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [houseNo, setHouseNo] = useState("");
//   const [district, setDistrict] = useState("");
//   const [branch, setBranch] = useState("");
//   const [zone, setZone] = useState("");
//   const [houseRent, setHouseRent] = useState("");

//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);

//   const [generatedPassword, setGeneratedPassword] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [districtRes, branchRes, zoneRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/districts"),
//           axios.get("http://localhost:5000/api/branches"),
//           axios.get("http://localhost:5000/api/zones"),
//         ]);
//         setDistricts(districtRes.data);
//         setBranches(branchRes.data);
//         setZones(zoneRes.data);
//       } catch (error) {
//         console.error("Error fetching dropdown data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Create Citizen first
//       const citizenPayload = {
//         name,
//         phone_number: phoneNumber,
//         status: "Active",
//       };

//       const citizenResponse = await axios.post(
//         "http://localhost:5000/api/citizens/create",
//         citizenPayload
//       );

//       const createdCitizen = citizenResponse.data.citizen || citizenResponse.data; // based on your backend response
//       const passwordFromBackend = citizenResponse.data.generatedPassword || "";

//       setGeneratedPassword(passwordFromBackend);

//       // 2. Create Property linked to citizen
//       const propertyPayload = {
//         citizen_id: createdCitizen._id,
//         house_no: houseNo,
//         district_id: district,
//         branch_id: branch,
//         zone_id: zone,
//         house_rent: houseRent,
//         tax: 0, // or calculate if needed
//       };

//       await axios.post(
//         "http://localhost:5000/api/properties/create",
//         propertyPayload
//       );

//       alert(
//         `Registration successful!\nGenerated Password: ${passwordFromBackend}`
//       );

//       // Reset form or close
//       onClose();
//     } catch (error) {
//       console.error(error);
//       alert(
//         "Error registering citizen and property: " +
//           (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50"
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative"
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Register Citizen & Property</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//             title="Close"
//           >
//             ✕
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Citizen Name */}
//           <div>
//             <label className="block font-medium mb-1">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block font-medium mb-1">Phone Number</label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>

//           {/* House No & District */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">House No</label>
//               <input
//                 type="text"
//                 value={houseNo}
//                 onChange={(e) => setHouseNo(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium mb-1">District</label>
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select District</option>
//                 {districts.map((d) => (
//                   <option key={d._id} value={d._id}>
//                     {d.district_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Branch & Zone */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">Branch</label>
//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select Branch</option>
//                 {branches.map((b) => (
//                   <option key={b._id} value={b._id}>
//                     {b.branch_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium mb-1">Zone</label>
//               <select
//                 value={zone}
//                 onChange={(e) => setZone(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select Zone</option>
//                 {zones.map((z) => (
//                   <option key={z._id} value={z._id}>
//                     {z.zone_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* House Rent */}
//           <div>
//             <label className="block font-medium mb-1">House Rent</label>
//             <input
//               type="number"
//               value={houseRent}
//               onChange={(e) => setHouseRent(e.target.value)}
//               className="w-full border p-2 rounded"
//               min="0"
//               required
//             />
//           </div>

//           {/* Submit & Cancel */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-400 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Register
//             </button>
//           </div>
//         </form>

//         {generatedPassword && (
//           <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
//             <strong>Generated Password:</strong> {generatedPassword}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CitizenPropertyRegistrationForm;










// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CitizenRegistrationForm = ({ show, onClose, citizen, refreshCitizens }) => {
//   // Initialize state from citizen prop if editing, else empty
//   const [name, setName] = useState(citizen?.name || "");
//   const [phoneNumber, setPhoneNumber] = useState(citizen?.phone_number || "");
//   const [houseNo, setHouseNo] = useState(citizen?.property?.house_no || "");
//   const [district, setDistrict] = useState(citizen?.property?.district_id?._id || "");
//   const [branch, setBranch] = useState(citizen?.property?.branch_id?._id || "");
//   const [zone, setZone] = useState(citizen?.property?.zone_id?._id || "");
//   const [houseRent, setHouseRent] = useState(citizen?.property?.house_rent || "");
//   const [tax, setTax] = useState(citizen?.property?.tax || "");

//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);

//   // Fetch dropdown data once on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [districtRes, branchRes, zoneRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/districts"),
//           axios.get("http://localhost:5000/api/branches"),
//           axios.get("http://localhost:5000/api/zones"),
//         ]);
//         setDistricts(districtRes.data);
//         setBranches(branchRes.data);
//         setZones(zoneRes.data);
//       } catch (error) {
//         console.error("Error fetching dropdown data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Update local state when citizen prop changes (for editing different citizen)
//   useEffect(() => {
//     setName(citizen?.name || "");
//     setPhoneNumber(citizen?.phone_number || "");
//     setHouseNo(citizen?.property?.house_no || "");
//     setDistrict(citizen?.property?.district_id?._id || "");
//     setBranch(citizen?.property?.branch_id?._id || "");
//     setZone(citizen?.property?.zone_id?._id || "");
//     setHouseRent(citizen?.property?.house_rent || "");
//     setTax(citizen?.property?.tax || "");
//   }, [citizen]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (citizen) {
//         // Update citizen
//         await axios.put(`http://localhost:5000/api/citizens/${citizen._id}`, {
//           name,
//           phone_number: phoneNumber,
//           status: citizen.status || "Active",
//         });

//         // Update property (assuming your API supports PUT by property ID)
//         if (citizen.property?._id) {
//           await axios.put(`http://localhost:5000/api/properties/${citizen.property._id}`, {
//             citizen_id: citizen._id,
//             house_no: houseNo,
//             district_id: district,
//             branch_id: branch,
//             zone_id: zone,
//             house_rent: houseRent,
//             tax: tax || 0,
//           });
//         } else {
//           // If no property exists, create one
//           await axios.post("http://localhost:5000/api/properties/create", {
//             citizen_id: citizen._id,
//             house_no: houseNo,
//             district_id: district,
//             branch_id: branch,
//             zone_id: zone,
//             house_rent: houseRent,
//             tax: tax || 0,
//           });
//         }
//         alert("Citizen and property updated successfully");
//       } else {
//         // Create new citizen and property flow
//         const citizenRes = await axios.post("http://localhost:5000/api/citizens/create", {
//           name,
//           phone_number: phoneNumber,
//           status: "Active",
//         });

//         const createdCitizen = citizenRes.data.citizen || citizenRes.data;

//         await axios.post("http://localhost:5000/api/properties/create", {
//           citizen_id: createdCitizen._id,
//           house_no: houseNo,
//           district_id: district,
//           branch_id: branch,
//           zone_id: zone,
//           house_rent: houseRent,
//           tax: tax || 0,
//         });

//         alert("Citizen and property registered successfully");
//       }

//       refreshCitizens(); // Reload data in parent
//       onClose(); // Close form
//     } catch (error) {
//       console.error(error);
//       alert("Error submitting form: " + (error.response?.data?.message || error.message));
//     }
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50"
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative"
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">{citizen ? "Update" : "Register"} Citizen & Property</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//             title="Close"
//           >
//             ✕
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Citizen Name */}
//           <div>
//             <label className="block font-medium mb-1">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block font-medium mb-1">Phone Number</label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>

//           {/* House No & District */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">House No</label>
//               <input
//                 type="text"
//                 value={houseNo}
//                 onChange={(e) => setHouseNo(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium mb-1">District</label>
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select District</option>
//                 {districts.map((d) => (
//                   <option key={d._id} value={d._id}>
//                     {d.district_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Branch & Zone */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">Branch</label>
//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select Branch</option>
//                 {branches.map((b) => (
//                   <option key={b._id} value={b._id}>
//                     {b.branch_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium mb-1">Zone</label>
//               <select
//                 value={zone}
//                 onChange={(e) => setZone(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select Zone</option>
//                 {zones.map((z) => (
//                   <option key={z._id} value={z._id}>
//                     {z.zone_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* House Rent */}
//           <div>
//             <label className="block font-medium mb-1">House Rent</label>
//             <input
//               type="number"
//               value={houseRent}
//               onChange={(e) => setHouseRent(e.target.value)}
//               className="w-full border p-2 rounded"
//               min="0"
//               required
//             />
//           </div>

//           {/* Tax */}
//           <div>
//             <label className="block font-medium mb-1">Tax</label>
//             <input
//               type="number"
//               value={tax}
//               onChange={(e) => setTax(e.target.value)}
//               className="w-full border p-2 rounded"
//               min="0"
//             />
//           </div>

//           {/* Submit & Cancel */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-400 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               {citizen ? "Update" : "Register"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CitizenRegistrationForm;








// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CitizenRegistrationForm = ({ show, onClose, citizen, refreshCitizens }) => {
//   // Initialize state from citizen prop if editing, else empty
//   const [name, setName] = useState(citizen?.name || "");
//   const [phoneNumber, setPhoneNumber] = useState(citizen?.phone_number || "");
//   const [houseNo, setHouseNo] = useState(citizen?.property?.house_no || "");
//   const [district, setDistrict] = useState(citizen?.property?.district_id?._id || "");
//   const [branch, setBranch] = useState(citizen?.property?.branch_id?._id || "");
//   const [zone, setZone] = useState(citizen?.property?.zone_id?._id || "");
//   const [houseRent, setHouseRent] = useState(citizen?.property?.house_rent || "");
//   const [tax, setTax] = useState(citizen?.property?.tax || "");
//   const [registerDate, setRegisterDate] = useState(
//     citizen?.property?.register_date
//       ? citizen.property.register_date.substring(0, 10)
//       : ""
//   );

//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);

//   // Fetch dropdown data once on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [districtRes, branchRes, zoneRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/districts"),
//           axios.get("http://localhost:5000/api/branches"),
//           axios.get("http://localhost:5000/api/zones"),
//         ]);
//         setDistricts(districtRes.data);
//         setBranches(branchRes.data);
//         setZones(zoneRes.data);
//       } catch (error) {
//         console.error("Error fetching dropdown data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Update local state when citizen prop changes (for editing different citizen)
//   useEffect(() => {
//     setName(citizen?.name || "");
//     setPhoneNumber(citizen?.phone_number || "");
//     setHouseNo(citizen?.property?.house_no || "");
//     setDistrict(citizen?.property?.district_id?._id || "");
//     setBranch(citizen?.property?.branch_id?._id || "");
//     setZone(citizen?.property?.zone_id?._id || "");
//     setHouseRent(citizen?.property?.house_rent || "");
//     setTax(citizen?.property?.tax || "");
//     setRegisterDate(
//       citizen?.property?.register_date
//         ? citizen.property.register_date.substring(0, 10)
//         : ""
//     );
//   }, [citizen]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (citizen) {
//         // Update citizen
//         await axios.put(`http://localhost:5000/api/citizens/${citizen._id}`, {
//           name,
//           phone_number: phoneNumber,
//           status: citizen.status || "Active",
//         });

//         // Update property (assuming your API supports PUT by property ID)
//         if (citizen.property?._id) {
//           await axios.put(`http://localhost:5000/api/properties/${citizen.property._id}`, {
//             citizen_id: citizen._id,
//             house_no: houseNo,
//             district_id: district,
//             branch_id: branch,
//             zone_id: zone,
//             house_rent: houseRent,
//             tax: tax || 0,
//             register_date: registerDate,
//           });
//         } else {
//           // If no property exists, create one
//           await axios.post("http://localhost:5000/api/properties/create", {
//             citizen_id: citizen._id,
//             house_no: houseNo,
//             district_id: district,
//             branch_id: branch,
//             zone_id: zone,
//             house_rent: houseRent,
//             tax: tax || 0,
//             register_date: registerDate,
//           });
//         }
//         alert("Citizen and property updated successfully");
//       } else {
//         // Create new citizen and property flow
//         const citizenRes = await axios.post("http://localhost:5000/api/citizens/create", {
//           name,
//           phone_number: phoneNumber,
//           status: "Active",
//         });

//         const createdCitizen = citizenRes.data.citizen || citizenRes.data;

//         await axios.post("http://localhost:5000/api/properties/create", {
//           citizen_id: createdCitizen._id,
//           house_no: houseNo,
//           district_id: district,
//           branch_id: branch,
//           zone_id: zone,
//           house_rent: houseRent,
//           tax: tax || 0,
//           register_date: registerDate,
//         });

//         alert("Citizen and property registered successfully");
//       }

//       refreshCitizens(); // Reload data in parent
//       onClose(); // Close form
//     } catch (error) {
//       console.error(error);
//       alert("Error submitting form: " + (error.response?.data?.message || error.message));
//     }
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50"
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative"
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">{citizen ? "Update" : "Register"} Citizen & Property</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//             title="Close"
//           >
//             ✕
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Citizen Name */}
//           <div>
//             <label className="block font-medium mb-1">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block font-medium mb-1">Phone Number</label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>

//           {/* House No & District */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">House No</label>
//               <input
//                 type="text"
//                 value={houseNo}
//                 onChange={(e) => setHouseNo(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium mb-1">District</label>
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select District</option>
//                 {districts.map((d) => (
//                   <option key={d._id} value={d._id}>
//                     {d.district_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Branch & Zone */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">Branch</label>
//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select Branch</option>
//                 {branches.map((b) => (
//                   <option key={b._id} value={b._id}>
//                     {b.branch_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium mb-1">Zone</label>
//               <select
//                 value={zone}
//                 onChange={(e) => setZone(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select Zone</option>
//                 {zones.map((z) => (
//                   <option key={z._id} value={z._id}>
//                     {z.zone_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* House Rent */}
//           {/* House Rent & Register Date side by side */}
// <div className="flex space-x-4">
//   <div className="flex-1">
//     <label className="block font-medium mb-1">House Rent</label>
//     <input
//       type="number"
//       value={houseRent}
//       onChange={(e) => setHouseRent(e.target.value)}
//       className="w-full border p-2 rounded"
//       min="0"
//       required
//     />
//   </div>

//   <div className="flex-1">
//     <label className="block font-medium mb-1">Register Date</label>
//     <input
//       type="date"
//       value={registerDate}
//       onChange={(e) => setRegisterDate(e.target.value)}
//       className="w-full border p-2 rounded"
//       required
//     />
//   </div>
// </div>




//           {/* Submit & Cancel */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-400 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               {citizen ? "Update" : "Register"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CitizenRegistrationForm;











// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CitizenRegistrationForm = ({ show, onClose, citizen, refreshCitizens }) => {
//   const [name, setName] = useState(citizen?.name || "");
//   const [phoneNumber, setPhoneNumber] = useState(citizen?.phone_number || "");
//   const [houseNo, setHouseNo] = useState(citizen?.property?.house_no || "");
//   const [district, setDistrict] = useState(citizen?.property?.district_id?._id || "");
//   const [branch, setBranch] = useState(citizen?.property?.branch_id?._id || "");
//   const [zone, setZone] = useState(citizen?.property?.zone_id?._id || "");
//   const [houseRent, setHouseRent] = useState(
//     citizen?.property?.house_rent
//       ? (typeof citizen.property.house_rent === "object" && citizen.property.house_rent.$numberDecimal)
//         ? citizen.property.house_rent.$numberDecimal
//         : citizen.property.house_rent
//       : ""
//   );
//   const [tax, setTax] = useState(
//     citizen?.property?.tax
//       ? (typeof citizen.property.tax === "object" && citizen.property.tax.$numberDecimal)
//         ? citizen.property.tax.$numberDecimal
//         : citizen.property.tax
//       : ""
//   );
//   const [registerDate, setRegisterDate] = useState(
//     citizen?.property?.register_date
//       ? citizen.property.register_date.substring(0, 10)
//       : ""
//   );

//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);

//   // States for filtered branches and zones after filtering
//   const [filteredBranches, setFilteredBranches] = useState([]);
//   const [filteredZones, setFilteredZones] = useState([]);

//   // Fetch all districts, branches, zones on mount
//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [districtRes, branchRes, zoneRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/districts"),
//           axios.get("http://localhost:5000/api/branches"),
//           axios.get("http://localhost:5000/api/zones"),
//         ]);
//         setDistricts(districtRes.data);
//         setBranches(branchRes.data);
//         setZones(zoneRes.data);
//       } catch (error) {
//         console.error("Error fetching dropdown data:", error);
//       }
//     };
//     fetchAll();
//   }, []);

//   // Filter branches when district changes
//   useEffect(() => {
//     if (!district) {
//       setFilteredBranches([]);
//       setBranch("");
//       setFilteredZones([]);
//       setZone("");
//       return;
//     }

//     const filtered = branches.filter((b) => b.district_id === district || b.district_id?._id === district);
//     setFilteredBranches(filtered);

//     // Reset branch and zone selection if not in new filtered list
//     if (!filtered.find((b) => b._id === branch)) {
//       setBranch("");
//       setFilteredZones([]);
//       setZone("");
//     }
//   }, [district, branches]);

//   // Filter zones when branch changes
//   useEffect(() => {
//     if (!branch) {
//       setFilteredZones([]);
//       setZone("");
//       return;
//     }

//     const filtered = zones.filter((z) => z.branch_id === branch || z.branch_id?._id === branch);
//     setFilteredZones(filtered);

//     if (!filtered.find((z) => z._id === zone)) {
//       setZone("");
//     }
//   }, [branch, zones]);

//   // Update form inputs when citizen changes (edit mode)
//   useEffect(() => {
//     setName(citizen?.name || "");
//     setPhoneNumber(citizen?.phone_number || "");
//     setHouseNo(citizen?.property?.house_no || "");
//     setDistrict(citizen?.property?.district_id?._id || "");
//     setBranch(citizen?.property?.branch_id?._id || "");
//     setZone(citizen?.property?.zone_id?._id || "");
//     setHouseRent(
//       citizen?.property?.house_rent
//         ? (typeof citizen.property.house_rent === "object" && citizen.property.house_rent.$numberDecimal)
//           ? citizen.property.house_rent.$numberDecimal
//           : citizen.property.house_rent
//         : ""
//     );
//     setTax(
//       citizen?.property?.tax
//         ? (typeof citizen.property.tax === "object" && citizen.property.tax.$numberDecimal)
//           ? citizen.property.tax.$numberDecimal
//           : citizen.property.tax
//         : ""
//     );
//     setRegisterDate(
//       citizen?.property?.register_date
//         ? citizen.property.register_date.substring(0, 10)
//         : ""
//     );
//   }, [citizen]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (citizen) {
//         // update citizen
//         await axios.put(`http://localhost:5000/api/citizens/${citizen._id}`, {
//           name,
//           phone_number: phoneNumber,
//           status: citizen.status || "Active",
//         });

//         if (citizen.property?._id) {
//           await axios.put(`http://localhost:5000/api/properties/${citizen.property._id}`, {
//             citizen_id: citizen._id,
//             house_no: houseNo,
//             district_id: district,
//             branch_id: branch,
//             zone_id: zone,
//             house_rent: houseRent,
//             tax: tax || 0,
//             register_date: registerDate,
//           });
//         } else {
//           await axios.post("http://localhost:5000/api/properties/create", {
//             citizen_id: citizen._id,
//             house_no: houseNo,
//             district_id: district,
//             branch_id: branch,
//             zone_id: zone,
//             house_rent: houseRent,
//             tax: tax || 0,
//             register_date: registerDate,
//           });
//         }
//         alert("Citizen and property updated successfully");
//       } else {
//         // create new citizen & property
//         const citizenRes = await axios.post("http://localhost:5000/api/citizens/create", {
//           name,
//           phone_number: phoneNumber,
//           status: "Active",
//         });
//         const createdCitizen = citizenRes.data.citizen || citizenRes.data;

//         await axios.post("http://localhost:5000/api/properties/create", {
//           citizen_id: createdCitizen._id,
//           house_no: houseNo,
//           district_id: district,
//           branch_id: branch,
//           zone_id: zone,
//           house_rent: houseRent,
//           tax: tax || 0,
//           register_date: registerDate,
//         });
//         alert("Citizen and property registered successfully");
//       }

//       refreshCitizens();
//       onClose();
//     } catch (error) {
//       console.error(error);
//       alert("Error submitting form: " + (error.response?.data?.message || error.message));
//     }
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50"
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative"
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">{citizen ? "Update" : "Register"} Citizen & Property</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//             title="Close"
//           >
//             ✕
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Citizen Name */}
//           <div>
//             <label className="block font-medium mb-1">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block font-medium mb-1">Phone Number</label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>

//           {/* House No & District */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">House No</label>
//               <input
//                 type="text"
//                 value={houseNo}
//                 onChange={(e) => setHouseNo(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium mb-1">District</label>
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select District</option>
//                 {districts.map((d) => (
//                   <option key={d._id} value={d._id}>
//                     {d.district_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Branch & Zone */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">Branch</label>
//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//                 disabled={!district}
//               >
//                 <option value="">Select Branch</option>
//                 {filteredBranches.map((b) => (
//                   <option key={b._id} value={b._id}>
//                     {b.branch_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium mb-1">Zone</label>
//               <select
//                 value={zone}
//                 onChange={(e) => setZone(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//                 disabled={!branch}
//               >
//                 <option value="">Select Zone</option>
//                 {filteredZones.map((z) => (
//                   <option key={z._id} value={z._id}>
//                     {z.zone_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* House Rent & Register Date side by side */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block font-medium mb-1">House Rent</label>
//               <input
//                 type="number"
//                 value={houseRent}
//                 onChange={(e) => setHouseRent(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 min="0"
//                 required
//               />
//             </div>

//             <div className="flex-1">
//               <label className="block font-medium mb-1">Register Date</label>
//               <input
//                 type="date"
//                 value={registerDate}
//                 onChange={(e) => setRegisterDate(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 required
//               />
//             </div>
//           </div>

       

//           {/* Submit & Cancel */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-400 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               {citizen ? "Update" : "Register"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CitizenRegistrationForm;










import React, { useState, useEffect } from "react";
import axios from "axios";

const CitizenRegistrationForm = ({ show, onClose, citizen, refreshCitizens }) => {
  const [name, setName] = useState(citizen?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(citizen?.phone_number || "");
  const [houseNo, setHouseNo] = useState(citizen?.property?.house_no || "");
  const [district, setDistrict] = useState(citizen?.property?.district_id?._id || "");
  const [branch, setBranch] = useState(citizen?.property?.branch_id?._id || "");
  const [zone, setZone] = useState(citizen?.property?.zone_id?._id || "");
  const [houseRent, setHouseRent] = useState(
    citizen?.property?.house_rent
      ? (typeof citizen.property.house_rent === "object" && citizen.property.house_rent.$numberDecimal)
        ? citizen.property.house_rent.$numberDecimal
        : citizen.property.house_rent
      : ""
  );
  const [registerDate, setRegisterDate] = useState(
    citizen?.property?.register_date
      ? citizen.property.register_date.substring(0, 10)
      : ""
  );

  const [districts, setDistricts] = useState([]);
  const [branches, setBranches] = useState([]);
  const [zones, setZones] = useState([]);

  const [filteredBranches, setFilteredBranches] = useState([]);
  const [filteredZones, setFilteredZones] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [districtRes, branchRes, zoneRes] = await Promise.all([
          axios.get("http://localhost:5000/api/districts"),
          axios.get("http://localhost:5000/api/branches"),
          axios.get("http://localhost:5000/api/zones"),
        ]);
        setDistricts(districtRes.data);
        setBranches(branchRes.data);
        setZones(zoneRes.data);
      } catch (error) {
        console.error("Error fetching dropdown data:", error);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    if (!district) {
      setFilteredBranches([]);
      setBranch("");
      setFilteredZones([]);
      setZone("");
      return;
    }

    const filtered = branches.filter((b) => b.district_id === district || b.district_id?._id === district);
    setFilteredBranches(filtered);

    if (!filtered.find((b) => b._id === branch)) {
      setBranch("");
      setFilteredZones([]);
      setZone("");
    }
  }, [district, branches]);

  useEffect(() => {
    if (!branch) {
      setFilteredZones([]);
      setZone("");
      return;
    }

    const filtered = zones.filter((z) => z.branch_id === branch || z.branch_id?._id === branch);
    setFilteredZones(filtered);

    if (!filtered.find((z) => z._id === zone)) {
      setZone("");
    }
  }, [branch, zones]);

  useEffect(() => {
    setName(citizen?.name || "");
    setPhoneNumber(citizen?.phone_number || "");
    setHouseNo(citizen?.property?.house_no || "");
    setDistrict(citizen?.property?.district_id?._id || "");
    setBranch(citizen?.property?.branch_id?._id || "");
    setZone(citizen?.property?.zone_id?._id || "");
    setHouseRent(
      citizen?.property?.house_rent
        ? (typeof citizen.property.house_rent === "object" && citizen.property.house_rent.$numberDecimal)
          ? citizen.property.house_rent.$numberDecimal
          : citizen.property.house_rent
        : ""
    );
    setRegisterDate(
      citizen?.property?.register_date
        ? citizen.property.register_date.substring(0, 10)
        : ""
    );
  }, [citizen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (citizen) {
        // Update existing citizen
        await axios.put(`http://localhost:5000/api/citizens/${citizen._id}`, {
          name,
          phone_number: phoneNumber,
          status: citizen.status || "Active",
        });

        if (citizen.property?._id) {
          await axios.put(`http://localhost:5000/api/properties/${citizen.property._id}`, {
            citizen_id: citizen._id,
            house_no: houseNo,
            district_id: district,
            branch_id: branch,
            zone_id: zone,
            house_rent: houseRent,
            register_date: registerDate,
          });
        } else {
          await axios.post("http://localhost:5000/api/properties/create", {
            citizen_id: citizen._id,
            house_no: houseNo,
            district_id: district,
            branch_id: branch,
            zone_id: zone,
            house_rent: houseRent,
            register_date: registerDate,
          });
        }
        alert("Citizen and property updated successfully");
      } else {
        // Create new citizen & property
        const citizenRes = await axios.post("http://localhost:5000/api/citizens/create", {
          name,
          phone_number: phoneNumber,
          status: "Active",
        });
        const createdCitizen = citizenRes.data.citizen || citizenRes.data;

        await axios.post("http://localhost:5000/api/properties/create", {
          citizen_id: createdCitizen._id,
          house_no: houseNo,
          district_id: district,
          branch_id: branch,
          zone_id: zone,
          house_rent: houseRent,
          register_date: registerDate,
        });
        alert("Citizen and property registered successfully");
      }

      refreshCitizens();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Error submitting form: " + (error.response?.data?.message || error.message));
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <div
        className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{citizen ? "Update" : "Register"} Citizen & Property</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            title="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Citizen Name */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* House No & District */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">House No</label>
              <input
                type="text"
                value={houseNo}
                onChange={(e) => setHouseNo(e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">District</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Select District</option>
                {districts.map((d) => (
                  <option key={d._id} value={d._id}>
                    {d.district_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Branch & Zone */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">Branch</label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full border p-2 rounded"
                required
                disabled={!district}
              >
                <option value="">Select Branch</option>
                {filteredBranches.map((b) => (
                  <option key={b._id} value={b._id}>
                    {b.branch_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">Zone</label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full border p-2 rounded"
                required
                disabled={!branch}
              >
                <option value="">Select Zone</option>
                {filteredZones.map((z) => (
                  <option key={z._id} value={z._id}>
                    {z.zone_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* House Rent & Register Date */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">House Rent</label>
              <input
                type="number"
                value={houseRent}
                onChange={(e) => setHouseRent(e.target.value)}
                className="w-full border p-2 rounded"
                min="0"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block font-medium mb-1">Register Date</label>
              <input
                type="date"
                value={registerDate}
                onChange={(e) => setRegisterDate(e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>

          {/* Submit & Cancel Buttons */}
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              {citizen ? "Update" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CitizenRegistrationForm;
