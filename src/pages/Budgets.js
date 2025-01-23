import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Budgets = () => {
  const data = [
    { id: 1, server: 'Server 1', usage: '50%', budget: '$500' },
    { id: 2, server: 'Server 2', usage: '70%', budget: '$700' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Server</TableCell>
            <TableCell>Usage</TableCell>
            <TableCell>Budget</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.server}</TableCell>
              <TableCell>{row.usage}</TableCell>
              <TableCell>{row.budget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Budgets;
