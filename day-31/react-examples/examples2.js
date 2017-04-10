
const Link = React.createClass({
  render: function () {
    return (<a href={this.props.destination}>{this.props.linkName}</a>);
  }
});

const Message = React.createClass({

  linkNameGoogle: function () {
    return "Google";
  },

  render: function () {
    return (<div>
      <h1 className="blue-text">{this.props.message}</h1>
      <p>{this.props.subMessage}</p>
      <Link
        linkName={this.linkNameGoogle()}
        destination={"http://google.com"}/>
      <br />
      <Link
        linkName={"theironyard"}
        destination={"http://theironyard.com"}/>
    </div>);
  }
});

Message.propTypes = {
  message: React.PropTypes.string.isRequired,
  subMessage: React.PropTypes.string.isRequired
};

ReactDOM.render(
  <Message
     message={"REACT"}
     subMessage={"So cool"} />,
  document.querySelector('#app')
)
