'use strict';

define([
	'jquery',
    'views/scrumboard',
	'backbone',
    'models/stories'
], function ($, ScrumboardView, Backbone, Stories) {

	var ScrumRouter = Backbone.Router.extend({
		routes: {
			'': 'scrumboard',
            'addstory': 'addStory'
		},

		scrumboard: function (param) {
            
            Stories.fetch({ success: function() {
            	// Start the app if we got some data back
            	new ScrumboardView({model: Stories}).render();
            }});
		},
        
		addStory: function (param) {
			console.log('add story');
            
        	// Initialize the application view
            // new ScrumboardView().render();
		}
	});

	return ScrumRouter;
});