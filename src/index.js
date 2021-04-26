import React from 'react';
import ReactDOM from 'react-dom';
import AppClass from './AppClass';
import AppFunction from './AppFunction';


ReactDOM.render(
  <React.StrictMode>
    <AppClass />
  
    <AppFunction/>
  </React.StrictMode>,
  document.getElementById('root')
);

