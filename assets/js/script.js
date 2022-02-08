//declare variables from html to js
var container = document.getElementsByClassName("container");
var info = document.getElementsByClassName("col-info");
var forecast = document.getElementsByClassName("col-forecast");
var currentCity = document.getElementById("current-city");
var cities = [];
var search = document.getElementById("search");
// Moment function that creates the current date to base the 5 day forecast off of
var today = moment().format("MMMM Do YYYY");

var URL = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={ddfab919ab7a8eb5c76ce05898c85d7f}`;
var apiKey = "ddfab919ab7a8eb5c76ce05898c85d7f";
//create new variables if needed for js
var inputSubmitHandler = function () {
  //event.preventDefault();

  var inputCity = document.getElementById("cityText").value;
  console.log(inputCity, "City");
  if (inputCity) {
    getLongLat(inputCity);
    document.getElementById("cityText").value = "";
  } else {
    alert("Please enter a valid city");
  }
};
//Fetches the data based of of the city name entered
function getLongLat(cityName) {
  URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((apidata) => {
      console.log(apidata);
      var long = apidata.coord.lon;
      var lat = apidata.coord.lat;
      document.getElementById("cityName").textContent = cityName;
      getForecast(lat, long);
      getFiveDayForecast(lat, long);
    });
}

//This prints the current date forecast for the city inputted for the current city info: city name, the date, an icon represtantion of the weather, the temp, the humidity, and wind speed
function getForecast(lat, long) {
  URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,alerts,minutely&appid=${apiKey}&units=imperial`;
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((apidata) => {
      console.log(apidata);
      var forecast = ` <h2>${today}<h2> <br><h4> Description: ${apidata.current.weather[0].description}
        <img src="https://openweathermap.org/img/wn/${apidata.current.weather[0].icon}@2x.png" /></h4>
        <br><h5> Temperature: ${apidata.current.temp}</h5>
        <br><h5> Wind speed: ${apidata.current.wind_speed}</h5>
        <br><h5> Humidity: ${apidata.current.humidity}</h5>
        <br><h5> UV Index: ${apidata.current.uvi}
        `;
      document.getElementById("current-forecast").innerHTML = forecast;
    });
}

//API url is working but it needs to be linked to the divs id'ed 1 to 5
function getFiveDayForecast(lat, long) {
  URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((apidata) => {
      console.log(apidata);
      //var forecast = ` <h2>${today}<h2> <br><h4> Description: ${apidata.current.weather[0].description}
      //<img src="https://openweathermap.org/img/wn/${apidata.current.weather[0].icon}@2x.png" /></h4>
      //<br><h5> Temperature: ${apidata.current.temp}</h5>
      //<br><h5> Wind speed: ${apidata.current.wind_speed}</h5>
      //<br><h5> Humidity: ${apidata.current.humidity}</h5>
      //<br><h5> UV Index: ${apidata.current.uvi}
      //`
      //document.getElementById("current-forecast").innerHTML= forecast
    });
}

//create a function for saving local storage for each city searched
search.addEventListener("click", inputSubmitHandler);
