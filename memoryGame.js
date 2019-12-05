function createGameSpace(){
  // storing game Objects in an Array
  var images = new Array(13)
  
  // // var pics = ["Media/1.png", "Media/2.png", "Media/3.png", "Media/4.png", "Media/5.png", "Media/6.png", "Media/7.png", "Media/8.png", "Media/9.png", "Media/10.png", "Media/11.png", "Media/12.png"]

  for(var i = 1; i <= 13; i++){
    images[i] = new Image()
    images[i].src = "Media/" + i + ".png"
  }

  // Create one dimensional array 
  var gfg = new Array(4); 

  // Loop to create 2D array using 1D array 
  for (var i = 0; i < gfg.length; i++) { 
    gfg[i] = new Array(3); 
  }

  pictureNumber = 0
  
  // Loop to initilize 2D array elements. 
  for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++){ 
      
      gfg[i][j] = images[++pictureNumber];
    }
  }

  // Loop to display the elements of 2D array. 
  for (var i = 0; i < 3; i++) { 

    for (var j = 0; j < 4; j++) { 
    document.write('<img src= "images[i].src"> </img>' + " "); 
    }

    document.write("<br>")

  } 



  var myImages = ""
  for(var i = 1; i<5; i++){
    // for(var j = o; j<; j++){
      myImages += '<img src= "images[i].src"> </img>'
    // }
  }

  document.write(myImages)
  
  return gfg;
}

createGameSpace();