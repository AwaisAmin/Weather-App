// api: ed83d19296a485cd28eb738b5e4a6d99
// apiCall: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed83d19296a485cd28eb738b5e4a6d99&units=metric`;

    axios.get(url)

    .then((response) => {
        document.querySelector(".city").innerText = `Weather in ${response.data.name}`;  
        document.querySelector(".icon").src =`https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
        document.querySelector('.temp').innerText = `${response.data.main.temp}°C`;
        document.querySelector('.description').innerText = response.data.weather[0].description;

        // console.log(response);
    })

    .catch((error) => {
        alert('invalid input');
    })
}


window.onload = function() {
    document.getElementById('sendButton').addEventListener('click', () => {
        const city = document.querySelector('.search-bar').value;
        getWeather(city);
    })
}

window.onload = function() {
    document.querySelector(".search-bar").addEventListener("keyup", (event) => {
        const city = document.querySelector('.search-bar').value;
        if (event.key == "Enter") {
            getWeather(city);
        }
    });
}

getWeather('Lahore');

