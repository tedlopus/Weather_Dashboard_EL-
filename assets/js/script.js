//declare variables from html to js
var container = document.getElementsByClassName("container");
var info = document.getElementsByClassName("col-info");
var forecast = document.getElementsByClassName("col-forecast");
var currentCity = document.getElementById("current-city");
var cities = [];
var search = document.getElementById("search");

var URL = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={ddfab919ab7a8eb5c76ce05898c85d7f}`
var apiKey = 'ddfab919ab7a8eb5c76ce05898c85d7f';
//create new variables if needed for js
var inputSubmitHandler = function () {
    //event.preventDefault();
  
    var inputCity = document.getElementById("cityText").value;
    console.log(inputCity, "City");
    if (inputCity) {
      getLongLat(inputCity);
      document.getElementById("cityText").value = '';
    } else {
      alert('Please enter a valid city');
    }
  };

  function getLongLat (cityName) {
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    fetch(URL)
    .then(response =>{
        return response.json()
    }).then(apidata=>{
        console.log(apidata);
        var long = apidata.coord.lon
        var lat =apidata.coord.lat
        document.getElementById('cityName').textContent = cityName
        getForecast(lat,long)
    })

  }


  function getForecast (lat, long) {
    URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,alerts,minutely&appid=${apiKey}&units=imperial`
    fetch(URL)
    .then(response =>{
        return response.json()
    }).then(apidata=>{
        console.log(apidata);
        var forecast = `<h4>Description:${apidata.current.weather[0].description}.
        <img src="https://openweathermap.org/img/wn/${apidata.current.weather[0].icon}@2x.png" /></h4>
        <h5>Wind speed:${apidata.wind_speed}</h5>
        <h5>Humidity:${apidata.humidity}</h5>
        `
        document.getElementById("current-forecast").innerHTML= forecast
    })
  }
//Going to need to create a way for the current date to populate using moment and getting the next 5 days after that



//dynamically creating elements for the current city info: city name, the date, an icon represtantion of the weather, the temp, the humidity, and wind speed



//create a function the pulls information from API to html and fills container



//create a function that pulls information from API and shows the 5-day forecast cards


//create a function for saving local storage for each city searched
search.addEventListener('click', inputSubmitHandler);