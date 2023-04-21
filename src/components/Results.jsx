import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import "./App.css";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default function Results() {
  const options = {};
  const data2 = {
    labels: ["low", "mid", "high"],
    datasets: [
      {
        label: "service rate",
        data: [2, 4, 7],
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const data3 = {
    labels: ["low", "mid", "high"],
    datasets: [
      {
        label: "hotel rate",
        data: [1, 2, 5],
        backgroundColor: "aqua",
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  };
  const data = {
    labels: ["low", "mid", "high"],
    datasets: [
      {
        label: "food rate",
        data: [2, 3, 7],
        backgroundColor: "red",
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "800px",
      }}
    >
      <Bar data={data} options={options} />
      <Bar data={data2} options={options} />
      <Bar data={data3} options={options} />
    </div>
  );
}
