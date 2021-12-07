import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MyCard from '../../Components/Card';
import ShipmentCard from '../../Components/shipmentCard';


function DashboardSection() {
  return (
    <Box sx={{width: '65%', margin: '20px 5px'}} >
          <Typography variant='h4'>Dashboard</Typography>
          <Typography>Dashboard</Typography>
          <Typography>Quick start</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <MyCard title='Total Shipments' number='31,454' />
              <MyCard title='Total Shipments' number='31,454' />
              <MyCard title='Total Shipments' number='31,454' />
              <MyCard title='Total Shipments' number='31,454' />
            
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '20px'}}>
            <Box>
              <Typography variant='h5' fontWeight='bold' sx={{mb: '20px'}}>Shipments</Typography>
              <ShipmentCard name='adham hai' from='gaza' to='Rafah' date='22/1/2022' time='11:00 - 12:00' status='Done'/>
              <ShipmentCard name='adham hai' from='gaza' to='Rafah' date='22/1/2022' time='11:00 - 12:00' status='Done'/>
              <ShipmentCard name='adham hai' from='gaza' to='Rafah' date='22/1/2022' time='11:00 - 12:00' status='Done'/>
            </Box>
            <Box sx={{width: '100%'}}>
              <Typography variant='h5' fontWeight='bold' sx={{mb: '20px'}}>Statistics</Typography>
              <div>
               <canvas id="myChart" width="100%" height="400"></canvas>
              </div>
            </Box>
          </Box>
        </Box>
  )
}

export default DashboardSection
