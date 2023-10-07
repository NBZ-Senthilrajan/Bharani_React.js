import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./containers.scss";
import { useDispatch, useSelector } from "react-redux";
// Register Chart.js
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
      position: "top",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "black",
        borderWidth: 5,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: "black",
        borderWidth: 5,
        stepSize: 2,
        max: 12,
        min: 1,
      },
    },
  },
};

// Data for the chart
const labels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016","2017","2018"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset",
      data: [5, , 4, , 3, 2, 1],
      borderColor: "rgba(255, 99, 132, 0)",
      borderWidth: 0,
      backgroundColor: "#000",
      pointRadius: 20,
    },
  ],
};

const ChartComponent = () => {
  const { selectedItem ,isSelected} = useSelector((state) => state.OperationState);
  const dispatch = useDispatch();
  return (
    <div className="container p-3">
      <div className="card m-3 rounded-5">
        <div className="card-body">
          <div className="chart_container d-flex">
            <Line options={options} data={data} />
            {isSelected&&<div>
              <h2>{selectedItem.header}</h2>
              <img src={selectedItem.icon} className="w-100" alt="operation icon"/>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChartComponent;
