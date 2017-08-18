/**
 * Created by hcc on 2017/8/5.
 */
define(['jquery','app', 'text!../html/service/service.html'], function($,app,service) {
    'use strict';
    return function(args){
        console.log("service");
        $('.mui-content').html(service)
        app.changePage();




    }

});