import React, { useState } from 'react';
import {Button} from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import {LocalizationProvider, DatePicker } from '@mui/lab';
import {TextField, Typography, MenuItem} from '@mui/material';

import style from './style';

const genders = [
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'female',
    label: 'female',
  },
];

function SignUpForm() {
  const [gender, setGender] = useState(null);
  const [value, setValue] = useState<Date | null>(null);


  const handleChange = (event: any) => {
    setGender(event.target.value);
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Typography variant='h3' sx={{mb: '45px'}}>Sign Up</Typography>
      <Typography sx={style.label}>Full Name</Typography>
      <TextField variant='outlined' label='Name' sx={style.textField} />
      <Typography sx={style.label}>Gender</Typography>
      <TextField
      sx={style.textField}
        id='select-gender'
        select
        label='I am a'
        value={gender}
        onChange={handleChange}
      >
        {genders.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Typography sx={style.label}>Date of Birth</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker 
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
      <Typography sx={style.label}>Email </Typography>
      <TextField variant='outlined' label='Email' sx={style.textField} />
      <Typography sx={style.label}>Password </Typography>
      <TextField
       sx={style.textField}
        variant='outlined'
        label='Password'
        type='password'
      />
      <Button variant='contained'>SIGN Up</Button>

    </div>
  );
}

export default SignUpForm;
