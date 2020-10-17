import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceworker from './serviceworker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceworker.unregister();