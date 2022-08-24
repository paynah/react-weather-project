import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Header from "./Header.js";
import CurrentWeather from "./CurrentWeather";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const apiKey = "bcecae2f970171c301c3ec24ea004803";  
    const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";

    function handleGetWeatherResponse(response) {
        console.log(response.data);
        const newWeatherData = {};
        newWeatherData.city = response.data.name;
        newWeatherData.temperature = Math.round(response.data.main.temp);
        newWeatherData.feelsLikeTemp = Math.round(response.data.main.feels_like);
        newWeatherData.humidity = response.data.main.humidity;
        newWeatherData.tempMax = Math.round(response.data.main.temp_max);
        newWeatherData.tempMin = Math.round(response.data.main.temp_min);
        newWeatherData.description = response.data.weather[0].description;
        newWeatherData.icon = response.data.weather[0].icon;
        newWeatherData.sunrise = formatUnixTime(response.data.sys.sunrise);
        newWeatherData.sunset = formatUnixTime(response.data.sys.sunset);
        newWeatherData.windSpeed = Math.round(response.data.wind.speed);
        newWeatherData.ready = true;

        setWeatherData(newWeatherData);
    }

    function handleErrorResponse(error) {
        const errorMsg = error.response ? error.response.data.message : "An error has occurred. Please try again.";
        alert(errorMsg);
    } 

    if (weatherData.ready) {
        return (
            <div>
                <Header />
                <CurrentWeather weatherData={weatherData} />
                <WeatherDetails weatherData={weatherData}/>
                
                <hr className="mt-3 mb-4" />
            </div>
        );
    } else {
        let city = props.defaultCity;
        let apiUrl = `${baseApiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleGetWeatherResponse).catch(handleErrorResponse);
        return "Loading...";
    }
    
}

function formatUnixTime(unixTime) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unixTime * 1000);
    
    let amPmUnit = "AM";
    let hours = date.getHours();
    if (hours > 12) {
      hours = hours - 12;
      amPmUnit = "PM";
    }
    
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let formattedTime = `${hours}:${minutes} ${amPmUnit}`;
    return formattedTime;
  }