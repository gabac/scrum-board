'use strict';

exports.allStories = function(app, req, res) {
    var stories = app.models.story.getAllStories();
    res.json(stories);
};

exports.addStory = function(app, req, res) {
    var story = app.models.story.addStory(req.body);
    res.json(story);
};

exports.updateStory = function(app, req, res) {
    var story = app.models.story.updateStory(req.body);
    res.json(story);
};

exports.deleteStory = function(app, req, res) {
    var story = app.models.story.deleteStory(req.params.id);
    res.json(story);
};