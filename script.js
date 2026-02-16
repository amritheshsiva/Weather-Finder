const apiKey = "d36988af5c3ecc8027255d80a9597402";

function getWeather() {

    const city = document.getElementById("city").value;

    if (!city) {
        document.getElementById("weatherInfo").innerHTML =
            `<div class="alert alert-warning">Please enter a city name</div>`;
        return;
    }

    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" + apiKey +
        "&units=metric";

    fetch(url)
        .then(res => res.json())
        .then(data => {

            if (data.cod === 200) {

                document.getElementById("weatherInfo").innerHTML = `
                    <h4 class="mt-3">${data.name}, ${data.sys.country}</h4>
                    <h3>${data.main.temp}°C</h3>
                    <p class="text-capitalize">${data.weather[0].description}</p>
                    <hr>
                    <div class="row">
                        <div class="col-6">
                            <p>💧 Humidity</p>
                            <strong>${data.main.humidity}%</strong>
                        </div>
                        <div class="col-6">
                            <p>🌬 Wind</p>
                            <strong>${data.wind.speed} m/s</strong>
                        </div>
                    </div>
                `;

            } else {
                document.getElementById("weatherInfo").innerHTML =
                    `<div class="alert alert-danger">City not found</div>`;
            }

        })
        .catch(() => {
            document.getElementById("weatherInfo").innerHTML =
                `<div class="alert alert-danger">Error fetching data</div>`;
        });
}
