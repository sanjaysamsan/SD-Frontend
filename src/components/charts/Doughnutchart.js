import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    reponsive:true,
    plugins:{
        legend:{
            position:'bottom'
        },
        title:{
            display:true,
            text:"Doughnut chart"
        }
    }
  }
const data = {
  labels: ['High', 'medium', 'low', 'crticial'],
  datasets: [
    {
      label: 'alerts',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
       
      ],
      borderWidth: 1,
    },
  ],
};

export default function Doughnutchart() {
  return (
    <div style={{width: 400,height: 400}}>
    <Doughnut options={options} data={data} />
    </div>
  )
}
