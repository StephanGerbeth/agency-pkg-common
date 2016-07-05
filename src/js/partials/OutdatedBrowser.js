"use strict";

require("style!outdated-browser/outdatedbrowser/outdatedbrowser.css");
var outdatedBrowser = require('exports?outdatedBrowser!outdated-browser/outdatedbrowser/outdatedbrowser');
var Controller = require('agency-pkg-base/Controller');

module.exports = Controller.extend({

    initialize: function() {
        Controller.prototype.initialize.apply(this, arguments);

        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'IE9',
            languagePath: ''
        });

        $(this.el).removeClass('js-hidden');
    }
});
