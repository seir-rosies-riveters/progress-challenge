const mocha = require('mocha');
const assert = require('chai').assert;
const answers = require('../levelFive.js');

describe("LEVEL FIVE: FUNCTIONS", function(){
    it("The reverse array function works as expected", function(){
        const test1 = [1,2,3,4,5]
        const test2 = ["Hello", "Goodbye"]
        const test3 = ["Able", "was", "I", "ere", "I", "saw", "Elba"]
        const test1Reversed = [5,4,3,2,1];
        const test2Reversed = ["Goodbye", "Hello"];
        const test3Reversed = ["Elba", "saw", "I", "ere", "I", "was", "Able"]
        answers.reverseArray(test1).forEach((element, index)=>{
            assert.equal(element, test1Reversed[index])
        })
        answers.reverseArray(test2).forEach((element, index)=>{
            assert.equal(element, test2Reversed[index])
        })
        answers.reverseArray(test3).forEach((element, index)=>{
            assert.equal(element, test3Reversed[index])
        })
    })
    it("The greatest of all time function works as expected", function(){
        const players = [{name: "Aaron", wins: 1}, {name: "Tom", wins: 7}, {name: "Ben", wins: 2}, {name: "Joe", wins: 5}]
        assert.equal(answers.greatestOfAllTime(players), "Tom")
        const players2 = [{name: "Serena", wins: 10}, {name: "Jocelyn", wins: 5}, {name: "Rosie", wins: 2}, {name: "Morty", wins: 5}]
        assert.equal(answers.greatestOfAllTime(players2), "Serena")
    })
})