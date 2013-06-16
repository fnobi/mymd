var expect = require('chai').expect,
    Engine = require('../lib/Engine');

describe('Engine', function () {
    it('created', function () {
        var engine = new Engine();
        expect(engine).to.be.ok;
    });

    describe('render', function () {
        it('open and close tag', function () {
            var engine = new Engine({
                h1: { open: '【', close: '】' }
            });

            var txt = engine.render([
                '【お題1】',
                'ほげほげ',
                '【お題2】',
                'もげもげ'
            ].join('\n'));

            expect(txt).to.be.equal([
                '<h1>お題1</h1>',
                'ほげほげ',
                '<h1>お題2</h1>',
                'もげもげ'
            ].join('\n'));
        });
    });
});