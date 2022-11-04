// JavaScript Document
var buttonSaber = document.querySelector("ol li:first-of-type article button");
var saber = document.querySelector(".blade")

var buttonSaber22 = document.querySelector("ol li:nth-of-type(2) article button:first-of-type");
var saber22 = document.querySelector("ol li:nth-of-type(2) article div:nth-of-type(16)");

var buttonSaber2 = document.querySelector("ol li:nth-of-type(2) article button:nth-of-type(2)");
var saber2 = document.querySelector("ol li:nth-of-type(2) article div:nth-of-type(15)");

var body = document.querySelector("body");
var knopplaneet1 = document.querySelector("section article ul button:nth-of-type(1)");

buttonSaber.addEventListener("click", function() {
    saber.classList.toggle("open");
})

buttonSaber2.addEventListener("click", function() {
    saber2.classList.toggle("open2");
})

buttonSaber22.addEventListener("click", function() {
    saber22.classList.toggle("open22");
})

// Endor laten verschijnen
var body = document.querySelector("body");
var knopplaneet1 = document.querySelector("section article ul button:nth-of-type(1)");

knopplaneet1.addEventListener("click", function() {
    body.classList.toggle("Endor");
})


// Tatooine laten verschijnen
var buttonplaneet2 = document.querySelector("section article ul button:nth-of-type(2)");
buttonplaneet2.addEventListener("click", veranderwoestijn);

function veranderwoestijn () {
    var woestijn = document.querySelector("body");

    woestijn.classList.toggle("Tatooine");
}

