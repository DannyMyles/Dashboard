import axios from "axios";
import React, {useEffect, useState} from "react";
import { Line } from "react-chartjs-2";


const Graph = () => {
  const [graphData, setGraphData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(
        "https://fe-task-api.mainstack.io/"
        
      );
      console.log(fetchData)
      const views = graphData.data.map((post) => data.graph_data.views);
      const location = graphData.data.map((post) => data.top_locations);
      const source = graphData.data.map((post) => data.top_sources)
      setGraphData({
        labels: views,
        datasets: [
          {
            label: "views",
            data: location,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      });
    };
    console.log(fetchData()) 
  }, []);

  return <div className="CustomerReview">
        <Line options={graphData.options} series={graphData.series} type="area" />
  </div>;
};

export default Graph;
