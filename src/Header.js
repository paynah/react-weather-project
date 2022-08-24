import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="mt-2">
            <div className="row justify-content-md-center">
                <div className="col-3 p-0">
                    <form id="citySearchForm">
                    <span className="input-group">
                        <input
                            type="search"
                            id="cityInput"
                            placeholder="Enter a city"
                            autoComplete="off"
                            aria-describedby="searchIcon"
                            className="form-control"
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
                    />
                    </span>
                </div>
                <div className="tempUnits col-1 m-0">
                    <button type="button" className="tempUnitChoice btn btn-link" id="celciusOption">°C</button>
                    &nbsp;&nbsp;/&nbsp;
                    <button type="button" className="selectedTempUnit tempUnitChoice btn btn-link" id="celciusOption">°F</button>
                </div>
            </div>
        </header>
    );
}