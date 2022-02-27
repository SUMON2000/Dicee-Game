var randomNumber1 = Math.floor(Math.random()*6)+1;



var randomImageNumber = "dice" + randomNumber1 +".png";
var randomImageSource = "images/" + randomImageNumber;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource) ;


var randomNumber2 = Math.floor(Math.random()*6)+1;


var randomImageNumber2 = "dice" + randomNumber2 +".png";
var randomImageSource2 = "images/" + randomImageNumber2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins 🦁";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player2 Wins 🐯";
}
else{
  document.querySelector("h1").innerHTML = "Draw 🦧";
}
