import React, { useState, useRef } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import STPopover from '../core/popover';

export const STInput = withStyles((theme) => ({
  label: {
    fontSize: '14px',
  },
}))(({ classes, checked, parentFef, ...props }) => {
  return (
    <FormControl className={classes.margin} ref={parentFef}>
      <InputLabel htmlFor="input-with-icon-adornment">Address</InputLabel>
      <Input value="5381 Mcgowen St" {...props} />
    </FormControl>
  );
});

export const PopoverExampleSm = () => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handlePopoverOpen = (event) => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <STInput onFocus={handlePopoverOpen} parentFef={anchorEl} />
      <STPopover
        anchorEl={anchorEl.current}
        open={open}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        width={253}
        text="Should we update this parameter in user’s preferences?"
        update={true}
      />
    </div>
  );
};

export const PopoverExampleLg = () => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handlePopoverOpen = (event) => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <STInput onFocus={handlePopoverOpen} parentFef={anchorEl} />
      <STPopover
        anchorEl={anchorEl.current}
        open={open}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        width={350}
        text="The task name should describe exactly what the user needs in 3-4 words (e.g. Lakers VIP ticket, DHL delivery) and will be displayed for the user.
        You may type or highlight the text in the message to extract it."
      />
    </div>
  );
};

export const PopoverExampleArrowLeft = () => {
  return (
    <div>
      <STPopover
        anchorEl={null}
        open={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        arrowPosition="left"
        width={350}
        text="The task name should describe exactly what the user needs in 3-4 words (e.g. Lakers VIP ticket, DHL delivery) and will be displayed for the user.
        You may type or highlight the text in the message to extract it."
      />
    </div>
  );
};
