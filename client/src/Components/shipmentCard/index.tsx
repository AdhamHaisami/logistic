import React from 'react'
import {Card, CardContent, Typography} from '@mui/material';

interface Props{
  name: string;
  from: string;
  to: string;
  date: string;
  time: string;
  status: string;
}

const ShipmentCard: React.FC<Props> = ({name, from, to, date, time, status}) => {
  return (
    <Card sx={{mb: '50px',  minWidth: '420px'}}>
      <Typography variant='h6'>{name}</Typography>
      <CardContent style={{display: 'flex', justifyContent: 'space-between',}}>
        <div>
          <h4>Location</h4>
          {from} to {to}
        </div>
        <div>
          <h4>Date</h4>
          {date}
        </div>
        <div>
          <h4>Time</h4>
          {time}
        </div>
        <div>
          <h4>Status</h4>
          {status}
        </div>
      </CardContent>
    </Card>
  )
}

interface Prop{
  to: string;
}

export default ShipmentCard
