const utlty = require('../index');

const should = require('chai').should();
const assert = require('assert');
const spies = require('chai-spies');
const sinon  = require('sinon');

describe('#utlty',function(){

    it('should log array as string to console', function() {
        var spy = sinon.spy(console, 'log');

        utlty.Array.printArray(["a","c","e","5","2","ok"]);

        assert(spy.calledWith("a, c, e, 5, 2, ok"));

        spy.restore();
    });

    it('should log array to as string console with given delimeter', function() {
        var spy = sinon.spy(console, 'log');

        utlty.Array.printArray(["a","c","e","5","2","ok"]," / ");

        assert(spy.calledWith("a / c / e / 5 / 2 / ok"));

        spy.restore();
    });

    it('should return array as string', function() {
        var result = utlty.Array.arrayToString(["a","c","e","5","2","ok"]);
        result.should.equal("a, c, e, 5, 2, ok");
    });

    it('should return array as string with given delimeter', function() {
        var result = utlty.Array.arrayToString(["a","c","e","5","2","ok"]," / ");
        result.should.equal("a / c / e / 5 / 2 / ok");
    });

    it('should return last element of array', function() {
        var result = utlty.Array.last(["a","c","e","5","2","ok"]);
        result.should.equal("ok");
    });

    it('should return nth to last element of array', function() {
        var result = utlty.Array.last(["a","c","e","5","2","ok"],3);
        result.should.equal("e");
    });

})
