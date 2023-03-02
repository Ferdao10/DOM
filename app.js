// primeiro passo //
// elementos

const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedbackBth = document.querySelector(".feedback");

// Modificando elementos | 

redColor.addEventListener("click", function(){
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./img/red-benz.png")';     
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./img/cinza-benz.png")';     
});

blackColor.addEventListener("click", function(){
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./img/preto-benz.png")';     
});

//botão click -cart

const cart = () => {
    cartButton.style.display = "none";
    feedbackBth.style.display = "block";
};

cartButton.addEventListener("click", cart);

//feedback - esconder

const feedback = () =>{
    cartButton.style.display = "block";
    feedbackBth.style.display = "none"
};

feedbackBth.addEventListener("click", feedback);














