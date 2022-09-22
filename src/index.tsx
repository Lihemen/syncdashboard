import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  AppContextProvider,
  ScreenSizeContextProvider,
} from './context/provider';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY!);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <ScreenSizeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ScreenSizeContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);

reportWebVitals();

