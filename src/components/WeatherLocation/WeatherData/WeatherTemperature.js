import React from 'react';
import { CLOUD, SUN, RAIN, SNOW, DRIZZLE, THUNDER } from './../../../constants/weather';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: 'fas fa-cloud',
    [DRIZZLE]: 'fas fa-cloud',
    [SUN]: 'fas fa-sun',
    [RAIN]: 'fas fa-cloud-showers-heavy',
    [SNOW]: 'far fa-snowflake',
    [THUNDER]: 'fas fa-wind'
}

const getWeatherIcon = state => {
    let icon = icons[state];

    if (!icon)
        icon = 'fas fa-sun'

    return <i className={`${icon} wicon fa-2x`}></i>
}

const WeatherTemperature = ({ temperature, weatherstate }) => {
    return (
        <div className="weatherTempCont">
            {getWeatherIcon(weatherstate)}
            <span className="temperature">{` ${temperature} `}<span className="temperatureType">{`Cº`}</span></span>
        </div>
    )
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string
}

export default WeatherTemperature;