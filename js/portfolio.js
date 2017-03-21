// this serves to randomly lay the images in the tiles
// of the portfolio page

// Return random integer
// between min (included) and max (excluded)


var randomInt = function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// array of sky images all blue

var images = ["dark.png", "light.png", "medium.png", "mediumdark.png", "vibrant.png"];

// chooseRandomImg() returns the <img> element to be put into the squares

function chooseRandomImg() {
	var bluetile, randomImgNo;
	randomImgNo = randomInt (1, 5);
	bluetile = '<img src="./img/' + images[randomImgNo-1] + '">';
	return bluetile;
}

// layTiles() updates view for squares with a delay of [50 ms]

var layTiles = function laySingleTile(i) {
  setTimeout(function () {
    document.getElementById(i+2).innerHTML = chooseRandomImg();
    i = i+1;
   	if (i<11) {          // keep going until last tile
   		laySingleTile(i); // call the loop again, and pass it the current value of i
   	}
  }, 55);
}; // alternatively add (10), ie. this line would read ---- });(0); -----
// if so:  last line should be delete (no window.onload etc)

window.onload = layTiles(0);
