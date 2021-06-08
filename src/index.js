import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
