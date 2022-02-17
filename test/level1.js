const mocha = require('mocha');
const assert = require('chai').assert;
const answers = require('../levelOne.js');

describe('LEVEL ONE: ARRAYS', function () {
    it("the flavors array has the correct first flavor", function(){
        assert.equal(answers.flavors[0], "impossible berry")
    })
    it("the flavors array has the correct second flavor", function(){
        assert.equal(answers.flavors[1], "vanilla")
    })
    it("the flavors array has the correct number of elements after pop", function(){
        assert.equal(answers.flavors.length, 2)
    })
    it("the flavors array stored the correct value in the lastFlavor variable", function(){
        assert.equal(answers.lastFlavor, "chocolate")
    })
    it("the colors array has all the correct values in uppercase", function(){
        assert.equal(answers.colors[0], "RED")
        assert.equal(answers.colors[1], "GREEN")
        assert.equal(answers.colors[2], "BLUE")
    })
})
