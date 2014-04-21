'use strict';

module.exports = function(app) {
  app.models = {}
  app.models.story = require('./story.js');
};