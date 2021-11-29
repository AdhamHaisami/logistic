import React from 'react';
import {Box, Typography, TextField, Button } from '@mui/material';

import { ReactComponent as Logo } from '../../assets/logoBlue.svg';

import style from './style';

function SignInForm() {
  return (
    <Box sx={style.form}>
      <Logo />
      <Typography variant='h5'>Sign In to your account </Typography>
      <Typography>Email </Typography>
      <TextField variant='outlined' label='Email' sx={style.input} />
      <Typography>Password </Typography>
      <TextField
        variant='outlined'
        label='Password'
        type='password'
        sx={style.input}
      />
      <Button variant='contained'>SIGN IN</Button>
    </Box>
  );
}

export default SignInForm;
