import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data, label, labels }) => {
  const chartData = {
    labels: labels,

    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: ['red', 'red', 'red']
      }
    ]
  };

  return (
    <>
      <Doughnut data={chartData} width={600} height={600} />
    </>
  );
};

export default Chart;
