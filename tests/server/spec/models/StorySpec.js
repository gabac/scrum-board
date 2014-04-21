"use strict";

require('jasmine-expect');

var Story = require('../../../../app/models/story');

describe('Story Model', function() {
    
    it('get all stories', function() {
        //when
        var stories = Story.getAllStories();
        
        //then
        expect(stories.length).toEqual(1);
    });
    
    it('add a new story', function() {
        var data = {
            title: 'test',
            status: 'inprogress',
            estimation: '3',
            story: 'storyText'
        };
        
        //when
        var addedStory = Story.addStory(data);
        
        //then
        expect(addedStory.id).toEqual(2);
    });
    
    it('update a story', function() {
        var data = {
            id: 2,
            title: 'update_test',
            status: 'done',
            estimation: '3',
            story: 'storyText'
        };
        
        //when
        var updatedStory = Story.updateStory(data);
        
        //then
        expect(updatedStory.id).toEqual(2);
        expect(updatedStory.title).toEqual('update_test');
        expect(updatedStory.status).toEqual('done');
    });
    
    it('delete a story', function() {
        //when
        var deletedStory = Story.deleteStory(2);
        var allStories = Story.getAllStories();
        
        //then
        expect(deletedStory.id).toEqual(2);
        expect(allStories.length).toEqual(1);
    });
});