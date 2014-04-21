'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/addstory.html',
    'text!templates/addstory_edit.html'
], function ($, _, Backbone, AddStoryTemplate, AddStoryEditTemplate) {

	var AddStoryView = Backbone.View.extend({

		el: '#addstoryview',

		template: _.template(AddStoryTemplate),
        editTemplate: _.template(AddStoryEditTemplate),

		events: {
            'click #submitStory': function(event) {
                var title = $('#storyTitle', this.$el).val();
                var status = $('#storyStatus', this.$el).val();
                var estimation = $('#storyEstimation', this.$el).val();
                var story = $('#storyStory', this.$el).val();
                
                if(this.editMode) {
                    this.model.save({
                        title: title,
                        status: status,
                        estimation: estimation,
                        story: story
                    });
                } else {
                    var story = this.stories.create({
                        title: title,
                        status: status,
                        estimation: estimation,
                        story: story
                    });
                }
                
                this.closeView();
            }
		},

		initialize: function (attributes) {
            this.stories = attributes.stories;
		},

		render: function () {
            var that = this;
            
            this.editMode = this.model !== undefined;
            
            this.$el.show();
            
            if(this.editMode) {
                this.$el.html(this.editTemplate({
                    story: this.model.toJSON()
                }));
            } else {
                this.$el.html(this.template());
            }
            
    		
		},
        
        closeView: function () {
            this.$el.hide();
            
            this.stories = undefined;
            this.editMode = undefined;
        }

	});

	return AddStoryView;
});