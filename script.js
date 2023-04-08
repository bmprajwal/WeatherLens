const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fc5332de1amsh20286d858871438p1c6f44jsn52e8df28cb6d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            cityName.innerHTML = city[0].toUpperCase() + city.substring(1,).toLowerCase()
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    console.error(cityValue.value)
    getWeather(cityValue.value)
})

getWeather("Tokyo")




const update_delhi_Weather = () => {

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            delhi_cloud_pct.innerHTML = response.cloud_pct
            delhi_temp.innerHTML = response.temp
            delhi_feels_like.innerHTML = response.feels_like
            delhi_humidity.innerHTML = response.humidity
            delhi_min_temp.innerHTML = response.min_temp
            delhi_max_temp.innerHTML = response.max_temp
            delhi_wind_speed.innerHTML = response.wind_speed
            delhi_wind_degrees.innerHTML = response.wind_degrees
            delhi_sunrise.innerHTML = response.sunrise
            delhi_sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
update_delhi_Weather()

const update_blore_Weather = () => {

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            bangalore_cloud_pct.innerHTML = response.cloud_pct
            bangalore_temp.innerHTML = response.temp
            bangalore_feels_like.innerHTML = response.feels_like
            bangalore_humidity.innerHTML = response.humidity
            bangalore_min_temp.innerHTML = response.min_temp
            bangalore_max_temp.innerHTML = response.max_temp
            bangalore_wind_speed.innerHTML = response.wind_speed
            bangalore_wind_degrees.innerHTML = response.wind_degrees
            bangalore_sunrise.innerHTML = response.sunrise
            bangalore_sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
update_blore_Weather()


const update_london_Weather = () => {

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            london_cloud_pct.innerHTML = response.cloud_pct
            london_temp.innerHTML = response.temp
            london_feels_like.innerHTML = response.feels_like
            london_humidity.innerHTML = response.humidity
            london_min_temp.innerHTML = response.min_temp
            london_max_temp.innerHTML = response.max_temp
            london_wind_speed.innerHTML = response.wind_speed
            london_wind_degrees.innerHTML = response.wind_degrees
            london_sunrise.innerHTML = response.sunrise
            london_sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
update_london_Weather()


const update_mumbai_Weather = () => {

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            mumbai_cloud_pct.innerHTML = response.cloud_pct
            mumbai_temp.innerHTML = response.temp
            mumbai_feels_like.innerHTML = response.feels_like
            mumbai_humidity.innerHTML = response.humidity
            mumbai_min_temp.innerHTML = response.min_temp
            mumbai_max_temp.innerHTML = response.max_temp
            mumbai_wind_speed.innerHTML = response.wind_speed
            mumbai_wind_degrees.innerHTML = response.wind_degrees
            mumbai_sunrise.innerHTML = response.sunrise
            mumbai_sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
update_mumbai_Weather()