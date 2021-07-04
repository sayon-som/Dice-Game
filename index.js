var player1=prompt("Enter player 1 name");
var player2=prompt("Enter player 2 name");
var won1=player1.toUpperCase()+" "+"WON!";
var won2=player2.toLocaleUpperCase()+" "+"WON!";
var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomNumber2= Math.floor(Math.random() * 6)+1;
var diceimage1="dice"+randomNumber1+".png";
var randomimage1="images/"+diceimage1;

var diceimage2="dice"+randomNumber2+".png";
var randomimage2="images/"+diceimage2;
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=won1;
}
else if(randomimage1<randomimage2){
    document.querySelector("h1").innerHTML=won2;
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
}