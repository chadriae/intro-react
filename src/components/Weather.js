import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Weather = () => {
    const [temperature, findTemperature] = useState("");
    const [iconUrl, weatherIcon] = useState("");

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    useEffect(() => {
        showWeather();
    },[])

    // get inspirational quote
    const showWeather = () => {
        Axios.get(`https://api.weatherbit.io/v2.0/current?city=ghent,belgium&key=${apiKey}`).then((response) => {
            console.log(response);
            let temperature = response.data.data[0].app_temp;
            let icon = response.data.data[0].weather.icon;
            console.log(icon);
            findTemperature(temperature + "°C");
            weatherIcon("https://www.weatherbit.io/static/img/icons/"+ icon + ".png");
        });
    }

    return (
        <div className="weather">
            <img src={iconUrl} className="weather-icon"></img>
            <br />
            <span className="temperature">{temperature}</span>
        </div>
    );
}

export default Weather;