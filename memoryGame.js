var images = new Array(13)
var gameSpaceArr = new Array(4); 

function storingImages(){
  // storing game Objects in an Array
  for(var i = 1; i <= 13; i++){
    images[i] = new Image()
    images[i].src = "Media/" + i + ".png"
  }
}

function createGameSpace(GameArr){
  // Loop to create 2D GameSpace using 2D array 

  for (var i = 0; i < gameSpaceArr.length; i++) { 
    GameArr[i] = new Array(3); 
  }

  // initialzing the gamespace arrray
  for(var i= 0; i <= 13; i++){
    
  }

  return GameArr;
}

function initialiseSpace(array){
  // Loop to initilize 2D array elements. 
  pictureNumber = 0
  
  for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++){ 
      array[i][j] = images[++pictureNumber];
    }
  }
}

function displaySpace(){
// Loop to display the elements of 2D array. 
  for (var i = 0; i < 3; i++) { 

    for (var j = 0; j < 4; j++) { 
    document.write('<img src= "images[i].src"></img>' + " "); 
    }

    document.write("<br>")

  }
}

// createGameSpace();
displaySpace();