import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
            text:"Bar chart"
        }
    }
  }

  const data = {
    labels:['PRISMA', 'DATADOG', 'THREAT','OTHER'],
    datasets:[
        {
            label:'CRITICAL',
            data:[11,13,12,14],
           backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label:'HIGH',
            data:[1,3,2,6],
             backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label:'LOW',
          data:[1,3,2,6],
           backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label:'MEDIUM',
        data:[11,13,12,14],
       backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    ]
  }

export default function Barchart() {
  return (
    <div style={{width: 400,height: 400}}>
    <Bar options={options} data={data} />
    </div>
  )
}
