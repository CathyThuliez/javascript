"use strict";

// definition d'une fonction
function addition(a, b) {
  return a + b;
}

var resultat;

// recupération du résultat de la fonction dans une variable
resultat = addition(2, 3);

console.log(resultat);

// action qui permet d'effectuer l'addition et d'afficher le résultat
function addAction() {
  var a;
  var b;
  var result;

  a = document.querySelector("input[name=a]").value;
  b = document.querySelector("input[name=b]").value;

  a = parseInt(a);
  b = parseInt(b);

  result = addition(a, b);

  document.querySelector("#result").innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function(event) {
document.querySelector("button#add").addEventListener("click", addAction);
});
