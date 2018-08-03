import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import header from './header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<header />, document.getElementById('root'));
registerServiceWorker();
