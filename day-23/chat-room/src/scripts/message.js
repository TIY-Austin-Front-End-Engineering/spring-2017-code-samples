const Message = (username, body, date) => {
  this.username = username;
  this.body     = body;
  this.created  = date || new Date();
}

Message.prototype.save = () => {
  console.log('saved');
}

Message.prototype.destroy = () => {
  console.log('destroyed');
}

export default Message;
