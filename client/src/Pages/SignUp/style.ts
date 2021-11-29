import { createStyles } from '@material-ui/core';


const style = createStyles({
  rightSec: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  leftSec: {
    backgroundColor: '#101357',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },
  label: {
    mb: '8px',

  },
  textField: {
    mb: '24px',
    width: 345
  }
});

export default style;
