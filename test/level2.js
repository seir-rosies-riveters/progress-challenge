const mocha = require('mocha');
const assert = require('chai').assert;
const answers = require('../levelTwo.js');

describe('LEVEL TWO: CONDITIONALS', function () {
    it("sweater weather returns the correct values", function(){
        assert.equal(answers.sweaterWeather(20), "heavy coat");
        assert.equal(answers.sweaterWeather(46), "sweater");
        assert.equal(answers.sweaterWeather(67), "brisk jacket");
        assert.equal(answers.sweaterWeather(88), "tank top");
    })
    it("shoppingForCars makes the correct true decisions", function(){
        assert.equal(answers.shoppingForCars("red", 4000), true)
        assert.equal(answers.shoppingForCars("orange", 1001), true)
        assert.equal(answers.shoppingForCars("blue", 0), true)
        assert.equal(answers.shoppingForCars("purple", 0), true)
    })
    it("shoppingForCars makes the correct false decisions", function(){
        assert.equal(answers.shoppingForCars("red", 9000), false)
        assert.equal(answers.shoppingForCars("orange", 50), false)
        assert.equal(answers.shoppingForCars("blue", 10), false)
        assert.equal(answers.shoppingForCars("purple", 7000), false)
        assert.equal(answers.shoppingForCars("neon green", 70), false)
    })
})