'use strict';

var controller = require('../controllers/stories_controller');

module.exports = function(app) {
    app.get('/api/stories', function(req, res) {
       controller.allStories(app, req, res);
    });
    
    app.post('/api/stories', function(req, res) {
       controller.addStory(app, req, res);
    });
    
    app.put('/api/stories/:id', function(req,res) {
       controller.updateStory(app, req, res);
    });
}