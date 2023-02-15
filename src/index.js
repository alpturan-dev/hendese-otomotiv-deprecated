import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { hydrate } from "react-dom";
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

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement,
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>)
  hydrate(<App />, rootElement);
} else {
  console.log("rofl");
  const root = createRoot(rootElement);
  root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>)
}
