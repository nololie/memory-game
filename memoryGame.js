
// creating an array to store htmlelements
var images = new Array(12)

// storing game Objects in an Array
function storeGameObjects(array){
  console.log('before shuffle==================================')
  for(var i = 1; i <= 12; i++){
    var gameElements = document.createElement('img')
    gameElements.setAttribute('id', "imge" + i)
    gameElements.setAttribute('src', "Media/" + i + ".png")
    array[i] = gameElements
    console.log(array[i])
  }
}


// shuffling gamepace
function shaffle(array){
  storeGameObjects(array)
  console.log('after shuffle====================================')
  array.sort(function(a, b){return 0.5 - Math.random()})
  for (var i = 1; i <= 12; i++) {
  console.log(array[i])
  }
}

// Create a 2-dimensional array 
var myGameSpace = new Array(3)

// Creating gameSpace
function createGameSpace(array){
  
    world = ''
  
  // Loop to create and display the initial game space.
  for (var i = 0; i < array.length; i++){ 
    
    array[i] = new Array(4)
    
    for (var j = 0; j < 4; j++) { 
      array[i][j] = '<img id="coverimage ' + i + "-" + j + '" src="Media/13.png" onClick=' + "flipImage(" + i + "," + j + ")" +'></img>'  //Beautiful-PERFECT
      world += array[i][j]
    }
    
    world += '<br>'
  
  }

  world += "</div>"

  world += '<button id="startGame">Restart</button>'

  return world;

}

function restart(){
  element.innerHTML = createGameSpace(myGameSpace);
}

function flipImage(row, col){
      if(row == 1){
        element.replaceChild(images[col], document.getElementById('coverimage ' + row + '-' + col))
      }else if(row == 2){
        element.replaceChild(images[col+4], document.getElementById('coverimage ' + row + '-' + col))
      }else{
        element.replaceChild(images[col + 8], document.getElementById('coverimage ' + row + '-' + col))
      }
}

var element = document.createElement('div');
element.setAttribute('id', "TheeGameSpace")
element.innerHTML = createGameSpace(myGameSpace);
document.body.appendChild(element);

var play = document.getElementById('startGame')

play.addEventListener('onClick', shaffle(images))

// function playGame(array){
//   rearange(myGameSpace)
//   startTimer()
  
//   // wait for a click and update the gameworld

//   flip1Index = 0
//   flip2Index = 0

//   var flipCount = 0
//   if (flipCount <= 2){
//     flipImage()
//     flipCount ++
//     if (flipCount == 2 && !match){
//       flipCount = 0
//       // Unflip
//     }
//   }
// }

// // storing background/hidden gamecomponets
// storeGameObjects()

// // initialising myGameWorld
// // window.document.body.innerHTML = createGameSpace(myGameSpace) ===========    
// myGameWorld = createGameSpace(myGameSpace)

// // printing out myGameWorld
// document.write(myGameWorld)

// // now we start playing
