import React, { useState, useRef } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import STCheckbox from '../ui/core/checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS, CONSTANTS } from '../ui/STTheme';
import STPopover from '../ui/core/popover';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Stuff Popover',
  component: STPopover,
};

const STInput = withStyles((theme) => ({
  label: {
    fontSize: '14px',
  },
}))(({ classes, checked, parentFef, ...props }) => {
  return (
    <FormControl className={classes.margin} ref={parentFef}>
      <InputLabel htmlFor="input-with-icon-adornment">Address</InputLabel>
      <Input value="5381 Mcgowen St" {...props} />
    </FormControl>
  );
});

const STSimpleButton = withStyles((theme) => ({
  root: {
    color: COLORS.BLACK,
    paddingRight: CONSTANTS.BUTTON_PADDING,
    paddingLeft: CONSTANTS.BUTTON_PADDING,
    backgroundColor: COLORS.WHITE,
    textTransform: 'initial',
    '&:hover': {
      backgroundColor: COLORS.WHITE,
    },
  },
}))(Button);

const useStyles = makeStyles({
  block: {
    display: 'inline-flex',
    margin: '20px 10px',
  },
});

const PopoverExampleSm = ({ onChange = () => {} }) => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handlePopoverOpen = (event) => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };
  const onChangePopover = (e) => {
    onChange(e.currentTarget.value);
    handlePopoverClose();
  };

  const classes = useStyles();
  return (
    <div className={classes.block}>
      <STInput onFocus={handlePopoverOpen} parentFef={anchorEl} />
      <STPopover
        anchorEl={anchorEl.current}
        open={open}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        width={253}
        footerContent={
          <>
            <STSimpleButton value={false} onClick={onChangePopover}>
              No
            </STSimpleButton>
            <STSimpleButton value={true} onClick={onChangePopover}>
              Yes, update it
            </STSimpleButton>
          </>
        }>
        Should we update this parameter in user’s preferences?
      </STPopover>
    </div>
  );
};

const PopoverExampleLg = ({ onChange = () => {} }) => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handlePopoverOpen = (event) => {
    setOpen(true);
  };
  const handlePopoverClose = () => {
    setOpen(false);
  };
  const onChangePopover = (e) => {
    onChange(e.currentTarget.value);
    handlePopoverClose();
  };

  const classes = useStyles();
  return (
    <div className={classes.block}>
      <STInput onFocus={handlePopoverOpen} parentFef={anchorEl} />
      <STPopover
        anchorEl={anchorEl.current}
        open={open}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        width={350}
        footerContent={
          <>
            <STCheckbox
              checked={false}
              value={true}
              label="Don't show again"
              name="checkbox2"
              onChange={onChangePopover}
            />
            <STSimpleButton value={false} onClick={onChangePopover}>
              Dismiss
            </STSimpleButton>
          </>
        }>
        The task name should describe exactly what the user needs in 3-4 words (e.g. Lakers VIP ticket, DHL delivery)
        and will be displayed for the user. You may type or highlight the text in the message to extract it.
      </STPopover>
    </div>
  );
};

const PopoverExampleArrowLeft = ({ onChange = () => {} }) => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handlePopoverOpen = (event) => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };
  const onChangePopover = (e) => {
    onChange(e.currentTarget.value);
    handlePopoverClose();
  };
  const classes = useStyles();
  return (
    <div className={classes.block}>
      <STInput onFocus={handlePopoverOpen} parentFef={anchorEl} />
      <STPopover
        anchorEl={anchorEl.current}
        open={open}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        paperStyles={{ marginTop: 0, marginLeft: 15 }}
        arrowPosition="left"
        width={350}
        footerContent={
          <>
            <STCheckbox
              checked={false}
              value={true}
              label="Don't show again"
              name="checkbox2"
              onChange={onChangePopover}
            />
            <STSimpleButton value={false} onClick={onChangePopover}>
              Dismiss
            </STSimpleButton>
          </>
        }>
        The task name should describe exactly what the user needs in 3-4 words (e.g. Lakers VIP ticket, DHL delivery)
        and will be displayed for the user. You may type or highlight the text in the message to extract it.
      </STPopover>
    </div>
  );
};

export const PopoverStorybook = () => <PopoverExampleSm onChange={action('changed')} />;
export const PopoverLargeStorybook = () => <PopoverExampleLg onChange={action('changed')} />;
export const PopoverArrowLeftStorybook = () => <PopoverExampleArrowLeft onChange={action('changed')} />;

PopoverStorybook.story = {
  name: 'Popover default',
};
PopoverLargeStorybook.story = {
  name: 'Popover with custom width',
};
PopoverArrowLeftStorybook.story = {
  name: 'Popover position to right',
};
