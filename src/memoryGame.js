// GLOBAL VARIABLES==============================================================================================
var id1 = 0
var moves = 0
Coverimage = 0
// Create a 2-dimensional array 
var myGameSpace = new Array(3)
// creating an array to store htmlelements
var images = new Array(12)
// **************************************************************************************************************


// FUNCTIONS=====================================================================================================
// storing game Objects in an Array
function storeGameObjects(array){
  var imageName = 0
  
  for(var i = 1; i <= 6; i++){
    for(var j = 1; j <=2; j++){
      var gameElements = document.createElement('img')
      gameElements.setAttribute('id', "img" + i + '-' + j)
      gameElements.setAttribute('src', "Media/" + (++imageName) + ".png")
      array[imageName] = gameElements
    }
  }
}
// shuffling images
function shaffle(array){
  storeGameObjects(array)
  array.sort(function(a, b){return 0.5 - Math.random()})
}
// Creating gameSpace
function createGameSpace(){
  shaffle(images)
  var id = -1
  world = '<h1> Memory Game: The Gossiper (Celebrity couples)</h1>'
  
  // Loop to create and display the initial game space.
  for (var i = 0; i < 3; i++){   
    for (var j = 0; j < 4; j++) { 
      world += '<img id="' + (++id) + '" src="Media/13.png"></img>' 
    }
    world += '<br>'
  }

  world += "</div>"
  world += '<button id="restartGame" onClick="restart()">Restart</button>'
  
  return world;
}
// Restart button code
function restart(){
  img1 = ''
  moves = 0
  element.innerHTML = createGameSpace(myGameSpace)
}
// flipping the images
function flipImage(e){
  ++moves
  if(e.target !== e.currentTarget){
    var clickOn = e.target.id;
    element.replaceChild(images[clickOn], document.getElementById(clickOn))
    // console.log('Replaced: ' + document.getElementById(clickOn).outerHTML + ' by: ' + images[clickOn].outerHTML)
  }
  e.stopPropagtion

  Match(clickOn, document.getElementById(clickOn))
}
// Find match
function Match(click_On, cover){ 
  // alert(moves + ' moves.')
  if((moves % 2) == 0){
    console.log('fliped image2: ' + images[click_On].id.charAt(3) + ' fliped imaage1: ' + id1)
    if(images[click_On].id.charAt(3) !== id1){
      element.replaceChild(document.getElementById(click_On), Coverimage)
      element.replaceChild(document.getElementById(images[click_On].id), cover)
    }
  }else{
    id1 = images[click_On].id.charAt(3)
    Coverimage = cover
  }
}
// **************************************************************************************************************


// EXECUTION=====================================================================================================
var element = document.createElement('div')
element.setAttribute('id', "TheeGameSpace")
element.innerHTML = createGameSpace()
document.body.appendChild(element)
var select = document.querySelector('#TheeGameSpace')
select.addEventListener('click', flipImage, false)
// **************************************************************************************************************
// console.log('TEST')
// console.log(document.getElementsByTagName('img'))