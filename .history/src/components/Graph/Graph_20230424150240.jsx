import axios from "axios";
import React, {useEffect, useState} from "react";
import { Line } from "react-chartjs-2";


const Graph = () => {
  const [graphData, setGraphData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://fe-task-api.mainstack.io/"
      );
      const labels = result.data.map((post) => post.id);
      const values = result.data.map((post) => post.title);
      setGraphData({
        labels: labels,
        datasets: [
          {
            label: "views",
            data: values,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      });
    };
    fetchData();
  }, []);

  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["linear-gradient(180deg, rgba(255, 84, 3, 0.2) 0%, rgba(255, 84, 3, 0) 100%)"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return <div className="CustomerReview">
        <Line options={graphData.options} series={data.series} type="area" />
  </div>;
};

export default Graph;
