const element = document.getElementById("temperature");
const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temperature.innerHTML = response.temp + "°";
      element.classList.add("style-temp");
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      feelsLike.innerHTML = response.feels_like + "°";
      Humidity.innerHTML = response.humidity + "%";
      Humidity.classList.add("style-humid");
      rise.innerHTML = "Sunrise: " + response.sunrise;
      rise.classList.add("style-humid");
      set.innerHTML = "Sunset: " + response.sunset;
      set.classList.add("style-humid");
      wind_speed.innerHTML = "Wind Speed: " + response.wind_speed + " Km/hr";
      wind_speed.classList.add("style-wind");
      wind_deg.innerHTML = "Wind Degree: " + response.wind_degrees + "°";
      wind_deg.classList.add("style-wind");
    })
    .catch((err) => console.error(err));
};

Search.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Aurangabad");
