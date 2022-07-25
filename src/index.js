import React from 'react';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'
import "./index.css";

import ReactDOM from 'react-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
//import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//     <App />
//     </Router>
//   </React.StrictMode>
// );

