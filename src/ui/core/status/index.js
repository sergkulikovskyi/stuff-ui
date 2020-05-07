import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import STTheme, { COLORS } from '../../STTheme';

const useStyles = makeStyles({
  status: {
    display: 'inline-flex',
  },
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
    textTransform: 'initial',
    fontWeight: '900',
    fontFamily: 'Avenir',
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
      marginTop: 27,
    },
  },
  list: {
    padding: '10px 0',
    width: 200,
  },
  listItem: {
    padding: 0,
  },
  listButton: {
    padding: '10px 20px',
    width: '100%',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: STTheme.typography.fontFamily,
  },
});

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

const STListItem = ({ item, className, btnClassName, onClick }) => {
  const clickItem = () => {
    onClick(item);
  };
  return (
    <ListItem className={className}>
      <buttom onClick={clickItem} type="button" className={btnClassName}>
        {item.label}
      </buttom>
    </ListItem>
  );
};

const STStatus = ({ status = {}, onChange = () => {}, label, ...rest }) => {
  const [stateStatus, setStatus] = useState({ value: 0, label: 'Done!' });
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (status.label) setStatus(status);
  }, [status]);

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
    console.log('slected.target.dataset', slected);
    setStatus(slected);
    onChange(slected);
    setAnchorEl(null);
  };
  const options = [{ value: 0, label: 'Done!' }, { value: 1, label: 'Can’t be done' }];

  return (
    <ThemeProvider theme={STTheme}>
      <div className={classes.status} onMouseOver={handleClick} onMouseLeave={handleClose}>
        <Button
          className={classes.select}
          style={{ backgroundColor: stateStatus.value === 0 ? COLORS.TURQUOISE : COLORS.RED }}>
          <span className={classes.label}>{stateStatus.label}</span>
          <IconDown className={clsx(classes.icon, { [classes.iconOpen]: !!anchorEl })} />
        </Button>
        <Popper anchorEl={anchorEl} open={!!anchorEl} className={classes.paper} placement="bottom-start">
          <Paper className={classes.paper}>
            <List>
              {options.map((item, i) => (
                <STListItem
                  key={i + 'status'}
                  item={item}
                  onClick={clickItem}
                  className={classes.listItem}
                  btnClassName={classes.listButton}
                />
              ))}
            </List>
          </Paper>
        </Popper>
      </div>
    </ThemeProvider>
  );
};

export default STStatus;
