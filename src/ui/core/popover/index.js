import React from 'react';
import clsx from 'clsx';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import STTheme from '../../STTheme';

const STPopover = withStyles((theme, other) => {
  return {
    paper: {
      fontSize: '14px',
      overflow: 'inherit',
      padding: '20px 20px 0px 20px',
      boxSizing: 'border-box',
    },
    triangle: {
      width: 28,
      height: 28,
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      transform: 'rotate(45deg)',
      borderRadius: 2,
      backgroundColor: 'transparent',
      '&:after': {
        top: '-3.5px',
        left: '-2px',
        width: '0',
        filter: 'drop-shadow(0px -1px 1px rgba(0,0,0,.1))',
        height: 0,
        content: "''",
        display: 'block',
        position: 'absolute',
        transform: 'rotate(-45deg)',
        borderColor: 'transparent transparent #fff transparent',
        borderStyle: 'solid',
        borderWidth: '0 7px 16px 7px',
      },
    },
    triangleTop: {
      left: 20,
      top: -8,
    },
    triangleLeft: {
      top: '20px',
      left: '-9px',
      transform: 'rotate(-45deg)',
    },
    triangleRight: {
      top: '20px',
      right: '-9px',
      transform: 'rotate(135deg)',
    },
    triangleBottom: {
      left: 20,
      bottom: -9,
      transform: 'rotate(-135deg)',
    },
    mainContent: {
      color: STTheme.palette.gray3,
      fontSize: STTheme.typography.fontSize,
      fontFamily: STTheme.typography.fontFamily,
      margin: 0,
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: '0px -1px 1px 0px rgba(246,246,246,1)',
      marginTop: 20,
      padding: '2px 0px',
    },
  };
})(({ classes, children, width = 300, footerContent, arrowPosition, paperStyles, ...props }) => {
  let triangleClass = classes.triangleTop;
  switch (arrowPosition) {
    case 'left':
      triangleClass = classes.triangleLeft;
      break;
    case 'right':
      triangleClass = classes.triangleRight;
      break;
    case 'bottom':
      triangleClass = classes.triangleBottom;
      break;
    default:
      break;
  }
  return (
    <ThemeProvider theme={STTheme}>
      <div className={classes.popover}>
        <div className={classes.overlay} />
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          PaperProps={{ style: { width, ...paperStyles } }}
          {...props}
          disableRestoreFocus>
          <div className={clsx(classes.triangle, triangleClass)} />
          <div className={classes.mainContent}>{children}</div>
          <div className={classes.footer}>{footerContent}</div>
        </Popover>
      </div>
    </ThemeProvider>
  );
});

export default STPopover;
