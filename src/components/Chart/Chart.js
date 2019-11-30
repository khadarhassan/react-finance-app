import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data, label, labels, colors }) => {
  const chartData = {
    labels: labels,

    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: colors
      }
    ]
  };

  return (
    <>
      <Doughnut
        data={chartData}
        width={600}
        height={600}
        options={{ maintainAspectRatio: false }}
      />
    </>
  );
};

export default Chart;
