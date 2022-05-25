import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import PTRootUI from './assets/fonts/PTRootUI_Regular.otf'

import './index.css';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D2D2D',
      light: '#fff',
      dark: '#333',
    },
    secondary: {
      main: '#999',
    },
    success: {
      main: '#525665',
      light: '#525665',
    },
    info: {
      main: '#525665',
      light: '#f7f7f7',
    },
    warning: {
      main: '#ed6c02',
      light: '#2D2D2D',
    },
    typography: {
      fontFamily: 'PTRootUI',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'PTRootUI';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('PTRootUI'), url(${PTRootUI}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
      },
    },
  },
  // breakpoints: {
  //   values: {
  //     xl: 1300,
  //   },
  // },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
