import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game'; // Import a component from another file

function tick(){
  ReactDOM.render(<Game />, document.getElementById('root'));
}

setInterval(tick, 1000);
