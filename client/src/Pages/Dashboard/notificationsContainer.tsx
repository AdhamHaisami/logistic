import React from 'react';
import { useSelector } from 'react-redux';

import Notification from '../../Components/Notification';
import {Typography} from '@mui/material';

function NotificationsContainer() {
  const notifications = useSelector((state: any) => state.notifications );

  return (
    <div style={{margin: '10px 0'}}>
      <Typography variant='h6' fontWeight='bold'>
        Notifications
      </Typography>
      {notifications.map((n: any) => <Notification title={n.title} message={n.message} /> )}
     
    </div>
  )
}

export default NotificationsContainer
