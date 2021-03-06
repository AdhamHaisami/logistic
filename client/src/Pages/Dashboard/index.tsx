import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import SideNav from '../../Components/SideNav';
import Notifications from './notifications';
import DashboardSection from './DashboardSection';
import {State} from '../../redux';

const Dashboard: React.FC = () => {
  const user = useSelector((state: any) => state.user)
 
  return (
    <Box sx={{display: 'flex'}}>
      <SideNav  />    
      <DashboardSection />
      <Notifications name={user.name} />
    </Box>
  );
};

export default Dashboard;
