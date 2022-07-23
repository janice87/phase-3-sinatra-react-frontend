import React from 'react';
//import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'

import ReactDOM from 'react-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// new code
//import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//     <App />
//     </Router>
//   </React.StrictMode>
// );

