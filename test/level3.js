const mocha = require('mocha');
const assert = require('chai').assert;
const cheerio = require('cheerio');
var fs = require('fs');
const $ = cheerio.load(fs.readFileSync('levelThree.html'));

describe("LEVEL THREE: HTML STRUCTURES", function(){
    it("the main element has the correct children", function(){
        const children = $('main').children();
        assert.equal(children[0].tagName, "aside");
        assert.equal(children[1].tagName, "section"); 
    })
    it("the aside element has the correct children", function(){
        const children = $('aside').children();
        assert.equal(children[0].tagName, "h2");
        assert.equal($(children[0]).text(), "My favorite colors");
        assert.equal(children[1].tagName, "ul"); 
    })
    it("the ul inside the aside element has the correct children", function(){
        const children = $('aside ul').children();
        assert.equal(children.length, 3);
        assert.equal(children[0].tagName, "li");
        assert.equal($(children[0]).text(), "red");
        assert.equal(children[1].tagName, "li"); 
        assert.equal($(children[1]).text(), "blue");
        assert.equal(children[2].tagName, "li"); 
        assert.equal($(children[2]).text(), "green");
    })
    it("the section element has the correct children", function(){
        const children = $('section').children();
        assert.equal(children[0].tagName, "h1");
        assert.equal($(children[0]).text(), "Awesome website");
        assert.equal(children[1].tagName, "img"); 
    })
    it("the img has the correctly linked image url", function(){
        assert.equal($('img').prop("src"), "https://media1.giphy.com/media/VekcnHOwOI5So/giphy.gif?cid=ecf05e47im3blq8qvwtooq45al8kmqmstygsgtp506ezj7a1&rid=giphy.gif&ct=g")
    })
})