const Form = document.querySelector("#form")
const searchInput = document.querySelector("#search-input")
const currentDay = document.querySelector("#current-day")
const currentDate = document.querySelector("#current-date")
const currentLocation = document.querySelector("#current-location")
const weatherSelcius = document.querySelector("#weather-celcius");
const weatherCurrentIcon= document.querySelector("#weather-current-icon");
const weatherSelciusData = document.querySelector("#weather-celcius-data");
const weatherHumidity = document.querySelector("#humidity")
const weatherWind = document.querySelector("#wind")
const weatherMaxTemp = document.querySelector("#max-temp")
const weatherMinTemp = document.querySelector("#min-temp")
const DailyInfoFirst = document.querySelector("#daily-info-first")
const DailyInfoSecond = document.querySelector("#daily-info-second")
const DailyInfoThirty = document.querySelector("#daily-info-thirty")
const weaklyDayFirst = document.querySelector("#weekly-day-first")
const weaklyDaySecond = document.querySelector("#weekly-day-second")
const weaklyDayThirty = document.querySelector("#weekly-day-thirty")
const dailySelciusFirst = document.querySelector("#daily-celcius-first")
const dailySelciusSecond = document.querySelector("#daily-celcius-second")
const dailySelciusThirty = document.querySelector("#daily-celcius-thirty")



const API_KEY = "644f6ce0ca9e401ebb891832211707";
Form.addEventListener("submit", Weatherdata)
async function Weatherdata(e) {
    e.preventDefault()
    try {
        searchInput.innerHTML = "";
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value ? searchInput.value : "Tashkent"}&days=7&aqi=yes&alerts=yes`);
        let data = await response.json()
        renderWeatherData(data)
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
function renderWeatherData(weatherData) {
    currentDay.innerHTML = `<h2>${WeekDayData(new Date().getDay())}</h2>`
    currentDate.innerHTML = `${weatherData.forecast.forecastday[0].date}`;
    currentLocation.innerHTML = `${weatherData.location.name}, ${weatherData.location.country}`
    weatherCurrentIcon.src = weatherData.forecast.forecastday[0].day.condition.icon
    weatherSelcius.innerHTML = weatherData.current.temp_c + "°C" 
    weatherSelciusData.innerHTML = weatherData.forecast.forecastday[0].day.condition.text
    weatherHumidity.innerHTML = weatherData.current.humidity
    weatherWind.innerHTML = weatherData.forecast.forecastday[0].hour[0].wind_kph +" kph"
    weatherMinTemp.innerHTML = weatherData.forecast.forecastday[0].day.mintemp_c + "°C"
    weatherMaxTemp.innerHTML = weatherData.forecast.forecastday[0].day.maxtemp_c + "°C"
    DailyInfoFirst.src = weatherData.forecast.forecastday[0].day.condition.icon
    DailyInfoSecond.src = weatherData.forecast.forecastday[1].day.condition.icon
    DailyInfoThirty.src = weatherData.forecast.forecastday[2].day.condition.icon
    weaklyDayFirst.innerHTML = `<p>${WeekDayData(new Date().getDay())}</p>`
    weaklyDaySecond.innerHTML =`<p>${WeekDayData(new Date().getDay() + 1)}</p>`
    weaklyDayThirty.innerHTML =`<p>${WeekDayData(new Date().getDay() + 2)}</p>`
    dailySelciusFirst.innerHTML = weatherData.forecast.forecastday[0].day.avgtemp_c + "°C"
    dailySelciusSecond.innerHTML = weatherData.forecast.forecastday[1].day.avgtemp_c + "°C"
    dailySelciusThirty.innerHTML = weatherData.forecast.forecastday[2].day.avgtemp_c + "°C"
    ChangeBackdropImg()
}

function ChangeBackdropImg() {
    if(weatherSelcius < 20+"°C"){
        console.log("Cold");
    } 
}

let dayData = new Date().getDay();
function WeekDayData(time) {
    switch (time) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday"
        case 8: return "Monday";
        case 9: return "Tuesday";
        case 10: return "Wednesday";
        case 11: return "Thursday";
        case 12: return "Friday";
        case 13: return "Saturday";
        case 14: return "Sunday"
        default: return "No date"
    }
}

