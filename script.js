const apiKey = '95c4bc4204d2e412aa82f70c15889d1f';
const city = 'Trivandrum';
const country = 'India';

const location = `${city},${country}`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

function getWeather() {
    console.log('Fetching weather data...');

    // Direct API access URL for reference
    const directApiAccessUrl = `https://api.openweathermap.org/data/2.5/weather?q=Trivandrum,India&appid=${apiKey}`;
    console.log('Direct API Access URL:', directApiAccessUrl);

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

// Fetch weather data when the script is loaded
getWeather();
