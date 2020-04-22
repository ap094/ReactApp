import Form from './Form';
import React from 'react';
import WeatherInfo from './WeatherInfo';

const API_KEY = '11c135f01945721cee17d80e03889d51';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined,
        }
    }

    getWeather = async (e) => {
        try {
            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            e.preventDefault();

            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);
            const data = await response.json();

            if (!(city && country)) {
                this.setState({
                    error: 'Please input both fields!',
                });
                return;
            }

            if (data.cod === '404') {
                this.setState({
                    error: 'Weather data for given city not found!',
                });
                return;
            }

            if (country.length < 2 || country.length > 3) {
                this.setState({
                    error: 'Please input correct country code!'
                });
                return;
            }

            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: '',
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className="weather">
                <div className="textInfo">
                    <h3>Weather forecast</h3>
                    <p>Helps you find weather conditions in cities...</p>
                </div>
                <Form getWeather={this.getWeather} />
                <WeatherInfo
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}
