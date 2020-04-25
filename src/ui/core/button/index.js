import React from 'react'
import Button from '@material-ui/core/Button';
import './style.scss'
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles';
import {COLORS} from '../../STTheme'

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
    color: COLORS.GRAY,
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

const STButton = ({color, icon, disabled, onClick, children}) => {
  return (
    <div>
            {
              !icon ?
                !color || _.isEqual('primary', color) ?
                  <STPrimaryButton onClick={onClick} disabled={disabled}>{children}</STPrimaryButton>
                  :
                  <STSecondaryButton onClick={onClick} disabled={disabled}>{children}</STSecondaryButton>
                : <div>TODO add buttons with icons</div>
            }
    </div>
  );
};

export default STButton;
