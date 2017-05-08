var Greeter = React.createClass({
  getDefaultProps: function () { //for set default properties(props)
    return {
      name: 'React',
      message: 'default message'
    }
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name} !</h1>
      <p>{message + '!!!'}</p>
      </div>
    );
  }
});

var firstName = 'Inoy';

ReactDOM.render(
  <Greeter name={firstName} message="Hai, this message from props!"/>,
  document.getElementById('app')
);
