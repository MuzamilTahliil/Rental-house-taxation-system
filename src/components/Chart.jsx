import React from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ chartType, title, data }) => {
  const chartData = {
    donut: {
      labels: data?.labels || [],
      values: data?.values || [],
      backgroundColor: ['#4CAF50', '#FF9800', '#F44336', '#2196F3'],  // Colors for Donut chart
    },
    line: {
      labels: data?.labels || [],
      values: data?.values || [],
    },
    bar: {
      labels: data?.labels || [],
      values: data?.values || [],
    },
  };

  let chartComponent = null;
  if (chartType === 'donut') {
    chartComponent = (
      <Doughnut
        data={{
          labels: chartData.donut.labels,
          datasets: [
            {
              data: chartData.donut.values,
              backgroundColor: chartData.donut.backgroundColor,
            },
          ],
        }}
      />
    );
  } else if (chartType === 'line') {
    chartComponent = (
      <Line
        data={{
          labels: chartData.line.labels,
          datasets: [
            {
              label: title,
              data: chartData.line.values,
              borderColor: '#4CAF50',
              fill: false,
              tension: 0.4,
            },
          ],
        }}
      />
    );
  } else if (chartType === 'bar') {
    chartComponent = (
      <Bar
        data={{
          labels: chartData.bar.labels,
          datasets: [
            {
              label: title,
              data: chartData.bar.values,
              backgroundColor: '#4CAF50',
            },
          ],
        }}
      />
    );
  }

  return (
    <div className="bg-white p-2 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {chartComponent}
    </div>
  );
};

export default Chart;
