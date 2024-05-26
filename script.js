const apiKey = "e1b2854a0c8de0609466ca54bb0a7e90";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chennai";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data =  await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h  ";




}

checkWeather();