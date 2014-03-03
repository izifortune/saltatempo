require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        scrolld: '../bower_components/scrolld/scrolld',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'bsp'
        },
        scrolld: {
            deps: ['jquery'],
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'scrolld'], function (app, $, bst, scrolld) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
    $("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();$(this).scrolld();});
});