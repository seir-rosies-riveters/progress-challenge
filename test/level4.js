const mocha = require('mocha');
const assert = require('chai').assert;
const answers = require('../levelFour.js');

describe("LEVEL FOUR: OBJECTS", function(){
    it("createDog creates a dog object with the correct properties", function(){
        const dog = answers.createDog();
        assert.equal(dog.name, "Rosie");
        assert.equal(dog.age, 1);
        assert.equal(dog.toys[0], "kong")
        assert.equal(dog.toys[1], "stuffed animal")
    })
    it("createBarkingDog dog object can successfully use the bark method", function(){
        const barkingDog = answers.createBarkingDog("Luke");
        assert.equal(barkingDog.bark(), "bark bark I am Luke")
        const barkingDog2 = answers.createBarkingDog("Vader");
        assert.equal(barkingDog2.bark(), "bark bark I am Vader")
    })
})