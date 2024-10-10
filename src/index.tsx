import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { store } from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './css/index.css';
import theme from './app/MaterialTheme';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );

} else {
  console.log("Root element not found!");
}
reportWebVitals();
/*This ensures that createRoot is only called if the container is found, 
and if not, it will log an error to the console. 
This way, you avoid trying to render the app when the root element doesn't exist.*/

// If you want to start measuring performance in your app, pass a function
