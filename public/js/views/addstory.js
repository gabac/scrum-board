'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/addstory.html'
], function ($, _, Backbone, AddStoryTemplate) {

	var AddStoryView = Backbone.View.extend({

		el: '#addstoryview',

		template: _.template(AddStoryTemplate),

		events: {
            'click #submitStory': function(event) {
                var title = $('#storyTitle', this.$el).val();
                var status = $('#storyStatus', this.$el).val();
                var estimation = $('#storyEstimation', this.$el).val();
                var story = $('#storyStory', this.$el).val();
                
                var story = this.stories.create({
                    title: title,
                    status: status,
                    estimation: estimation,
                    story: story
                })
            }
		},

		initialize: function (attributes) {
            this.stories = attributes.stories;
		},

		render: function () {
            var that = this;
            
            this.$el.show();
            
    		this.$el.html(this.template({
			    
    		}));
		},
        
        closeView: function () {
            this.$el.hide();
            
            this.stories = undefined;
        }

	});

	return AddStoryView;
});