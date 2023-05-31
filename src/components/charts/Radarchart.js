import React from 'react'
import { Radar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
function RadarChart() {
    const data = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
          {
            label: 'Data1',
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: 'Blue',
            borderColor: 'Black',
            borderWidth: 1,
          },
          {
            label: 'Data2',
            data: [3, 8, 5, 7, 4, 5],
            backgroundColor: 'Orange',
            borderColor: 'Black',
            borderWidth: 1,
          },
        ],
      }
      const options={
        responsiv: true,
        maintainAspectRatio: false,
      }
  return (
    <div className="App">
    <div style={{width:400, height:400}}> <Radar  data={data} options={options}></Radar></div>
    </div>
  )
}

export default RadarChart