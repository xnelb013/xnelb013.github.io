const API_KEY = "04e0fc86090ea0ac5e82ca0c97403a54";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather1")
        const city = document.querySelector("#weather2")
        const weather2 = document.querySelector("#weather3")
        city.innerText = data.name;
        weather.innerText = `오늘의 날씨 : ${data.weather[0].main}`;
        weather2.innerText = `오늘의 온도 : ${data.main.temp}°C`
      });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);