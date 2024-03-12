const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//49.74937832297326, 6.639829910379418

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=89bd6bba4fd77237e2f8c045af14b381';
console.log(url);

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.temp}&deg;F`;
  console.log(currentTemp);
  const iconsrc = `https://openweathermap.org/img/w/${Rain}.10d.png`;
  let desc = data.weather[0].Rain;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('src', iconsrc);
  captionDesc.textContent = `${desc}`;
}