import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import STTheme from '../../STTheme';

const SimpleSwitch = withStyles((theme) => ({
  root: {
    width: 40,
    height: 25,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(15px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: STTheme.palette.turquise,
        opacity: 1,
        border: 'none',
      },
    },
  },
  thumb: {
    width: 23,
    height: 23,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 25 / 2,
    backgroundColor: STTheme.palette.gray2,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  label: {
    fontSize: '12px',
  },
  disabled: {
    '& $thumb': {
      color: STTheme.palette.white,
    },
    '&$switchBase + $track': {
      backgroundColor: STTheme.palette.gray1,
      opacity: 1,
    },
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
        disabled: classes.disabled,
      }}
      {...props}
    />
  );
});

const SimpleFormControlLabel = withStyles((theme) => ({
  root: {
    marginLeft: 0,
  },
  label: {
    fontSize: '17px',
  },
  disabled: {
    '&$label': {
      color: STTheme.palette.gray2,
    },
  },
}))(({ classes, checked, ...props }) => {
  return (
    <FormControlLabel
      classes={{
        root: classes.root,
        label: classes.label,
        disabled: classes.disabled,
      }}
      style={{ color: checked ? STTheme.palette.black : STTheme.palette.gray2 }}
      {...props}
    />
  );
});

const STSwitch = ({ checked, label, onChange = () => {}, disabled }) => {
  const [stateChecked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleChange = (e) => {
    setChecked(!stateChecked);
    onChange(e, !stateChecked);
  };
  return (
    <ThemeProvider theme={STTheme}>
      {label ? (
        <SimpleFormControlLabel
          control={<SimpleSwitch checked={stateChecked} onChange={handleChange} disabled={disabled} />}
          label={label}
          checked={stateChecked}
        />
      ) : (
        <SimpleSwitch checked={stateChecked} onChange={handleChange} disabled={disabled} />
      )}
    </ThemeProvider>
  );
};

export default STSwitch;
