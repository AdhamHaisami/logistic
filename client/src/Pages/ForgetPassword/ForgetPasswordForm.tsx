import React from 'react';
import {Box, Typography, TextField, Button } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logoBlue.svg';

import style from './style';

const ForgetPasswordForm = () => {
  return (
    <Box sx={style.form}>
    <Logo />
    <Typography variant='h5'>Forget Password</Typography>
    <Typography>Email </Typography>
    <TextField variant='outlined' label='Email' sx={style.input} />
  
    <Button variant='contained'>SIGN IN</Button>
  </Box>
  )
}

export default ForgetPasswordForm
