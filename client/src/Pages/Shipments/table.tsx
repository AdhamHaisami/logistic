import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  id: string,
  pickup: string,
  dropOff: string,
  shipmentDate: string,
  dateAdd: string,
  cost: number,
  driver: string,
  status: string
) {
  return { id, pickup, dropOff, shipmentDate, dateAdd, cost, driver, status };
};

const rowsArr = [
  {
    id: 'abvdfdfds',
    pickup: 'Gaza, abc',
    dropOff: 'Rafah, abc',
    shipmentDate: 'April 22, 2021',
    dateAdd: 'April 22, 2021',
    cost: 20,
    driver: 'Mohammed Ahmed',
    status: 'done'
  },
  {
    id: 'abvdfdfds',
    pickup: 'Gaza, abc',
    dropOff: 'Rafah, abc',
    shipmentDate: 'April 22, 2021',
    dateAdd: 'April 22, 2021',
    cost: 20,
    driver: 'Mohammed Ahmed',
    status: 'done'
  },
  {
    id: 'abvdfdfds',
    pickup: 'Gaza, abc',
    dropOff: 'Rafah, abc',
    shipmentDate: 'April 22, 2021',
    dateAdd: 'April 22, 2021',
    cost: 20,
    driver: 'Mohammed Ahmed',
    status: 'done'
  }
];

const rows = rowsArr.map(({ id, pickup, dropOff, shipmentDate, dateAdd, cost, driver, status}) => createData( id, pickup, dropOff, shipmentDate, dateAdd, cost, driver, status));

const ShipmentTable: React.FC = () => {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </TableContainer>
  )
};

export default ShipmentTable;