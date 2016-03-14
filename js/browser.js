var Journal = require('./journal.js').Journal;

$(document).ready(function() {
  $('#new-entry').submit(function(event) {
    event.preventDefault();

    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Journal(title, body);
    $('#completed-entries').append("<div><h3>" + newJournal.title + "</h3>" + "<p>" + newJournal.time + "</p>" + "<p>" + newJournal.body + "</p>" + "<p>" + newJournal.wordCount() + "</p></div>");
  });
});
