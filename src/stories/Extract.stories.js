import React, { useState, useRef } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import STCheckbox from '../ui/core/checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS, CONSTANTS } from '../ui/STTheme';
import STPopover from '../ui/core/popover';
import { action } from '@storybook/addon-actions';
import STExtract from '../ui/core/extract';

export default {
  title: 'Stuff Extarct',
  component: STExtract,
};

const AnchorElement = withStyles((theme) => ({
  label: {
    fontSize: '14px',
  },
}))(({ classes, checked, parentFef, ...props }) => {
  return (
    <div className={classes.margin} ref={parentFef} {...props}>
      July 11
    </div>
  );
});

const STExtractExample = () => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };
  const data = [
    {
      label: 'Business name',
      value: 'business_name',
    },
    {
      label: 'Date',
      value: 'date',
    },
    {
      label: 'Time',
      value: 'time',
    },
    {
      label: 'Number of people',
      value: 'number',
      withLine: true,
    },
    {
      label: 'Add as new parameter',
      value: 'parameter',
      withLine: true,
    },
    {
      label: 'Add as new restriction',
      value: 'restriction',
      withLine: true,
    },
  ];
  return (
    <div>
      <AnchorElement onClick={handleToggleOpen} parentFef={anchorEl} />
      <STExtract
        anchorEl={anchorEl.current}
        open={open}
        caption="Add to:"
        onClose={handlePopoverClose}
        options={data}
      />
    </div>
  );
};

export const STExtractStorybook = () => <STExtractExample />;

STExtractStorybook.story = {
  name: 'Extarct',
};
