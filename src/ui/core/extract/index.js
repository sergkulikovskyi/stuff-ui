import React, { useState, useEffect, useRef } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import STTheme from '../../STTheme';

const STExtract = withStyles((theme, other) => {
  return {
    paper: {
      fontSize: '14px',
      overflow: 'inherit',
      marginTop: 31,
      marginLeft: -10,
      padding: '20px 20px 0px 20px',
      boxSizing: 'border-box',
      minWidth: 208,
    },
  };
})(({ classes, children, content, open = false, onOpen = () => {}, onClose = () => {}, paperStyles, ...props }) => {
  const anchorEl = useRef(null);
  const [openState, setOpen] = useState(false);

  useEffect(() => {
    if (open !== openState) {
      setOpen(open);
    }
  }, [open]);

  const toggleState = (flag) => {
    flag ? onOpen(true) : onClose(false);
    setOpen(flag);
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();
    // Resets when the selection has a length of 0
    if (!selection || selection.anchorOffset === selection.focusOffset) {
      handlePopoverClose();
      return;
    }
    toggleState(true);
  };
  const handlePopoverClose = () => {
    toggleState(false);
  };

  return (
    <ThemeProvider theme={STTheme}>
      <div onMouseUp={handleMouseUp} ref={anchorEl}>
        {children}
      </div>
      <Popover
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        PaperProps={{ style: { ...paperStyles } }}
        anchorEl={anchorEl.current}
        open={openState}
        onClose={handlePopoverClose}
        disableRestoreFocus
        {...props}>
        {content}
      </Popover>
    </ThemeProvider>
  );
});

export default STExtract;
