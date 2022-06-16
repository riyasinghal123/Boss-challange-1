var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomeDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "image/" + randomeDiceImage;

var image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "image/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Play 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Play 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}