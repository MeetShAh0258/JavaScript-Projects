const apiKey = 'fe02a0ea9c897a1db65e6d2bacb4231e';
const uri = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const search_input = document.querySelector('.search-bar input'); 
const search_btn = document.querySelector('.search-bar button'); 
const weatherIcon = document.querySelector('.weather-icon');


async function getWeatherDetails(city) {
    const response = await fetch(uri + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else {
        let data = await response.json();

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.location').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds" || data.weather[0].main == "Fog") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "images/thunderstorm.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector('.error').style.display = "none";
        document.querySelector('.weather').style.display = "block";
    }
    
}

search_btn.addEventListener('click', () => {
    if(search_input.value) {
        getWeatherDetails(search_input.value);
    }
    else {
        document.querySelector('.weather').style.display = "none";
        document.querySelector('.error').style.display = "none";
        alert("Please enter city or country name!");
    }
});