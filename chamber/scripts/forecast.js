const currentTemp = document.querySelector('#current-temp');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const pre = document.querySelector('#pre');
const wind = document.querySelector('#windS');
const currentTemp2 = document.querySelector('#current-temp2');
const high2 = document.querySelector('#high2');
const low2 = document.querySelector('#low2');
const pre2 = document.querySelector('#pre2');
const wind2 = document.querySelector('#windS2');
const currentTemp3 = document.querySelector('#current-temp3');
const high3 = document.querySelector('#high3');
const low3 = document.querySelector('#low3');
const pre3 = document.querySelector('#pre3');
const wind3 = document.querySelector('#windS3');

var windChill2 = document.querySelector('#windChill2');
var windChill3 = document.querySelector('#windChill3');

const weatherIcon = document.querySelector('#weather-icon');
const weatherIcon2 = document.querySelector('#weather-icon2');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc = document.querySelector('figcaption');
const captionDesc2 = document.querySelector('figcaption', 'fig2');
const captionDesc3 = document.querySelector('figcaption', 'fig3');

//49.74937832297326, 6.639829910379418
// Get the current location
navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  // Call the OpenWeatherMap API with the obtained coordinates
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=89bd6bba4fd77237e2f8c045af14b381`;
  console.log(url);



  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        console.log(`Next day:`, data.list[8]);
        console.log(`Following day:`, data.list[16]);

        //Day 2
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

        //Day 3
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
        
        /*
        console.log(`degree:`, data.wind.deg);
        if (data.list[0].wind.deg == 0) {
          var direction = `N`;
        }
        else if (data.list[0].wind.deg < 90) {
          var direction = `NE`;
        }
        else if (data.list[0].wind.deg == 90) {
          var direction = `E`;
        }
        else if (data.list[0].wind.deg < 180) {
          var direction = `SE`;
        }
        else if (data.list[0].wind.deg == 180) {
          var direction = `S`;
        }
        else if (data.list[0].wind.deg < 270) {
          var direction = `SW`;
        }
        else if (data.list[0].wind.deg == 270) {
          var direction = `W`;
        }
        else {
          var direction = `NS`;
        }
        console.log(direction);
        
        wind.innerHTML = `${data.list[0].wind.speed} MPH ` + direction;
        //wind2.innerHTML = `${data.list[8].wind.speed} MPH ` + direction;
        //wind3.innerHTML = `${data.list[16].wind.speed} MPH ` + direction;
      
        console.log(data);
        /** */

        // Day 1
        currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
        high.innerHTML = `High: ${data.list[0].main.temp_max}&deg;F`;
        low.innerHTML = `Low: ${data.list[0].main.temp_min}&deg;F`;
        pre.innerHTML = `${data.list[0].main.humidity}%`;
        //wind.innerHTML = `${data.list[0].wind.speed} MPH `;
        const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
        let desc = data.list[0].weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${desc}`;

        // Day 2
        currentTemp2.innerHTML = `${data.list[8].main.temp}&deg;F`;
        high2.innerHTML = `High: ${data.list[8].main.temp_max}&deg;F`;
        low2.innerHTML = `Low: ${data.list[8].main.temp_min}&deg;F`;
        pre2.innerHTML = `${data.list[8].main.humidity}%`;
        wind2.innerHTML = `${data.list[8].wind.speed} MPH `;
        const iconsrc2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
        let desc2 = data.list[8].weather[0].description;
        weatherIcon2.setAttribute('src', iconsrc2);
        weatherIcon2.setAttribute('alt', desc2);
        console.log(desc2);
        captionDesc2.textContent = `${desc2}`;

        // Day 3
        currentTemp3.innerHTML = `${data.list[16].main.temp}&deg;F`;
        high3.innerHTML = `High: ${data.list[16].main.temp_max}&deg;F`;
        low3.innerHTML = `Low: ${data.list[16].main.temp_min}&deg;F`;
        pre3.innerHTML = `${data.list[16].main.humidity}%`;
        wind3.innerHTML = `${data.list[16].wind.speed} MPH `;
        const iconsrc3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
        let desc3 = data.list[16].weather[0].description;
        weatherIcon3.setAttribute('src', iconsrc3);
        weatherIcon3.setAttribute('alt', desc3);
        console.log(desc3);
        captionDesc3.textContent = `${desc3}`;

        
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
//*
function displayResults(data) {
  console.log(`degree:`, data.wind.deg);
  if (data.wind.deg == 0) {
    var direction = `N`;
  }
  else if (data.wind.deg < 90) {
    var direction = `NE`;
  }
  else if (data.wind.deg == 90) {
    var direction = `E`;
  }
  else if (data.wind.deg < 180) {
    var direction = `SE`;
  }
  else if (data.wind.deg == 180) {
    var direction = `S`;
  }
  else if (data.wind.deg < 270) {
    var direction = `SW`;
  }
  else if (data.wind.deg == 270) {
    var direction = `W`;
  }
  else {
    var direction = `NS`;
  }
  console.log(direction);
  
  wind.innerHTML = `${data.wind.speed} MPH ` + direction;
  //wind2.innerHTML = `${data.list[8].wind.speed} MPH ` + direction;
  //wind3.innerHTML = `${data.list[16].wind.speed} MPH ` + direction;

  console.log(data);
}
/***/