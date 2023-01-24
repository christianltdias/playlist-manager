import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.scss";
import { BrowserRouter } from 'react-router-dom';
import PortalContext from './providers/portal/PortalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PortalContext.Provider
      value={document.getElementById("portal")}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PortalContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
