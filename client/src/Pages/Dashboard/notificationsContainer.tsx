import React from 'react';
import Notification from '../../Components/Notification';
import {Typography} from '@mui/material';

function NotificationsContainer() {
  return (
    <div style={{margin: '10px 0'}}>
      <Typography variant='h6' fontWeight='bold'>
        Notifications
      </Typography>
      <Notification title='Booking reminder' message='Lorem ipsum dolor sit amet, consetetur'/>
      <Notification title='Booking reminder' message='Lorem ipsum dolor sit amet, consetetur'/>
      <Notification title='Booking reminder' message='Lorem ipsum dolor sit amet, consetetur'/>
     
    </div>
  )
}

export default NotificationsContainer
