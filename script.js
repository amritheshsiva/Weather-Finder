const apiKey = '95c4bc4204d2e412aa82f70c15889d1f';
const city = 'Trivandrum';
const country = 'Kerala';

const location = `${city},${country}`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Trivandrm}&appid=${95c4bc4204d2e412aa82f70c15889d1f}`;

function getWeather() {
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
    const temperature = Math.round(data.main.temp - 273.15); 
    const weatherDescription = data.weather[0].description;

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Weather: ${weatherDescription}</p>
    `;

    weatherContainer.innerHTML = weatherHTML;
    function getWeather() {
    console.log('Fetching weather data...');

    fetch(apiUrl)
        .then(response => {
            console.log('Response Status:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('API Data:', data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

}
