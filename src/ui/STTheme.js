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
});

STTheme = responsiveFontSizes(STTheme);
export default STTheme;

export const COLORS = {
  WHITE: '#ffffff',
  WHITE_WITH_OPACITY: 'rgba(255, 255, 255, 0.4)',
  TURQUOISE: '#3ebfcf',
  TURQUOISE_HOVERED: '#119cad',
  GRAY: '#999999',
  GRAY_WITH_OPACITY: 'rgba(153, 153, 153, 0.4)',
  GRAY2: '#c3c3c3',
  GRAY3: '#f7f7f7',
};
