var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some Paragraph</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  render: function () {
    return (
      <form>
        <input type="text" ref="name"/>
        <button>Set Name</button>
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
      name: this.props.name
    };
  },
  onButtonClick: function (e) { //onclick event form button
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0){ //validatin value
      this.setState({
        name: name
      });
    }
  },
  render: function () { //render page function
    var name = this.state.name; //set value from state
    var message = this.props.message; //set value from props

    return (
      <div>
        <h1>Hello {name} !</h1>
        <p>{message + '!!!'}</p>

        <GreeterMessage/>

        <GreeterForm/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Inoy';

ReactDOM.render(
  <Greeter name={firstName} message="Hai, this message from props!"/>,
  document.getElementById('app')
);
