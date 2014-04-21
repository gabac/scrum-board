'use strict';



var Story = {
  stories: [
    {
      id: '1',
      title: 'foo',
      status: 'todo',
      estimation: '14',
      story: 'text'
    }
  ],
  last_id: 1,
  // 
  getNextId: function () {
    this.last_id += 1;
    return this.last_id;
  },
  // 
  clone: function (data) {
    // JavaScript doesn't have a real clone function
    // This is good enough for simple, data-only objects
    return JSON.parse(JSON.stringify(data));
  },
  // 
  // // merges object with the attributes passed into this function
  // //
  // merge: function(object, attr) {
  //   for (var attrname in attr) {
  //     object[attrname] = attr[attrname];
  //   }
  //   return object;
  // },
  // 
  add: function (data) {
    // poor mans 'dup' (ruby), otherwise we will be modifying the original object
    console.log('creating todo with ' + data);
    var data = this.clone(data);
    var id = this.getNextId();
    data.id = id;
    this.stories.push(data);
    return data;
  },
  // 
  // update: function(data) {
  //   console.log('updating with ' + data);
  //   for (var i = 0; i < this.todos.length; i++) {
  //     if (this.todos[i].id == data['id']) {
  //       Todo.merge(this.todos[i], data);
  //       return this.todos[i];
  //     }
  //   }
  //   return void 0;
  // },
  // 
  // find: function (id) {
  //   for (var i = 0; i < this.todos.length; i++) {
  //     if (this.todos[i].id == id) {
  //       return this.todos[i];
  //     }
  //   }
  //   return void 0;
  // },
  // 
  // remove: function (id) {
  //   for (var i = 0; i < this.todos.length; i++) {
  //     if (this.todos[i].id == id) {
  //       var todo = this.todos[i];
  //       this.todos.splice(i, 1);
  //       return todo; // remove element and return it
  //     }
  // 
  //   }
  //   return void 0;
  // },
  // 
  all: function () {
    return this.stories;
  },
  // 
  // clearAllEntries: function () {
  //   this.todos = [];
  //   this.last_id = 0;
  // }
};


exports.getAllStories = function () {
  return Story.all();
};

// exports.clearAllEntries = function () {
//   return Todo.clearAllEntries();
// };
// 
// 
// 
exports.addStory = function (data) {
  return Story.add(data);
};
// 
// 
// exports.update = function (data) {
//   return Todo.update(data);
// };
// 
// 
// 
// exports.find = function (id) {
//   return Todo.find(id);
// };
// 
// exports.remove = function (id) {
//   return Todo.remove(id);
// }


