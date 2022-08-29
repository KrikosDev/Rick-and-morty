import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  typography: {
    fontFamily: "'Inconsolata', monospace, sans-serif",
    button: {
      textTransform: 'none',
      lineHeight: '1.4',
    },
    fontSize: 15,
    p: {
      lineHeight: '0',
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: colors.background.default,
      paper: colors.background.default,
    },
    primary: {
      main: colors.accent1,
    },
    secondary: {
      main: colors.accent2,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default responsiveFontSizes(theme, { factor: 2 });
