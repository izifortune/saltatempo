require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        scrolld: '../bower_components/scrolld/scrolld',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        lightbox2: '../bower_components/lightbox2/js/lightbox',
        fancybox: '../bower_components/fancybox/source/jquery.fancybox'
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
        },
        fancybox: {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'scrolld', 'lightbox2', 'fancybox'],
    function(app, $, bst, scrolld, lightbox2, fan) {
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
            // new lightbox2(options);
            $('.video-box').click(function (e) {
                var src = $(e.currentTarget).data('video'),
                title = $(e.currentTarget).data('title');
                $('#myModal iframe').attr('src', src);
                $('#myModal .modal-title').text(title);
            });
            $('#myModal').on('hide.bs.modal', function(e) {
                $('#myModal iframe').removeAttr('src');
            });
        });
    });