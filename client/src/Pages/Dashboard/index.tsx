import React from 'react';
import Box from '@mui/material/Box';
import SideNav from '../../Components/SideNav';
import Notifications from './notifications';
import DashboardSection from './DashboardSection';
const Dashboard: React.FC = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <SideNav  />    
      <DashboardSection />
      <Notifications name='adham'/>
    </Box>
  );
}

export default Dashboard;
