import React from "react";
import "./garbage.css";

const WeatherC = (props) => {
  return (
    <div className="weather-main">
      <div className="main">
        <div className="main-section">
          <span className="cityname">{props.name}</span>
          {/* <span className="time">1:00PM</span> */}
          <span className="temp">{Math.round(props.mainTemp - 273)}°C</span>
          <span className="condition">{props.descr}</span>
          <div className="weather-icon-div">
            <img
              src={`http://openweathermap.org/img/w/${props.icons}.png`}
              alt="wthr img"
              className="weather-icon"
            />
          </div>
        </div>
      </div>
      <div className="excessdata">
        <div className="excess-2">
          <div className="section">
            <h4 className="headings">Max. Temp.</h4>
            <span>{Math.round(props.max - 273)}° C</span>
          </div>
          <div>
            <h4 className="headings">Min. Temp.</h4>
            <span>{Math.round(props.min - 273)}° C</span>
          </div>
          <div>
            <h4 className="headings">Humidity</h4>
            <span>{props.humid}% </span>
          </div>
          <div>
            <h4 className="headings">visibility</h4>
            <span>{props.visi} </span>
          </div>
          <div>
            <h4 className="headings">Cloudiness</h4>
            <span>{props.cloud}% </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherC;
