import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';
  
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  
  
  const options = {
    reponsive:true,
    plugins:{
        legend:{
            position:'bottom'
        },
        title:{
            display:true,
            text:"polar chart"
        }
    }
  }
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'alerts',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
export default function Polarchart() {
  return (
    <div style={{width: 400,height: 400}}>
    <PolarArea options={options} data={data} />
    </div>
  )
}
