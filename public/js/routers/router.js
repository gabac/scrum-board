'user strict';

define([
	'jquery',
    'views/scrumboard',
	'backbone'
], function ($, ScrumboardView, Backbone) {
	'use strict';

	var ScrumRouter = Backbone.Router.extend({
		routes: {
			'': 'scrumboard'
		},

		scrumboard: function (param) {
			console.log('scrummy');
            
        	// Initialize the application view
        	new ScrumboardView().render();
		}
	});

	return ScrumRouter;
});