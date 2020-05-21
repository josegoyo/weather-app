import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const WeatherLocation = (props) => {

    const [city, setCity] = useState(props.city)
    const [data, setData] = useState(null);

    useEffect(() => {

        handleUpdateClick();

    }, [city]);

    const handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(city)
        fetch(api_weather).then((resolve) => {
            return resolve.json();
        }).then(info => {
            setData(transformWeather(info))
        });
    }

    return (
        <div className="weatherLocationCont" onClick={props.onWeatherLocationClick}>
            <Location city={city} />
            {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
        </div>
    )

};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    weatherLocationClick: PropTypes.func,
}

export default WeatherLocation;