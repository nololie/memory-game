// GLOBAL VARIABLES==============================================================================================
var cover1 = ''
var cover2 = ''
var img1 = ''
var img2 = ''
var index1 = 0
var index2 = 0
var img1Col = 0
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
function createGameSpace(array){
  shaffle(images)
  world = '<h1> Memory Game: The Gossiper (Celebrity couples)</h1>'
  
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

  world += '<button id="restartGame" onClick="restart()">Restart</button>'

  return world;

}
// Restart button code
function restart(){
  cover1 = ''
  over2 = ''
  img1 = ''
  img2 = ''
  img1Col = 0
  moves = 0
  element.innerHTML = createGameSpace(myGameSpace)
}
// flipping the images
function flipImage(row, col){//accept row and column where the  click is happening
  moves++

  if(row == 0){//move made at row1
    
    if(img1 == ''){
      cover1 = document.getElementById('coverimage ' + row + '-' + col)
      img1Col = col
      
      element.replaceChild(images[col], document.getElementById('coverimage ' + row + '-' + col))
      console.log('Inddex1 = ' + index1)
      img1 = document.getElementsByTagName('img')[col]

    } 
    else{
      cover2 = document.getElementById('coverimage ' + row + '-' + col)
      
      element.replaceChild(images[col], document.getElementById('coverimage ' + row + '-' + col))
      console.log('Inddex2 = ' + index2)
      img2 = document.getElementsByTagName('img')[col]
      
      // chack for no match
      if(img2.id.charAt(3) !== img1.id.charAt(3)){
        console.log('image1 #NUM = ' + img1.id.charAt(3))
        console.log('image2 #NUM = ' + img2.id.charAt(3))
        console.log('IMAGE: ' + document.getElementsByTagName('img')[img1Col].id + 'REPLACED WITH: ' + cover1.id)
        console.log('IMAGE: ' + document.getElementsByTagName('img')[col].id + 'REPLACED WITH: ' + cover2.id)

        element.replaceChild(cover1, document.getElementsByTagName('img')[img1Col])
        element.replaceChild(cover2, document.getElementsByTagName('img')[col])
      }
         
      // Empty imgs
      img1 = ''
      img2 = ''
      cover1 = ''
      cover2 = ''
    }

  }
  else if(row == 1){//move made at row2
    
    if(img1 == ''){
      cover1 = document.getElementById('coverimage ' + row + '-' + col)
      img1Col = col

      element.replaceChild(images[col + 4], document.getElementById('coverimage ' + row + '-' + col))
      console.log('Inddex1 = ' + index1)
      img1 = document.getElementsByTagName('img')[col + 4]

    } 
    else{
      cover2 = document.getElementById('coverimage ' + row + '-' + col)
      
      element.replaceChild(images[col + 4], document.getElementById('coverimage ' + row + '-' + col))
      console.log('Inddex2 = ' + index2)
      img2 = document.getElementsByTagName('img')[col + 4]

      // find out if img1 & img2 match
      if (img2.id.charAt(3) !== img1.id.charAt(3)) {
        console.log('image1 #NUM = ' + img1.id.charAt(3))
        console.log('image2 #NUM = ' + img2.id.charAt(3))
        console.log('IMAGE: ' + document.getElementsByTagName('img')[img1Col + 4].id + 'REPLACED WITH: ' + cover1.id)
        console.log('IMAGE: ' + document.getElementsByTagName('img')[col + 4].id + 'REPLACED WITH: ' + cover2.id)

        element.replaceChild(cover1, document.getElementsByTagName('img')[img1Col + 4])
        element.replaceChild(cover2, document.getElementsByTagName('img')[col + 4])
      }

      // Empty imgs
      img1 = ''
      img2 = ''
      cover1 = ''
      cover2 = ''
    }

  }
  else{//move made at row0

    if(img1 == '') {
      cover1 = document.getElementById('coverimage ' + row + '-' + col)
      img1Col = col
      
      element.replaceChild(images[col + 8], document.getElementById('coverimage ' + row + '-' + col))
      console.log('Inddex1 = ' + index1)
      img1 = document.getElementsByTagName('img')[col + 8]

    }
    else{
      cover2 = document.getElementById('coverimage ' + row + '-' + col)
      
      element.replaceChild(images[col + 8], document.getElementById('coverimage ' + row + '-' + col))
      console.log('Inddex2 = ' + index2)
      img2 = document.getElementsByTagName('img')[col + 8]


      // find out if img1 & img2 match
      if (img2.id.charAt(3) !== img1.id.charAt(3)){
        console.log('image1 #NUM = ' + img1.id.charAt(3))
        console.log('image2 #NUM = ' + img2.id.charAt(3))
        console.log('IMAGE: ' + document.getElementsByTagName('img')[img1Col + 8].id + 'REPLACED WITH: ' + cover1.id)
        console.log('IMAGE: ' + document.getElementsByTagName('img')[col + 8].id + 'REPLACED WITH: ' + cover2.id)

        element.replaceChild(cover1, document.getElementsByTagName('img')[img1Col + 8])
        element.replaceChild(cover2, document.getElementsByTagName('img')[col + 8])
      }
      
      // Empty imgs
      img1 = ''
      img2 = ''
      cover1 = ''
      cover2 = ''
    }
  }
  
}
// **************************************************************************************************************


// EXECUTION=====================================================================================================
var element = document.createElement('div')
element.setAttribute('id', "TheeGameSpace")
element.innerHTML = createGameSpace(myGameSpace)
document.body.appendChild(element)
// **************************************************************************************************************
