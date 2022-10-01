import { createTheme } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: {
      main: '#0097a7',
    },
    common: {
      black: '#0097a7',
    },
    action: {
      hover: '#e0f7fa',
    },
  },
});
