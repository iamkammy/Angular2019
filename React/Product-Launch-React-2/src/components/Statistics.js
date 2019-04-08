import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import PieChart from 'react-simple-pie-chart';

class Statistics extends React.Component {
    componentDidMount() {
        // Pie chart
        var ctxP = document.getElementById("Statistics").getContext('2d');
        new Chart(ctxP, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
                datasets: [
                    {
                        data: [300, 50, 100, 40, 120],
                        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                    }
                ]
            },
            options: {
                responsive: true
            }
        });
    }
    render() {
        return (
        <Container>
          <canvas id="Statistics"></canvas>
          <div className="chart-section">
             <PieChart
   slices={[
    {
    color: '#F8B195',
      value: 10,
    },
    {
      color: '#F67280',
      value: 10,
    },
    {
        color: '#C06C84',
        value: 10,
      },
      {
        color: '#6C5B7B ',
        value: 15,
      },
      {
        color: '#355C7D ',
        value: 10,
      },
  ]}
/>
            </div>
        </Container>
        );
    }

};

export default Statistics;