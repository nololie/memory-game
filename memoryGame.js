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
    }
  }
  return gfg;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// plotting in gamepace
function plotGameComponets(arr){
  var pictureNo = 0
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++){
      pictureNo = getRandomInt(0, 13)
      let picAddress = "Media/" + toString(pictureNo) + ".png"
      arr[i][j] = '<img src="picAddress"></img>'
    }
  }
}

// displaying plotted gameSpace
function displayInGameSpace(arr, loopRows,loopcols){
  // Loop to display the elements of 2D array. 
  for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++) {
      if (arr[i][j] == '<img src="Media/13.png"></img>'){
        document.write(arr[i][j])
      }
    }
    document.write("<br>")
  } 
}

// my function calls
createGameSpace()
plotGameComponets(gfg)
displayInGameSpace(gfg)
