define([], function() {
    'use strict';
    return {
        index: {
            path: '/',
            moduleId: 'homepage' 
        },
        community:{
            path: '/community',
            moduleId: 'community'
        },
        service:{
            path: '/service',
            moduleId: 'service'
        },
        mine:{
            path: '/mine',
            moduleId: 'mine'
        },
        engine:{
            path: '/engine',
            moduleId: 'engine'
        },
        notFound: {
            path: '*',
            moduleId: 'homepage'
        }
    };
});