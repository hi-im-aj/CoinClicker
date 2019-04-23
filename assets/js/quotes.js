"use strict";
function getQuote() {
  let xhttp = new XMLHttpRequest(); // Et request-objekt bliver lavet.
  xhttp.onreadystatechange = function() { // En funktion bliver kørt, når der bliver modtaget et svar fra serveren.
    if (this.readyState === 4 && this.status === 200) { // 4: request finished and response is ready | 200: "OK"
    	document.querySelector("#quoteTxt").innerHTML = this.responseText; // Noget HTML på siden bliver ændret til det, som bliver modtaget fra serveren (i form af en string).
    }
  };
  xhttp.open("GET", "http://numbersapi.com/random/trivia", true); // Skal altid være true, da false vil gøre, at serveren ikke kører noget andet imens (venter på svar).
  xhttp.send(); // Funktionen som sender selve requesten.
};
getQuote();
setInterval(getQuote, 10000);