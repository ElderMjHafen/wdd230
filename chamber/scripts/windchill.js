//const wind = document.querySelector('#windS');
var windChill = document.querySelector('#windChill');

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
          displayResults(data); // uncomment when ready

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


