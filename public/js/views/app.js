/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/scrumboard.html',
], function ($, _, Backbone, scrumboardTemplate, Common) {
	'use strict';

	var AppView = Backbone.View.extend({

		el: '#scrumboard',

		template: _.template(scrumboardTemplate),

		events: {
			
		},

		initialize: function () {
		},

		render: function () {
    		this.$el.html(this.template({
			
    		}));
		}

	});

	return AppView;
});