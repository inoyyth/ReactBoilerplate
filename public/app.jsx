var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/><br/>
        <input type="text" ref="message"/><br/>
        <button>Set Value</button>
      </form>
    );
  }
});

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

var firstName = 'Inoy';

ReactDOM.render(
  <Greeter name={firstName} message="Hai, this message from props!"/>,
  document.getElementById('app')
);
