import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import STTheme from '../STTheme';
import clsx from 'clsx';
import STExtract from '../core/extract';

const useStyles = makeStyles({
  label: {
    fontSize: '14px',
  },
  caption: {
    color: STTheme.palette.gray6,
    fontSize: STTheme.typography.fontSize,
    fontFamily: STTheme.typography.fontFamily,
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
    fontSize: STTheme.typography.fontSize,
    fontFamily: STTheme.typography.fontFamily,
    padding: '7.5px 0',
    cursor: 'pointer',
  },
});

const data = [
  {
    label: 'Business name',
    value: 'business_name',
  },
  {
    label: 'Date',
    value: 'date',
  },
  {
    label: 'Time',
    value: 'time',
  },
  {
    label: 'Number of people',
    value: 'number',
    withLine: true,
  },
  {
    label: 'Add as new parameter',
    value: 'parameter',
    withLine: true,
  },
  {
    label: 'Add as new restriction',
    value: 'restriction',
    withLine: true,
  },
];

const ExtractExample = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  const onClickItem = ({ target }) => {
    // console.log(open, 'target-', target.dataset.value);
    toggleOpen();
  };
  const classes = useStyles();

  return (
    <STExtract
      open={open}
      onOpen={toggleOpen}
      onClose={toggleOpen}
      content={
        <>
          <div className={classes.caption}>Add to:</div>
          <ul className={classes.list}>
            {data.map((item, i) => (
              <li key={i + 'extract'} className={clsx(classes.listItem, { [classes.listWithLine]: item.withLine })}>
                <button type="button" data-value={item.value} onClick={onClickItem} className={classes.listButton}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      }>
      <div>July 11</div>
    </STExtract>
  );
};

export default ExtractExample;
