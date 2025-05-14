import React, { useState } from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    users: '10k users',
    districts: '18 Districts',
    houses: '30k Houses',
    taxRate: '5%',
    predictionIncome: '$543,735.00',
    predictionIncomeGraphData: {
      labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'],
      values: [400, 600, 500, 700],
    },
    revenueGraphData: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      values: [150000, 200000, 250000, 300000, 350000],
    },
    districtDistribution: {
      labels: ['Howlwadaag', 'Hodan', 'X/weyne', 'Yaaqshiid', 'Kaxta'],
      values: [50.5, 38.4, 40.0, 20.1, 10.8],
    },
  });

  const [selectedQuarter, setSelectedQuarter] = useState('Quarter 1');
  const [selectedYear, setSelectedYear] = useState('2023');

  const handleQuarterChange = (event) => {
    setSelectedQuarter(event.target.value);
    // Add logic here to filter data or perform actions based on the selected quarter
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    // Add logic here to filter data or perform actions based on the selected year
  };

  // Donut Chart Data for District Distribution
  const districtData = {
    labels: dashboardData.districtDistribution.labels,
    datasets: [
      {
        data: dashboardData.districtDistribution.values,
        backgroundColor: ['#4CAF50', '#FF9800', '#F44336', '#2196F3', '#9C27B0'],
      },
    ],
  };

  // Chart Options to hide the label inside the donut chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            const total = context.dataset.data.reduce((sum, value) => sum + value, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label} ${percentage}%`; // Display percentage in tooltip
          },
        },
      },
    },
  };

  return (
    <div className="p-12 space-y-6">
      {/* First Row - Cards */}
      <div className="grid grid-cols-4 gap-6">
        {/* Cards for Users, Districts, Total Houses, Taxes Rate */}
        <div className="bg-[#d1e7fd] p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">👥</div>
          <div className="text-lg font-semibold">All Users</div>
          <div className="text-2xl font-bold">{dashboardData.users}</div>
        </div>
        <div className="bg-[#d8eaff] p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">🏙️</div>
          <div className="text-lg font-semibold">All Districts</div>
          <div className="text-2xl font-bold">{dashboardData.districts}</div>
        </div>
        <div className="bg-[#d1e7fd] p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">🏠</div>
          <div className="text-lg font-semibold">Total Houses</div>
          <div className="text-2xl font-bold">{dashboardData.houses}</div>
        </div>
        <div className="bg-[#d8eaff] p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">💰</div>
          <div className="text-lg font-semibold">Taxes Rate</div>
          <div className="text-2xl font-bold">{dashboardData.taxRate}</div>
        </div>
      </div>

      {/* Second Row - Prediction Income Over Time and Donut Chart */}
      <div className="grid grid-cols-3 gap-6">
        {/* Prediction Income Over Time (Line Chart) */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Prediction Income Over Time</h3>
          <Line
            data={{
              labels: dashboardData.predictionIncomeGraphData.labels,
              datasets: [
                {
                  label: 'Prediction Income Over Time',
                  data: dashboardData.predictionIncomeGraphData.values,
                  borderColor: '#4CAF50',
                  fill: false,
                  tension: 0.4,
                },
              ],
            }}
          />
        </div>

        {/* Donut Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">District Distribution</h3>
            {/* Dropdown for selecting year */}
            <div>
              <select id="yearSelect" value={selectedYear} onChange={handleYearChange} className="p-2 border rounded">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <Doughnut data={districtData} options={chartOptions} />
          </div>
          {/* Displaying labels with percentages below the chart */}
          <div className="mt-4 text-left text-gray-600">
            {dashboardData.districtDistribution.labels.map((label, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: districtData.datasets[0].backgroundColor[index] }}
                ></div>
                <div>{label} {dashboardData.districtDistribution.values[index].toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Row - Total Income by Year (Bar Chart) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Total Income by Year</h3>
          {/* Dropdown for selecting year */}
          <div>
            <select id="yearSelect" value={selectedYear} onChange={handleYearChange} className="p-2 border rounded">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
        <Bar
          data={{
            labels: dashboardData.revenueGraphData.labels,
            datasets: [
              {
                label: 'Total Income by Year',
                data: dashboardData.revenueGraphData.values,
                backgroundColor: '#4CAF50',
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
