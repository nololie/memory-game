// creating an array to store htmlelements
var images = new Array(13)

// storing game Objects in an Array
function storeGameObjects(){
  images[0] = '<img id="coverimage" src="Media/13.png"></img>'
  for(var i = 1; i < 13; i++){
    images[i] = '<img id="imge' + i + '" src="Media/'+ i +'.png"></img>'
  }
}

// plotting in gamepace
function plotGameComponets(gfg){
  storeGameObjects()
  imagIindex = 0
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
      ++imagIindex
      gfg[i][j] = images[imagIindex]
    }

  }    
}

// Create a 2-dimensional array 
var myGameSpace = new Array(3); 

// Creating gameSpace
function createGameSpace(gfg){
  world = '<div id="#myGameSpaceWorld">'
  
  // Loop to create and display the initial game space.
  for (var i = 0; i < gfg.length; i++) { 
    
    gfg[i] = new Array(4)

    for (var j = 0; j < 4; j++) { 
      gfg[i][j] = '<img id="coverimage" src="Media/13.png"></img>'
      world += gfg[i][j]
    }

    world += '<br>'
  
  }
  world += "</div>"
  
  return world;

}

// my function calls
document.write(createGameSpace(myGameSpace))
// plotGameComponets(myGameSpace)
// displayInGameSpace(gfg)