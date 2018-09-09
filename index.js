(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define['amd']) {
        define(factory);
    } else if (typeof exports === 'object') {
        module['exports'] = factory();
    } else {
        root['NJ'] = factory();
    }
})(this, function () {
    "use strict";
    console.log('msg from node-json');
    var app = {};

    app.test = function () {
        console.log('Function test echo');
    };

    return app;
});