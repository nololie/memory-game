function createGameSpace(){
  // Create one dimensional array 
  var gfg = new Array(5); 

  // Loop to create 2D array using 1D array 
  for (var i = 0; i < gfg.length; i++) { 
    gfg[i] = new Array(5); 
  } 

  var h = 0; 

  // Loop to initilize 2D array elements. 
  for (var i = 0; i < 5; i++) { 
    for (var j = 0; j < 5; j++){ 
      gfg[i][j] = h++; 
    } 
  }

  // Loop to display the elements of 2D array. 
  for (var i = 0; i < 5; i++) { 

    for (var j = 0; j < 5; j++) { 
    document.write(gfg[i][j] + " "); 
    }

    document.write("<br>")

  } 

  return gfg;
}

createGameSpace();