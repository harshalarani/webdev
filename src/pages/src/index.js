import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appa from './Appa';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Appa />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
