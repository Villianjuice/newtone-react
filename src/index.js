import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import PTRootUI from './assets/fonts/PTRootUI_Regular.otf';


import './index.css';
import App from './App';
import { store } from './redux';

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
  breakpoints: {
    values: {
      mobile: 400,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);
