'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/scrumboard.html',
    'views/addstory',
    'jqueryui'
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
			    todoStories: that.model.getTodoStories(),
                openStories: that.model.getOpenStories(),
                doneStories: that.model.getDoneStories()
    		}));
            
            $('.story', this.$el).draggable({ axis: 'x' });
            $('.todostories', this.$el).droppable({
                drop: function(event, ui) {
                    that.updateModel(ui.draggable.data('model-id'), 'todo')
                }
            });
            $('.openstories', this.$el).droppable({
                drop: function(event, ui) {
                    that.updateModel(ui.draggable.data('model-id'), 'open')
                }
            });
            $('.donestories', this.$el).droppable({
                drop: function(event, ui) {
                    that.updateModel(ui.draggable.data('model-id'), 'done')
                }
            });
		},
        
        updateModel: function(modelId, status) {
            var modelToUpdate = this.model.get(modelId);
            modelToUpdate.save({status: status});
        }

	});

	return ScrumboardView;
});