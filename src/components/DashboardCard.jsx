import React from 'react';

const DashboardCard = ({ title, data, icon }) => {
  return (
    <div className=" rounded-lg  flex items-center justify-between">
      <div className="text-lg font-semibold">{icon} {title}</div>
      <div className="text-2xl font-bold">{data}</div>
    </div>
  );
};

export default DashboardCard;
