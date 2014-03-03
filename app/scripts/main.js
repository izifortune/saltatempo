require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        scrolld: '../bower_components/scrolld/scrolld',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        lightbox2: '../bower_components/lightbox2/js/lightbox'
    },
    shim: {
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'bsp'
        },
        scrolld: {
            deps: [
                'jquery'
            ]
        },
        lightbox2: {
            deps: [
                'jquery'
            ]
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'scrolld', 'lightbox2'],
    function(app, $, bst, scrolld, lightbox2) {
        'use strict';
        // use app here
        $("[id*='Btn']").stop(true).on('click', function(e) {
            e.preventDefault();
            $(this).scrolld();
        });

        var LightboxOptions = (function() {
            function LightboxOptions() {
                this.fadeDuration = 500;
                this.fitImagesInViewport = true;
                this.resizeDuration = 700;
                this.showImageNumberLabel = true;
                this.wrapAround = false;
            }

            LightboxOptions.prototype.albumLabel = function(curImageNum, albumSize) {
                return "Image " + curImageNum + " of " + albumSize;
            };

            return LightboxOptions;

        })();
        var options = new LightboxOptions();
        $(function() {
            new lightbox2(options);
        });
    });