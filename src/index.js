import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator_app/Calculator'; 
import  './calculator_app/index.css';

import CalcApp from './calculator_application/App'


ReactDOM.render(
  <React.StrictMode>
  {/* <Calculator/> */}
    <CalcApp />
  </React.StrictMode>,
  document.getElementById('root')
);


