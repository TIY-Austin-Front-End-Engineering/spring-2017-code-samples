export default function Todo (attrs) {
  this.id   = attrs._id || attrs.id;
  this.name = attrs.name;
  this.complete = attrs.complete;

  this.display = function () {
    return `${this.name} -- ${this.complete}`
  }
}
