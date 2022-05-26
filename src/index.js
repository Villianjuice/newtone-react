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
  },
  // typography: {
  //   fontFamily: 'PTRootUI',
  // },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //     @font-face {
  //       font-family: 'PTRootUI';
  //       font-style: normal;
  //       font-display: swap;
  //       font-weight: 400;
  //       src: local('PTRootUI'), url(${PTRootUI}) format('opentype');
  //     }
  //   `,
  //   },
  // },
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
