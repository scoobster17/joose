;var joose = window.joose || {};
joose.setup = (function(js) {

    var init = function() {

        // create namespacing
        joose.classes = {};
        
    };

    return {
        init: init
    }

})(joose);

// initialise setup functionality
joose.setup.init();

// remove public method
delete joose.setup.init;