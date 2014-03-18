'user strict';

define([
	'jquery',
    'views/scrumboard',
	'backbone'
], function ($, ScrumboardView, Backbone) {
	'use strict';

	var ScrumRouter = Backbone.Router.extend({
		routes: {
			'': 'scrumboard',
            'addstory': 'addStory'
		},

		scrumboard: function (param) {
			console.log('scrummy');
            
        	// Initialize the application view
        	new ScrumboardView().render();
		},
        
		addStory: function (param) {
			console.log('add story');
            
        	// Initialize the application view
            // new ScrumboardView().render();
		}
	});

	return ScrumRouter;
});