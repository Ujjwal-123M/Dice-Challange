 // For player 1

var random1=Math.floor(Math.random()*6)+1;
var randomImage1="images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

// For player 2
var random2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

// For Winner 
if(random1>random2){
 document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(random1<random2) {
document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw";
}