import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

let STTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3ebfcf',
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial'].join(','),
    button: {
      fontSize: 14,
    },
  },
});

STTheme = responsiveFontSizes(STTheme);
export default STTheme;

export const COLORS = {
  WHITE: '#ffffff',
  WHITE_WITH_OPACITY: 'rgba(255, 255, 255, 0.4)',
  BLACK: '#000',
  TURQUOISE: '#3ebfcf',
  TURQUOISE_HOVERED: '#119cad',
  GRAY: '#999999',
  GRAY_WITH_OPACITY: 'rgba(153, 153, 153, 0.4)',
  GRAY2: '#c3c3c3',
  GRAY3: '#f7f7f7',
  GARY4: '#e7e7e7',
  RED: '#eb6464',
};

export const CONSTANTS = {
  BUTTON_PADDING: 20,
};
