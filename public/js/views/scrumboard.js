'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/scrumboard.html',
    'views/addstory'
], function ($, _, Backbone, scrumboardTemplate, AddStoryView) {
	'use strict';

	var ScrumboardView = Backbone.View.extend({

		el: '#scrumboard',

		template: _.template(scrumboardTemplate),

		events: {
			'click #addstory': function(event) {
                var addStory = new AddStoryView({stories: this.model}).render();
			}
		},

		initialize: function () {
            this.listenTo(this.model, "change", this.render);
		},

		render: function () {
            var that = this;
            
    		this.$el.html(this.template({
			    openStories: that.model.getOpenStories()
    		}));
		}

	});

	return ScrumboardView;
});