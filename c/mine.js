/**
 * Created by hcc on 2017/8/5.
 */
define(['jquery','app', 'text!../html/mine/mine.html'], function($,app,mine) {
    'use strict';
    return function(args){
        console.log("mine");
        $('.mui-content').html(mine)
        app.changePage();




    }

});