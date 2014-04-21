'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'../../../../../public/js/models/stories',
], function ($, _, Backbone, Stories) {
    
    describe('Stories', function() {
        
        beforeEach(function() {
            Stories.add([
                {title: 'test', status: 'todo', estimation: '21', story: 'text'},
                {title: 'test', status: 'inprogress', estimation: '21', story: 'text'},
                {title: 'test', status: 'inprogress', estimation: '21', story: 'text'},
                {title: 'test', status: 'done', estimation: '21', story: 'text'},
                {title: 'test', status: 'done', estimation: '21', story: 'text'},   
            ]);
        });
        
        afterEach(function(){
            Stories.reset();
        });

        it('get only todo stories', function() {
            //when
            var todoStories = Stories.getTodoStories();
            
            //then
            expect(todoStories.length).toEqual(1);
        });
        
        it('get only inprogress stories', function() {
            //when
            var inprogressStories = Stories.getInprogressStories();
            
            //then
            expect(inprogressStories.length).toEqual(2);
        });
        
        it('get only done stories', function() {
            //when
            var doneStories = Stories.getDoneStories();
            
            //then
            expect(doneStories.length).toEqual(2);
        });

    });
    
});