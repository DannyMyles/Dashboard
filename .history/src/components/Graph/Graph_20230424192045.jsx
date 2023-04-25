import {useState , useEffect} from 'react'
import { Line } from 'react-chartjs-2';

const Graph = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://fe-task-api.mainstack.io/');
        
        const data = await response.json();
        console.log("this is",data)
        setChartData({
          labels: data.data.map(entry => entry.date),
          datasets: [
            {
              label: 'Data',
              data: data.map(entry => entry.value),
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 2,
            },
          ],
        });
      }
  
      fetchData();
    }, []);
  
    return (
      <div>
        <Line data={chartData} />
      </div>
    );
  }
  

export default Graph
