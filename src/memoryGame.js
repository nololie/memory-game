// GLOBAL VARIABLES==============================================================================================
// var cover1 = ''
// var cover2 = ''
var img1 = ''
// var img2 = ''
var index1 = 0
var index2 = 0
// var img1Col = 0
var moves = 0
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
  world = '<h1> Memory Game: The Gossiper (Celebrity couples)</h1>'
  
  // Loop to create and display the initial game space.
  for (var i = 0; i < 3; i++){ 
        
    for (var j = 0; j < 4; j++) { 
      world += '<img id="coverimage ' + i + '-' + j + '" src="Media/13.png"></img>' 
    }

    world += '<br>'
  }

  world += "</div>"
  
  world += '<button id="restartGame" onClick="restart()">Restart</button>'
  
  return world;

}
// Restart button code
function restart(){
  // cover1 = ''
  // over2 = ''
  img1 = ''
  // img2 = ''
  // img1Col = 0
  moves = 0
  element.innerHTML = createGameSpace(myGameSpace)
}
// flipping the images
function flipImage(e){//accept row and column where the  click is happening
  moves++
  if(e.target !== e.currentTarget){
    var clickOn = e.target.id;
    element.replaceChild(images[4], document.getElementById(clickOn))
    // alert(images[1].id);
  }
  e.stopPropagtion

}
// **************************************************************************************************************

 switch(row, col){
    case 0 && 0:
      if(img1 == ''){
        index1 = 0
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      }else{
        index2 = 0
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 0 && 1:
      if (img1 == '') {
        index1 = 1
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 1
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 0 && 2:
      if (img1 == '') {
        index1 = 2
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 2
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 0 && 3:
      if (img1 == '') {
        index1 = 3
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 3
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 1 && 0:
      if (img1 == '') {
        index1 = 4
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 4
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 1 && 1:
      if (img1 == '') {
        index1 = 5
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 5
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 1 && 2:
      if (img1 == '') {
        index1 = 6
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 6
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 1 && 3:
      if (img1 == '') {
        index1 = 7
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 7
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 2 && 0:
      if (img1 == '') {
        index1 = 8
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 8
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 2 && 1:
      if (img1 == '') {
        index1 = 9
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 9
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        img1 = ''
        break
      }
    case 2 && 2:
      if (img1 == '') {
        index1 = 10
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 10
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }
    case 2 && 3:
      if (img1 == '') {
        index1 = 11
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[index1].id)
        element.replaceChild(images[index1], document.getElementsByTagName('img')[index1])
        img1 = images[index1]
        break
      } else {
        index2 = 11
        console.log('Replace: ' + document.getElementsByTagName('img')[index2].id + ' by: ' + images[index2].id)
        element.replaceChild(images[index2], document.getElementsByTagName('img')[index2])
        img1 = ''
        break
      }

    default:
      alert('It aint HAPPENING.')
      break
  } 

// EXECUTION=====================================================================================================
var element = document.createElement('div')
element.setAttribute('id', "TheeGameSpace")
element.innerHTML = createGameSpace()
document.body.appendChild(element)
var select = document.querySelector('#TheeGameSpace')
select.addEventListener('click', flipImage, false)
// **************************************************************************************************************
console.log('TEST')
console.log(document.getElementsByTagName('img'))