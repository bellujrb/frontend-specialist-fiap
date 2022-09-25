import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes/RouteController'
import { BrowserRouter } from 'react-router-dom'
import { InfoContextProvider } from './ContextStudy/InfoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <InfoContextProvider>
            <Routes/>
          </InfoContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
