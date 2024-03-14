const currentTemp = document.querySelector('#current-temp');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const pre = document.querySelector('#pre');
const wind = document.querySelector('#windS');
//const windChill = document.querySelector('#windChill');
//const direction = ``;

const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

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
  else if ( data.wind.deg < 270) {
    var direction = `SW`;
  }
  else if (data.wind.deg == 270) {
    var direction = `W`;
  }
  else {
    var direction = `NS`;
  }
  console.log(direction);
  
  console.log(`TEMP:`, data.main.temp);
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  high.innerHTML = `High: ${data.main.temp_max}&deg;F`;
  low.innerHTML = `Low: ${data.main.temp_min}&deg;F`;
  pre.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed} MPH ` + direction;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  //console.log(iconsrc);
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}