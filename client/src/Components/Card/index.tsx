import React from 'react';
import {CardContent} from '@mui/material';
import {Typography} from '@mui/material';
import {Card} from '@mui/material';

function MyCard() {
  return (
    <Card sx={{ height: 110 }}>
      <CardContent>
        <Typography>Total Shipments</Typography>
        <Typography>31,454</Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;
