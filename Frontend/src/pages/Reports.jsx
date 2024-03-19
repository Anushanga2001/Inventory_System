import React from 'react';
import { Line } from 'react-chartjs-2';

const Reports = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h2>Graph Analytics</h2>
      <div style={{height: '400px', width: '600px'}}> {/* Adjust dimensions */}
        <Line data={data} />
      </div>
    </div>
  );
};

export default Reports;
