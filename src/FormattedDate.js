import React from "react";

export default function FormattedDate(props) {
    function formatDate(dateObj) {
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
        
          let curDay = days[dateObj.getDay()];
          let curHours = dateObj.getHours();
          let curMinutes = dateObj.getMinutes();
          let amPm = "AM";
        
          if (curHours >= 12) {
            curHours = curHours === 12 ? curHours : curHours - 12;
            amPm = "PM";
          }
        
          if (curMinutes < 10) {
            curMinutes = `0${curMinutes}`;
          }
        
          let dateTimeStr = `${curDay} ${curHours}:${curMinutes} ${amPm}`;

          return dateTimeStr;
    }
    
    return (formatDate(props.dateObj));
}