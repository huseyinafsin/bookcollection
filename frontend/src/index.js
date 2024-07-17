import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,BrowserRouter as Router} from 'react-router-dom';
import './custom.css';

import About from './pages/About/About';
import Books from './pages/Books/Books';
import App from './App';

const router = createBrowserRouter([
  { path: '/', element: <Books /> },
  { path: '/about', element: <About /> },
  { path: '/book', element: <Books /> },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Router>
);

reportWebVitals();
