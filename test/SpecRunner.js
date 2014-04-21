'use strict';

require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
        jasmine: {
             exports: 'jasmine'
       },
       'jasmine-html': {
         deps: ['jasmine'],
         exports: 'jasmine'
       }
	},
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
        jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': '../bower_components/jasmine/lib/jasmine-core/jasmine-html'
	}
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/backbone/models/StoriesSpec');

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});