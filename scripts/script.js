// JavaScript Document
var buttonSaber = document.querySelector("ol li:first-of-type article button");
var saber = document.querySelector(".blade");

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

var body = document.querySelector("body");
var knopplaneet1 = document.querySelector("section article ul button:nth-of-type(1)");

var buttonplaneetendor = document.querySelector("section article ul li:first-of-type button");
buttonplaneetendor.addEventListener("click", veranderendor);

var buttonplaneet2 = document.querySelector("section article ul li:nth-of-type(2) button");
buttonplaneet2.addEventListener("click", veranderwoestijn);

var buttonplaneet3 = document.querySelector("section article ul li:nth-of-type(3) button");
buttonplaneet3.addEventListener("click", veranderfelucia);

var buttonplaneetnaboo = document.querySelector("section article ul li:nth-of-type(4) button img");
buttonplaneetnaboo.addEventListener("click", verandernaboo);

var nav = document.querySelector("nav ul");
var hamburgerButton = document.querySelector("nav button:first-of-type");
var closebutton = document.querySelector("nav li:first-of-type");

var h2 = document.querySelector("section article h2:first-of-type");
var headerBackground = document.querySelector("section:first-of-type > img:first-of-type");

var audioutini = new Audio("sounds/utini.mp3");
var audiobd1 = new Audio("sounds/bd1woohoo.mp3");
var audiodarkside = new Audio("sounds/darksaberon_trimmed.mp3");
var audiodeathstar = new Audio("sounds/superlaser.mp3");
var audioewokhorns = new Audio("sounds/ewok-horns.mp3");
var audioyodalaugh = new Audio("sounds/yodalaugh.mp3");
var audioanakin = new Audio("sounds/lightsaber_02.mp3");
var audiogoodjob = new Audio("sounds/good-job-trimmed.mp3");
var audiohappybeeps = new Audio("sounds/HappyThreeChirp.mp3");
var audiohyperspace = new Audio("sounds/jumptolightspeed.mp3");
var audiokylorensaber = new Audio("sounds/kylo_ren_lightsaber_trimmed.mp3");
var audiohellothere = new Audio("sounds/obiwanhellothere.mp3");
var audiolegobuild = new Audio("sounds/legobreaking.mp3");

// Anakin's lightsaber en tekst
var anakintekst = document.querySelector("ol li:first-of-type p");

buttonSaber.addEventListener("click", function () {
  saber.classList.toggle("open");
  anakintekst.classList.toggle("open");
  audioanakin.play();
});

// Darth Maul's lightsaber en tekst
var maultekst = document.querySelector("ol li:nth-of-type(2) p");

buttondarthL.addEventListener("click", function () {
  saberdarthL.classList.toggle("emittingdarthL");
  maultekst.classList.toggle("emittingdarthL");
  audiodarkside.play();
  console.log("darth maul links");
});

buttondarthR.addEventListener("click", function () {
  saberdarthR.classList.toggle("emittingdarthR");

  audiodarkside.play();
  console.log("darth maul links");
});

// Dooku's lightsaber
var buttondooku = document.querySelector("ol li:nth-of-type(3) article button");
var bladedooku = document.querySelector("ol li:nth-of-type(3) article output");
var dookutekst = document.querySelector("ol li:nth-of-type(3) p");

buttondooku.addEventListener("click", function () {
  bladedooku.classList.toggle("aan");
  dookutekst.classList.toggle("aan");
  audiodarkside.play();
});

// Inquisitor lightsaber en tekst
var inqtekst = document.querySelector("ol li:nth-of-type(4) p");

buttoninquisitorR.addEventListener("click", function () {
  saberinqR.classList.toggle("emittingR");
  inqtekst.classList.toggle("emittingR");
  audiodarkside.play();
});

buttoninquisitorL.addEventListener("click", function () {
  saberinqL.classList.toggle("emittingL");
  audiodarkside.play();
});

var buttonkyloren = document.querySelector("ol li:nth-of-type(6) button");
var bladelangkylo = document.querySelector("ol li:nth-of-type(6) output:first-of-type");
var bladekortonderkylo = document.querySelector("ol li:nth-of-type(6) output:nth-of-type(2)");
var bladekortbovenkylo = document.querySelector("ol li:nth-of-type(6) output:nth-of-type(3)");
var kylotekst = document.querySelector("ol li:nth-of-type(6) p");

buttonkyloren.addEventListener("click", function () {
  bladelangkylo.classList.toggle("activate");
  bladekortonderkylo.classList.toggle("activate");
  bladekortbovenkylo.classList.toggle("activate");

  kylotekst.classList.toggle("activate");

  audiokylorensaber.play();

  console.log("lighstaber kylo ren aan");
});

//Endor laten verschijnen
function veranderendor() {
  headerBackground.src = "images/endor4k.png";
  headerBackground.classList.add("veranderendor");
  console.log("endor is nu te zien, ook dankzij jeff ;)");

  if (headerBackground.classList.contains != "veranderendor") {
    h2.innerHTML = "Planeet Endor";
    headerBackground.className = "";
    headerBackground.classList.add("veranderendor");
  }
  audioewokhorns.play();
}

// Tatooine laten verschijnen
function veranderwoestijn() {
  headerBackground.src = "images/tatooinedesert.jpg";
  console.log("tatooine moet te zien zijn. En ja: made by jeff");

  if (headerBackground.classList.contains != "veranderwoestijn") {
    //!= is niet gelijk aan
    h2.innerHTML = "Planeet Tatooine";
    headerBackground.className = "";
    headerBackground.classList.add("veranderwoestijn");
  }
  audioutini.play();
}

// Felucia laten verschijnen
function veranderfelucia() {
  headerBackground.src = "images/felucia4k.jpg";

  if (headerBackground.classList.contains != "veranderfelucia") {
    //!= is niet gelijk aan
    h2.innerHTML = "Planeet Felucia";
    headerBackground.className = "";
    headerBackground.classList.add("veranderfelucia");
  }
  audiobd1.play();
  console.log("felucia moet te zien zijn, thanks Jeffrey!");
}

//Endor laten verschijnen
function verandernaboo() {
  headerBackground.src = "images/naboo4k.jpg";

  if (headerBackground.classList.contains != "verandernaboo") {
    //!= is niet gelijk aan
    h2.innerHTML = "Planeet Naboo";
    headerBackground.className = "";
    headerBackground.classList.add("verandernaboo");
  }
  audioyodalaugh.play();
  console.log("naboo moet te zien zijn, thanks Jeffrey!");
}

// Hamburger menu codes
hamburgerButton.addEventListener("click", function () {
  nav.classList.toggle("burger");
  audiohappybeeps.play();
});

// Moment wanneer de het hamburger menu sluit
closebutton.addEventListener("click", function () {
  nav.classList.toggle("burger");
  audiogoodjob.play();
});

// Geluid bij de knop in het hamburger menu
var navbutton = document.querySelector("header ul li:nth-of-type(2) button");
var yodadood = new Audio("sounds/yodadeathsound.mp3");

navbutton.addEventListener("click", function () {
  yodadood.play();
});

// Dit is eigenlijk de millenium falcon, maar laat t zo want nu werkt hij perfect :)
var imagedeathstar = document.querySelector("ol li:nth-of-type(5) img");
var deathstar = document.querySelector("ol li:nth-of-type(5) button");
deathstar.addEventListener("click", function () {
  imagedeathstar.classList.toggle("firing");
  audiohyperspace.play();
});

// De hello there animatie
var buttonhellothere = document.querySelector("ol li:nth-of-type(7) button");
var imggrievous = document.querySelector("ol li:nth-of-type(7) article img:first-of-type");
var imgkenobi = document.querySelector("ol li:nth-of-type(7) article img:last-of-type");

buttonhellothere.addEventListener("click", function () {
  imggrievous.classList.toggle("hello");
  imgkenobi.classList.toggle("hello");
  audiohellothere.play();
});

// De LEGO lightsaber
var legobutton = document.querySelector("ol li:last-of-type button");
var legoblade = document.querySelector("ol li:last-of-type strong");

legobutton.addEventListener("click", function () {
  legoblade.classList.toggle("bouwen");
  audiolegobuild.play();

  console.log("bouwen bouwen bouwen");
});
