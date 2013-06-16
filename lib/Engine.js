var _ = require('underscore');

var Engine = function (formats) {
    this.formats = formats;
};

Engine.prototype.render = function (template) {
    var formats = this.formats;

    _.each(formats, (function (opts, tagName) {
        if (opts.open && opts.close) {
            template = this.processOpenClose(template, tagName, opts);
        }
        if (opts.head) {
            template = this.processHead(template, tagName, opts);
        }
    }).bind(this));

    return template;
};

Engine.prototype.processOpenClose = function (template, tagName, opts) {
    var open = opts.open,
        close = opts.close,

        pattern = new RegExp([
            open, '([^', open, close, ']*)', close
        ].join(''), 'g'),

        result = '<' + tagName + '>$1</' + tagName + '>';

    return template.replace(pattern, result);
};

Engine.prototype.processHead = function (template, tagName, opts) {
    var head = opts.head,

        pattern = new RegExp([
            head, '([^', head, '\n]*)\n'
        ].join(''), 'g'),

        result = '<' + tagName + '>$1</' + tagName + '>\n';

    return template.replace(pattern, result);
};

module.exports = Engine;