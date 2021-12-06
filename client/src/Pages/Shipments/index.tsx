import React from 'react';
import SideNav from '../../Components/SideNav';
import Box from '@mui/material/Box';
import ShipmentTable from './table';



const Shipments: React.FC = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <SideNav/>
      <Box>
        <h3>Shipments</h3>
        <ShipmentTable/>
      </Box>
    </Box>
  )
}

export default Shipments
