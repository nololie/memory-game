// GLOBAL VARIABLES===========================================================================================
var flips = 0
var matches = 0
var image1 = ''
var timeRemaining = 50
// Create a 2-dimensional array 
var myGameSpace = new Array(3)
// creating an array to store htmlelements
var images = new Array(12)
// ***********************************************************************************************************


// FUNCTIONS==================================================================================================
// storing game Objects in an Array
function storeGameObjects() {
  var imageName = 0
  images = []
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 2; j++) {
      var gameElements = document.createElement('img')
      gameElements.setAttribute('id', + i + '-' + j)
      gameElements.setAttribute('src', "Media/" + (++imageName) + ".png")
      images[imageName] = gameElements
    }
  }
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
  world += `<p id="timeRemaining">Time remaining: ${timeRemaining} second(s)</p>`
  world += '</div>'
  
  world += '<div id="activeWorld">'
  // Loop to create and display the initial game space.
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
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
  timeRemaining = 50
  img1 = ''
  flips = 0
  matches = 0
  element.innerHTML = createGameSpace(myGameSpace)
  select.addEventListener('click', flipImage, false)
}
// flipping the images
function flipImage(e) {
  if((e.target.id.length <= 2)){
    
    if(flips < 1){
      shaffle(images)
      timer()
    }

    var clickOn = e.target.id;

    setTimeout(() => {
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
    if (images[click_On].id.charAt(0) !== image1.charAt(0)) {
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
function victory() {
  if (matches === 6) {
    alert(`You completed the game in ${50 - timeRemaining} seconds and ${flips} moves.\nWell done! YOU WIN!`)
  }
}
function timer(){
  var clear = setInterval(decrementSeconds, 1000);
  function decrementSeconds() {
    if((timeRemaining > 0) && (matches !== 6) && (flips !== 0)){
      --timeRemaining
      document.getElementById('timeRemaining').innerHTML = `Time remaining: ${timeRemaining} second(s)`
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
function gameOver(){
  if((timeRemaining == 0) && (matches !== 6)) {
    select.removeEventListener('click', flipImage)
    alert('Time up. You lost!\nGameover!')
  }
}
// ***********************************************************************************************************


// EXECUTION==================================================================================================
// var element = document.createElement('div')
// element.innerHTML = createGameSpace()
// document.body.appendChild(element)
// element.setAttribute('id', "TheeGameSpace")

// var select = document.querySelector('#TheeGameSpace')
// select.addEventListener('click', flipImage, false)
// ***********************************************************************************************************

// Exporting functions
module.exports = {
  flipImage, createGameSpace
}