import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Make sure to import Chart.js to avoid errors
// import './ActivityChart.css'; // Ensure you import your CSS

const ActivityChart = () => {
    const data = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
        datasets: [
            {
                label: 'Activity',
                data: [5000, 10000, 7000, 9000, 11000, 15000, 13000, 14000],
                borderColor: '#4A90E2',
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="activity-chart">
            <Line data={data} />
        </div>
    );
};

export default ActivityChart;
