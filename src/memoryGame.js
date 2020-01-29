// GLOBAL VARIABLES===========================================================================================
var flips = 0
var matches = 0
var image1 = ''
var timeRemaining = 50
var gameMode = 'Hard'
var modeLength = 4
var modeHight = 3
var needToMatch = 6

// EXECUTION==================================================================================================
var element = document.createElement('div')
element.setAttribute('id', "TheeGameSpace")

setUpGame()
// Create a 2-dimensional array 
var myGameSpace = new Array(3)
// creating an array to store htmlelements
var images = new Array(12)
// ***********************************************************************************************************


// FUNCTIONS==================================================================================================

// predefign board
function setUpGame(){
  var setup = document.createElement('div')
  setup.innerHTML = `<h1>Memory game: The Gossiper</h1>`
  setup.innerHTML += `<div id="selectMode">`
  setup.innerHTML += `<h2>Select game mode</h2>`
  setup.innerHTML += `<div id="Select">`
  setup.innerHTML += `<button id="Beginer" onClick="setGameMode('Beginer')">Beginer</button>`
  setup.innerHTML += `<button id="Regular" onClick="setGameMode('Regular')">Regular</button>`
  setup.innerHTML += `<button id="Hard" onClick="setGameMode('Hard')">Hard</button>`
  setup.innerHTML += `</div>`
  setup.innerHTML += `</div>`
  document.body.append(setup)
}
function setGameMode(mode){
  if(mode === 'Beginer'){
    gameMode = 'Beginer'
    timeRemaining = 30
    modeLength = 4
    modeHight = 1
    needToMatch = 2
    element.innerHTML = createGameSpace()
  }else if(mode === 'Regular'){
    gameMode = 'Regular'
    timeRemaining = 40
    modeLength = 3
    modeHight = 2
    needToMatch = 3
    element.innerHTML = createGameSpace()
  }else{
    element.innerHTML = createGameSpace()
  }
  document.body.innerHTML = element.outerHTML
  document.getElementById('timeRemaining').innerHTML = `Time left: ${timeRemaining} second(s)`
  select = document.querySelector('#TheeGameSpace')
  select.addEventListener('click', flipImage, false)
  return mode
}
// storing game Objects in an Array
function storeGameObjects() {
  var imageName = 0
  images = []
  for (var i  = 0; i < needToMatch; i++) {
    for (var j = 0; j < 2; j++) {
      var gameElements = document.createElement('img')
      gameElements.setAttribute('id', 'couple' + i)
      gameElements.setAttribute('src', "Media/" + (++imageName) + ".png")
      images[imageName] = gameElements
    }
  }
  shaffle(images)
}
// shuffling images
function shaffle(array) {
  array.sort(function (a, b) { return 0.5 - Math.random() })
}
// Creating gameSpace
function createGameSpace() {
  storeGameObjects()
  var id = -1
  
  world = '<h1 id="tittle"> Memory Game: The Gossiper (Celebrity couples)</h1>'
  world += '<div id="gameInfo">'
  world += '<p id="heading">Game Information.</p>'
  world += '<p id="Matches">Matches made: 0</p>'
  world += `<p id="timeRemaining"></p>`
  world += `<p id="mode"> Game mode: ${gameMode} mode</p>`
  world += '</div>'
  
  world += '<div id="activeWorld">'
  // Loop to create and display the initial game space.\
  
  for (var i = 0; i < modeHight; i++) { // columns
    for (var j = 0; j < modeLength; j++) { // rows
      world += '<img id="' + (++id) + '" src="Media/13.png"></img>'
    }
    world += '<br>'
  }
  world += '</div>'
  world += '<button id="restartGame" onClick="restart()">Restart</button>'
  return world;
}
// Restart button code
function restart() {
  img1 = ''
  flips = 0
  matches = 0
  setGameMode(gameMode)
  document.getElementById('timeRemaining').innerHTML = `Time left: ${timeRemaining} second(s)`
  select.addEventListener('click', flipImage, false)
}
// flipping the images
function flipImage(e) {
  if((e.target.id.length <= 2)){
    
    if(flips < 1){
      timer()
    }
    
    var clickOn = e.target.id;
    
    setTimeout(() => {
      console.log(`Replacing at ${document.getElementById(clickOn).parentElement.outerHTML}`)
      console.log(`Should replace at ${element.lastChild.previousSibling.outerHTML}`)
      element.lastChild.previousSibling.replaceChild(images[clickOn], document.getElementById(clickOn))
      e.stopPropagtion
    }, 100)
    
    ++flips
    
    Match(clickOn, document.getElementById(clickOn))
    
    setTimeout(() => {
      victory()
    }, 500)
  }
}
// Find match
function Match(click_On, cover) {
  select.removeEventListener('click', flipImage)
  
  if (((flips % 2) == 0) && (images[click_On].id !== image1)) {
    if (images[click_On].id !== image1) {
      setTimeout(() => {
        element.lastChild.previousSibling.replaceChild(Coverimage1, document.getElementById(image1))
        element.lastChild.previousSibling.replaceChild(cover, document.getElementById(images[click_On].id))
        select.addEventListener('click', flipImage)
      }, 500)
    } else {
      matches++
      document.getElementById('Matches').innerHTML = 'Matches made: ' + matches
      select.addEventListener('click', flipImage)
    }
  } else {
    select.addEventListener('click', flipImage)
    image1 = images[click_On].id
    Coverimage1 = cover
  }
}
// functionality for a win
function victory() {
  if (matches === needToMatch) {
    alert(`You completed the game in ${50 - timeRemaining} seconds and ${flips} moves.\nWell done! YOU WIN!`)
  }
}
// functionality for a game tamer
function timer(){
  var clear = setInterval(decrementSeconds, 1000);
  function decrementSeconds() {
    if((timeRemaining > 0) && (matches !== needToMatch) && (flips !== 0)){
      --timeRemaining
      document.getElementById('timeRemaining').innerHTML = `Time left: ${timeRemaining} second(s)`
    }else if(flips === 0){
      window.clearInterval(clear)
    }else{
      window.clearInterval(clear)
      setTimeout(() => {
        gameOver()
      }, 500)
    }
  }
}
// functionality for a loss
function gameOver(){
  if((timeRemaining == 0) && (matches !== needToMatch)) {
    select.removeEventListener('click', flipImage)
    alert('Time up. You lost!\nGameover!')
  }
}
// ***********************************************************************************************************


Exporting functions
module.exports = {
  flipImage, createGameSpace
}