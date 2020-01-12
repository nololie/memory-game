// GLOBAL VARIABLES==============================================================================================
var id1 = 0
var flips = 0
var matches = 0
var image1 = ''
var Coverimage11 = 0
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
      gameElements.setAttribute('id', + i + '-' + j)
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
  world = '<h1 id="tittle"> Memory Game: The Gossiper (Celebrity couples)</h1>'
  
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
  flips = 0
  matches = 0
  element.innerHTML = createGameSpace(myGameSpace)
}
// flipping the images
function flipImage(e){
  if ((e.target.id !== 'TheeGameSpace') && (e.target.id !== 'restartGame') && (e.target.id !== 'tittle') && (e.target.id.length <= 2)){
    var clickOn = e.target.id;
    
    setTimeout(()=>{
      element.replaceChild(images[clickOn], document.getElementById(clickOn))
    }, 100)
    
    ++flips

    Match(clickOn, document.getElementById(clickOn))

    setTimeout(()=>{
      victory(matches)
    }, 200)

    e.stopPropagtion
  }
}
// Find match
function Match(click_On, cover){ 
  if((flips % 2) == 0){
    if(images[click_On].id.charAt(0) !== image1.charAt(0)){
      setTimeout(() => {
        element.replaceChild(Coverimage1, document.getElementById(image1))
        element.replaceChild(cover, document.getElementById(images[click_On].id))
      }, 750)  
    }else{
      matches++
    }  
  }else{
    image1 = images[click_On].id
    Coverimage1 = cover
  }
}
function victory(matchedCards){
  if (matchedCards === 6){
    alert('You WIN!!!!!!')
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