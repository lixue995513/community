require.config({

    paths: {

        jquery: 'libs/jquery-1.11.1.min',
        app:'libs/app',

        router: 'libs/router', 
        text: 'libs/text',

    },
    shim: {

    },
    waitSeconds: 15
})
require(['router', 'RouterConf'], function(router, config) {
      'use strict';
      //配置路由
      
      router
          .registerRoutes(config)
          .on('routeload', function(module, routeArguments) {
            var md =  new module(routeArguments);
          })
          .init();
});
