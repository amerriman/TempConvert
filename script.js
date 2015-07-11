window.onload = function() {

var temp = prompt("Would you like to find a temperature in C, or F?");

if (temp.toUpperCase() === "C"){
  var tempC = prompt("Enter the temperature in Farenheit.");
    var tempCC = (tempC-32)*5/9;
      alert("The temperature in Celcius is " + tempCC);}

else if (temp.toUpperCase()==="F") {
  var tempF = prompt ("Enter the temperature in Celcius.");
    var tempFF = tempF*9/5+32;
      alert("The temperature in Farenheit is " + tempFF);}

else {
  alert("That was not one of the options.")
}

}
