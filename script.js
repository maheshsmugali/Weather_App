async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '9a163e64c3fe6b3d66805bb35ad87cef';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
    }
}
document.addEventListener("keydown",function(event){
    const key=event.key;
    if(key==="Enter")
    getWeather();
})