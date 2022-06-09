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

export const CoinChart = ({ sparkline_in_7d, name }) => {
  const arrPrice = sparkline_in_7d.price;
  const date = new Date();
  const hoursPerWeek = 168;
  let time = [];

  const sevenDayslabels = () => {
    for (let i = 1; i <= arrPrice.length; i++) {
      const el = new Date(date - 1000 * 60 * 60 * (hoursPerWeek - i));

      let day = el.getDate();
      if (day.toString().length < 2) {
        day = `0${el.getDate()}`;
      }
      let month = el.getMonth() + 1;
      if (month.toString().length < 2) {
        month = `0${el.getMonth() + 1}`;
      }
      let hour = el.getHours();
      if (hour.toString().length < 2) {
        hour = `0${el.getHours()}`;
      }
      let minutes = el.getMinutes();
      if (minutes.toString().length < 2) {
        minutes = `0${el.getMinutes()}`;
      }
      time[i] = `${day}.${month} ${hour}:${minutes}`;
    }
    return time;
  };

  sevenDayslabels();

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

  const labels = [...time];
  const data = {
    labels,
    datasets: [
      {
        label: `${name} price`,
        data: sparkline_in_7d.price,
        // borderColor: "rgb(255, 99, 132)", // red
        borderColor: "rgb(53, 162, 235)", // blue
        // backgroundColor: "rgba(255, 99, 132, 0.5)", // red
        backgroundColor: "rgb(53, 162, 235, 0.5)", // blue
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
