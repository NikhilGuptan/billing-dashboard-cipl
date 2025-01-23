import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';

const Navigation = () => {
  const location = useLocation();

  const tabMapping = [
    { label: 'Dashboard', path: '/' },
    { label: 'Budgets', path: '/budgets' },
    { label: 'Capacity', path: '/capacity' },
    { label: 'Billing Estimates', path: '/billing-estimates' },
    { label: 'Data Storage', path: '/data-storage' },
  ];

  const activeTabIndex = tabMapping.findIndex((tab) => tab.path === location.pathname);

  return (
    <Box sx={{ width: '100%', backgroundColor: '#f0f0f0', padding: '10px 0' }}>
      <Tabs
        value={activeTabIndex === -1 ? 0 : activeTabIndex}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabMapping.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            component={NavLink}
            to={tab.path}
            sx={{
              textTransform: 'none',
              fontWeight: activeTabIndex === index ? 'bold' : 'normal',
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navigation;
