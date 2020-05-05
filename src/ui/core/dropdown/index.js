import React, { useState, useRef, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import getListPosition from '../../helpers/getListPosition';
import STTheme, { COLORS } from '../../STTheme';

const IconArrow = ({ className }) => (
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

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: 'inline-flex',
      position: 'relative',
      padding: '15px 10px',
      fontFamily: theme.typography.fontFamily,
    },
    iconOpen: {
      transform: 'rotate(180deg)',
    },
    icon: {
      color: COLORS.BLACK,
      right: 4,
      height: 19,
      transition: 'all .1s linear',
    },
    menu: {
      position: 'absolute',
      minWidth: 200,
      width: 'max-content',
      maxWidth: 300,
      opacity: 0,
      zIndex: -1,
      visibility: 'hidden',
      transition: 'opacity 243ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 162ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    openedMenu: {
      opacity: 1,
      zIndex: 100,
      visibility: 'visible',
    },
    listHeader: {
      padding: 0,
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    },
    headerLabel: {
      fontSize: 17,
      lineHeight: '28px',
      paddingRight: 4,
    },
    list: {
      padding: '12.5px 0',
    },
    itemList: {
      padding: 0,
      '&:last-of-type $nestedContainer': {
        borderBottom: 'none',
        paddingBottom: '10px',
      },
    },
    listButton: {
      padding: '7.5px 20px',
      width: 'auto',
      minWidth: '100%',
      maxWidth: 300,
      justifyContent: 'flex-start',
      textTransform: 'initial',
      textAlign: 'left',
      lineHeight: '19px',
      '&:hover': {
        background: 'transparent',
        textShadow: '0px 0px 1px currentColor',
      },
    },
    //nested
    nestedContainer: {
      display: 'flex',
      width: '100%',
      position: 'relative',
      padding: '20px 10px 20px 20px',
      borderBottom: `1px solid ${COLORS.GARY4}`,
      '&:hover': {
        textShadow: '0px 0px 1px currentColor',
        '& $iconRight': {
          color: COLORS.BLACK,
        },
      },
      '&:last-of-type': {
        borderTop: 'none',
      },
    },
    nestedHeaderLabel: {
      fontSize: 14,
    },
    menuNested: {},
    iconRight: {
      transform: 'rotate(-90deg)',
      color: COLORS.GARY4,
    },
    textField: {
      display: 'flex',
      margin: '0px 20px',
      height: 60,
      '& label': {
        fontSize: 14,
        color: COLORS.GRAY2,
      },
      '& label.Mui-focused': {
        color: COLORS.TURQUOISE,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: COLORS.TURQUOISE,
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: COLORS.GARY4,
      },
    },
    inputControl: {
      margin: 0,
    },
    inputField: {
      fontSize: 14,
    },
  };
});

const STNestedList = ({ data, index, clickItem }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [suggestValue, setSuggestValue] = useState('');
  const [stylePos, setStylePos] = useState({});
  const listRef = useRef(null);
  const { value, label, suggest } = data;

  useEffect(() => {
    if (value.length !== options.length) {
      setOptions(value);
    }
  }, [value, options.length]);

  useEffect(() => {
    const listStyle = getListPosition(listRef, true);
    setStylePos(listStyle);
  }, [listRef]);

  const openMenu = () => {
    if (!open) {
      setOpen(true);
    }
  };
  const closeMenu = () => {
    setOpen(false);
  };
  const onChangeSuggest = ({ target }) => {
    const reg = new RegExp(target.value, 'gi');
    const result = data.value.filter((item) => item.label.search(reg) !== -1);
    setSuggestValue(target.value);
    setOptions(result);
  };

  const classes = useStyles();
  return (
    <div onMouseOver={openMenu} onMouseLeave={closeMenu} className={classes.nestedContainer}>
      <div className={classes.listHeader}>
        <span className={classes.nestedHeaderLabel}>{label}</span>
        <IconArrow className={clsx(classes.icon, classes.iconRight)} />
      </div>
      <Paper
        className={clsx(classes.menu, classes.menuNested, { [classes.openedMenu]: open })}
        elevation={8}
        ref={listRef}
        style={stylePos}>
        <>
          {suggest && (
            <TextField
              className={classes.textField}
              InputProps={{
                classes: { input: classes.inputField, root: classes.textField, formControl: classes.inputControl },
              }}
              label="Search parameter"
              value={suggestValue}
              onChange={onChangeSuggest}
            />
          )}
          <List className={classes.list}>
            {options.map((item, i) => (
              <ListItem key={i + item.value} className={classes.itemList}>
                <Button
                  className={classes.listButton}
                  onClick={() => {
                    clickItem(item);
                  }}>
                  {item.label}
                </Button>
              </ListItem>
            ))}
          </List>
        </>
      </Paper>
    </div>
  );
};

const STDropdown = ({ selected = {}, onChange = () => {}, multiple, options, ...rest }) => {
  const [stateValue, setStateValue] = useState({});
  const [stateOptions, setStateOptions] = useState([]);
  const [stylePos, setStylePos] = useState({});
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (selected.label) {
      setStateValue(selected);
    }
  }, [selected]);

  useEffect(() => {
    setStateOptions(options);
  }, [options]);

  useEffect(() => {
    setTimeout(() => {
      const listStyle = getListPosition(listRef);
      setStylePos(listStyle);
    }, 100);
  }, [listRef]);

  const openMenu = () => {
    if (!open) {
      setOpen(true);
    }
  };
  const closeMenu = () => {
    setOpen(false);
  };

  const classes = useStyles(STTheme);

  const clickItem = (selected) => {
    setStateValue(selected);
    onChange(selected);
    setOpen(false);
  };

  const arrowOpen = (open && !stateValue.label) || (!open && stateValue.label);

  return (
    <div onMouseOver={openMenu} onMouseLeave={closeMenu} className={classes.container}>
      <div className={classes.listHeader}>
        <span className={classes.headerLabel}>{stateValue.label || options[0].label}</span>
        <IconArrow className={clsx(classes.icon, { [classes.iconOpen]: arrowOpen })} />
      </div>
      <Paper
        className={clsx(classes.menu, { [classes.openedMenu]: open })}
        elevation={8}
        ref={listRef}
        style={stylePos}>
        <List className={classes.list}>
          {stateOptions.map((item, i) => (
            <ListItem key={i + item.value} className={classes.itemList}>
              {Array.isArray(item.value) ? (
                <STNestedList data={item} clickItem={clickItem} />
              ) : (
                <Button
                  className={classes.listButton}
                  onClick={() => {
                    clickItem(item);
                  }}>
                  {item.label}
                </Button>
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default STDropdown;
