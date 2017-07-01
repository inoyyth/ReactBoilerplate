var React = require('react');

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

module.exports = GreeterForm;
