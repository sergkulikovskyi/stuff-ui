import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../STTheme';

const useStyles = makeStyles({
  iconOpen: {
    transform: 'rotate(180deg)',
  },
  icon: {
    color: COLORS.WHITE,
    right: 4,
    transition: 'all .1s linear',
  },
  label: {
    paddingRight: 6,
  },
  select: {
    display: 'inline-flex',
    alignItems: 'center',
    color: COLORS.WHITE,
    height: 27,
    padding: '0 6px 0 10px',
  },
  paper: {
    '& .MuiMenu-paper': {
      width: 200,
      padding: 0,
      maxWidth: 200,
    },
  },
  list: {
    padding: '10px 0',
    width: 200,
  },
  menuItem: {
    padding: '10px 20px',
    '&.Mui-selected': {
      background: 'transparent',
    },
  },
});

const MenuProps = {
  transform: 'translate3d(0, 22px, 0)',
};

const IconDown = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

const STStatus = ({ status = {}, onChange = () => {}, label, ...rest }) => {
  const [stateStatus, setStatus] = useState({ value: 0, label: 'Done!' });
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (status.label) setStatus(status);
  }, [status.label]);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const classes = useStyles();

  const clickItem = (slected) => {
    setStatus(slected);
    onChange(slected);
    setAnchorEl(null);
  };
  const options = [{ value: 0, label: 'Done!' }, { value: 1, label: 'Can’t be done' }];

  return (
    <>
      <Button
        onClick={handleClick}
        onMouseOver={handleClick}
        className={classes.select}
        style={{ backgroundColor: stateStatus.value === 0 ? COLORS.TURQUOISE : COLORS.RED }}>
        <span className={classes.label}>{stateStatus.label}</span>

        <IconDown className={clsx(classes.icon, { [classes.iconOpen]: !!anchorEl })} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        className={classes.paper}
        style={{ ...MenuProps }}
        MenuListProps={{
          onMouseLeave: handleClose,
          classes: { root: classes.list },
        }}
        getContentAnchorEl={null}>
        {options.map((item, i) => (
          <MenuItem
            key={i + 'status'}
            className={classes.menuItem}
            onClick={() => {
              clickItem(item);
            }}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default STStatus;
