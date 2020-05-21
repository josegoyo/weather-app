import React from 'react'
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

export default function LocationList({ cities }) {
    return (
        <div>
            {cities.map((item, pos) => <WeatherLocation key={pos} city={item} />)}
        </div>
    )
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
}
