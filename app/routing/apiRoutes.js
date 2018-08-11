// set friends
var friends = require('../data/friends.js');

// Set api route
module.exports = function(app) {

// GET route to display JSON of possible friends
app.get('/api/friends', function (req, res) {
  res.json(friends);
});

// POST route to handle incoming survey results and match logic
app.post('/api/friends', function (req, res) {

// Generate object of newFriend that will include name, photo and scores
var newFriend = {
  name: "",
  photo:  "",
  friendScores: 0
};

var newUser = req.body;
var userName = newUser.name;
var userPhoto = newUser.photo;
var userScores = newUser.scores;
var scoreDifference = 0;

// Search all existing people in database to find closest match
for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
  scoreDifference = 0;

// Then search each set of scores from each person in the database
for (var j = 0; j < friends[i].scores[j]; j++) {
  scoreDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

if (scoreDifference <= newFriend.friendScores) {

  // Identify best match
  newFriend.name = friends[i].name;
  newFriend.photo = friends[i].photo;
  newFriend.friendScores = scoreDifference;
    }
  }
}

// Save newUser data to the database
friends.push(newUser);

// JSON of the match to write to HTML
res.json(newFriend);

});
}
