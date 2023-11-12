function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value.trim();

    if (location === '') {
        alert('Please enter a city');
        return;
    }

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');

    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
    const weatherDescription = data.weather[0].description;

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Weather: ${weatherDescription}</p>
    `;

    weatherContainer.innerHTML = weatherHTML;
}
