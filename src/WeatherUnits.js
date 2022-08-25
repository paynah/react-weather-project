import React, { useState } from "react";
import "./WeatherUnits.css";

export default function WeatherUnits() {
    const [unit, setUnit] = useState("fahrenheit");
    
    function onCelsiusUnitClick(event) {
        event.preventDefault();
    }

    function onFahrenheitUnitClick(event) {
        event.preventDefault();
    }

    return (
        <div className="tempUnits col-1 m-0">
            <button type="button" 
                className="tempUnitChoice btn btn-link" 
                id="celciusOption"
                onClick={onCelsiusUnitClick}>°C</button>
            &nbsp;&nbsp;/&nbsp;
            <button type="button" 
                className="selectedTempUnit tempUnitChoice btn btn-link" 
                id="celciusOption"
                onClick={onFahrenheitUnitClick}>°F</button>
        </div>
    );
}