import React, { useState, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import STExtract from '../core/extract';

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

const ExtractExample = () => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handleMouseUp = () => {
    const selection = window.getSelection();

    // Resets when the selection has a length of 0
    if (!selection || selection.anchorOffset === selection.focusOffset) {
      handlePopoverClose();
      return;
    }

    setOpen(true);
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
      <AnchorElement onMouseUp={handleMouseUp} parentFef={anchorEl} />
      <STExtract
        anchorEl={anchorEl.current}
        open={open}
        caption="Add to:"
        onClose={handlePopoverClose}
        options={data}
        onChange={handlePopoverClose}
      />
    </div>
  );
};

export default ExtractExample;
