
function changeImg(){

    var randomImages=new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
    var randomNumber1 = Math.floor(Math.random() * 5 + 1);
    var randomNumber2 = Math.floor(Math.random() * 5 + 1);

    document.getElementsByClassName("img1")[0].setAttribute("src",randomImages[randomNumber1]);
    document.getElementsByClassName("img2")[0].setAttribute("src",randomImages[randomNumber2]);

    if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 wins 🚩";
    }
    else if(randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 2 wins 🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw";
    }

}
/* drugi nacin rjesavanja 

var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomNumber1+".png";//dice1.png-dice6.png

var randomImageSource="images/"+randomImageSource;//images/dice1.png-images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2); */