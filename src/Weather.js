import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import Header from "./Header.js";
import CurrentWeather from "./CurrentWeather";
import CurrentWeatherTemps from "./CurrentWeatherTemps";
import WeatherDetails from "./WeatherDetails";
import { BounceLoader } from "react-spinners";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [tempUnit, setTempUnit] = useState("fahrenheit");
    const [reqInProgress, setReqInProgress] = useState(false);
    // const apiKey = "bcecae2f970171c301c3ec24ea004803";  
    const apiKey = "b40b135798f82a05aed08769f9275f50";
    const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const oneCallBaseApiUrl = "https://api.openweathermap.org/data/2.5/onecall?";

    function getWeather(city) {
        if (!reqInProgress) {
            setReqInProgress(true);

            let citySearchParam = city ? city : props.defaultCity;
            let apiUrl = `${baseApiUrl}?q=${citySearchParam}&appid=${apiKey}&units=imperial`;
            axios.get(apiUrl).then(handleGetWeatherResponse).catch(handleErrorResponse);
        }
    }

    function getWeatherByCoords(latitude, longitude) {
        if (!reqInProgress) {
            setReqInProgress(true);

            let reqUrl = `${baseApiUrl}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
            axios.get(reqUrl).then(handleGetWeatherResponse).catch(handleErrorResponse);
        }
    }

    function handleGetWeatherResponse(response) {
        //console.log(response.data);
        const newWeatherData = {};
        newWeatherData.city = response.data.name;
        newWeatherData.date = new Date(response.data.dt * 1000);
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
        newWeatherData.ready = false;
        newWeatherData.coordinates = {latitude: response.data.coord.lat, longitude: response.data.coord.lon};

        setWeatherData(newWeatherData);
    }

    useEffect(() => {
        if (weatherData.city && weatherData.forecast == null) {
            getForecast();
        }
    });

    function getForecast() {
        let reqUrl = `${oneCallBaseApiUrl}lat=${weatherData.coordinates.latitude}&lon=${weatherData.coordinates.longitude}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
        axios.get(reqUrl).then(onGetForecastResponse).catch(handleErrorResponse);
    }

    function onGetForecastResponse(response) {
        const dailyData = response.data.daily;
      
        let forecast = [];
        for (let x = 0; x < 5; x++) {
          const forecastDay = {};
          forecastDay.date = new Date(dailyData[x].dt * 1000);
          forecastDay.tempMin = Math.round(dailyData[x].temp.min);
          forecastDay.tempMax = Math.round(dailyData[x].temp.max);
          forecastDay.icon = dailyData[x].weather[0].icon;

          forecast.push(forecastDay);
        }

        const newWeatherData = structuredClone(weatherData);
        newWeatherData.forecast = forecast;
        newWeatherData.ready = true;

        setWeatherData(newWeatherData);
        setReqInProgress(false);
      }

    function handleErrorResponse(error) {
        const errorMsg = error.response ? error.response.data.message : "An error has occurred. Please try again.";
        if (error.message) {
            alert(error.message);
        } else {
            alert(errorMsg);
        }
    } 

    if (weatherData.ready) {
        return (
            <div>
                <Header citySearchCB={getWeather} unitChangeCB={setTempUnit} getWeatherByCurLocCB={getWeatherByCoords} tempUnit={tempUnit} />
                <CurrentWeather weatherData={weatherData} />
                <CurrentWeatherTemps weatherData={weatherData} tempUnit={tempUnit}/>
                <hr className="mt-3 mb-4" />
                <WeatherDetails weatherData={weatherData} />
                <hr className="mt-0" />
                <WeatherForecast weatherData={weatherData} />
            </div>
        );
    } else {
        getWeather();
        return (
            <div className="loader">
                <BounceLoader />
                <div>Loading...</div>
            </div>);
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