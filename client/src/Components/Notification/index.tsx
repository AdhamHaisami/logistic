import React from 'react';
import {Box, Typography} from '@mui/material';

interface Props {
  title: string;
  message: string;
}

const Notification: React.FC <Props> = ({title,message}) => {
  return (
    <Box sx={{margin: '20px'}}>
      <Typography>{title}</Typography>
      <Typography>{message}</Typography>
    </Box>
  )
}

export default Notification
