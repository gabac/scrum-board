"use strict";

require('jasmine-expect');

var StoryController = require('../../../../app/controllers/stories_controller');

var app = {}
app.models = {};
app.models.story = require('../../../../app/models/story');

var request = {};
var response = {
    json: ''
};

describe('Story Controller', function() {
    
    it('get all stories', function() {
        spyOn(app.models.story, 'getAllStories');
        spyOn(response, 'json');

        //when
        StoryController.allStories(app, request, response);
        
        //then
        expect(app.models.story.getAllStories).toHaveBeenCalled();
        expect(response.json).toHaveBeenCalled();
    });
    
    it('add a stories', function() {
        spyOn(app.models.story, 'addStory');
        spyOn(response, 'json');
        
        //when
        StoryController.addStory(app, request, response);
        
        //then
        expect(app.models.story.addStory).toHaveBeenCalled();
        expect(response.json).toHaveBeenCalled();
    });
    
    it('update a stories', function() {
        spyOn(app.models.story, 'updateStory');
        spyOn(response, 'json');
        
        //when
        StoryController.updateStory(app, request, response);
        
        //then
        expect(app.models.story.updateStory).toHaveBeenCalled();
        expect(response.json).toHaveBeenCalled();
    });
    
    it('delete a stories', function() {
        request.params = {};
        request.params.id = '1';
        
        spyOn(app.models.story, 'deleteStory');
        spyOn(response, 'json');
        
        //when
        StoryController.deleteStory(app, request, response);
        
        //then
        expect(app.models.story.deleteStory).toHaveBeenCalled();
        expect(response.json).toHaveBeenCalled();
    });
    
});