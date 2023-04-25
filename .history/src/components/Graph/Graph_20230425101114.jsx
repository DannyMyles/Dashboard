import {useState , useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale, PointElement, LineElement, LinearScale, } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, PointElement, LineElement, LinearScale,);
const Graph = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://fe-task-api.mainstack.io/');
        
        const data = await response.json();
        console.log("data",data)
        
        if (data.data) {
          setChartData({
            labels: data.data.map(item => item.data.graph_data),
            datasets: [
              {
                label: 'views',
                data: data.data.map(item => item.graph_data.views[1]),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
              },
              {
                label: 'top_locations',
                data: data.data.map(item => item.top_locations),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
              },
              {
                label: 'top_sources',
                data: data.data.map(item => item.top_locations),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
              },
            ],
          });
        }
      }
    
      fetchData();
    }, []);
    
    
    return (
      <div>
        <Line data={chartData} options ={{
            responsive : true,
            legend : {position : "top"},
            title : {display : true}
        }} />
      </div>
    );
  }
  

export default Graph
