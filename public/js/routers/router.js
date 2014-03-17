'user strict';

define([
	'jquery',
	'backbone'
], function ($, Backbone) {
	'use strict';

	var ScrumRouter = Backbone.Router.extend({
		routes: {
			'*scrum': 'setFilter'
		},

		setFilter: function (param) {
			console.log('scrummy');
		}
	});

	return ScrumRouter;
});