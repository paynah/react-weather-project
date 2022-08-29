import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function getDayName(date) {
        const dayMap = {
            0: "Sun",
            1: "Mon",
            2: "Tues",
            3: "Wed",
            4: "Thurs",
            5: "Fri",
            6: "Sat"
        }

        return dayMap[date.getDay()];
    }

    function getMonthAndDayStr(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
    }

    return (
        <div className="col-1 me-4">
            <div className="date">{getDayName(props.dayData.date)} <br />{getMonthAndDayStr(props.dayData.date)}</div>
            <WeatherIcon iconName={props.dayData.icon} iconSize="regular" />
            <div className="tempDisplay">{props.dayData.tempMax}° / {props.dayData.tempMin}°</div>
        </div>
    );
}