/**
 * Created by hcc on 2017/8/5.
 */
define(['jquery','app', 'text!../html/service/famplan.html'], function($,app,famplan) {
    'use strict';
    return function(args){

        $('.mui-content').html(famplan)
        app.changePage();




    }

});