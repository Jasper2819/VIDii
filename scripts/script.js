// JavaScript Document
var buttonSaber = document.querySelector("ol li:first-of-type article button");
var saber = document.querySelector(".blade")

buttonSaber.addEventListener("click", function() {
    saber.classList.toggle("open");
})