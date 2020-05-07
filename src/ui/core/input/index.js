import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import STTheme, { COLORS, CONSTANTS } from '../../STTheme';

const STInput = withStyles((theme) => {
  return {
    // label: {
    //   fontSize: '14px',
    // },
    label: (props) => {
      console.log('theme', props);
      return {
        backgroundColor: props.backgroundColor,
        color: theme.color,
      };
    },
    control: {},
    label: {},
    input: {
      '&:disabled': {},
    },
  };
})(({ classes, value = '', label = '', placeholder = '', inputProps = {} }) => {
  return (
    <MuiThemeProvider theme={STTheme}>
      <FormControl className={classes.control}>
        <InputLabel className={classes.label} shrink={true}>
          {label}
        </InputLabel>
        <Input value={value} className={classes.input} placeholder={placeholder} {...inputProps} />
      </FormControl>
    </MuiThemeProvider>
  );
});

export default STInput;
