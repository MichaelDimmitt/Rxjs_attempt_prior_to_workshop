import React from 'react';
import ReactDOM from 'react-dom';
import RxjsExample from './app/RxjsExample';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/animation.css';

ReactDOM.render(<RxjsExample />, document.getElementById('root'));
registerServiceWorker();
