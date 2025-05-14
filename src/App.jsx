import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MessageForm from './components/MessageForm';
import Report from './pages/Report';
import RentalTransactions from './pages/Transaction';
import Prediction from './pages/Prediction';
import DistrictTable from './pages/District';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1">
          {/* Navbar */}
          <Navbar />
          {/* Define the Routes for your app */}
          <Routes>
            {/* Main Dashboard route */}
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/messages" element={<MessageForm />} />
            <Route path="/report" element={<Report />} />
            <Route path="/transactions" element={<RentalTransactions />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/districts" element={<DistrictTable />} />





            {/* Add other routes here as needed */}
            {/* Example:
            <Route path="/users" element={<Users />} />
            */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
