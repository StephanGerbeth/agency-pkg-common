'use strict';

var Controller = require('agency-pkg-base/Controller');

module.exports = Controller.extend({

    initialize: function() {
        Controller.prototype.initialize.apply(this, arguments);

        // $(document).on('click', 'a', function(e) {
        //     // console.log('CLICK',e);
        // });
    }
});
