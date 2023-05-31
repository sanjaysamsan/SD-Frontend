import React from 'react'
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
    reponsive:true,
    plugins:{
        legend:{
            position:'bottom'
        },
        title:{
            display:true,
            text:"Line chart"
        }
    }
  }

  const data = {
    labels:['critical', 'high', 'low','MEDIUM'],
    datasets:[
        {
            label:'PRISMA',
            data:[11,13,12],
            borderColor: 'rgb(255, 99, 132)',
           backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label:'DATABOG',
            data:[1,3,2],
            borderColor: 'rgb(53, 162, 235)',
             backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ]
  }

export default function Linechart() {
  return (
    <div style={{width: 400,height: 400}}>
    <Line options={options} data={data} />
    </div>
  )
}
