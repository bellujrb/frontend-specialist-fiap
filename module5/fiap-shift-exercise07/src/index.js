import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import MuiThemes from './Utils/MuiThemes'
import Routes from "./Routes/RouteController"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemes>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </MuiThemes>
  </React.StrictMode>
);

reportWebVitals();
