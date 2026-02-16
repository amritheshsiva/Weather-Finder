const apiKey = "95c4bc4204d2e412aa82f70c15889d1f";  
function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        document.getElementById("weatherInfo").innerHTML =
            "Please enter a city name.";
        return;
    }
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp;
                const desc = data.weather[0].description;
                const humidity = data.main.humidity;
                const wind = data.wind.speed;
                document.getElementById("weatherInfo").innerHTML =
                    "<h4>" + data.name + "</h4>" +
                    "<p>Temperature: " + temp + "°C</p>" +
                    "<p>Description: " + desc + "</p>" +
                    "<p>Humidity: " + humidity + "%</p>" +
                    "<p>Wind Speed: " + wind + " m/s</p>";
            } 
            else {
                document.getElementById("weatherInfo").innerHTML = "City not found.";
            }
        })
        .catch(() => {
            document.getElementById("weatherInfo").innerHTML = "Error fetching weather data.";
        });
}
