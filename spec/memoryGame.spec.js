let mycreateGameSpace = require("../memoryGame")

describe("test", function() {
    it("createGameSpaces me", function(){
        expect(mycreateGameSpace.createGameSpace()).toBe(mycreateGameSpace)
    })
})