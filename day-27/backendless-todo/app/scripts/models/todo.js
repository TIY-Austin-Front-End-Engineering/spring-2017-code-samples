export default function Todo (attrs) {
  this.id   = attrs._id || attrs.id;
  this.name = attrs.name;
  this.description = attrs.description;

  this.display = function () {
    return `${this.title} -- ${this.description}`
  }
}
