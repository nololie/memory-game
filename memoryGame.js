// creating an array to store htmlelements
var images = new Array(13)

// storing game Objects in an Array
function storeGameObjects(){
  images[0] = '<img id="coverimage" src="Media/13.png"></img>'
  for(var i = 1; i < 13; i++){
    images[i] = '<img id="imge' + i + '" src="Media/'+ i +'.png"></img>'
  }
}

// Create a 2-dimensional array 
var myGameSpace = new Array(3); 

// Creating gameSpace
function createGameSpace(gfg){
  // Loop to create and display the initial game space.
  world = '<div id="myGameSpaceWorld">'
  for (var i = 0; i < gfg.length; i++) { 
    gfg[i] = new Array(4)
    for (var j = 0; j < 4; j++) { 
      gfg[i][j] = '<img id="coverimage" src="Media/13.png" onclick="document.getElementById("")"></img>'
      document.write(gfg[i][j])
    }
  }
  world += "</div>"
  return world;
}


// plotting in gamepace
function plotGameComponets(gfg){
  storeGameObjects()
  imagIindex = 0
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
      ++imagIindex
      gfg[i][j] = images[imagIindex]
      document.write(gfg)
    }
    document.write('<br>')
  }    
}

// // displaying gameSpace
// function displayInGameSpace(arr){
//   // Loop to display the elements of 2D array.
//   plotGameComponets() 
//   for (var i = 0; i < 3; i++) { 
//     for (var j = 0; j < 4; j++) { 
//       if (arr[i][j] !== '<img src="Media/13.png"></img>'){
//         document.write(arr[i][j])
//       }
//     }
//     document.write("<br>")
//   } 
// }

// my function calls
createGameSpace(myGameSpace)
// plotGameComponets(myGameSpace)
// displayInGameSpace(gfg)
