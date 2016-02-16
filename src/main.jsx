var React = require('react');
var ReactDOM = require('react-dom');
var BoxManager = require('./components/BoxManager.jsx');

ReactDOM.render(<BoxManager title="Box One" headingColor="red"/>, document.getElementById('1Box'));
ReactDOM.render(<BoxManager title="Box Two" headingColor="blue"/>, document.getElementById('2Box'));
ReactDOM.render(<BoxManager title="Box Three" headingColor="green"/>, document.getElementById('3Box'));
ReactDOM.render(<BoxManager title="Box Four" headingColor="orange"/>, document.getElementById('4Box'));
