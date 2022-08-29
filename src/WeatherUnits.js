import React from "react";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {
    function onCelsiusUnitClick(event) {
        event.preventDefault();

        if (props.tempUnit !== "celsius") {
            props.tempUnitChangeCB("celsius");
        }
    }

    function onFahrenheitUnitClick(event) {
        event.preventDefault();

        if (props.tempUnit !== "fahrenheit") {
            props.tempUnitChangeCB("fahrenheit");
        }
    }

    return "";
    
    // if (props.tempUnit === "fahrenheit") {
    //     return (
    //         <div className="tempUnits col-1 m-0">
    //             <button type="button" 
    //                 className="tempUnitChoice btn btn-link" 
    //                 id="celsiusOption"
    //                 onClick={onCelsiusUnitClick}>°C</button>
    //             &nbsp;&nbsp;/&nbsp;
    //             <button type="button" 
    //                 className="selectedTempUnit tempUnitChoice btn btn-link" 
    //                 id="fahrenheitOption"
    //                 onClick={onFahrenheitUnitClick}>°F</button>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="tempUnits col-1 m-0">
    //             <button type="button" 
    //                 className="selectedTempUnit tempUnitChoice btn btn-link" 
    //                 id="celsiusOption"
    //                 onClick={onCelsiusUnitClick}>°C</button>
    //             &nbsp;&nbsp;/&nbsp;
    //             <button type="button" 
    //                 className="tempUnitChoice btn btn-link" 
    //                 id="fahrenheitOption"
    //                 onClick={onFahrenheitUnitClick}>°F</button>
    //         </div>
    //     );
    // }
}