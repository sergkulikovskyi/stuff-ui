import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import IconButton from '@material-ui/core/IconButton';
import { isEqual } from 'lodash';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import STTheme, { COLORS, CONSTANTS } from '../../STTheme';

const STPrimaryButton = withStyles((theme) => ({
  root: {
    color: COLORS.WHITE,
    paddingRight: CONSTANTS.BUTTON_PADDING,
    paddingLeft: CONSTANTS.BUTTON_PADDING,
    backgroundColor: COLORS.TURQUOISE,
    '&:hover': {
      backgroundColor: COLORS.TURQUOISE_HOVERED,
    },
    '&:disabled': {
      backgroundColor: COLORS.TURQUOISE,
      color: COLORS.WHITE_WITH_OPACITY,
    },
  },
}))(Button);

const STSecondaryButton = withStyles((theme) => ({
  root: {
    color: COLORS.TURQUOISE,
    border: `solid 1px ${COLORS.GRAY}`,
    paddingRight: CONSTANTS.BUTTON_PADDING,
    paddingLeft: CONSTANTS.BUTTON_PADDING,
    backgroundColor: COLORS.GRAY3,
    '&:hover': {
      border: `solid 1px ${COLORS.TURQUOISE}`,
      color: COLORS.TURQUOISE,
      backgroundColor: COLORS.GRAY3,
    },
    '&:disabled': {
      backgroundColor: COLORS.GRAY3,
      border: 'solid 1px rgba(195, 195, 195, 0.4)',
      color: 'rgba(195, 195, 195, 0.4)',
    },
  },
}))(Button);

//selectable
const STSelectableButton = withStyles((theme) => {
  console.log('theme', theme);
  return {
    root: {
      color: COLORS.GRAY,
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
    color: COLORS.GRAY,
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
    color: COLORS.GRAY,
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
