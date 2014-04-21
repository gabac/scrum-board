'use strict';



var Story = {
  stories: [
    {
      id: '1',
      title: 'Story 1',
      status: 'todo',
      estimation: '3',
      responsible: 'Cyril',
      story: 'this is a small text'
    }
  ],
  last_id: 1,

  getNextId: function () {
    this.last_id += 1;
    return this.last_id;
  },

  clone: function (data) {
    // JavaScript doesn't have a real clone function
    // This is good enough for simple, data-only objects
    return JSON.parse(JSON.stringify(data));
  },
  
  // merges object with the attributes passed into this function
  merge: function(object, attr) {
    for (var attrname in attr) {
      object[attrname] = attr[attrname];
    }
    return object;
  },
   
  add: function (data) {
    // poor mans 'dup' (ruby), otherwise we will be modifying the original object
    console.log('creating todo with ' + data);
    var data = this.clone(data);
    var id = this.getNextId();
    data.id = id;
    this.stories.push(data);
    return data;
  },

  update: function(data) {
    console.log('updating with ' + data);
    
    var story = Story.find(data.id);
    if(story) {
        Story.merge(story, data);
        return story;
    }
        
    return void 0;
  },
  
  find: function (id) {
    for (var i = 0; i < this.stories.length; i++) {
      if (this.stories[i].id == id) {
        return this.stories[i];
      }
    }
    return void 0;
  },
  
  delete: function (id) {
    for (var i = 0; i < this.stories.length; i++) {
      if (this.stories[i].id == id) {
        var story = this.stories[i];
        this.stories.splice(i, 1);
        return story; // remove element and return it
      }
  
    }
    return void 0;
  },
  
  all: function () {
    return this.stories;
  }
};


exports.getAllStories = function () {
  return Story.all();
};

exports.addStory = function (data) {
  return Story.add(data);
};

exports.updateStory = function (data) {
  return Story.update(data);
};

exports.deleteStory = function (id) {
  return Story.delete(id);
};


