import React from 'react';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import STTheme from '../../STTheme';
import clsx from 'clsx';

const STExtract = withStyles((theme, other) => {
  return {
    paper: {
      fontSize: '14px',
      overflow: 'inherit',
      marginTop: 31,
      marginLeft: -10,
      padding: '20px 20px 0px 20px',
      boxSizing: 'border-box',
      minWidth: 208,
    },
    caption: {
      color: STTheme.palette.gray6,
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
      margin: '0px 0px 10px 0',
    },
    list: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
    listItem: {},
    listWithLine: {
      '& $listButton': {
        padding: '19px 0',
        borderBottom: `1px solid ${STTheme.palette.gray1}`,
      },

      '&:last-of-type $listButton': {
        borderBottom: 'none',
      },
    },
    listButton: {
      width: '100%',
      textAlign: 'left',
      border: 'none',
      outline: 'none',
      color: STTheme.palette.black,
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
      padding: '7.5px 0',
      cursor: 'pointer',
    },
  };
})(({ classes, children, caption, options = [], onChange = () => {}, paperStyles, ...props }) => {
  const onClickItem = (item) => {
    onChange(item);
    props.onClose();
  };
  return (
    <ThemeProvider theme={STTheme}>
      <div className={classes.popover}>
        <div className={classes.overlay} />
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          PaperProps={{ style: { ...paperStyles } }}
          {...props}
          disableRestoreFocus>
          <div className={classes.caption}>{caption}</div>
          <ul className={classes.list}>
            {options.map((item, i) => (
              <li key={i + 'extract'} className={clsx(classes.listItem, { [classes.listWithLine]: item.withLine })}>
                <button
                  type="button"
                  onClick={() => {
                    onClickItem(item);
                  }}
                  className={classes.listButton}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </Popover>
      </div>
    </ThemeProvider>
  );
});

export default STExtract;
