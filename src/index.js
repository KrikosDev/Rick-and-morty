import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components';
import { ApolloProvider } from '@apollo/client';
import client from './appollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './helpers/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>
);
