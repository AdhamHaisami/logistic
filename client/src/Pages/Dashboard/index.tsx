import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyCard from '../../Components/Card';
import SideNav from '../../Components/SideNav';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <SideNav />
      <Box>
        <Typography variant='h4'>Dashboard</Typography>
        <Typography>Dashboard</Typography>
        <Typography>Quick start</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '20px'}}>
          <Box>Shipments</Box>
          <Box>Statistics</Box>
        </Box>
      </Box>
      <div style={{ width: '40%' }}>Hello Admin</div>
    </Box>
  );
}

export default Dashboard;
