'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'models/story',
], function ($, _, Backbone, Story) {
    
    var StoriesCollection = Backbone.Collection.extend({
        model: Story,
        url: '/api/stories',
        
        getTodoStories: function() {
            return this.where({status: 'todo'});
        },
        
        getInprogressStories: function() {
            return this.where({status: 'inprogress'});
        },
        
        getDoneStories: function() {
            return this.where({status: 'done'});
        }
    });

	return new StoriesCollection();
});