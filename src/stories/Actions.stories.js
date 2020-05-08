import React, { useState, useRef } from 'react';
import { action } from '@storybook/addon-actions';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import STCheckbox from '../ui/core/checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS, CONSTANTS } from '../ui/STTheme';
import STPopover from '../ui/core/popover';
import STDropdown from '../ui/core/dropdown';
import STExtract from '../ui/core/extract';

export default {
  title: '2-Actions',
  component: STDropdown,
};

export const STDropdownStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STDropdown options={[{ label: 'Default', value: 0 }]} onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10 }}>
      <STDropdown
        onChange={action('changed')}
        options={[{ label: 'Add option', value: 0 }]}
        selected={{ label: 'Selected', value: 1 }}
      />
    </div>
  </>
);

export const MaxWidthSTDropdownStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <STDropdown
        onChange={action('changed')}
        options={[
          { label: 'Add option', value: 0 },
          { label: 'I’m the longest term in the options', value: 1 },
          { label: 'Option 2', value: 2 },
        ]}
      />
    </div>
    <div style={{ marginBottom: 10 }}>
      <STDropdown
        onChange={action('changed')}
        options={[
          { label: 'Add option', value: 0 },
          {
            label: 'Remove option',
            value: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }, { label: 'Option 3', value: 3 }],
          },
          {
            label: 'Add parameter',
            suggest: true,
            value: [{ label: 'Option 4', value: 4 }, { label: 'Option 5', value: 5 }, { label: 'Option 6', value: 6 }],
          },
        ]}
      />
    </div>
    <div>
      <STDropdown
        headerIcon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32px 32px" fill="#3ebfcf" width="24px" height="24px">
            <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        }
        options={[
          { label: 'Add option', value: 0 },
          { label: 'I’m the longest term in the options', value: 1 },
          { label: 'Option 2', value: 2 },
        ]}
      />
    </div>
  </>
);

//popover
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
        paperStyles={{ marginTop: 31 }}
        width={245}
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
        paperStyles={{ marginTop: 31 }}
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
        paperStyles={{ marginLeft: 31 }}
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

const PopoverExampleArrowRight = ({ onChange = () => {} }) => {
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
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        paperStyles={{ marginLeft: -31 }}
        arrowPosition="right"
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
const PopoverExampleArrowBottom = ({ onChange = () => {} }) => {
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
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        paperStyles={{ marginTop: -31 }}
        arrowPosition="bottom"
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

export const PopoverStorybook = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <PopoverExampleSm onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10 }}>
      <PopoverExampleLg onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10 }}>
      <PopoverExampleArrowLeft onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10, marginLeft: 500 }}>
      <PopoverExampleArrowRight onChange={action('changed')} />
    </div>
    <div style={{ marginBottom: 10 }}>
      <PopoverExampleArrowBottom onChange={action('changed')} />
    </div>
  </>
);

//extract

const AnchorElement = withStyles((theme) => ({
  label: {
    fontSize: '14px',
  },
}))(({ classes, checked, parentFef, ...props }) => {
  return (
    <div className={classes.margin} ref={parentFef} {...props}>
      July 11
    </div>
  );
});

const STExtractExample = () => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handleMouseUp = () => {
    const selection = window.getSelection();

    // Resets when the selection has a length of 0
    if (!selection || selection.anchorOffset === selection.focusOffset) {
      handlePopoverClose();
      return;
    }

    setOpen(true);
  };
  const handlePopoverClose = () => {
    setOpen(false);
  };

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
  return (
    <div>
      <AnchorElement onMouseUp={handleMouseUp} parentFef={anchorEl} />
      <STExtract
        anchorEl={anchorEl.current}
        open={open}
        caption="Add to:"
        onClose={handlePopoverClose}
        options={data}
        onChange={action('changed')}
      />
    </div>
  );
};

export const STExtractStorybook = () => <STExtractExample />;

STDropdownStorybook.story = {
  name: '02.01.Dropdown',
};

MaxWidthSTDropdownStorybook.story = {
  name: '02.03.MultipleOptions with single selection',
};

PopoverStorybook.story = {
  name: '02.05.Popover',
};

STExtractStorybook.story = {
  name: '02.06.Extract',
};
