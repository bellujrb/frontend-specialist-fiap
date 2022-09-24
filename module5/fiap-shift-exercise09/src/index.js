import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes/RouteController";
import { InfoContextProvider} from "./Store/InfoContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <InfoContextProvider>
        <Routes />
      </InfoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
