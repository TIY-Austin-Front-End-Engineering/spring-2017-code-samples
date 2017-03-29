export default function messageView (store, message) {
  return `
    <div class='message'><p> ${message.body} - <strong>${message.username}</strong></p></div>
  `
};
