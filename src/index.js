import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Clock from './components/Clock';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('clock'));