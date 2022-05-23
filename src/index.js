import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D2D2D',
      light: '#fff'

    },
    secondary: {
      main: '#999'
    },
    // info: {
    //   main: '#c62828',
    // },
  },
  // breakpoints: {
  //   values: {
  //     sm: 600
  //   }
  // }
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
