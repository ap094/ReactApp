import React from 'react';

export default function WeatherInfo(props) {
    return(
        <div className="weather-info">
            {
                props.error &&
                <strong id="err" className="weather__error">{props.error}</strong>
            }
            {
                props.country && props.city &&
                <p className="weather__key">
                    Location: <span className="weather__value">{props.city}, {props.country}</span>
                </p>
            }
            {
                props.temperature &&
                <p className="weather__key">
                    Temperature: <span className="weather__value">{props.temperature} &#8451;</span>
                </p>
            }
            {
                props.humidity &&
                <p className="weather__key">
                    Humidity: <span className="weather__value">{props.humidity} %</span>
                </p>
            }
            {
                props.description &&
                <p className="weather__key">
                    Conditions: <span className="weather__value">{props.description}</span>
                </p>
            }
        </div>
    );
}
