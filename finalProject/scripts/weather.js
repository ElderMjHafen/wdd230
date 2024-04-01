// Dynamic selection of elements
const elements = {
  currentTemp: document.querySelector('#current-temp'),
  high: document.querySelector('#high'),
  low: document.querySelector('#low'),
  pre: document.querySelector('#pre'),
  wind: document.querySelector('#windS'),
  weatherIcon: document.querySelector('#weather-icon'),
  captionDesc: document.querySelector('figcaption')
};

// Get the current location 20.4239112071267, -86.92644904805222
navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  // Call the OpenWeatherMap API with the obtained coordinates
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.93&units=imperial&appid=89bd6bba4fd77237e2f8c045af14b381`;
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
  let direction = 'NS'; // default direction
  if (data.wind.deg == 0) {
    direction = `N`;
  } else if (data.wind.deg < 90) {
    direction = `NE`;
  } else if (data.wind.deg == 90) {
    direction = `E`;
  } else if (data.wind.deg < 180) {
    direction = `SE`;
  } else if (data.wind.deg == 180) {
    direction = `S`;
  } else if (data.wind.deg < 270) {
    direction = `SW`;
  } else if (data.wind.deg == 270) {
    direction = `W`;
  }
  console.log(direction);

  console.log(`TEMP:`, data.main.temp);
  elements.currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  elements.high.innerHTML = `High: ${data.main.temp_max}&deg;F`;
  elements.low.innerHTML = `Low: ${data.main.temp_min}&deg;F`;
  elements.pre.innerHTML = `${data.main.humidity}%`;
  elements.wind.innerHTML = `${data.wind.speed} MPH ` + direction;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  //console.log(iconsrc);
  let desc = data.weather[0].description;
  elements.weatherIcon.setAttribute('src', iconsrc);
  elements.weatherIcon.setAttribute('alt', desc);
  elements.captionDesc.textContent = `${desc}`;
}