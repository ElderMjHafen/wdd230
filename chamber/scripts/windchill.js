var temp= 42;
var wSpeed= 3.5;

if (temp <= 50 & wSpeed > 3.0) {
    var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    var windChill= Math.round(windChill);

    document.getElementById("windChill").innerHTML= windChill;
}
else {
    document.getElementById("windChill").innerHTML= "N/A";
}