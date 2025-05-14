import React from 'react';

const PredictionIncomeCard = ({ income }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Prediction Income</h3>
      <p className="text-2xl font-bold">${income}</p>
    </div>
  );
};

export default PredictionIncomeCard;
