import React from 'react';
import {Typography} from '@mui/material';

import { ReactComponent as Facebook } from '../assets/Facebook.svg';
import { ReactComponent as Google } from '../assets/Google.svg';
import { ReactComponent as Twitter } from '../assets/Twitter.svg';

const Footer: React.FC = () =>  {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        position: 'relative',
        bottom: 0,
      }}
    >
      <Typography>copyright © 2021 all rights </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <a href='#'>
          <Facebook />
        </a>
        <a href='#'>
          <Google />
        </a>
        <a href='#'>
          <Twitter />
        </a>
      </div>
    </div>
  );
}

export default Footer;
