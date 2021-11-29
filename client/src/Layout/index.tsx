import React from 'react';

import { withStyles } from '@material-ui/core';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Logistic } from '../assets/logistics.svg';

import style from './style';

function Layout(props: any) {
  const { classes } = props;
  return (
    <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
      <div className={classes.leftSec}>
        <Logo style={{ position: 'absolute', left: '32px', top: '32px' }} />
        <Logistic />
      </div>
      <div className={classes.rightSec}>
       {props.children}
      </div>
    </div>
  )
}

export default withStyles(style)(Layout);
