document.querySelector("#maatButton").addEventListener("click", maatCheck);
var errorBericht = document.querySelector("#error-bericht");

function maatCheck() {
    //de waarde van de nummer(int)
    var maatSchoen = document.querySelector("#maatSchoen").value;

    //als de maat groter is dan 35 en kleiner is dan 45 opent schoen.html
    if ( maatSchoen > 35 && maatSchoen < 45) {
        window.open( "file:///Users/jarnovoogd/Desktop/CMD%20-%20Jaar2/InleidingProgrammeren%20-%20Jaar2/jarnoVoogd.inleidingProgrammeren/schoen.html"); 
        errorBericht.style.display = "none";

    //als de maat kleiner is dan 35 en groter is dan 45 komt er een error bericht in beeld
    } else {
        errorBericht.style.display = "block";
        errorBericht.innerHTML = "Maat niet beschikbaar";
    }
  }


  // BRONNEN:
  //https://stackoverflow.com/questions/36647055/using-input-field-in-if-else-statement-javascript
  //https://www.w3schools.com/jsref/met_win_open.asp