document.querySelector("#map").onclick = () => {
    document.querySelector("#out").style.animationName = "menuOfWeatherEnd";
    setTimeout(() => { document.querySelector("#out").style.display = "none"; }, 1750);
}

let cities = {
    brest: "Brest,by",
    minsk: "Minsk,by",
    moscow: "Moscow,ru",
    warsaw: "Warsaw,pl",
    berlin: "Berlin,de",
    rome: "Rome,it",
    paris: "Paris,fr",
    london: "London,uk",
    madrid: "Madrid,es",
    kiev: "Kiev,ua",
    prague: "Prague,cz",
    stockholm: "Stockholm,se",
    vilnius: "Vilnius,lt",
    athens: "Athens,gr"
}

function request(click, city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=620701463d2191b0fb78b6236815d63e`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector("#name").textContent = data.name;
            document.querySelector("#main-temp").innerHTML = Math.round(data.main.temp - 273.15) + "&deg;";
            document.querySelector("#weather-0-description").textContent = data.weather[0].description;
            document.querySelector("#weather-0-icon").style.backgroundImage = `url("https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png")`;
            document.querySelector("#link").setAttribute("href", `https://www.google.com/maps/search/${data.name}`);
            document.querySelector("#out").style.animationName = "menuOfWeather";
            document.querySelector("#out").style.left = click.clientX + "px";
            document.querySelector("#out").style.top = `${pageYOffset + click.clientY}px`;
            document.querySelector("#out").style.display = "flex";
            console.log(data);
        })
}