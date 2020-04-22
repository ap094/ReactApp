import './index.css';
import App from './components/App';
import Clock from './components/Clock';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('clock'));

registerServiceWorker();
