let myGameSpace = require("../src/memoryGame")
var jsdom = require("jsdom");

describe("createGameSpace", function() {
  beforeEach(function() {
    // make a fake DOM to interact with
    const dom = new jsdom.JSDOM('<html><body id="fake"></body></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });
  
  it("updates dom with a game enviroment/space/GUI.", () => {
    // expect before function call
    expect(global.document.body.innerHTML).toBe('')
    
    // creating an element for my gamespace
    var element = global.document.createElement('div')
    element.innerHTML = myGameSpace.createGameSpace() // function call

    // appending my gamespage element to the fake DOM
    global.document.body.appendChild(element)
    
    // expect after function call
    // console.log('I am your document ' + global.document.body.innerHTML)
    expect(global.document.body.innerHTML).toBe('<div><h1 id="tittle"> Memory Game: The Gossiper (Celebrity couples)</h1><div id="gameInfo"><p id="heading">Game Information.</p><p id="Matches">Matches made: 0</p><p id="timeRemaining">Time remaining: 50 second(s)</p></div><div id="activeWorld"><img id="0" src="Media/13.png"><img id="1" src="Media/13.png"><img id="2" src="Media/13.png"><img id="3" src="Media/13.png"><br><img id="4" src="Media/13.png"><img id="5" src="Media/13.png"><img id="6" src="Media/13.png"><img id="7" src="Media/13.png"><br><img id="8" src="Media/13.png"><img id="9" src="Media/13.png"><img id="10" src="Media/13.png"><img id="11" src="Media/13.png"><br></div><button id="restartGame" onclick="restart()">Restart</button></div>')
  })

  
});

