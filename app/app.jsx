var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Inoy YTH';

ReactDOM.render(
  <Greeter name={firstName} message="Hai, this message from props!"/>,
  document.getElementById('app')
);
