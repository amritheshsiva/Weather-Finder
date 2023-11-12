function getWeather() {
    var apiKey = '95c4bc4204d2e412aa82f70c15889d1f';
    var city = document.getElementById('city').value;

    // Use HTTPS for the API request
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod && data.cod !== '404') {
                var temperature = data.main.temp;
                var description = data.weather[0].description;

                var weatherInfo = `Temperature in ${city}: ${temperature}°C, Description: ${description}`;
                document.getElementById('weatherInfo').innerText = weatherInfo;
            } else {
                document.getElementById('weatherInfo').innerText = 'City not found. Please enter a valid city name.';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerText = 'Error: Unable to fetch weather data.';
        });
}
