let {
    flipImage,
    createGameSpace,
    setUpGame,
    moveOn,
    setGameMode,
    storeGameObjects,
    shaffle,
    restart,
    Match,
    victory,
    timer,
    gameOver
} = require("../src/memoryGame");
var jsdom = require("jsdom");
fs = require("fs");

beforeEach(function() {
    // make a fake DOM to interact with
    const dom = new jsdom.JSDOM(fs.readFileSync('memoryGame.html'));
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
});

describe("setUpGame", function() {

    it("updates dom with a game enviroment/space/GUI.", () => {
        // before function call we expect our html body to be the comment on the HTML body
        expect(global.document.body.innerHTML).toBe('\n\n');

        setUpGame(); // function call

        // expect after function call
        let expected = `\n
<div id="selectMode">
    <h1>Memory game: The Gossiper</h1>
    <h2>Select game mode</h2>

    <div id="Select">
        <button id="Beginer" onclick="setGameMode('Beginer')" disabled="">Beginer</button>
        <button id="Regular" onclick="setGameMode('Regular')" disabled="">Regular</button>
        <button id="Hard" onclick="setGameMode('Hard')" disabled="">Hard</button>
    </div>

    <br>

    <div id="Overlay"> 
        <form autocomplete="on">
        <label for="Name prompt">Enter your name:</label>
        <input id="playerName" placeholder="Nolo" autofocus="" dirname="playerName.dir">
        
        <input onclick="moveOn()" type="button" value="Done">
        </form>
    </div></div>`
        expect(global.document.body.innerHTML).toEqual(expected);
    });
});

describe("flip", () => {

    it("should flip the cards", () => {
        let card = global.document.getElementsByClassName("")
    })
});