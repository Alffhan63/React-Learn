import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';
import MyInfo from './Components/MyInfo';




ReactDOM.render(<MyInfo />, document.getElementById('root'));
serviceWorker.unregister();
