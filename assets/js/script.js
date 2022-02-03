//declare variables from html to js
var container = document.getElementsByClassName("container");
var info = document.getElementsByClassName("info");
var forecast = document.getElementsByClassName("forecast");
var currentCity = document.getElementById("current-city");
var cities = [];

//create new variables if needed for js
var inputSubmitHandler = function (event) {
    //event.preventDefault();
  
    var inputCity = document.getElementById("cityText").value;
    console.log(inputCity);
    //if (inputCity === ) {
      //getUserRepos(username);
  
      //repoContainerEl.textContent = '';
      //nameInputEl.value = '';
    //} else {
      //alert('Please enter a valid city');
    //}
  };

 
//dynamically creating elements for the current city info: city name, the date, an icon represtantion of the weather, the temp, the humidity, and wind speed



//create a function the pulls information from API to html and fills container



//create a function that pulls information from API and shows the 5-day forecast cards


//create a function for saving local storage for each city searched

inputSubmitHandler();