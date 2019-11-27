let myGreeting = require("../memoryGame")

describe("test", function() {
    it("greets me", function(){
        expect(myGreeting.greet()).toBe("HEY")
    })
})