//const wind = document.querySelector('#windS');
var windChill = document.querySelector('#windChill');
var windChill2 = document.querySelector('#windChill2');
var windChill3 = document.querySelector('#windChill3');

//Get the current location
/** */
navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
  
    // Call the OpenWeatherMap API with the obtained coordinates
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=89bd6bba4fd77237e2f8c045af14b381`;
    //console.log(url);
  
  
  
    async function apiFetch() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // testing only

          var ctemp = parseFloat(data.main.temp);
          //ctemp = ctemp - 50; // test
          console.log(`ctemp:`, ctemp)
          var wSpeed= parseFloat(data.wind.speed);

          if (ctemp <= 50 & wSpeed > 3.0) {
            windChill= (35.74 + (0.6215 * ctemp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*ctemp*Math.pow(wSpeed,0.16));
            windChill= Math.round(windChill);
        
            console.log(windChill);
        
            document.getElementById("windChill").innerHTML= windChill + `&deg;F`;
          }
          else {
            document.getElementById("windChill").innerHTML= `N/A`;
          }
          var ctemp2 = parseFloat(data.list[8].main.temp);
          //ctemp2 = ctemp2 - 50; // test
          console.log(`ctemp2:`, ctemp2)
          var wSpeed2= parseFloat(data.list[8].wind.speed);

          if (ctemp2 <= 50 & wSpeed2 > 3.0) {
            windChill2 = (35.74 + (0.6215 * ctemp2))-(35.75 * Math.pow(wSpeed2,0.16)) + (0.4275*ctemp2*Math.pow(wSpeed2,0.16));
            windChill2 = Math.round(windChill2);
        
            console.log(windChill2);
        
            document.getElementById("windChill2").innerHTML= windChill2 + `&deg;F`;
          }
          else {
            document.getElementById("windChill2").innerHTML= `N/A`;
          }
          var ctemp3 = parseFloat(data.list[16].main.temp);
          //ctemp3 = ctemp2 - 50; // test
          console.log(`ctemp2:`, ctemp3)
          var wSpeed3 = parseFloat(data.list[16].wind.speed);

          if (ctemp3 <= 50 & wSpeed3 > 3.0) {
            windChill3 = (35.74 + (0.6215 * ctemp2))-(35.75 * Math.pow(wSpeed3,0.16)) + (0.4275*ctemp3*Math.pow(wSpeed3,0.16));
            windChill3 = Math.round(windChill3);
        
            console.log(windChill3);
        
            document.getElementById("windChill3").innerHTML = windChill3 + `&deg;F`;
          }
          else {
            document.getElementById("windChill3").innerHTML = `N/A`;
          }

          displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
    }
  
    
    apiFetch();
});
//console.log(data.main.temp);
/**/


