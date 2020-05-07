import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const CONSTANTS = {
  BUTTON_PADDING: 20,
};

export const COLORS = {
  WHITE: '#ffffff',
  WHITE_WITH_OPACITY: 'rgba(255, 255, 255, 0.4)',
  BLACK: '#000',
  TURQUOISE: '#3ebfcf',
  TURQUOISE_HOVERED: '#119cad',
  GRAY_WITH_OPACITY: 'rgba(153, 153, 153, 0.4)',
  GRAY1: '#f7f7f7',
  GRAY2: '#c3c3c3',
  GRAY3: '#999999',
  GRAY4: '#e7e7e7',
  GRAY5: '#f6f6f6',
  GRAY6: '#a3a3a3',
  RED: '#eb6464',
};

let STTheme = createMuiTheme({
  palette: {
    white: COLORS.WHITE,
    whiteOpacity: COLORS.WHITE_WITH_OPACITY,
    black: COLORS.BLACK,
    turquise: COLORS.TURQUOISE,
    turquiseHover: COLORS.TURQUOISE_HOVERED,
    gray1: COLORS.GRAY1,
    gray2: COLORS.GRAY2,
    gray3: COLORS.GRAY3,
    gray4: COLORS.GRAY4,
    gray5: COLORS.GRAY5,
    gray6: COLORS.GARY6,
    primary: {
      main: '#3ebfcf',
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: ['Avenir-Roman', 'Helvetica', 'Arial'].join(','),
    input: {
      label: {
        fontSize: 14,
      },
      input: {
        fontSize: 17,
      },
    },
    button: {
      fontSize: 14,
    },
  },
});

STTheme = responsiveFontSizes(STTheme);
export default STTheme;
