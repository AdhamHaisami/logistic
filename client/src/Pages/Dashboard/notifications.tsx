import React from 'react';
import {Typography,TextField, Box } from '@mui/material';
import NotificationsContainer from './notificationsContainer';

interface Props {
  name: string;
};

const Notifications:React.FC<Props> = ({name}) => {
  return (
    <Box sx={{width: '28%', margin: '20px 5px', border: '1px solid gray'}}>
      <Typography>Hello,</Typography>
      <Typography variant='h4'>{name}</Typography>
      <TextField  />
      <NotificationsContainer/>
    </Box>
  )
}

export default Notifications;
