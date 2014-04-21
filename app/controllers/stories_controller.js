'use strict';

exports.allStories = function(app, req, res) {
    var stories = app.models.story.getAllStories();
    res.json(stories);
};

exports.addStory = function(app, req, res) {
    var story = app.models.story.addStory(req.body);
    res.json(story);
};

// exports.show = function(app, req, res) {
//   var todo = app.models.todo.find(req.params.id);
//   res.json( todo );
// };
// 
// exports.create = function(app, req, res) {
//   console.log('Creating new todo');
//   var todo = app.models.todo.create(req.body);
//   res.json( todo );
// };
// 
// exports.update = function(app, req, res) {
//   var todo = app.models.todo.update(req.body);
//   res.json( todo );
// };
// 
// exports.remove = function(app, req, res) {
//   var todo = app.models.todo.remove(req.params.id);
//   res.json( todo );
// };