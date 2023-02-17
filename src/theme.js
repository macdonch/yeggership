import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export function getTheme(mode) {
    let palette;
    if (mode === 'light') {
        palette = {
            mode: 'light',
            background: {
                default: "#ffffff"
              },
            primary: {
              main: '#2c2e30',
            },
            secondary: {
              main: '#ffffff',
            },
            error: {
              main: red.A400,
            },
            disabled: {
              main: '#2c2e30',
            },
          }
    } else {
        // dark is default
        palette = {
            mode: 'dark',
            background: {
                default: "#2c2e30"
              },
            primary: {
              main: '#ffffff',
            },
            secondary: {
              main: '#2c2e30',
            },
            error: {
              main: red.A400,
            },
            disabled: {
              main: '#fffff',
            },
          }     
    };
    const typography = {
      fontFamily: [
        'Montserrat'
      ].join(','),
    };

    const Theme = createTheme({palette: palette, typography: typography});
    return Theme;
}
