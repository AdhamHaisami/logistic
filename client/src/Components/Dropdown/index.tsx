import * as React from 'react';
import {Box} from '@mui/material';
import {ClickAwayListener} from '@mui/material';

 const ClickAway: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: object = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <button type='button' onClick={handleClick}>
          Open menu dropdown
        </button>
        {open ? (
          <Box sx={styles}>
            Click me, I will stay visible until you click outside.
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default ClickAway;
