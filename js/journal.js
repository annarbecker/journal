var moment = require('moment');

exports.Journal = function(title, body) {
  this.title = title;
  this.body = body;
  this.time = moment().format("LL");
}
exports.Journal.prototype.wordCount = function() {
  return this.bodyCount = this.body.split(" ").length;
}
