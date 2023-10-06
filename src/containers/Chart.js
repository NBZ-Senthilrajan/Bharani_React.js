import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
  
  },
  scales: {
    x: {
      grid: {
        display: false,  
      },
    },
    y: {
      grid: {
        display: false,  
      },
    },
}
}
// Data for the chart
const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:[9,7,6,5,4,2,1],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 10,
    },
   
  ],
};

function ChartComponent() {
  return <Line options={options} data={data} />;
}
export default ChartComponent;