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
var audiohappybeeps = new Audio("Sounds/HappyThreeChirp.mp3");
var audiodeathstar = new Audio("Sounds/superlaser.mp3");
var audiohyperspace = new Audio("Sounds/jumptolightspeed.mp3");

var body = document.querySelector("body");
var knopplaneet1 = document.querySelector("section article ul button:nth-of-type(1)");

var buttonplaneetendor = document.querySelector("section article ul button:first-of-type");
buttonplaneetendor.addEventListener("click", veranderendor);

var buttonplaneet2 = document.querySelector("section article ul button:nth-of-type(2)");
buttonplaneet2.addEventListener("click", veranderwoestijn);

var buttonplaneet3 = document.querySelector("section article ul button:nth-of-type(3)");
buttonplaneet3.addEventListener("click", veranderfelucia);

var buttonplaneetnaboo = document.querySelector("section article ul button:last-of-type img");
buttonplaneetnaboo.addEventListener("click", verandernaboo);

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


var headerBackground = document.querySelector("section:first-of-type > img:first-of-type");
//Endor laten verschijnen
function veranderendor () {
    headerBackground.src="../images/endor4k.png"
    console.log('endor is nu te zien, ook dankzij jeff ;)');
}

// Tatooine laten verschijnen
function veranderwoestijn () {
    headerBackground.src="../images/tatooinedesert.jpg"
    console.log('tatooine moet te zien zijn. En ja: made by jeff');
}

// Felucia laten verschijnen
function veranderfelucia () {
    headerBackground.src=("../images/felucia4k.jpg");
    // var tropisch = document.querySelector("body");
    // tropisch.classList.toggle("Felucia");
    console.log('felucia moet te zien zijn');
}

//Endor laten verschijnen
function verandernaboo () {
    headerBackground.src=("../images/naboo4k.jpg");
    // var tropisch = document.querySelector("body");
    // tropisch.classList.toggle("Felucia");
    console.log('naboo moet te zien zijn');
}

hamburgerButton.addEventListener("click", function() {
    nav.classList.toggle("open");
    audiohappybeeps.play();
})

closebutton.addEventListener("click", function() {
    nav.classList.toggle("open");
})

var imagedeathstar = document.querySelector("ol li:nth-of-type(5) img");
var deathstar =  document.querySelector("ol li:nth-of-type(5) button");
deathstar.addEventListener("click", function(){
    imagedeathstar.classList.toggle("firing");
    audiohyperspace.play();
})
