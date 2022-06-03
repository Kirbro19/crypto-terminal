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

export const CoinChart = ({sparkline_in_7d, name}) => {
  const arrPrice = sparkline_in_7d.price;
  const numbers = arrPrice.map((number, i) => {
    number = i + 1;
    return number;
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "7 days line chart",
      },
    },
  };

  const labels = [...numbers];

  const data = {
    labels,
    datasets: [
      {
        label: `${name} price`,
        data: sparkline_in_7d.price,
        // borderColor: "rgb(255, 99, 132)",
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
