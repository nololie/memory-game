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
      world += '<img id="coverimage ' + i + "-" + j + '" src="Media/13.png" onClick=' + "flipImage(" + i + "," + j + ")" +'></img>' 
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
function flipImage(row, col){//accept row and column where the  click is happening
  moves++
  
  switch (row, col) {
    case 0 && 0:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + index1)
        console.log('Replace: ' + document.getElementsByTagName('img')[0].id + ' by: ' + images[0].id)
        element.replaceChild(images[0], document.getElementsByTagName('img')[0])
        img1 = images[0]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 0)
        console.log('Replace: ' + document.getElementsByTagName('img')[0].id + ' by: ' + images[0].id)
        element.replaceChild(images[0], document.getElementsByTagName('img')[0])
        img1 = ''
        break
      }
    case 0 && 1:
      if (img1 == '') {
        console.log('Row = ' + (row) + ' column = ' + (col) + ' Flip index = ' + (1))
        console.log('Replace: ' + document.getElementsByTagName('img')[1].id + ' by: ' + images[1].id)
        element.replaceChild(images[1], document.getElementsByTagName('img')[1])
        img1 = images[1]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 1)
        console.log('Replace: ' + document.getElementsByTagName('img')[1].id + ' by: ' + images[1].id)
        element.replaceChild(images[1], document.getElementsByTagName('img')[1])
        img1 = ''
        break
      }
    case 0 && 2:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 2)
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[2].id)
        element.replaceChild(images[2], document.getElementsByTagName('img')[2])
        img1 = images[2]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 2)
        console.log('Replace: ' + document.getElementsByTagName('img')[2].id + ' by: ' + images[2].id)
        element.replaceChild(images[2], document.getElementsByTagName('img')[2])
        img1 = ''
        break
      }
    case 0 && 3:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 3)
        console.log('Replace: ' + document.getElementsByTagName('img')[index1].id + ' by: ' + images[3].id)
        element.replaceChild(images[3], document.getElementsByTagName('img')[3])
        img1 = images[index1]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 3)
        console.log('Replace: ' + document.getElementsByTagName('img')[3].id + ' by: ' + images[3].id)
        element.replaceChild(images[3], document.getElementsByTagName('img')[3])
        img1 = ''
        break
      }
    case 1 && 0:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 4)
        console.log('Replace: ' + document.getElementsByTagName('img')[4].id + ' by: ' + images[inde4x1].id)
        element.replaceChild(images[4], document.getElementsByTagName('img')[4])
        img1 = images[4]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 4)
        console.log('Replace: ' + document.getElementsByTagName('img')[4].id + ' by: ' + images[4].id)
        element.replaceChild(images[4], document.getElementsByTagName('img')[4])
        img1 = ''
        break
      }
    case 1 && 1:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 5)
        console.log('Replace: ' + document.getElementsByTagName('img')[5].id + ' by: ' + images[5].id)
        element.replaceChild(images[5], document.getElementsByTagName('img')[5])
        img1 = images[5]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 5)
        console.log('Replace: ' + document.getElementsByTagName('img')[5].id + ' by: ' + images[5].id)
        element.replaceChild(images[5], document.getElementsByTagName('img')[5])
        img1 = ''
        break
      }
    case 1 && 2:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 6)
        console.log('Replace: ' + document.getElementsByTagName('img')[6].id + ' by: ' + images[6].id)
        element.replaceChild(images[6], document.getElementsByTagName('img')[6])
        img1 = images[6]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 6)
        console.log('Replace: ' + document.getElementsByTagName('img')[6].id + ' by: ' + images[6].id)
        element.replaceChild(images[6], document.getElementsByTagName('img')[6])
        img1 = ''
        break
      }
    case 1 && 3:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 7)
        console.log('Replace: ' + document.getElementsByTagName('img')[7].id + ' by: ' + images[7].id)
        element.replaceChild(images[7], document.getElementsByTagName('img')[7])
        img1 = images[7]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 7)
        console.log('Replace: ' + document.getElementsByTagName('img')[7].id + ' by: ' + images[7].id)
        element.replaceChild(images[7], document.getElementsByTagName('img')[7])
        img1 = ''
        break
      }
    case 2 && 0:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 8)
        console.log('Replace: ' + document.getElementsByTagName('img')[8].id + ' by: ' + images[8].id)
        element.replaceChild(images[8], document.getElementsByTagName('img')[8])
        img1 = images[89]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 8)
        console.log('Replace: ' + document.getElementsByTagName('img')[8].id + ' by: ' + images[8].id)
        element.replaceChild(images[8], document.getElementsByTagName('img')[8])
        img1 = ''
        break
      }
    case 2 && 1:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 9)
        console.log('Replace: ' + document.getElementsByTagName('img')[9].id + ' by: ' + images[9].id)
        element.replaceChild(images[9], document.getElementsByTagName('img')[9])
        img1 = images[9]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 9)
        element.replaceChild(images[9], document.getElementsByTagName('img')[9])
        console.log('Replace: ' + document.getElementsByTagName('img')[9].id + ' by: ' + images[9].id)
        img1 = ''
        break
      }
    case 2 && 2:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 10)
        console.log('Replace: ' + document.getElementsByTagName('img')[10].id + ' by: ' + images[10].id)
        element.replaceChild(images[10], document.getElementsByTagName('img')[10])
        img1 = images[10]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 10)
        console.log('Replace: ' + document.getElementsByTagName('img')[10].id + ' by: ' + images[10].id)
        element.replaceChild(images[10], document.getElementsByTagName('img')[10])
        img1 = ''
        break
      }
    case 2 && 3:
      if (img1 == '') {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 11)
        console.log('Replace: ' + document.getElementsByTagName('img')[11].id + ' by: ' + images[11].id)
        element.replaceChild(images[11], document.getElementsByTagName('img')[11])
        img1 = images[11]
        break
      } else {
        console.log('Row = ' + row + ' column = ' + col + ' Flip index = ' + 11)
        console.log('Replace: ' + document.getElementsByTagName('img')[11].id + ' by: ' + images[11].id)
        element.replaceChild(images[11], document.getElementsByTagName('img')(11))
        img1 = ''
        break
      }

    default:
      alert('It aint HAPPENING.')
      break
  }
}
// **************************************************************************************************************

// EXECUTION=====================================================================================================
var element = document.createElement('div')
element.setAttribute('id', "TheeGameSpace")
element.innerHTML = createGameSpace()
document.body.appendChild(element)
// **************************************************************************************************************
console.log('TEST')
console.log(document.getElementsByTagName('img'))