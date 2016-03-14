exports.Journal = function(title, body) {
  this.title = title;
  this.body = body;
}
exports.Journal.prototype.wordCount = function() {
  return this.bodyCount = this.body.split(" ").length;
}
