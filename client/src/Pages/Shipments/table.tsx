import * as React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {ReactComponent as ViewIcon} from '../../assets/view.svg';
import {ReactComponent as EditIcon} from '../../assets/edit.svg';
import {ReactComponent as TrashIcon} from '../../assets/trash.svg';

const ShipmentTable: React.FC = () => {
  const shipments = useSelector((state: any) => state.shipments);
  
  return(
    <TableContainer component={Paper} sx={{ ml: '2rem' }} elevation={0}>
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>ID</TableCell>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>Pickup</TableCell>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>dropOff</TableCell>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>Shipment Date</TableCell>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>Date Add</TableCell>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>Cost</TableCell>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>Driver</TableCell>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>Status</TableCell>
            <TableCell sx={{ fontSize: '16px', color: '#9599A2' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shipments.map((row: any) => (
            <TableRow>
              <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', fontSize: '16px' }}>
                  {row.id}
                </Box>
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} component="th" scope="row">
                {row.pickup}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} component="th" scope="row">
                {row.dropOff}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} component="th" scope="row">
                {row.shipmentDate}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} component="th" scope="row">
                {row.dateAdd}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} component="th" scope="row">
                {row.cost}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} component="th" scope="row">
                {row.driver}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} component="th" scope="row">
                {row.status}
              </TableCell>
              <TableCell sx={{ fontSize: '16px' }} component="th" scope="row">
                  <ViewIcon style={{marginRight: '10px'}}/>
                  <EditIcon style={{marginRight: '10px'}}/>
                  <TrashIcon style={{marginRight: '10px'}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </TableContainer>
  )
};

export default ShipmentTable;