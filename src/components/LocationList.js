import React from 'react'
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

export default function LocationList({ cities, onSelectedLocation }) {

    const handleWeatherLocation = city => {
        onSelectedLocation(city);
    }

    return (
        <div>
            {cities.map((item) => <WeatherLocation
                key={item}
                city={item}
                onWeatherLocationClick={() => handleWeatherLocation(item)} />)}
        </div>
    )
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}
