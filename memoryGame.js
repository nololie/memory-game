// storing game Objects in an Array
var images = new Array(13)

for(var i = 1; i <= 13; i++){
  images[i] = new Image()
  images[i].src = "Media/" + i + ".png"
}

// Create a 2-dimensional array 
var gfg = new Array(4); 

// Creating gameSpace
function createGameSpace(){
  // Loop to create and display the initial game space. 
  for (var i = 0; i < gfg.length; i++) { 
    gfg[i] = new Array(3); 
  }

  for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++){ 
      gfg[i][j] = '<img src="Media/13.png"></img>'
      document.write(gfg[i][j])
    }
    document.write("<br>")
  }

  return gfg;
}

// plotting in gamepace
function plotGameComponets(){
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
      gfg[i][j] = '<img src="Media/13.png"></img>'
      document.write(gfg[i][j])
    }
    document.write("<br>")
  }
}

// displaying gameSpace
function displayInGameSpace(arr){
  // Loop to display the elements of 2D array. 
  for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++) { 
      if (arr[i][j] !== '<img src="Media/13.png"></img>'){
        document.write(arr[i][j])
      }
    }
    document.write("<br>")
  } 
}

// my function calls
createGameSpace();
// displayInGameSpace()