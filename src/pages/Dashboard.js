import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'graph'

  const locationsData = [
    { location: 'Delhi', highestUsage: 85, lowestUsage: 20, currentCharges: 12000 },
    { location: 'Mumbai', highestUsage: 90, lowestUsage: 15, currentCharges: 15500 },
    { location: 'Bangalore', highestUsage: 95, lowestUsage: 10, currentCharges: 18000 },
    { location: 'Hyderabad', highestUsage: 88, lowestUsage: 12, currentCharges: 10000 },
    { location: 'Chennai', highestUsage: 92, lowestUsage: 18, currentCharges: 13000 },
  ];

  // Data for the bar chart
  const chartData = {
    labels: locationsData.map((row) => row.location),
    datasets: [
      {
        label: 'Highest Usage (%)',
        data: locationsData.map((row) => row.highestUsage),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Lowest Usage (%)',
        data: locationsData.map((row) => row.lowestUsage),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Current Charges (₹)',
        data: locationsData.map((row) => row.currentCharges),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Usage and Charges by Location',
      },
    },
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Toggle between Table and Graph view to explore the data.</p>
      <div style={{ marginBottom: '20px' }}>
        <Button
          variant={viewMode === 'table' ? 'contained' : 'outlined'}
          onClick={() => setViewMode('table')}
          style={{ marginRight: '10px' }}
        >
          Table View
        </Button>
        <Button
          variant={viewMode === 'graph' ? 'contained' : 'outlined'}
          onClick={() => setViewMode('graph')}
        >
          Graph View
        </Button>
      </div>
      {viewMode === 'table' ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Location</b></TableCell>
                <TableCell><b>Highest Usage (%)</b></TableCell>
                <TableCell><b>Lowest Usage (%)</b></TableCell>
                <TableCell><b>Current Charges (₹)</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locationsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.highestUsage}</TableCell>
                  <TableCell>{row.lowestUsage}</TableCell>
                  <TableCell>{row.currentCharges}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
