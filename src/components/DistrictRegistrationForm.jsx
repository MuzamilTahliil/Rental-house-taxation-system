// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { FaTimes } from 'react-icons/fa'; // Importing the "X" icon

// // const DistrictRegistrationForm = ({ show, onClose }) => {
// //   const [districts, setDistricts] = useState([]);
// //   const [branches, setBranches] = useState([]);
// //   const [formState, setFormState] = useState({
// //     district: '',
// //     branch: '',
// //     zone: '',
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [activeTab, setActiveTab] = useState('district'); // Keep track of the active tab

// //   // Fetch districts from the API
// //   useEffect(() => {
// //     const fetchDistricts = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/districts');
// //         setDistricts(response.data);
// //       } catch (error) {
// //         console.error("Error fetching districts:", error);
// //       }
// //     };
// //     fetchDistricts();
// //   }, []);

// //   // Fetch branches when a district is selected
// //   useEffect(() => {
// //     const fetchBranches = async () => {
// //       if (formState.district) {
// //         try {
// //           const response = await axios.get(`http://localhost:5000/api/branches?district_id=${formState.district}`);
// //           setBranches(response.data);
// //         } catch (error) {
// //           console.error("Error fetching branches:", error);
// //         }
// //       }
// //     };
// //     fetchBranches();
// //   }, [formState.district]);

// //   // Handle form input changes
// //   const handleChange = (e) => {
// //     setFormState({
// //       ...formState,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // Handle form submission for District
// //   const handleSubmitDistrict = async () => {
// //     if (formState.district) {
// //       setLoading(true);
// //       try {
// //         await axios.post('http://localhost:5000/api/districts', { district_name: formState.district });
// //         alert('District registered successfully!');
// //         onClose();
// //       } catch (error) {
// //         alert('Error registering district');
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //   };

// //   // Handle form submission for Branch
// //   const handleSubmitBranch = async () => {
// //     if (formState.district && formState.branch) {
// //       setLoading(true);
// //       try {
// //         await axios.post('http://localhost:5000/api/branches', {
// //           district_id: formState.district,
// //           branch_name: formState.branch,
// //         });
// //         alert('Branch registered successfully!');
// //         onClose();
// //       } catch (error) {
// //         alert('Error registering branch');
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //   };

// //   // Handle form submission for Zone
// //   const handleSubmitZone = async () => {
// //     if (formState.district && formState.branch && formState.zone) {
// //       setLoading(true);
// //       try {
// //         await axios.post('http://localhost:5000/api/zones/create', {
// //           district_id: formState.district,
// //           branch_id: formState.branch,
// //           zone_name: formState.zone,
// //         });
// //         alert('Zone registered successfully!');
// //         onClose();
// //       } catch (error) {
// //         alert('Error registering zone');
// //       } finally {
// //         setLoading(false);
// //       }
// //     } else {
// //       alert('Please select a district, branch, and zone name!');
// //     }
// //   };

// //   return (
// //     show && (
// //         <div className="fixed inset-0 flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
// //         <div className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
// //           {/* Close Button */}
// //           <button
// //             onClick={onClose}
// //             className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-900"
// //           >
// //             <FaTimes />
// //           </button>

// //           <h2 className="text-2xl font-semibold text-center mb-6">
// //             {activeTab === 'district' ? 'District Registration' : activeTab === 'branch' ? 'Branch Registration' : 'Zone Registration'}
// //           </h2>
          
// //           {/* Tabs */}
// //           <div className="flex justify-around mb-4 space-x-4">
// //             <button
// //               onClick={() => setActiveTab('district')}
// //               className={`px-4 py-2 w-full rounded-t-md ${activeTab === 'district' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
// //             >
// //               District
// //             </button>
// //             <button
// //               onClick={() => setActiveTab('branch')}
// //               className={`px-4 py-2 w-full rounded-t-md ${activeTab === 'branch' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
// //             >
// //               Branch
// //             </button>
// //             <button
// //               onClick={() => setActiveTab('zone')}
// //               className={`px-4 py-2 w-full rounded-t-md ${activeTab === 'zone' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
// //             >
// //               Zone
// //             </button>
// //           </div>

// //           {/* District Form */}
// //           {activeTab === 'district' && (
// //             <>
// //               <label className="block mb-2">District</label>
// //               <input
// //                 type="text"
// //                 name="district"
// //                 value={formState.district}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
// //                 placeholder="Enter district name"
// //               />
// //               <button
// //                 onClick={handleSubmitDistrict}
// //                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
// //                 disabled={loading}
// //               >
// //                 {loading ? 'Registering...' : 'Register'}
// //               </button>
// //             </>
// //           )}

// //           {/* Branch Form */}
// //           {activeTab === 'branch' && (
// //             <>
// //               <label className="block mb-2">District</label>
// //               <select
// //                 name="district"
// //                 value={formState.district}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
// //               >
// //                 <option value="">Select District</option>
// //                 {districts.map((district) => (
// //                   <option key={district._id} value={district._id}>
// //                     {district.district_name}
// //                   </option>
// //                 ))}
// //               </select>

// //               <label className="block mb-2">Branch</label>
// //               <input
// //                 type="text"
// //                 name="branch"
// //                 value={formState.branch}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
// //                 placeholder="Enter branch name"
// //               />
// //               <button
// //                 onClick={handleSubmitBranch}
// //                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
// //                 disabled={loading}
// //               >
// //                 {loading ? 'Registering...' : 'Register'}
// //               </button>
// //             </>
// //           )}

// //           {/* Zone Form */}
// //           {activeTab === 'zone' && (
// //             <>
// //               <label className="block mb-2">District</label>
// //               <select
// //                 name="district"
// //                 value={formState.district}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
// //               >
// //                 <option value="">Select District</option>
// //                 {districts.map((district) => (
// //                   <option key={district._id} value={district._id}>
// //                     {district.district_name}
// //                   </option>
// //                 ))}
// //               </select>

// //               <label className="block mb-2">Branch</label>
// //               <select
// //                 name="branch"
// //                 value={formState.branch}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
// //               >
// //                 <option value="">Select Branch</option>
// //                 {branches.map((branch) => (
// //                   <option key={branch._id} value={branch._id}>
// //                     {branch.branch_name}
// //                   </option>
// //                 ))}
// //               </select>

// //               <label className="block mb-2">Zone</label>
// //               <input
// //                 type="text"
// //                 name="zone"
// //                 value={formState.zone}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
// //                 placeholder="Enter zone name"
// //               />
// //               <button
// //                 onClick={handleSubmitZone}
// //                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
// //                 disabled={loading}
// //               >
// //                 {loading ? 'Registering...' : 'Register'}
// //               </button>
// //             </>
// //           )}

// //         </div>
// //       </div>
// //     )
// //   );
// // };

// // export default DistrictRegistrationForm;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaTimes } from 'react-icons/fa';

// const DistrictRegistrationForm = ({ show, onClose }) => {
//   // All data
//   const [districts, setDistricts] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [zones, setZones] = useState([]);

//   // Filtered data for dropdowns
//   const [filteredBranches, setFilteredBranches] = useState([]);
//   const [filteredZones, setFilteredZones] = useState([]);

//   // Form state
//   const [formState, setFormState] = useState({
//     district: '',
//     branch: '',
//     zone: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeTab, setActiveTab] = useState('district');

//   // Fetch all districts, branches, zones on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [districtRes, branchRes, zoneRes] = await Promise.all([
//           axios.get('http://localhost:5000/api/districts'),
//           axios.get('http://localhost:5000/api/branches'),
//           axios.get('http://localhost:5000/api/zones'),
//         ]);
//         setDistricts(districtRes.data);
//         setBranches(branchRes.data);
//         setZones(zoneRes.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Filter branches locally when district changes
//   useEffect(() => {
//     if (!formState.district) {
//       setFilteredBranches([]);
//       setFormState((prev) => ({ ...prev, branch: '', zone: '' }));
//       setFilteredZones([]);
//       return;
//     }
//     const filtered = branches.filter(
//       (b) =>
//         b.district_id === formState.district ||
//         b.district_id?._id === formState.district
//     );
//     setFilteredBranches(filtered);

//     if (!filtered.find((b) => b._id === formState.branch)) {
//       setFormState((prev) => ({ ...prev, branch: '', zone: '' }));
//       setFilteredZones([]);
//     }
//   }, [formState.district, branches]);

//   // Filter zones locally when branch changes
//   useEffect(() => {
//     if (!formState.branch) {
//       setFilteredZones([]);
//       setFormState((prev) => ({ ...prev, zone: '' }));
//       return;
//     }
//     const filtered = zones.filter(
//       (z) => z.branch_id === formState.branch || z.branch_id?._id === formState.branch
//     );
//     setFilteredZones(filtered);

//     if (!filtered.find((z) => z._id === formState.zone)) {
//       setFormState((prev) => ({ ...prev, zone: '' }));
//     }
//   }, [formState.branch, zones]);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormState({
//       ...formState,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Submit handlers
//   const handleSubmitDistrict = async () => {
//     if (!formState.district) {
//       alert('Please enter a district name');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:5000/api/districts', { district_name: formState.district });
//       alert('District registered successfully!');
//       onClose();
//     } catch (error) {
//       alert('Error registering district: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmitBranch = async () => {
//     if (!formState.district || !formState.branch) {
//       alert('Please select a district and enter a branch name');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:5000/api/branches', {
//         district_id: formState.district,
//         branch_name: formState.branch,
//       });
//       alert('Branch registered successfully!');
//       onClose();
//     } catch (error) {
//       alert('Error registering branch: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmitZone = async () => {
//     if (!formState.district || !formState.branch || !formState.zone) {
//       alert('Please select a district, branch, and enter a zone name');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:5000/api/zones/create', {
//         district_id: formState.district,
//         branch_id: formState.branch,
//         zone_name: formState.zone,
//       });
//       alert('Zone registered successfully!');
//       onClose();
//     } catch (error) {
//       alert('Error registering zone: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50"
//       style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative"
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
//       >
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-900"
//           title="Close"
//         >
//           <FaTimes />
//         </button>

//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           {activeTab === 'district'
//             ? 'District Registration'
//             : activeTab === 'branch'
//             ? 'Branch Registration'
//             : 'Zone Registration'}
//         </h2>

//         {/* Tabs */}
//         <div className="flex justify-around mb-4 space-x-4">
//           <button
//             onClick={() => setActiveTab('district')}
//             className={`px-4 py-2 w-full rounded-t-md ${
//               activeTab === 'district' ? 'bg-blue-500 text-white' : 'bg-gray-200'
//             }`}
//           >
//             District
//           </button>
//           <button
//             onClick={() => setActiveTab('branch')}
//             className={`px-4 py-2 w-full rounded-t-md ${
//               activeTab === 'branch' ? 'bg-blue-500 text-white' : 'bg-gray-200'
//             }`}
//           >
//             Branch
//           </button>
//           <button
//             onClick={() => setActiveTab('zone')}
//             className={`px-4 py-2 w-full rounded-t-md ${
//               activeTab === 'zone' ? 'bg-blue-500 text-white' : 'bg-gray-200'
//             }`}
//           >
//             Zone
//           </button>
//         </div>

//         {/* Forms */}
//         {activeTab === 'district' && (
//           <>
//             <label className="block mb-2">District</label>
//             <input
//               type="text"
//               name="district"
//               value={formState.district}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
//               placeholder="Enter district name"
//             />
//             <button
//               onClick={handleSubmitDistrict}
//               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//               disabled={loading}
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </button>
//           </>
//         )}

//         {activeTab === 'branch' && (
//           <>
//             <label className="block mb-2">District</label>
//             <select
//               name="district"
//               value={formState.district}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
//             >
//               <option value="">Select District</option>
//               {districts.map((district) => (
//                 <option key={district._id} value={district._id}>
//                   {district.district_name}
//                 </option>
//               ))}
//             </select>

//             <label className="block mb-2">Branch</label>
//             <input
//               type="text"
//               name="branch"
//               value={formState.branch}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
//               placeholder="Enter branch name"
//             />
//             <button
//               onClick={handleSubmitBranch}
//               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//               disabled={loading}
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </button>
//           </>
//         )}

//         {activeTab === 'zone' && (
//           <>
//             <label className="block mb-2">District</label>
//             <select
//               name="district"
//               value={formState.district}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
//             >
//               <option value="">Select District</option>
//               {districts.map((district) => (
//                 <option key={district._id} value={district._id}>
//                   {district.district_name}
//                 </option>
//               ))}
//             </select>

//             <label className="block mb-2">Branch</label>
//             <select
//               name="branch"
//               value={formState.branch}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
//               disabled={!formState.district}
//             >
//               <option value="">Select Branch</option>
//               {filteredBranches.map((branch) => (
//                 <option key={branch._id} value={branch._id}>
//                   {branch.branch_name}
//                 </option>
//               ))}
//             </select>

//             <label className="block mb-2">Zone</label>
//             <input
//               type="text"
//               name="zone"
//               value={formState.zone}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
//               placeholder="Enter zone name"
//             />
//             <button
//               onClick={handleSubmitZone}
//               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//               disabled={loading}
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DistrictRegistrationForm;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const DistrictRegistrationForm = ({ show, onClose, editItem, formType: initialFormType }) => {
  const [districts, setDistricts] = useState([]);
  const [branches, setBranches] = useState([]);
  const [zones, setZones] = useState([]);

  const [filteredBranches, setFilteredBranches] = useState([]);
  const [filteredZones, setFilteredZones] = useState([]);

  // Form states for inputs
  const [formState, setFormState] = useState({
    district: '',
    branch: '',
    zone: '',
  });

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(initialFormType || 'district');

  // Fetch districts, branches, zones on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [districtRes, branchRes, zoneRes] = await Promise.all([
          axios.get('http://localhost:5000/api/districts'),
          axios.get('http://localhost:5000/api/branches'),
          axios.get('http://localhost:5000/api/zones'),
        ]);
        setDistricts(districtRes.data);
        setBranches(branchRes.data);
        setZones(zoneRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Prefill form when editing
  useEffect(() => {
    if (!editItem) {
      setFormState({ district: '', branch: '', zone: '' });
      return;
    }

    if (activeTab === 'district') {
      setFormState({ district: editItem.district_name || '', branch: '', zone: '' });
    } else if (activeTab === 'branch') {
      setFormState({
        district: editItem.district_id?._id || '',
        branch: editItem.branch_name || '',
        zone: '',
      });
    } else if (activeTab === 'zone') {
      setFormState({
        district: '', // For zone, we might want to select district to filter branches — optionally prefill it if your data allows
        branch: editItem.branch_id?._id || '',
        zone: editItem.zone_name || '',
      });
    }
  }, [editItem, activeTab]);

  // Filter branches when district changes
  useEffect(() => {
    if (!formState.district) {
      setFilteredBranches([]);
      setFormState((prev) => ({ ...prev, branch: '', zone: '' }));
      setFilteredZones([]);
      return;
    }
    const filtered = branches.filter(
      (b) => b.district_id === formState.district || b.district_id?._id === formState.district
    );
    setFilteredBranches(filtered);

    if (!filtered.find((b) => b._id === formState.branch)) {
      setFormState((prev) => ({ ...prev, branch: '', zone: '' }));
      setFilteredZones([]);
    }
  }, [formState.district, branches]);

  // Filter zones when branch changes
  useEffect(() => {
    if (!formState.branch) {
      setFilteredZones([]);
      setFormState((prev) => ({ ...prev, zone: '' }));
      return;
    }
    const filtered = zones.filter(
      (z) => z.branch_id === formState.branch || z.branch_id?._id === formState.branch
    );
    setFilteredZones(filtered);

    if (!filtered.find((z) => z._id === formState.zone)) {
      setFormState((prev) => ({ ...prev, zone: '' }));
    }
  }, [formState.branch, zones]);

  // Handle input change
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Create or update district
  const handleSubmitDistrict = async () => {
    if (!formState.district) {
      alert('Please enter a district name');
      return;
    }
    setLoading(true);
    try {
      if (editItem && activeTab === 'district') {
        // Update district
        await axios.put(`http://localhost:5000/api/districts/${editItem._id}`, {
          district_name: formState.district,
        });
        alert('District updated successfully!');
      } else {
        // Create district
        await axios.post('http://localhost:5000/api/districts', { district_name: formState.district });
        alert('District registered successfully!');
      }
      onClose();
    } catch (error) {
      alert('Error saving district: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Create or update branch
  const handleSubmitBranch = async () => {
    if (!formState.district || !formState.branch) {
      alert('Please select a district and enter a branch name');
      return;
    }
    setLoading(true);
    try {
      if (editItem && activeTab === 'branch') {
        await axios.put(`http://localhost:5000/api/branches/${editItem._id}`, {
          district_id: formState.district,
          branch_name: formState.branch,
        });
        alert('Branch updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/branches', {
          district_id: formState.district,
          branch_name: formState.branch,
        });
        alert('Branch registered successfully!');
      }
      onClose();
    } catch (error) {
      alert('Error saving branch: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Create or update zone
  const handleSubmitZone = async () => {
    if (!formState.branch || !formState.zone) {
      alert('Please select a branch and enter a zone name');
      return;
    }
    setLoading(true);
    try {
      if (editItem && activeTab === 'zone') {
        await axios.put(`http://localhost:5000/api/zones/${editItem._id}`, {
          branch_id: formState.branch,
          zone_name: formState.zone,
        });
        alert('Zone updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/zones/create', {
          branch_id: formState.branch,
          zone_name: formState.zone,
        });
        alert('Zone registered successfully!');
      }
      onClose();
    } catch (error) {
      alert('Error saving zone: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
    >
      <div
        className="bg-white p-8 rounded-lg w-140 h-auto shadow-md relative"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-900"
          title="Close"
        >
          <FaTimes />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          {activeTab === 'district'
            ? editItem ? 'Update District' : 'District Registration'
            : activeTab === 'branch'
            ? editItem ? 'Update Branch' : 'Branch Registration'
            : editItem ? 'Update Zone' : 'Zone Registration'}
        </h2>

        {/* Tabs */}
        <div className="flex justify-around mb-4 space-x-4">
          <button
            onClick={() => { setActiveTab('district'); setFormState({ district: '', branch: '', zone: '' }); }}
            className={`px-4 py-2 w-full rounded-t-md ${activeTab === 'district' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            District
          </button>
          <button
            onClick={() => { setActiveTab('branch'); setFormState({ district: '', branch: '', zone: '' }); }}
            className={`px-4 py-2 w-full rounded-t-md ${activeTab === 'branch' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Branch
          </button>
          <button
            onClick={() => { setActiveTab('zone'); setFormState({ district: '', branch: '', zone: '' }); }}
            className={`px-4 py-2 w-full rounded-t-md ${activeTab === 'zone' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Zone
          </button>
        </div>

        {/* Forms */}
        {activeTab === 'district' && (
          <>
            <label className="block mb-2">District</label>
            <input
              type="text"
              name="district"
              value={formState.district}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter district name"
            />
            <button
              onClick={handleSubmitDistrict}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? (editItem ? 'Updating...' : 'Registering...') : (editItem ? 'Update' : 'Register')}
            </button>
          </>
        )}

        {activeTab === 'branch' && (
          <>
            <label className="block mb-2">District</label>
            <select
              name="district"
              value={formState.district}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district._id} value={district._id}>
                  {district.district_name}
                </option>
              ))}
            </select>

            <label className="block mb-2">Branch</label>
            <input
              type="text"
              name="branch"
              value={formState.branch}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter branch name"
            />
            <button
              onClick={handleSubmitBranch}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? (editItem ? 'Updating...' : 'Registering...') : (editItem ? 'Update' : 'Register')}
            </button>
          </>
        )}

        {activeTab === 'zone' && (
          <>
            <label className="block mb-2">District</label>
            <select
              name="district"
              value={formState.district}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district._id} value={district._id}>
                  {district.district_name}
                </option>
              ))}
            </select>

            <label className="block mb-2">Branch</label>
            <select
              name="branch"
              value={formState.branch}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
              disabled={!formState.district}
            >
              <option value="">Select Branch</option>
              {filteredBranches.map((branch) => (
                <option key={branch._id} value={branch._id}>
                  {branch.branch_name}
                </option>
              ))}
            </select>

            <label className="block mb-2">Zone</label>
            <input
              type="text"
              name="zone"
              value={formState.zone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter zone name"
            />
            <button
              onClick={handleSubmitZone}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? (editItem ? 'Updating...' : 'Registering...') : (editItem ? 'Update' : 'Register')}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DistrictRegistrationForm;
