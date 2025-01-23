import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress, Box, Typography } from '@mui/material';

const Capacity = () => {
  const serverData = [
    { name: 'Server A', category: 'Database', used: 354692, total: 369735 },
    { name: 'Server B', category: 'Web', used: 123000, total: 150000 },
    { name: 'Server C', category: 'Cache', used: 80000, total: 100000 },
    { name: 'Server D', category: 'File Storage', used: 45000, total: 200000 },
    { name: 'Server E', category: 'Compute', used: 275000, total: 300000 },
  ];

  const getMeterColor = (percentage) => {
    if (percentage >= 75) return 'success';
    if (percentage >= 50) return 'warning';
    return 'error';
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Capacity
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Server Name</b></TableCell>
              <TableCell><b>Category</b></TableCell>
              <TableCell><b>Used / Total</b></TableCell>
              <TableCell><b>Meter</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serverData.map((server, index) => {
              const percentageUsed = (server.used / server.total) * 100;
              return (
                <TableRow key={index}>
                  <TableCell>{server.name}</TableCell>
                  <TableCell>{server.category}</TableCell>
                  <TableCell>{`${server.used.toLocaleString()} of ${server.total.toLocaleString()}`}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LinearProgress
                        variant="determinate"
                        value={percentageUsed}
                        color={getMeterColor(percentageUsed)}
                        sx={{ width: '100%', marginRight: '10px' }}
                      />
                      <Typography variant="body2">{`${Math.round(percentageUsed)}%`}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Capacity;
