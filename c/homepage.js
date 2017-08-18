/**
 * Created by hcc on 2017/8/5.
 */
define(['jquery','app', 'text!../html/community/community.html'], function($,app,community) {
    'use strict';
    return function(args){

        $('.mui-content').html(community)
        console.log(app)
        app.changePage();
    }

});