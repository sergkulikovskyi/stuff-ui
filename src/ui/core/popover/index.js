import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import STCheckbox from '../checkbox';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { COLORS, CONSTANTS } from '../../STTheme';

const STSimpleButton = withStyles((theme) => ({
  root: {
    color: COLORS.BLACK,
    paddingRight: CONSTANTS.BUTTON_PADDING,
    paddingLeft: CONSTANTS.BUTTON_PADDING,
    backgroundColor: COLORS.WHITE,
    textTransform: 'initial',
    '&:hover': {
      backgroundColor: COLORS.WHITE,
    },
  },
}))(Button);

const STPopoverContent = withStyles((theme, other) => {
  return {
    paper: {
      fontSize: '14px',
      overflow: 'inherit',
      marginTop: 31,
      marginLeft: -10,
      padding: '20px 20px 0px 20px',
      boxSizing: 'border-box',
    },
    triangle: {
      left: 20,
      top: -8,
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
    triangleLeft: {},
    popover: {},
    text: {
      color: COLORS.GRAY,
      fontSize: theme.typography.fontSize,
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
})(({ classes, text, width = 300, update, onChange, arrowPosition, ...props }) => {
  const footerContnent = update ? (
    <>
      <STSimpleButton
        onClick={() => {
          onChange(false);
        }}>
        No
      </STSimpleButton>
      <STSimpleButton
        onClick={() => {
          onChange(true);
        }}>
        Yes, update it
      </STSimpleButton>
    </>
  ) : (
    <>
      <STCheckbox checked={false} label="Don't show again" name="checkbox2" onChange={onChange} />
      <STSimpleButton
        onClick={() => {
          onChange(false);
        }}>
        Dismiss
      </STSimpleButton>
    </>
  );

  return (
    <div className={classes.popover}>
      <div className={classes.overlay} />
      <Popover
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        PaperProps={{ style: { width } }}
        {...props}
        disableRestoreFocus>
        <div className={clsx(classes.triangle, { [classes.triangleLeft]: arrowPosition === 'left' })} />
        <p className={classes.text}>{text}</p>
        <div className={classes.footer}>{footerContnent}</div>
      </Popover>
    </div>
  );
});

const STPopover = (props) => {
  return <STPopoverContent {...props} />;
};

export default STPopover;
