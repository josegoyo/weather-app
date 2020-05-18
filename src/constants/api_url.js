const location = 'Buenos Aires,ar';
const api_key = 'ef883594416ddb14323c396aec0d5762';
const url_base = 'http://api.openweathermap.org/data/2.5/weather';
export const api_weather = `${url_base}?q=${location}&appid=${api_key}`;