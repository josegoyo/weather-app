import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../constants/weather';
import convert from 'convert-units';

const getTemp = (kelvin) => {
    return parseInt(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = (weatherData) => {
    return SUN;
}

const transformWeather = (weatherData) => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const { weatherState } = getWeatherState(weatherData);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}


export default transformWeather;