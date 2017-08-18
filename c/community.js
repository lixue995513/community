/**
 * Created by hcc on 2017/8/5.
 */
define(['jquery', 'app','text!../html/community/community.html'], function($,app,community) {
    'use strict';
    return function(args){

        console.log("community");
        $('.mui-content').html(community)

        app.changePage();



    }

});