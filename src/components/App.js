import Form from './Form';
import React from 'react';
import WeatherInfo from './WeatherInfo';

const API_KEY = '11c135f01945721cee17d80e03889d51';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: null,
            city: null,
            country: null,
            humidity: null,
            description: null,
            error: null,
        }

        this.baseState = this.state;
    }

    getWeather = async (city, countryCode) => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${API_KEY}`);
            if (response.status !== 200) {
                this.setState({
                    error: 'Weather data not found!',
                });
                return;
            }
            const data = await response.json();

            if (!(city && countryCode)) {
                this.setState({
                    error: 'Please input both fields!',
                });
                return;
            }

            if (countryCode.length < 2 || countryCode.length > 3) {
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

    resetForm = () => {
        this.setState(this.baseState);
    }

    render() {
        return (
            <div className="weather">
                <div className="textInfo">
                    <h3>Weather forecast</h3>
                    <p>Helps you find weather conditions in cities...</p>
                </div>
                <Form getWeather={this.getWeather} resetForm={this.resetForm} />
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
