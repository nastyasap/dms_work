import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App/App';
import { store } from './bll/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './common/theme/theme';
import { HashRouter } from 'react-router-dom';
import { ModalsProvider } from './components/Modals/ModalsProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </Provider>
    </ThemeProvider>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
