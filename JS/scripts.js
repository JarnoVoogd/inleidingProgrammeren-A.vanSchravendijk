// array met 5 zool afbeeldingen
var zoolArray = ["IMG/zoolWit.png", "IMG/zoolRood.png", "IMG/zoolRoze.png", "IMG/zoolGroen.png", "IMG/zoolZwart.png"];

// dit is de zoolfoto in de html
var zoolFoto = document.querySelector("#schoenZool");

// dit is de huidige index van de array
var huidigeZoolFoto = 0;

// als je op de knop klikt wordt de functie "zoolveranderen" geactiveerd
document.querySelector("#zoolButton").addEventListener("click", zoolVeranderen);

function zoolVeranderen() {

    //huidigezoolfoto is 0, plus 1 bij elke klik
    huidigeZoolFoto = huidigeZoolFoto + 1;

    //als de foto groter is dan 4 gaat het terug naar 0 bij de array
    if (huidigeZoolFoto > 4) {
        huidigeZoolFoto = 0;
    } else {
        //niks
    }
    //het nummer van de array staat voor de titel van het bestand en dat wordt in html de src van de afbeelding
    zoolFoto.setAttribute("src", zoolArray[huidigeZoolFoto]);
};



var logoArray = ["IMG/swooshWit.png", "IMG/swooshRood.png", "IMG/swooshRoze.png", "IMG/swooshGroen.png", "IMG/swooshZwart.png"];
var logoFoto = document.querySelector("#schoenLogo");
var huidigeLogoFoto = 0;

document.querySelector("#logoButton").addEventListener("click", logoVeranderen);

function logoVeranderen() {

    huidigeLogoFoto = huidigeLogoFoto + 1;

    if (huidigeLogoFoto > 4) {
        huidigeLogoFoto = 0;
    } else {
        //niks
    }
    logoFoto.setAttribute("src", logoArray[huidigeLogoFoto]);
};




document.querySelector("#resetButton").addEventListener("click", resetSchoen);

function resetSchoen() {
    huidigeLogoFoto = 0;
    huidigeZoolFoto = 0;

    logoFoto.setAttribute("src", logoArray[huidigeLogoFoto]);
    zoolFoto.setAttribute("src", zoolArray[huidigeZoolFoto]);
}