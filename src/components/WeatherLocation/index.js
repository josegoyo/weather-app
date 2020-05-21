import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);

        const { city } = props;

        this.state = {
            city,
            data: null
        }
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather).then((resolve) => {
            return resolve.json();
        }).then(data => {
            this.setState({
                data: transformWeather(data)
            })
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
            </div>
        )
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    weatherLocationClick: PropTypes.func,
}

export default WeatherLocation;