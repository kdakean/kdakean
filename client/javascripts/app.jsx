import 'bootstrap';
import '../stylesheets/app.scss';
import React                from 'react';
import ReactDOM             from 'react-dom';

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('Hello, World!')
// })
ReactDOM.render(<div className="container"><h1>Hello World</h1></div>,
  document.getElementById("application"));
