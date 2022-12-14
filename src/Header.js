import React, { useState } from "react";
import "./Header.css";
import WeatherUnits from "./WeatherUnits";

export default function Header(props) {
    const [cityInput, setCityInput] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        props.citySearchCB(cityInput);
    }

    function onCityChange(event) {
        event.preventDefault();
        setCityInput(event.target.value);
    }

    function onCurrentLocationBtnClick(event) {
        event.preventDefault();

        navigator.geolocation.getCurrentPosition(requestCurrentLocationCB);
    }

    function requestCurrentLocationCB(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
      
        props.getWeatherByCurLocCB(latitude, longitude);
    }

    return (
        <header className="mt-2">
            <div className="row justify-content-md-center">
                <div className="col-3 p-0">
                    <form id="citySearchForm" onSubmit={onSubmit}>
                    <span className="input-group">
                        <input
                            type="search"
                            id="cityInput"
                            placeholder="Enter a city"
                            autoComplete="off"
                            aria-describedby="searchIcon"
                            className="form-control"
                            onChange={onCityChange}
                        />
                        <button className="input-group-text" id="searchIcon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </span>
                    </form>
                </div>
                <div className="col-md-auto">
                    <span className="input-group">
                    <span
                        className="input-group-text bg-secondary border border-secondary pe-0"
                        id="locationIcon"
                    >
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <input
                        type="button"
                        id="useCurLocationBtn"
                        value="Use current location"
                        className="btn btn-secondary"
                        aria-describedby="locationIcon"
                        onClick={onCurrentLocationBtnClick}
                    />
                    </span>
                </div>
                <WeatherUnits tempUnitChangeCB={props.unitChangeCB} tempUnit={props.tempUnit} />
            </div>
        </header>
    );
}