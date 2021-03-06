/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		jqueryui: {
			deps: [
				'jquery'
			],
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery',
        jqueryui: '../../bower_components/jquery-ui/ui/jquery-ui',
		underscore: '../../bower_components/underscore/underscore',
		backbone: '../../bower_components/backbone/backbone',
		text: '../../bower_components/requirejs-text/text'
	}
});

require([
	'backbone',
	'routers/router'
], function (Backbone, Workspace) {

	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();
});