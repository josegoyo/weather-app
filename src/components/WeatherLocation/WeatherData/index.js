import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({ data: { wind, temperature, weatherstate, humidity } }) => {
    return (
        <div className="weatherDataCont">
            <WeatherTemperature temperature={temperature} weatherstate={weatherstate} />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
}

export default WeatherData;