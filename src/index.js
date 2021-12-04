import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Header from './components/shared/Header';
import StickyFooter from './components/shared/Footer';
import { GlobalProvider } from './store/GlobalState';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalProvider>
        <Header />
        <App />
      </GlobalProvider>
      <StickyFooter />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

