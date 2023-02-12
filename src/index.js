import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ed3137"
    },
    secondary: {
      main: "#f7f7f7"
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

