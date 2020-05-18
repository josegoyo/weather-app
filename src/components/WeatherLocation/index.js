import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import './styles.css';
import { SUN } from './../../constants/weather';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '34 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();

        this.state = {
            city: 'Buenos Aires',
            data: data
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    handleUpdateClick = () => {
        fetch(api_weather).then((resolve) => {
            return resolve.json();
        }).then(data => {
            this.setState({
                data: transformWeather(data)
            })
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" >
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
};

export default WeatherLocation;