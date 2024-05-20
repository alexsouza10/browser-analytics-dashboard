import React from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { ChartContainer, ChartTitle, ChartsContainer } from './BrowserChartsStyles';
Chart.register(...registerables);

interface BrowserChartsProps {
  browsersData: { title: string; accesses: number; accessDate: string }[];
}

const BrowserCharts: React.FC<BrowserChartsProps> = ({ browsersData }) => {
  const sortedData = [...browsersData].sort((a, b) => new Date(a.accessDate).getTime() - new Date(b.accessDate).getTime());
  const labels = sortedData.map(browser => browser.title);
  const accessCounts = sortedData.map(browser => browser.accesses);
  const accessDates = sortedData.map(browser => new Date(browser.accessDate).toLocaleDateString());

  const barData = {
    labels,
    datasets: [
      {
        label: 'Number of Accesses',
        data: accessCounts,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: accessDates,
    datasets: [
      {
        label: 'Number of Accesses Over Time',
        data: accessCounts,
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  const pieData = {
    labels,
    datasets: [
      {
        label: 'Access Distribution',
        data: accessCounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const radarData = {
    labels,
    datasets: [
      {
        label: 'Access Frequency',
        data: accessCounts,
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <ChartsContainer>
        <ChartContainer>
          <ChartTitle>Number of Accesses by Browser</ChartTitle>
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
        </ChartContainer>
        <ChartContainer>
          <ChartTitle>Number of Accesses Over Time</ChartTitle>
          <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
        </ChartContainer>
        <ChartContainer>
          <ChartTitle>Access Distribution by Browser</ChartTitle>
          <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
        </ChartContainer>
        <ChartContainer>
          <ChartTitle>Access Frequency by Browser</ChartTitle>
          <Radar data={radarData} options={{ responsive: true, maintainAspectRatio: false }} />
        </ChartContainer>
      </ChartsContainer>
    </div>
  );
};

export default BrowserCharts;
