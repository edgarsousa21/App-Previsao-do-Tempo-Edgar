

const key = "cca86614a858f699de795fc145ca5e35"

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function insertDataScreen(date) {
    const space = " &nbsp " 
    document.querySelector("h2.city").innerHTML = "Tempo em " + date.name
    document.querySelector("p.temp").innerHTML = `Temperatura: ${Math.floor(date.main.temp)} °C ${space} Min: ${Math.floor(date.main.temp_min)} °C ${space} Max: ${Math.ceil(date.main.temp_max)} °C `    
    document.querySelector("p.text-forecast").innerHTML = date.weather[0].description
    document.querySelector("img.img-forecast").src = `https://openweathermap.org/img/wn/${date.weather[0].icon}.png`
    document.querySelector("p.humidity").innerHTML = "Umidade: " + date.main.humidity + "%"
    console.log(date)
}

async function findCity(city) {
    const date = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    insertDataScreen(date)

}



function buttonClick() {
    const city = document.querySelector('input.input-city').value
    findCity(city)
}