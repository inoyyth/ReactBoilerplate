var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Inoy';

ReactDOM.render(
  <Greeter name={firstName} message="Hai, this message from props!"/>,
  document.getElementById('app')
);
