'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
], function ($, _, Backbone) {
	
    var Story = Backbone.Model.extend({
    
        defaults: {
            title: '',
            status: 'todo',
            estimation: '',
            responsible: '',
            story: ''
        },

    });

	return Story;
});