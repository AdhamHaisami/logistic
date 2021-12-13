import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MyCard from '../../Components/Card';
import ShipmentCard from '../../Components/shipmentCard';

import { useSelector } from 'react-redux';



function DashboardSection() {
  const cards = useSelector((state: any) => state.cards );
  const shipmentsCards = useSelector((state: any) => state.shipmentsCards );
  
  
  return (
    <Box sx={{width: '65%', margin: '20px 5px'}} >
          <Typography variant='h4'>Dashboard</Typography>
          <Typography>Quick start</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {cards.map((card: any) => <MyCard title={card.title} number = {card.number} /> )}            
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '20px'}}>
            <Box>
              <Typography variant='h5' sx={{mb: '20px'}}>Shipments</Typography>
              
              {shipmentsCards.map((state: any) => <ShipmentCard name={state.name} from={state.location.from} to={state.location.to} date={state.date} time={`${state.time.from} - ${state.time.to}`} status={state.status} />)}
            </Box>
            <Box sx={{width: '100%'}}>
              <Typography variant='h5'  sx={{mb: '20px'}}>Statistics</Typography>
            </Box>
          </Box>
        </Box>
  )
}

export default DashboardSection
