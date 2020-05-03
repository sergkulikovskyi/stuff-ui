import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../STTheme';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 4,
    width: 17,
    height: 17,
    boxSizing: 'border-box',
    border: `1px solid ${COLORS.GRAY2}`,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: COLORS.WHITE,
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: COLORS.GRAY3,
      border: `1px solid ${COLORS.GRAY3}`,
    },
  },
  checkedIcon: {
    backgroundColor: COLORS.TURQUOISE,
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    border: `1px solid ${COLORS.TURQUOISE}`,
    '&:before': {
      display: 'block',
      width: 16,
      height: 15,
      boxSizing: 'border-box',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: COLORS.TURQUOISE,
    },
  },
});

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const SimpleFormControlLabel = withStyles((theme) => ({
  label: {
    fontSize: '14px',
  },
  disabled: {
    '&$label': {
      color: COLORS.GRAY2,
    },
  },
}))(({ classes, checked, ...props }) => {
  return (
    <FormControlLabel
      classes={{
        label: classes.label,
        disabled: classes.disabled,
      }}
      style={{ color: checked ? COLORS.BLACK : COLORS.GRAY2 }}
      {...props}
    />
  );
});

const STCheckbox = ({ checked = false, onChange = () => {}, label, ...rest }) => {
  const [stateChecked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleChange = (e) => {
    setChecked(!stateChecked);
    onChange(e, !stateChecked);
  };

  return label ? (
    <SimpleFormControlLabel
      control={<StyledCheckbox checked={stateChecked} onChange={handleChange} {...rest} />}
      label={label}
      checked={stateChecked}
    />
  ) : (
    <StyledCheckbox checked={stateChecked} onChange={handleChange} {...rest} />
  );
};

export default STCheckbox;
