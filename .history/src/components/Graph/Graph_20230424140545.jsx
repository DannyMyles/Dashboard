import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2'; // import the Line chart from react-chartjs-2

function Graph() {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://fe-task-api.mainstack.io/');
        setGraphData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const data = {
    labels: graphData.labels || [],
    datasets: [
      {
        label: 'Data',
        data: graphData.data || [],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default Graph;
