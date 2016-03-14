var Journal = require('./journal.js').Journal;
var prompt = require('prompt');
prompt.start();

prompt.get(['title', 'body'], function(err, result) {
  var newJournal = new Journal(result.title, result.body);
  console.log(newJournal.title);
  console.log(newJournal.body);
  console.log(newJournal.wordCount());
});
