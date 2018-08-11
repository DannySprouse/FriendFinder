// node dependencies
var path = require('path');

// Set html route
module.exports = function(app) {

// GET route to display survey page
app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

// USE route to return to home page (default)
app.use( function(req, res) {
  res.sendFile(path.join(__dirname + '/../public/home.html'));
});

}
