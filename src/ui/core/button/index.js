import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import IconButton from '@material-ui/core/IconButton';
import { isEqual } from 'lodash';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import STTheme, { COLORS, CONSTANTS } from '../../STTheme';

const STPrimaryButton = withStyles((theme) => ({
  root: {
    color: STTheme.palette.white,
    paddingRight: CONSTANTS.BUTTON_PADDING,
    paddingLeft: CONSTANTS.BUTTON_PADDING,
    backgroundColor: STTheme.palette.turquise,
    fontWeight: 900,
    '&:hover': {
      backgroundColor: STTheme.palette.turquiseHover,
    },
    '&:disabled': {
      backgroundColor: STTheme.palette.turquise,
      color: STTheme.palette.whiteOpacity,
    },
  },
}))(Button);

const STSecondaryButton = withStyles((theme) => ({
  root: {
    color: STTheme.palette.gray3,
    border: `solid 1px ${STTheme.palette.gray3}`,
    paddingRight: CONSTANTS.BUTTON_PADDING,
    paddingLeft: CONSTANTS.BUTTON_PADDING,
    backgroundColor: STTheme.palette.gray1,
    transition:
      'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      border: `solid 1px ${STTheme.palette.turquise}`,
      color: STTheme.palette.turquise,
      backgroundColor: STTheme.palette.gray1,
    },
    '&:disabled': {
      backgroundColor: STTheme.palette.gray1,
      border: 'solid 1px rgba(195, 195, 195, 0.4)',
      color: 'rgba(195, 195, 195, 0.4)',
    },
  },
}))(Button);

//selectable
const STSelectableButton = withStyles((theme) => {
  return {
    root: {
      color: STTheme.palette.gray3,
      paddingRight: CONSTANTS.BUTTON_PADDING,
      paddingLeft: CONSTANTS.BUTTON_PADDING,
      backgroundColor: COLORS.WHITE,
      border: 'none',
      '&:hover': {
        color: COLORS.TURQUOISE,
        backgroundColor: COLORS.WHITE,
      },
    },
    selected: {
      '&$selected': {
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.05)',
        color: COLORS.TURQUOISE,
        backgroundColor: COLORS.WHITE,
        fontWeight: 500,
        '&:hover': {
          backgroundColor: COLORS.WHITE,
        },
      },
    },
  };
})(({ classes, checked, ...props }) => {
  return (
    <ToggleButton
      classes={{
        root: classes.root,
        selected: classes.selected,
      }}
      {...props}
    />
  );
});

//icon

const SimpleIconButton = withStyles((theme) => ({
  root: {
    color: STTheme.palette.gray3,
    '&:hover': {
      color: COLORS.TURQUOISE,
      background: 'transparent',
    },
  },
}))(({ classes, selected, ...props }) => {
  return (
    <IconButton
      classes={{
        root: classes.root,
        disabled: classes.disabled,
      }}
      {...props}
    />
  );
});

// text button
const TextButton = withStyles((theme) => ({
  root: {
    color: STTheme.palette.gray3,
    background: 'transparent',
    boxShadow: 'none',
    textTransform: 'inherit',
    '&:hover': {
      color: COLORS.TURQUOISE,
      background: 'transparent',
      boxShadow: 'none',
    },
  },
}))(({ classes, selected, ...props }) => {
  return (
    <Button
      classes={{
        root: classes.root,
        disabled: classes.disabled,
      }}
      {...props}
    />
  );
});

const STButton = ({ color, text, icon, type, value = 'check', selected = false, disabled, onClick, children }) => {
  const [stateSelected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(selected);
  }, [selected]);

  const changeSelected = () => {
    setSelected(!stateSelected);
  };

  return (
    <ThemeProvider theme={STTheme}>
      {!icon ? (
        isEqual('toggle', type) ? (
          <STSelectableButton variant="button" onChange={changeSelected} value={value} selected={stateSelected}>
            {children}
          </STSelectableButton>
        ) : !color || isEqual('primary', color) ? (
          <STPrimaryButton onClick={onClick} disabled={disabled}>
            {children}
          </STPrimaryButton>
        ) : (
          <STSecondaryButton onClick={onClick} disabled={disabled}>
            {children}
          </STSecondaryButton>
        )
      ) : icon && text ? (
        <TextButton variant="contained" color="secondary" startIcon={icon} onClick={onClick}>
          {text}
        </TextButton>
      ) : (
        <SimpleIconButton onClick={onClick}>{icon}</SimpleIconButton>
      )}
    </ThemeProvider>
  );
};

export default STButton;
