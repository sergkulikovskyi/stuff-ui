import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import './style.scss';
import { isEqual } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { COLORS } from '../../STTheme';

const STPrimaryButton = withStyles((theme) => ({
  root: {
    color: COLORS.WHITE,
    paddingRight: '20px',
    paddingLeft: '20px',
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
    border: 'solid 1px #999999',
    paddingRight: '20px',
    paddingLeft: '20px',
    backgroundColor: '#f7f7f7',
    '&:hover': {
      border: 'solid 1px #3ebfcf',
      color: '#3ebfcf',
      backgroundColor: '#f7f7f7',
    },
    '&:disabled': {
      backgroundColor: '#f7f7f7',
      border: 'solid 1px rgba(195, 195, 195, 0.4)',
      color: 'rgba(195, 195, 195, 0.4)',
    },
  },
}))(Button);

//selectable
const STSelectableButton = withStyles((propsAll) => {
  return {
    root: {
      color: COLORS.GRAY,
      paddingRight: '20px',
      paddingLeft: '20px',
      backgroundColor: '#fff',
      border: 'none',
      '&:hover': {
        color: COLORS.TURQUOISE,
        backgroundColor: '#fff',
      },
    },
    selected: {
      '&$selected': {
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.05)',
        color: COLORS.TURQUOISE,
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
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

const STButton = ({ color, icon, type, value = 'check', selected = false, disabled, onClick, children }) => {
  const [stateSelected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(selected);
  }, [selected]);

  const changeSelected = () => {
    setSelected(!stateSelected);
  };

  return (
    <>
      {!icon ? (
        isEqual('toggle', type) ? (
          <STSelectableButton onChange={changeSelected} value={value} selected={stateSelected}>
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
      ) : (
        <div>TODO add buttons with icons</div>
      )}
    </>
  );
};

export default STButton;
