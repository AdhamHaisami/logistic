import React from 'react';
import Typography from '@mui/material/Typography';
import MyCard from '../../Components/Card';
import Box from '@mui/material/Box';

function Dashboard() {
  return (
    <>
      <Typography variant='h4'>Dashboard</Typography>
      <br />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
        </div>
        <div style={{ width: '40%' }}>Hello Admin</div>
      </Box>
    </>
  );
}

export default Dashboard;
