/**
 * Created by hcc on 2017/8/5.
 */
define(['jquery', 'app','text!../html/engine/engine.html'], function($,app,engine) {
    'use strict';
    return function(args){

        $('.mui-content').html(engine)
        app.changePage();




    }

});