import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import './index.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const user = {
    firstName: 'Ante',
    lastName: 'Penic'
};
  
const element = (
    <h3>
        Hello, {formatName(user)}!
    </h3>
);
  
ReactDOM.render(element, document.getElementById('user'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('clock'));