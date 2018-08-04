import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clients from './clients';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();Clients();
