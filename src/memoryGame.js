// GLOBAL VARIABLES==============================================================================================
var flips = 0
var matches = 0
var image1 = ''
var Coverimage11 = 0
var gameOn = false
var timeRemaining = 100
// Create a 2-dimensional array 
var myGameSpace = new Array(3)
// creating an array to store htmlelements
var images = new Array(12)
// **************************************************************************************************************


// FUNCTIONS=====================================================================================================
// storing game Objects in an Array
function storeGameObjects(array) {
  var imageName = 0

  for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 2; j++) {
      var gameElements = document.createElement('img')
      gameElements.setAttribute('id', + i + '-' + j)
      gameElements.setAttribute('src', "Media/" + (++imageName) + ".png")
      array[imageName] = gameElements
    }
  }
}
// shuffling images
function shaffle(array) {
  storeGameObjects(array)
  array.sort(function (a, b) { return 0.5 - Math.random() })
}
// Creating gameSpace
function createGameSpace() {
  shaffle(images)
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
  world += '<button id="restartGame" onClick="restart()">Restart</button>'
  world += '</div>'
  return world;
}
// Restart button code
function restart() {
  img1 = ''
  flips = 0
  matches = 0
  element.innerHTML = createGameSpace(myGameSpace)
}
// flipping the images
function flipImage(e) {
  if(gameOn == false) {
    timer()
    gameOn = true
  }
  select.removeEventListener('click', flipImage)
  if ((e.target.id.length <= 2)) {
    var clickOn = e.target.id;

    setTimeout(() => {
      element.lastChild.replaceChild(images[clickOn], document.getElementById(clickOn))
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
  if (((flips % 2) == 0) && (images[click_On].id !== image1)) {
    if (images[click_On].id.charAt(0) !== image1.charAt(0)) {
      setTimeout(() => {
        element.lastChild.replaceChild(Coverimage1, document.getElementById(image1))
        element.lastChild.replaceChild(cover, document.getElementById(images[click_On].id))
      }, 500)
    } else {
      matches++
      document.getElementById('Matches').innerHTML = matches
    }
  } else {
    image1 = images[click_On].id
    Coverimage1 = cover
  }
  select.addEventListener('click', flipImage)
}
function victory() {
  if (matches === 6) {
    alert('You WIN!!!!!!')
  }
}
function timer(){
  var clear = setInterval(decrementSeconds, 1000);
  console.log(document.getElementById('timeRemaining').innerHTML)
  function decrementSeconds() {
    --timeRemaining
    document.getElementById('timeRemaining').innerHTML = `Time remaining: ${timeRemaining} second(s)`
    setTimeout(() => {
      if(timeRemaining == 0) {
      window.clearInterval(clear)
      gameOver()
    };
    }, 500)
  }
}
function gameOver(){
  if(timeRemaining == 0) {
    alert('Gameover!!!\nTime up.')
  }
}
// **************************************************************************************************************


// EXECUTION=====================================================================================================
var element = document.createElement('div')
element.innerHTML = createGameSpace()
document.body.appendChild(element)
element.setAttribute('id', "TheeGameSpace")

var select = document.querySelector('#TheeGameSpace')
select.addEventListener('click', flipImage, false)
// **************************************************************************************************************