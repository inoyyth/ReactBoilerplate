var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () { //for set default properties(props)
    return {
      name: 'React',
      message: 'default message'
    }
  },
  getInitialState: function () { //for set inital state value
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function (name) { //onclick event form button
    this.setState({
      name: name
    })
  },
  handleNewMessage: function (message) { //onclick event form button
    this.setState({
      message: message
    })
  },
  render: function () { //render page function
    var name = this.state.name; //set value from state
    var message = this.state.message; //set value from props

    return (
      <div>

        <GreeterMessage name={name} message={message}/>

        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>

      </div>
    );
  }
});

module.exports = Greeter;
