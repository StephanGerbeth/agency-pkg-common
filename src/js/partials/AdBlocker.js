"use strict";

var Controller = require('agency-pkg-base/Controller');
var blockAdBlock = require('exports?blockAdBlock!blockadblock');

module.exports = Controller.extend({

    initialize: function() {
        Controller.prototype.initialize.apply(this, arguments);

        blockAdBlock.onDetected(function() {
            $(this.el).addClass('js-active');
        }.bind(this));
    }
});
