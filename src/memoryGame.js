// GLOBAL VARIABLES===========================================================================================
var flips = 0;
var matches = 0;
var image1 = '';
var modeTime = 50;
var timeRemaining = 50;
var gameMode = 'Hard';
var modeLength = 4;
var modeHight = 3;
var needToMatch = 6;
var playerName = 'Player';

// EXECUTION==================================================================================================
var element = document.createElement('div');
element.setAttribute('id', "TheeGameSpace");

setUpGame();
// Create a 2-dimensional array 
var myGameSpace = new Array(3);
// creating an array to store htmlelements
var images = new Array(12);
// ***********************************************************************************************************


// FUNCTIONS==================================================================================================
// predefign board
function setUpGame(){
  var setup = document.createElement('div')
  setup.setAttribute("id", "selectMode")
  setup.innerHTML = `<h1>Memory game: The Gossiper</h1>
                        <h2>Select game mode</h2>

                        <div id="Select">
                          <button class="gameMode" id="Beginer" onClick="setGameMode('Beginer')" disabled>Beginer</button>
                          <button class="gameMode" id="Regular" onClick="setGameMode('Regular')" disabled>Regular</button>
                          <button class="gameMode" id="Hard" onClick="setGameMode('Hard')" disabled>Hard</button>
                        </div>
                        
                        <br>
                        
                        <div id="Overlay"> 
                          <form autocomplete="on">

                            Enter your name:
                            <input 
                            id="playerName"
                            placeholder="Nolo"
                            autofocus
                            dirname="playerName.dir">
                            </input>
                            <input
                            onClick="moveOn()"
                            type="button"
                            value="Done"></input>

                          </form>

                          
                        </div>
                     </div>`;
                        
  document.body.append(setup);
}
function moveOn(){
  playerName = document.getElementById("playerName").value;
  console.log(playerName);
  document.getElementById("Overlay").style.display = "none";
  document.getElementById("Beginer", "Regular", "Hard").disabled = false;
  document.getElementById("Regular").disabled = false;
  document.getElementById("Hard").disabled = false;
}
function setGameMode(mode){
  if(mode === 'Beginer'){
    console.log("your name is: "+playerName);
    gameMode = 'Beginer';
    modeTime = 30;
    timeRemaining = 30;
    modeLength = 4;
    modeHight = 1;
    needToMatch = 2;
    element.innerHTML = createGameSpace();
  }else if(mode === 'Regular'){
    gameMode = 'Regular';
    modeTime = 40;
    timeRemaining = 40;
    modeLength = 3;
    modeHight = 2;
    needToMatch = 3;
    element.innerHTML = createGameSpace();
  }else{
    timeRemaining = 50;
    element.innerHTML = createGameSpace();
  }
  document.body.innerHTML = element.outerHTML;
  document.getElementById('timeRemaining').innerHTML = `Time left: ${timeRemaining} second(s)`;
  select = document.querySelector('#TheeGameSpace');
  select.addEventListener('click', flipImage, false);
  return mode;
}
// storing game Objects in an Array
function storeGameObjects() {
  var imageName = 0;
  images = [];
  for (var i  = 0; i < needToMatch; i++) {
    for (var j = 0; j < 2; j++) {
      var gameElements = document.createElement('img');
      gameElements.setAttribute('id', 'couple' + i);
      gameElements.setAttribute('src', "Media/" + (++imageName) + ".png");
      images[imageName] = gameElements;
    }
  }
  shaffle(images);
}
// shuffling images
function shaffle(array) {
  array.sort(function (a, b) { return 0.5 - Math.random(); });
}
// Creating gameSpace
function createGameSpace() {
  storeGameObjects();
  var id = -1;
  
  world = '<h1 id="tittle"> Memory Game: The Gossiper (Celebrity couples)</h1>';
  world += '<div id="gameInfo">';
  world += '<p id="heading">Game Information.</p>';
  world += '<p id="Matches">Matches made: 0</p>';
  world += `<p id="timeRemaining"></p>`;
  world += `<p id="mode"> Game mode: ${gameMode} mode</p>`;
  world += '</div>';
  
  world += '<div id="activeWorld">';
  // Loop to create and display the initial game space.\
  
  for (var i = 0; i < modeHight; i++) { // columns
    for (var j = 0; j < modeLength; j++) { // rows
      world += '<img id="' + (++id) + '" src="Media/13.png"></img>';
    }
    world += '<br>';
  }
  world += '</div>';
  world += '<button id="restartGame" onClick="restart()">Restart</button>';
  return world;
}
// Restart button code
function restart() {
  img1 = '';
  flips = 0;
  matches = 0;
  setGameMode(gameMode);
  select.addEventListener('click', flipImage, false);
}
// flipping the images
function flipImage(e) {
  if((e.target.id.length <= 2)){
    
    if(flips < 1){
      timer();
    }
    
    var clickOn = e.target.id;
    
    setTimeout(() => {
      document.getElementById('activeWorld').replaceChild(images[clickOn], document.getElementById(clickOn));
      e.stopPropagtion;
    }, 100);
    
    ++flips;
    
    Match(clickOn, document.getElementById(clickOn));
    
  }
}
// Find match
function Match(click_On, cover) {
  select.removeEventListener('click', flipImage);
  
  if (((flips % 2) == 0)) {
    if (images[click_On].id !== image1) {
      // flip back
      setTimeout(() => {
        document.getElementById('activeWorld').replaceChild(Coverimage1, document.getElementById(image1));
        document.getElementById('activeWorld').replaceChild(cover, document.getElementById(images[click_On].id));
        select.addEventListener('click', flipImage);
      }, 500);
    } else {
      // increment the moves count
      matches++;
      document.getElementById('Matches').innerHTML = 'Matches made: ' + matches;

      // check for a win
      setTimeout(() => {
        victory();
      }, 500);

      select.addEventListener('click', flipImage);
    }
  } else {
    select.addEventListener('click', flipImage);
    image1 = images[click_On].id;
    Coverimage1 = cover;
  }
}
// functionality for a win
function victory() {
  if (matches === needToMatch) {
    alert(`Well done! YOU WIN!\nCongratulations ${playerName}, you WON the game in ${modeTime - timeRemaining} seconds and ${flips} moves.`);
  }
}
// functionality for a game tamer
function timer(){
  var clear = setInterval(decrementSeconds, 1000);
  function decrementSeconds() {
    if((timeRemaining > 0) && (matches !== needToMatch) && (flips !== 0)){
      --timeRemaining;
      document.getElementById('timeRemaining').innerHTML = `Time left: ${timeRemaining} second(s)`;
    }else if(flips === 0){
      window.clearInterval(clear);
    }else{
      window.clearInterval(clear);
      setTimeout(() => {
        gameOver();
      }, 500);
    }
  }
}
// functionality for a loss
function gameOver(){
  if((timeRemaining == 0) && (matches !== needToMatch)) {
    select.removeEventListener('click', flipImage);
    alert(`Time is up ${playerName}.\nGameover! YOU LOST!`);
  }
}
// ***********************************************************************************************************


// Exporting functions
module.exports = {
  flipImage, createGameSpace
};