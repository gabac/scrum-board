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
        
        getOpenStories: function() {
            return this.where({status: 'todo'});
        }
    });

	return new StoriesCollection();
});