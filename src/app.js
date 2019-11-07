import React from 'react';  // import react from react module
import ReactDOM from 'react-dom';  // takes copies to the browser
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<AppRouter />, document.getElementById('app')); 

