import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../STTheme';

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
