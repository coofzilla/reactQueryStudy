import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'components/App/App';

//upgrade this to react 18 using createRoot
//https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

