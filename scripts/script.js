// JavaScript Document
var buttonSaber = document.querySelector("ol li:first-of-type article button");
var saber = document.querySelector(".blade")

var buttondarthL = document.querySelector("ol li:nth-of-type(2) article button:first-of-type");
var saberdarthL = document.querySelector("ol li:nth-of-type(2) article:nth-of-type(2) div:nth-of-type(1)");

var buttondarthR = document.querySelector("ol li:nth-of-type(2) article button:nth-of-type(2)");
var saberdarthR = document.querySelector("ol li:nth-of-type(2) article:nth-of-type(2) div:nth-of-type(2)");

var buttoninquisitorR = document.querySelector("ol li:nth-of-type(4) button:first-of-type");
var saberinqR = document.querySelector("ol li:nth-of-type(4) output:last-of-type");

var buttoninquisitorL = document.querySelector("ol li:nth-of-type(4) button:nth-of-type(2)");
var saberinqL = document.querySelector("ol li:nth-of-type(4) output:first-of-type");

var body = document.querySelector("body");
var knopplaneet1 = document.querySelector("section article ul button:nth-of-type(1)");

var audioanakin = new Audio("Sounds/lightsaber_02.mp3");
var audiodarkside = new Audio("Sounds/SaberOn.mp3");

var body = document.querySelector("body");
var knopplaneet1 = document.querySelector("section article ul button:nth-of-type(1)");

var buttonplaneet2 = document.querySelector("section article ul button:nth-of-type(2)");
buttonplaneet2.addEventListener("click", veranderwoestijn);

var buttonplaneet3 = document.querySelector("section article ul button:nth-of-type(3)");
buttonplaneet3.addEventListener("click", veranderfelucia);

var nav = document.querySelector("nav ul");
var hamburgerButton = document.querySelector("nav button:first-of-type");
var closebutton = document.querySelector("nav li:first-of-type");



buttondarthL.addEventListener("click", function() {
    saberdarthL.classList.toggle("emittingdarthL");
    audiodarkside.play();
})

buttondarthR.addEventListener("click", function() {
    saberdarthR.classList.toggle("emittingdarthR");
    audiodarkside.play();
})

buttoninquisitorR.addEventListener("click", function() {
    saberinqR.classList.toggle("emittingR");
    audiodarkside.play();
})

buttoninquisitorL.addEventListener("click", function() {
    saberinqL.classList.toggle("emittingL");
    audiodarkside.play();
})

buttonSaber.addEventListener("click", function() {
    saber.classList.toggle("open");
    audioanakin.play();
})

// Endor laten verschijnen
knopplaneet1.addEventListener("click", function() {
    body.classList.toggle("Endor");
})

// Tatooine laten verschijnen
function veranderwoestijn () {
    var woestijn = document.querySelector("body");
    woestijn.classList.toggle("Tatooine");
    // document.getElementById("MyImg").src = "../images/tatooine2.jpg";
}

// Felucia laten verschijnen
function veranderfelucia () {
    var tropisch = document.querySelector("body");
    tropisch.classList.toggle("Felucia");
}

hamburgerButton.addEventListener("click", function() {
    nav.classList.toggle("open");
})
closebutton.addEventListener("click", function() {
    nav.classList.toggle("open");
})