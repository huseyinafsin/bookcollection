import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import './custom.css';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Router>
);

reportWebVitals();
